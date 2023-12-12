---
title: '获取文件ContentType'
autoGroup-1: '附录'
---

## 根据文件名判断Content-Type

### 方式一：spring提供(💯无脑选)

[springframework](https://so.csdn.net/so/search?q=springframework&spm=1001.2101.3001.7020)提供的MediaTypeFactory工具类可以很方便的获取contentType值，代码如下

```java
import org.springframework.http.MediaType;
import org.springframework.http.MediaTypeFactory;
 
import java.util.Optional;
 
public class MainTest {
 
    public static void main(String[] args) throws Exception {
        // 根据文件名获取content_type
        String[] fileNames = new String[]{"file/test.PNG", "测试.pdf", "视频.mp4"};
        for (String fileName : fileNames) {
            Optional<MediaType> mediaType = MediaTypeFactory.getMediaType(fileName);
            System.out.println(mediaType.orElse(MediaType.APPLICATION_OCTET_STREAM).toString());
        }
    }
}
```



### 方式二：枚举(💯无脑选)

> 枚举

```java

import lombok.Getter;
import org.springframework.util.StringUtils;

/**
 * @description 通过文件扩展名获取ContentType
 **/
@Getter
public enum MimeTypeEnum {

    AAC("acc", "AAC音频", "audio/aac"),
    ABW("abw", "AbiWord文件", "application/x-abiword"),
    ARC("arc", "存档文件", "application/x-freearc"),
    AVI("avi", "音频视频交错格式", "video/x-msvideo"),
    AZW("azw", "亚马逊Kindle电子书格式", "application/vnd.amazon.ebook"),
    BIN("bin", "任何类型的二进制数据", "application/octet-stream"),
    BMP("bmp", "Windows OS / 2位图图形", "image/bmp"),
    BZ("bz", "BZip存档", "application/x-bzip"),
    BZ2("bz2", "BZip2存档", "application/x-bzip2"),
    CSH("csh", "C-Shell脚本", "application/x-csh"),
    CSS("css", "级联样式表（CSS）", "text/css"),
    CSV("csv", "逗号分隔值（CSV）", "text/csv"),
    DOC("doc", "微软Word文件", "application/msword"),
    DOCX("docx", "Microsoft Word（OpenXML）", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"),
    EOT("eot", "MS Embedded OpenType字体", "application/vnd.ms-fontobject"),
    EPUB("epub", "电子出版物（EPUB）", "application/epub+zip"),
    GZ("gz", "GZip压缩档案", "application/gzip"),
    GIF("gif", "图形交换格式（GIF）", "image/gif"),
    HTM("htm", "超文本标记语言（HTML）", "text/html"),
    HTML("html", "超文本标记语言（HTML）", "text/html"),
    ICO("ico", "图标格式", "image/vnd.microsoft.icon"),
    ICS("ics", "iCalendar格式", "text/calendar"),
    JAR("jar", "Java存档", "application/java-archive"),
    JPEG("jpeg", "JPEG图像", "image/jpeg"),
    JPG("jpg", "JPEG图像", "image/jpeg"),
    JS("js", "JavaScript", "text/javascript"),
    JSON("json", "JSON格式", "application/json"),
    JSONLD("jsonld", "JSON-LD格式", "application/ld+json"),
    MID("mid", "乐器数字接口（MIDI）", "audio/midi"),
    MIDI("midi", "乐器数字接口（MIDI）", "audio/midi"),
    MJS("mjs", "JavaScript模块", "text/javascript"),
    MP3("mp3", "MP3音频", "audio/mpeg"),
    MPEG("mpeg", "MPEG视频", "video/mpeg"),
    MPKG("mpkg", "苹果安装程序包", "application/vnd.apple.installer+xml"),
    ODP("odp", "OpenDocument演示文稿文档", "application/vnd.oasis.opendocument.presentation"),
    ODS("ods", "OpenDocument电子表格文档", "application/vnd.oasis.opendocument.spreadsheet"),
    ODT("odt", "OpenDocument文字文件", "application/vnd.oasis.opendocument.text"),
    OGA("oga", "OGG音讯", "audio/ogg"),
    OGV("ogv", "OGG视频", "video/ogg"),
    OGX("ogx", "OGG", "application/ogg"),
    OPUS("opus", "OPUS音频", "audio/opus"),
    OTF("otf", "otf字体", "font/otf"),
    PNG("png", "便携式网络图形", "image/png"),
    PDF("pdf", "Adobe 可移植文档格式（PDF）", "application/pdf"),
    PHP("php", "php", "application/x-httpd-php"),
    PPT("ppt", "Microsoft PowerPoint", "application/vnd.ms-powerpoint"),
    PPTX("pptx", "Microsoft PowerPoint（OpenXML）", "application/vnd.openxmlformats-officedocument.presentationml.presentation"),
    RAR("rar", "RAR档案", "application/vnd.rar"),
    RTF("rtf", "富文本格式", "application/rtf"),
    SH("sh", "Bourne Shell脚本", "application/x-sh"),
    SVG("svg", "可缩放矢量图形（SVG）", "image/svg+xml"),
    SWF("swf", "小型Web格式（SWF）或Adobe Flash文档", "application/x-shockwave-flash"),
    TAR("tar", "磁带存档（TAR）", "application/x-tar"),
    TIF("tif", "标记图像文件格式（TIFF）", "image/tiff"),
    TIFF("tiff", "标记图像文件格式（TIFF）", "image/tiff"),
    TS("ts", "MPEG传输流", "video/mp2t"),
    TTF("ttf", "ttf字体", "font/ttf"),
    TXT("txt", "文本（通常为ASCII或ISO 8859- n", "text/plain"),
    VSD("vsd", "微软Visio", "application/vnd.visio"),
    WAV("wav", "波形音频格式", "audio/wav"),
    WEBA("weba", "WEBM音频", "audio/webm"),
    WEBM("webm", "WEBM视频", "video/webm"),
    WEBP("webp", "WEBP图像", "image/webp"),
    WOFF("woff", "Web开放字体格式（WOFF）", "font/woff"),
    WOFF2("woff2", "Web开放字体格式（WOFF）", "font/woff2"),
    XHTML("xhtml", "XHTML", "application/xhtml+xml"),
    XLS("xls", "微软Excel", "application/vnd.ms-excel"),
    XLSX("xlsx", "微软Excel（OpenXML）", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),
    XML("xml", "XML", "application/xml"),
    XUL("xul", "XUL", "application/vnd.mozilla.xul+xml"),
    ZIP("zip", "ZIP", "application/zip"),
    MIME_3GP("3gp", "3GPP audio/video container", "video/3gpp"),
    MIME_3GP_WITHOUT_VIDEO("3gp", "3GPP audio/video container doesn't contain video", "audio/3gpp2"),
    MIME_3G2("3g2", "3GPP2 audio/video container", "video/3gpp2"),
    MIME_3G2_WITHOUT_VIDEO("3g2", "3GPP2 audio/video container  doesn't contain video", "audio/3gpp2"),
    MIME_7Z("7z", "7-zip存档", "application/x-7z-compressed");

    //扩展名
    private final String extension;
    //说明
    private final String explain;
    //contentType/mime类型
    private final String mimeType;

    /**
     * @param extension 上传的文件扩展名
     * @param explain   类型说明
     * @param mimeType  Mime对应的类型
     */
    MimeTypeEnum(String extension, String explain, String mimeType) {
        this.extension = extension;
        this.explain = explain;
        this.mimeType = mimeType;
    }

    /**
     * 通过扩展名获取枚举类型
     *
     * @param extension 扩展名
     * @return 枚举类
     */
    public static MimeTypeEnum getByExtension(String extension) {
        if (StringUtils.isEmpty(extension)) {
            return null;
        }
        for (MimeTypeEnum typesEnum : MimeTypeEnum.values()) {
            if (extension.toLowerCase().equals(typesEnum.getExtension())) {
                return typesEnum;
            }
        }
        return null;
    }

    /**
     * Content-Type常用对照
     * 根据后缀获取Mime
     *
     * @param fileType 扩展名
     * @return mime类型
     */
    public static String getContentType(String fileType) {
        MimeTypeEnum mimeTypeEnum = MimeTypeEnum.getByExtension(fileType);
        if (mimeTypeEnum != null) {
            return mimeTypeEnum.getMimeType();
        }
        return "application/octet-stream";
    }

    /**
     * Content-Type常用对照
     * 根据文件名获取Mime
     *
     * @param objectName 文件名
     * @return mime类型
     */
    public static String getContentTypeByObjectName(String objectName) {
        if (StringUtils.isEmpty(objectName)) {
            return null;
        }
        MimeTypeEnum mimeTypeEnum = MimeTypeEnum.getByExtension(objectName.substring(objectName.lastIndexOf(".") + 1));
        if (mimeTypeEnum != null) {
            return mimeTypeEnum.getMimeType();
        }
        return "application/octet-stream";
    }

}
```

> 测试

```java
/**
 * @description
 **/
public class ContentTypeTest {
    public static void main(String[] args) {
        // 根据文件名获取content_type
        String[] fileNames = new String[]{"file/.test.PNG", "测试.pdf", "视频.xx"};
        for (String fileName : fileNames) {
            String contentType = MimeTypeEnum.getContentTypeByObjectName(fileName);
            System.out.println(contentType);

        }
    }
}
```

### 方式三：第三方tika(💯无脑选)

```xml
<!-- Tika 获取文件类型 -->
<dependency>
    <groupId>org.apache.tika</groupId>
    <artifactId>tika-core</artifactId>
    <version>2.4.1</version>
</dependency>
```

```java
//支持文件名，文件路径，网络文件路径
String detect = new Tika().detect("MyApplication.class");
System.out.println(detect);//application/java-vm
```



### 方式四：jmimemagic（不要考虑）

```xml
<dependency>
    <groupId>net.sf.jmimemagic</groupId>
    <artifactId>jmimemagic</artifactId>
    <version>0.1.4</version>
</dependency>
```

```java
String pathname = "D:\\...";

try {
    Magic parser = new Magic() ;
    MagicMatch match = parser.getMagicMatch(new File(pathname),false);
    System.out.println("Magic: " + match.getMimeType()) ;
} catch (MagicParseException e) {
    e.printStackTrace();
} catch (MagicMatchNotFoundException e) {
    e.printStackTrace();
} catch (MagicException e) {
    e.printStackTrace();
}
```



## ⛔️避免如下写法

### jdk自带3种方式

```
import java.io.File; 
import java.io.IOException; 
import java.net.FileNameMap; 
import java.net.URLConnection; 
import java.nio.file.Files; 
import java.nio.file.Path; 
import java.nio.file.Paths;  
import javax.activation.MimetypesFileTypeMap; 
```



> ❌<font color=red> `Files.probeContentType`</font> 该api获取时及其不稳定🚫

```java
/** 
   * 方式一 
   * 该方式只支持本地文件,有时候会存在获取为null的情况 
   * @param fileUrl 
   */ 
public static String getContentTypeByLocal(String fileUrl) { 
    String contentType = null; 
    Path path = Paths.get(fileUrl); 
    try { 
        contentType = Files.probeContentType(path); 
    } catch (IOException e) {  
        e.printStackTrace(); 
    } 
    System.out.println("getContentTypeByLocal, File ContentType is : " + contentType); 
    return contentType; 
} 
```

> ❌<font color=red>`new MimetypesFileTypeMap().getContentType(new File(fileUrl))`</font>🚫该api不稳定，经常出错

```java
/** 
   * 方式二 
   * 该方式支持本地文件，也支持http/https远程文件 
   * @param fileUrl 
   */ 
public static String getContentType(String fileUrl) { 
    String contentType = null; 
    try { 
        contentType = new MimetypesFileTypeMap().getContentType(new File(fileUrl)); 
    } catch (Exception e) { 
        e.printStackTrace(); 
    } 
    System.out.println("getContentType, File ContentType is : " + contentType); 
    return contentType; 
} 
```

> ❌
>
> `FileNameMap fileNameMap = URLConnection.getFileNameMap(); `
>
> `fileNameMap.getContentTypeFor(fileUrl)`
>
> 🚫该api不稳定，经常出错

```java
/** 
   * 方式三 
   * @param fileUrl,有时候会存在获取为null的情况 
   */ 
public static String getContentTypeByType(String fileUrl) { 
    String contentType = null; 
    try { 
        FileNameMap fileNameMap = URLConnection.getFileNameMap(); 
        contentType = fileNameMap.getContentTypeFor(fileUrl); 
    } catch (Exception e) { 
        e.printStackTrace(); 
    } 
    System.out.println("getContentTypeByType, File ContentType is : " + contentType); 
    return contentType; 
} 
```

