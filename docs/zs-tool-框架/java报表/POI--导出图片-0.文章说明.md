## 需求来源

> 需求诞生
>
> https://www.cnblogs.com/newflydd/p/4893414.html

如题所示，先抛出一个问题，如何使用JAVA将Excel中的报表导出为图片格式？

需求产生原因：将数据生成报表明天定时发送到指定微信上

## 实现思路

> https://www.cnblogs.com/newflydd/p/4899610.html

思路1：将报表中的背景、边框等截图下来作为模型图片，需要定时更新的数据通过JDBC读取Oracle中的数据绘制到模型图片上

思路2：不需要报表原型，生成Excel报表后，使用jxl或者poi一个单元一个单元读取报表内所有单元格，包括单元格的数据和格式，边框、宽度、高度、字体前景色、背景色都要读取出来，然后通过JAVA绘图，最终生成JPG格式的报表。

思路3：比较奇葩，属于博主突发奇想的招式，通过WPS或者Office打开Excel，编写Robot机器人将鼠标移动到两个指定坐标所覆盖指定区域，Robot模拟敲击Ctrl+C，接着将剪贴板上的数据绘图，导出到JPG文件。



### 思路3：java-robot

```java
package com.newflypig.excel;

import java.awt.Graphics;
import java.awt.Image;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.DataFlavor;
import java.awt.datatransfer.Transferable;
import java.awt.event.InputEvent;
import java.awt.event.KeyEvent;
import java.awt.image.BufferedImage;
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.imageio.ImageIO;

public class OpenExcelDemo {

    public static void main(String[] args) throws Exception {
        openExcel("d:\\新增积分月报表.xlsx");

        copyRectByPix(37, 207, 1215, 665); //给定两个坐标点的数据，圈定截图范围

        createImageFileFromClip("d:/" + getTimeStr() + ".jpg");

        closeExcel((int)Toolkit.getDefaultToolkit().getScreenSize().getWidth() - 15, 12);    //需要模拟关闭事件，将Excel关闭，以便下次能正确打开报表    
    }

    private static void closeExcel(int i, int j) throws Exception {
        Robot robot = new Robot();

        robot.delay(500);
        robot.mouseMove(i,j);
        robot.delay(500);
        robot.mousePress(InputEvent.BUTTON1_MASK);
        robot.delay(500);
        robot.mouseRelease(InputEvent.BUTTON1_MASK);
        robot.delay(500);
        robot.keyPress(KeyEvent.VK_ENTER);
    }

    public static void openExcel(String dir) throws Exception {
        Runtime.getRuntime().exec("cmd /k " + dir + "");
    }

    public static void copyRectByPix(int fromX, int fromY, int toX, int toY)
            throws Exception {
        Robot robot = new Robot();
        robot.delay(3000); // 延时3000毫秒

        robot.mouseMove(fromX, fromY);
        robot.delay(500);
        robot.mousePress(InputEvent.BUTTON1_MASK);
        robot.delay(500);
        robot.mouseMove(toX, toY);
        robot.delay(500);
        robot.mouseRelease(InputEvent.BUTTON1_MASK);

        robot.setAutoDelay(200);
        robot.keyPress(KeyEvent.VK_CONTROL);
        robot.keyPress(KeyEvent.VK_C);
        robot.keyRelease(KeyEvent.VK_CONTROL);
        robot.keyRelease(KeyEvent.VK_C);
    }

    public static void createImageFileFromClip(String dir) throws Exception {
        Transferable t = Toolkit.getDefaultToolkit().getSystemClipboard()
                .getContents(null);
        if (null != t && t.isDataFlavorSupported(DataFlavor.imageFlavor)) {
            Image image = (Image) t.getTransferData(DataFlavor.imageFlavor);
            savePic(image, dir);
        }
    }

    public static String savePic(Image iamge, String dir) throws Exception {
        int w = iamge.getWidth(null);
        int h = iamge.getHeight(null);

        // 首先创建一个BufferedImage变量，因为ImageIO写图片用到了BufferedImage变量。
        BufferedImage bi = new BufferedImage(w, h, BufferedImage.TYPE_3BYTE_BGR);

        // 再创建一个Graphics变量，用来画出来要保持的图片，及上面传递过来的Image变量
        Graphics g = bi.getGraphics();

        g.drawImage(iamge, 0, 0, null);

        // 将BufferedImage变量写入文件中。
        ImageIO.write(bi, "jpg", new File(dir));
        return dir;
    }

    public static String getTimeStr() {
        String time = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
        return time;
    }
}
```

试图使用这种方式将复杂的Excel报表转化成无差别的PNG图片

但是这种方式遇到了严重的问题

程序运行在服务器上，服务器大多数情况下需要远程桌面

一旦远程桌面断开后，后台执行截图的程序只能截取到黑屏

再次连接远程桌面后，又可以正常截图

博主查看了好多现成的截图工具，都会出现这个情况

远程桌面一旦断开，根本无法进行有效的后台截图



### 思路2：poi解析-java2d绘制

> https://www.cnblogs.com/newflydd/p/4912662.html

这就是要使用Apache公司的POI工具，对整个excel进行解析

将excel的每一个单元格，数据，格式，边框全都读取出来

其中需要考虑到单元格的合并，行列的隐藏等等复杂的问题

最终使用JAVA 2d将读取到的数据绘制到PNG图片上。

第一张是Excel原样截图

贴上源代码，其中涉及到使用POI读取单元格背景色，字体前景色等颜色操作，还是比较复杂的。

```java
package com.newflyig.jpg;
 
/**
 * width:pix=getColumnWidthInPixels*1.15
 * height:pix=getHeightInPoints*96/72
 *
 * 本示例用来读取Excel报表文件，并力图将报表无差别转化成PNG图片
 * 使用POI读取Excel各项数据
 * 使用JAVA 2D绘制PNG
 * TODO 本示例基本实现了常见Excel的所有样式输出，但Office2007以后的版本添加了条件样式功能，因为POI的API无法读取条件样式，所以无法实现
 * 今后可以通过关键字标注等方法，在Excel中需要加入条件样式的单元格用注解标明，使用JAVA计算得出样式再绘制出来
 */
 
import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Font;
import java.awt.FontMetrics;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;
 
import javax.imageio.ImageIO;
 
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFFont;
 
import sun.awt.SunHints;
 
public class DrawFromExcel {
 
    public static void main(String[] args) throws Exception {
        // 给定两个初始值，标志出导出区域，两个行列组合的单元格
        int[] fromIndex = { 0, 0 };
        int[] toIndex = { 17, 20 };
 
        int imageWidth = 0;
        int imageHeight = 0;
 
        Workbook wb = WorkbookFactory.create(new File("d:/2014年1月营销活动报表140116.xlsx"));
        Sheet sheet = wb.getSheet("test");
        List<CellRangeAddress> rangeAddress = sheet.getMergedRegions(); // 获取整个sheet中合并单元格组合的集合
 
        // 首先做初步的边界检测，如果指定区域是不合法的则抛出异常
        int rowSum = sheet.getPhysicalNumberOfRows();
        int colSum = sheet.getRow(0).getPhysicalNumberOfCells();
        if (fromIndex[0] > rowSum || fromIndex[0] > toIndex[0] || toIndex[0] > rowSum) {
            throw new Exception("the rowIndex of the area is wrong!");
        }
        if (fromIndex[1] > colSum || fromIndex[1] > toIndex[1] || toIndex[1] > colSum) {
            throw new Exception("the colIndex of the area is wrong!");
        }
 
        // 计算实际需要载入内存的二维Cell数组的大小，剔除隐藏行列
        int rowSize = toIndex[0]+1;
        int colSize = toIndex[1]+1;
 
        // 遍历需要扫描的区域
         
        UserCell[][] cells = new UserCell[rowSize][colSize];
        int[] rowPixPos = new int[rowSize + 1];
        rowPixPos[0] = 0;
        int[] colPixPos = new int[colSize + 1];
        colPixPos[0] = 0;
        for (int i = 0; i < rowSize; i++) {
 
            for (int j = 0; j < colSize; j++) {
 
                cells[i][j] = new UserCell();
                cells[i][j].setCell(sheet.getRow(i).getCell(j));
                cells[i][j].setRow(i);
                cells[i][j].setCol(j);
                boolean ifShow=(i>=fromIndex[0]) && (j>=fromIndex[1]);    //首先行列要在指定区域之间
                ifShow=ifShow && !(sheet.isColumnHidden(j) || sheet.getRow(i).getZeroHeight()); //其次行列不可以隐藏
                cells[i][j].setShow(ifShow);
 
                // 计算所求区域宽度
                float widthPix = !ifShow ? 0 : sheet.getColumnWidthInPixels(j); // 如果该单元格是隐藏的，则置宽度为0
                if (i == fromIndex[0]) {
                    imageWidth += widthPix;
                }
                 
                colPixPos[j+1] = (int) (widthPix * 1.15 + colPixPos[j]);
 
            }
 
            // 计算所求区域高度
            boolean ifShow=(i>=fromIndex[0]);    //行序列在指定区域中间
            ifShow=ifShow && !sheet.getRow(i).getZeroHeight();  //行序列不能隐藏
            float heightPoint = !ifShow ? 0 : sheet.getRow(i).getHeightInPoints(); // 如果该单元格是隐藏的，则置高度为0
            imageHeight += heightPoint;        
            rowPixPos[i+1] = (int) (heightPoint * 96 / 72) + rowPixPos[i];
 
        }
 
        imageHeight = imageHeight * 96 / 72;
        imageWidth = imageWidth * 115 / 100;
 
        wb.close();
 
        List<Grid> grids = new ArrayList<Grid>();
        for (int i = 0; i < rowSize; i++) {
            for (int j = 0; j < colSize; j++) {
                Grid grid = new Grid();
                // 设置坐标和宽高
                grid.setX(colPixPos[j]);
                grid.setY(rowPixPos[i]);
                grid.setWidth(colPixPos[j + 1] - colPixPos[j]);
                grid.setHeight(rowPixPos[i + 1] - rowPixPos[i]);
                grid.setRow(cells[i][j].getRow());
                grid.setCol(cells[i][j].getCol());
                grid.setShow(cells[i][j].isShow());
 
                // 判断是否为合并单元格
                int[] isInMergedStatus = isInMerged(grid.getRow(), grid.getCol(), rangeAddress);
 
                if (isInMergedStatus[0] == 0 && isInMergedStatus[1] == 0) {
                    // 此单元格是合并单元格，并且不是第一个单元格，需要跳过本次循环，不进行绘制
                    continue;
                } else if (isInMergedStatus[0] != -1 && isInMergedStatus[1] != -1) {
                    // 此单元格是合并单元格，并且属于第一个单元格，则需要调整网格大小                 
                    int lastRowPos=isInMergedStatus[0]>rowSize-1?rowSize-1:isInMergedStatus[0];
                    int lastColPos=isInMergedStatus[1]>colSize-1?colSize-1:isInMergedStatus[1];                 
                     
                    grid.setWidth(colPixPos[lastColPos + 1] - colPixPos[j]);
                    grid.setHeight(rowPixPos[lastRowPos + 1] - rowPixPos[i]);
                     
                     
                }
 
                // 单元格背景颜色
                CellStyle cs = cells[i][j].getCell().getCellStyle();
                if (cs.getFillPattern() == CellStyle.SOLID_FOREGROUND)
                    grid.setBgColor(cells[i][j].getCell().getCellStyle().getFillForegroundColorColor());
 
                // 设置字体
                org.apache.poi.ss.usermodel.Font font = wb.getFontAt(cs.getFontIndex());
                grid.setFont(font);
 
                // 设置字体前景色
                if (font instanceof XSSFFont) {
                    XSSFFont xf = (XSSFFont) font;
 
                    grid.setFtColor(xf.getXSSFColor());
                }
 
                // 设置文本
                String strCell = "";
                switch (cells[i][j].getCell().getCellType()) {
                case HSSFCell.CELL_TYPE_NUMERIC:                                       
                    strCell = String.valueOf(cells[i][j].getCell().getNumericCellValue());
                    break;
                case HSSFCell.CELL_TYPE_STRING:
                    strCell = cells[i][j].getCell().getStringCellValue();
                    break;
                case HSSFCell.CELL_TYPE_BOOLEAN:
                    strCell = String.valueOf(cells[i][j].getCell().getBooleanCellValue());
                    break;
                case HSSFCell.CELL_TYPE_FORMULA:
                     
                    try {
                        strCell = String.valueOf(cells[i][j].getCell().getNumericCellValue());
                    } catch (IllegalStateException e) {
                        strCell = String.valueOf(cells[i][j].getCell().getRichStringCellValue());
                    }
                    break;
                default:
                    strCell = "";
                }
                 
                if(cells[i][j].getCell().getCellStyle().getDataFormatString().contains("0.00%")){
                    try{
                        double dbCell=Double.valueOf(strCell);
                        strCell=new DecimalFormat("#.00").format(dbCell*100)+"%";
                    }catch(NumberFormatException e){}                  
                }
                                 
                grid.setText(strCell.matches("\\w*\\.0") ? strCell.substring(0, strCell.length() - 2) : strCell);
 
                grids.add(grid);
            }
        }
 
        BufferedImage image = new BufferedImage(imageWidth, imageHeight, BufferedImage.TYPE_INT_RGB);
        Graphics2D g2d = image.createGraphics();
        // 平滑字体
        g2d.setRenderingHint(SunHints.KEY_ANTIALIASING, SunHints.VALUE_ANTIALIAS_OFF);
        g2d.setRenderingHint(SunHints.KEY_TEXT_ANTIALIASING, SunHints.VALUE_TEXT_ANTIALIAS_DEFAULT);
        g2d.setRenderingHint(SunHints.KEY_STROKE_CONTROL, SunHints.VALUE_STROKE_DEFAULT);
        g2d.setRenderingHint(SunHints.KEY_TEXT_ANTIALIAS_LCD_CONTRAST, 140);
        g2d.setRenderingHint(SunHints.KEY_FRACTIONALMETRICS, SunHints.VALUE_FRACTIONALMETRICS_OFF);
        g2d.setRenderingHint(SunHints.KEY_RENDERING, SunHints.VALUE_RENDER_DEFAULT);
 
        g2d.setColor(Color.white);
        g2d.fillRect(0, 0, imageWidth, imageHeight);
 
        // 绘制表格
        for (Grid g : grids) {
            if (!g.isShow())
                continue;
 
            // 绘制背景色
            g2d.setColor(g.getBgColor() == null ? Color.white : g.getBgColor());
            g2d.fillRect(g.getX(), g.getY(), g.getWidth(), g.getHeight());
 
            // 绘制边框
            g2d.setColor(Color.black);
            g2d.setStroke(new BasicStroke(1));
            g2d.drawRect(g.getX(), g.getY(), g.getWidth(), g.getHeight());
 
            // 绘制文字,居中显示
            g2d.setColor(g.getFtColor());
            Font font = g.getFont();
            FontMetrics fm = g2d.getFontMetrics(font);
            int strWidth = fm.stringWidth(g.getText());// 获取将要绘制的文字宽度
            g2d.setFont(font);
            g2d.drawString(g.getText(),
                    g.getX() + (g.getWidth() - strWidth) / 2,
                    g.getY() + (g.getHeight() - font.getSize()) / 2 + font.getSize());
        }
 
        g2d.dispose();
        ImageIO.write(image, "png", new File("d:/test.png"));
         
        System.out.println("Output to PNG file Success!");
    }
 
    /**
     * 判断Excel中的单元格是否为合并单元格
     *
     * @param row
     * @param col
     * @param rangeAddress
     * @return 如果不是合并单元格返回{-1,-1},如果是合并单元格并且是一个单元格返回{lastRow,lastCol},
     *         如果是合并单元格并且不是第一个格子返回{0,0}
     */
    private static int[] isInMerged(int row, int col, List<CellRangeAddress> rangeAddress) {
        int[] isInMergedStatus = { -1, -1 };
        for (CellRangeAddress cra : rangeAddress) {
            if (row == cra.getFirstRow() && col == cra.getFirstColumn()) {
                isInMergedStatus[0] = cra.getLastRow();
                isInMergedStatus[1] = cra.getLastColumn();
                return isInMergedStatus;
            }
            if (row >= cra.getFirstRow() && row <= cra.getLastRow()) {
                if (col >= cra.getFirstColumn() && col <= cra.getLastColumn()) {
                    isInMergedStatus[0] = 0;
                    isInMergedStatus[1] = 0;
                    return isInMergedStatus;
                }
            }
        }
        return isInMergedStatus;
    }
}
```

