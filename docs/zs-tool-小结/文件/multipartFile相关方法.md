---
title: 'multipartFile相关方法'
autoGroup-1: '附录'
---

## 获取classpath路径

```java
/**
     * 获取路径 classpath：
     *
     * @return
     * @throws Exception
     */
private static String getFilePath(String classpath) throws Exception {
    String defaultPath = "/static/video/";
    //获取当前文件的根路径
    File path = new File(ResourceUtils.getURL("classpath:").getPath());
    if (!path.exists()) path = new File("");

    //盘符路径
    StringBuilder codeUrl = new StringBuilder();
    //存储路径
    if (StringUtils.isNotBlank(classpath)) {
        defaultPath = classpath;
    }
    codeUrl.append(path.getAbsolutePath()).append(defaultPath);
    File file = new File(codeUrl.toString());
    if (!file.exists()) {
        file.mkdirs();
    }
    return codeUrl.toString();
}

```



## MultipartFile ---> 文件 ---> delete

```java
public static Integer getDuration(MultipartFile multipartFile) {
    Integer duration = 0;
    try {
        //默认：classpath:/static/video/
        String filePath = getFilePath("") + UUID.randomUUID() + "_" + multipartFile.getOriginalFilename();
        File filePathSource = new File(filePath);

        //保存文件
        multipartFile.transferTo(filePathSource);
        //
        duration = getDuration(filePath);
        //删除文件
        if (filePathSource.exists()) {
            filePathSource.delete();
        }
    } catch (Exception e) {
        e.printStackTrace();
        return 0;
    }
    return duration;
}



public static String secToTime(int seconds) {
    int hour = seconds / 3600;
    int minute = (seconds - hour * 3600) / 60;
    int second = (seconds - hour * 3600 - minute * 60);

    StringBuffer sb = new StringBuffer();
    if (hour > 0) {
        sb.append(hour + "小时");
    }
    if (minute > 0)
        sb.append(minute + "分");
    if (second > 0) {
        sb.append(second + "秒");
    }
    if (second == 0) {
        sb.append("<1秒");
    }
    return sb.toString();
}


```

