(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{1261:function(e,i,t){"use strict";t.r(i);var l=t(4),r=Object(l.a)({},(function(){var e=this,i=e._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"_1-ioutils-数据相关"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-ioutils-数据相关"}},[e._v("#")]),e._v(" 1，IOUtils（数据相关）")]),e._v(" "),i("h3",{attrs:{id:"拷贝方法"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#拷贝方法"}},[e._v("#")]),e._v(" 拷贝方法：")]),e._v(" "),i("p",[e._v("copy方法有多个重载方法，满足不同的输入输出流")]),e._v(" "),i("p",[e._v("IOUtils.copy(InputStream input, OutputStream output)")]),e._v(" "),i("p",[e._v("IOUtils.copy(InputStream input, OutputStream output, int bufferSize)//可指定缓冲区大小")]),e._v(" "),i("p",[e._v("IOUtils.copy(InputStream input, Writer output, String inputEncoding)//可指定输入流的编码表")]),e._v(" "),i("p",[e._v("IOUtils.copy(Reader input, Writer output)")]),e._v(" "),i("p",[e._v("IOUtils.copy(Reader input, OutputStream output, String outputEncoding)//可指定输出流的编码表")]),e._v(" "),i("h3",{attrs:{id:"拷贝大文件的方法"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#拷贝大文件的方法"}},[e._v("#")]),e._v(" 拷贝大文件的方法：")]),e._v(" "),i("p",[e._v("// 这个方法适合拷贝较大的数据流，比如2G以上")]),e._v(" "),i("p",[e._v("IOUtils.copyLarge(Reader input, Writer output) // 默认会用1024*4的buffer来读取")]),e._v(" "),i("p",[e._v("IOUtils.copyLarge(Reader input, Writer output, char[] buffer)//可指定缓冲区大小")]),e._v(" "),i("p"),e._v(" "),i("h3",{attrs:{id:"将输入流转换成字符串"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#将输入流转换成字符串"}},[e._v("#")]),e._v(" 将输入流转换成字符串")]),e._v(" "),i("p",[e._v("IOUtils.toString(Reader input)")]),e._v(" "),i("p",[e._v("IOUtils.toString(byte[] input, String encoding)")]),e._v(" "),i("p",[e._v("IOUtils.toString(InputStream input, Charset encoding)")]),e._v(" "),i("p",[e._v("IOUtils.toString(InputStream input, String encoding)")]),e._v(" "),i("p",[e._v("IOUtils.toString(URI uri, String encoding)")]),e._v(" "),i("p",[e._v("IOUtils.toString(URL url, String encoding)")]),e._v(" "),i("p"),e._v(" "),i("h3",{attrs:{id:"将输入流转换成字符数组"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#将输入流转换成字符数组"}},[e._v("#")]),e._v(" 将输入流转换成字符数组")]),e._v(" "),i("p",[e._v("IOUtils.toByteArray(InputStream input)")]),e._v(" "),i("p",[e._v("IOUtils.toByteArray(InputStream input, int size)")]),e._v(" "),i("p",[e._v("IOUtils.toByteArray(URI uri)")]),e._v(" "),i("p",[e._v("IOUtils.toByteArray(URL url)")]),e._v(" "),i("p",[e._v("IOUtils.toByteArray(URLConnection urlConn)")]),e._v(" "),i("p",[e._v("IOUtils.toByteArray(Reader input, String encoding)")]),e._v(" "),i("p"),e._v(" "),i("h3",{attrs:{id:"字符串读写"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#字符串读写"}},[e._v("#")]),e._v(" 字符串读写")]),e._v(" "),i("p",[e._v("IOUtils.readLines(Reader input)")]),e._v(" "),i("p",[e._v("IOUtils.readLines(InputStream input, Charset encoding)")]),e._v(" "),i("p",[e._v("IOUtils.readLines(InputStream input, String encoding)")]),e._v(" "),i("p",[e._v("IOUtils.writeLines(Collection<?> lines, String lineEnding, Writer writer)")]),e._v(" "),i("p",[e._v("IOUtils.writeLines(Collection<?> lines, String lineEnding, OutputStream output, Charset encoding)")]),e._v(" "),i("p",[e._v("IOUtils.writeLines(Collection<?> lines, String lineEnding, OutputStream output, String encoding)")]),e._v(" "),i("h3",{attrs:{id:"从一个流中读取内容"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#从一个流中读取内容"}},[e._v("#")]),e._v(" 从一个流中读取内容")]),e._v(" "),i("p",[e._v("IOUtils.read(InputStream input, byte[] buffer)")]),e._v(" "),i("p",[e._v("IOUtils.read(InputStream input, byte[] buffer, int offset, int length) IOUtils.read(Reader input, char[] buffer)")]),e._v(" "),i("p",[e._v("IOUtils.read(Reader input, char[] buffer, int offset, int length)")]),e._v(" "),i("h3",{attrs:{id:"把数据写入到输出流中"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#把数据写入到输出流中"}},[e._v("#")]),e._v(" 把数据写入到输出流中")]),e._v(" "),i("p",[e._v("IOUtils.write(byte[] data, OutputStream output)")]),e._v(" "),i("p",[e._v("IOUtils.write(byte[] data, Writer output, Charset encoding)")]),e._v(" "),i("p",[e._v("IOUtils.write(byte[] data, Writer output, String encoding)")]),e._v(" "),i("p",[e._v("IOUtils.write(char[] data, Writer output)")]),e._v(" "),i("p",[e._v("IOUtils.write(char[] data, OutputStream output, Charset encoding)")]),e._v(" "),i("p",[e._v("IOUtils.write(char[] data, OutputStream output, String encoding)")]),e._v(" "),i("p",[e._v("IOUtils.write(String data, Writer output)")]),e._v(" "),i("p",[e._v("IOUtils.write(CharSequence data, Writer output)")]),e._v(" "),i("p"),e._v(" "),i("h3",{attrs:{id:"从一个流中读取内容-如果读取的长度不够-就会抛出异常"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#从一个流中读取内容-如果读取的长度不够-就会抛出异常"}},[e._v("#")]),e._v(" 从一个流中读取内容，如果读取的长度不够，就会抛出异常")]),e._v(" "),i("p",[e._v("IOUtils.readFully(InputStream input, int length)")]),e._v(" "),i("p",[e._v("IOUtils.readFully(InputStream input, byte[] buffer)")]),e._v(" "),i("p",[e._v("IOUtils.readFully(InputStream input, byte[] buffer, int offset, int length) IOUtils.readFully(Reader input, char[] buffer)")]),e._v(" "),i("p",[e._v("IOUtils.readFully(Reader input, char[] buffer, int offset, int length)")]),e._v(" "),i("h3",{attrs:{id:"比较"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#比较"}},[e._v("#")]),e._v(" 比较")]),e._v(" "),i("p",[e._v("IOUtils.contentEquals(InputStream input1, InputStream input2) // 比较两个流是否相等")]),e._v(" "),i("p",[e._v("IOUtils.contentEquals(Reader input1, Reader input2)")]),e._v(" "),i("p",[e._v("IOUtils.contentEqualsIgnoreEOL(Reader input1, Reader input2) // 比较两个流，忽略换行符")]),e._v(" "),i("p"),e._v(" "),i("h3",{attrs:{id:"其他方法"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#其他方法"}},[e._v("#")]),e._v(" 其他方法")]),e._v(" "),i("p",[e._v("IOUtils.skip(InputStream input, long toSkip) // 跳过指定长度的流")]),e._v(" "),i("p",[e._v("IOUtils.skip(Reader input, long toSkip)")]),e._v(" "),i("p",[e._v("IOUtils.skipFully(InputStream input, long toSkip) // 如果忽略的长度大于现有的长度，就会抛出异常")]),e._v(" "),i("p",[e._v("IOUtils.skipFully(Reader input, long toSkip)")]),e._v(" "),i("p"),e._v(" "),i("h1",{attrs:{id:"_2-fileutils-文件-文件夹相关"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-fileutils-文件-文件夹相关"}},[e._v("#")]),e._v(" 2，FileUtils（文件/文件夹相关）")]),e._v(" "),i("h3",{attrs:{id:"复制文件夹"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#复制文件夹"}},[e._v("#")]),e._v(" 复制文件夹")]),e._v(" "),i("p",[e._v("FileUtils.copyDirectory(File srcDir, File destDir) // 复制文件夹（文件夹里面的文件内容也会复制）")]),e._v(" "),i("p",[e._v("FileUtils.copyDirectory(File srcDir, File destDir, FileFilter filter) // 复制文件夹，带有文件过滤功能")]),e._v(" "),i("p",[e._v("FileUtils.copyDirectoryToDirectory(File srcDir, File destDir) // 以子目录的形式将文件夹复制到到另一个文件夹下")]),e._v(" "),i("p"),e._v(" "),i("h3",{attrs:{id:"复制文件"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#复制文件"}},[e._v("#")]),e._v(" 复制文件")]),e._v(" "),i("p",[e._v("FileUtils.copyFile(File srcFile, File destFile) // 复制文件")]),e._v(" "),i("p",[e._v("FileUtils.copyFile(File input, OutputStream output) // 复制文件到输出流")]),e._v(" "),i("p",[e._v("FileUtils.copyFileToDirectory(File srcFile, File destDir) // 复制文件到一个指定的目录")]),e._v(" "),i("p",[e._v("FileUtils.copyInputStreamToFile(InputStream source, File destination) // 把输入流里面的内容复制到指定文件")]),e._v(" "),i("p",[e._v("FileUtils.copyURLToFile(URL source, File destination) // 把URL 里面内容复制到文件(可以下载文件)")]),e._v(" "),i("p",[e._v("FileUtils.copyURLToFile(URL source, File destination, int connectionTimeout, int readTimeout)")]),e._v(" "),i("p"),e._v(" "),i("h3",{attrs:{id:"把字符串写入文件"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#把字符串写入文件"}},[e._v("#")]),e._v(" 把字符串写入文件")]),e._v(" "),i("p",[e._v("FileUtils.writeStringToFile(File file, String data, String encoding)")]),e._v(" "),i("p",[e._v("FileUtils.writeStringToFile(File file, String data, String encoding, boolean append)")]),e._v(" "),i("h3",{attrs:{id:"把字节数组写入文件"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#把字节数组写入文件"}},[e._v("#")]),e._v(" 把字节数组写入文件")]),e._v(" "),i("p",[e._v("FileUtils.writeByteArrayToFile(File file, byte[] data)")]),e._v(" "),i("p",[e._v("FileUtils.writeByteArrayToFile(File file, byte[] data, boolean append) FileUtils.writeByteArrayToFile(File file, byte[] data, int off, int len) FileUtils.writeByteArrayToFile(File file, byte[] data, int off, int len, boolean append)")]),e._v(" "),i("h3",{attrs:{id:"把集合里面的内容写入文件"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#把集合里面的内容写入文件"}},[e._v("#")]),e._v(" 把集合里面的内容写入文件")]),e._v(" "),i("p",[e._v("// encoding：文件编码，lineEnding：每行以什么结尾")]),e._v(" "),i("p",[e._v("FileUtils.writeLines(File file, Collection<?> lines)")]),e._v(" "),i("p",[e._v("FileUtils.writeLines(File file, Collection<?> lines, boolean append)")]),e._v(" "),i("p",[e._v("FileUtils.writeLines(File file, Collection<?> lines, String lineEnding)")]),e._v(" "),i("p",[e._v("FileUtils.writeLines(File file, Collection<?> lines, String lineEnding, boolean append)")]),e._v(" "),i("p",[e._v("FileUtils.writeLines(File file, String encoding, Collection<?> lines)")]),e._v(" "),i("p",[e._v("FileUtils.writeLines(File file, String encoding, Collection<?> lines, boolean append)")]),e._v(" "),i("p",[e._v("FileUtils.writeLines(File file, String encoding, Collection<?> lines, String lineEnding)")]),e._v(" "),i("p",[e._v("FileUtils.writeLines(File file, String encoding, Collection<?> lines, String lineEnding, boolean append)")]),e._v(" "),i("h3",{attrs:{id:"往文件里面写内容"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#往文件里面写内容"}},[e._v("#")]),e._v(" 往文件里面写内容")]),e._v(" "),i("p",[e._v("FileUtils.write(File file, CharSequence data, Charset encoding)")]),e._v(" "),i("p",[e._v("FileUtils.write(File file, CharSequence data, Charset encoding, boolean append)")]),e._v(" "),i("p",[e._v("FileUtils.write(File file, CharSequence data, String encoding)")]),e._v(" "),i("p",[e._v("FileUtils.write(File file, CharSequence data, String encoding, boolean append)")]),e._v(" "),i("p"),e._v(" "),i("h3",{attrs:{id:"文件移动"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#文件移动"}},[e._v("#")]),e._v(" 文件移动")]),e._v(" "),i("p",[e._v("FileUtils.moveDirectory(File srcDir, File destDir) // 文件夹在内的所有文件都将移动FileUtils.moveDirectoryToDirectory(File src, File destDir, boolean createDestDir) // 以子文件夹的形式移动到另外一个文件下")]),e._v(" "),i("p",[e._v("FileUtils.moveFile(File srcFile, File destFile) // 移动文件")]),e._v(" "),i("p",[e._v("FileUtils.moveFileToDirectory(File srcFile, File destDir, boolean createDestDir) // 以子文件的形式移动到另外一个文件夹下")]),e._v(" "),i("p",[e._v("FileUtils.moveToDirectory(File src, File destDir, boolean createDestDir) // 移动文件或者目录到指定的文件夹内")]),e._v(" "),i("p"),e._v(" "),i("h3",{attrs:{id:"清空和删除文件夹"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#清空和删除文件夹"}},[e._v("#")]),e._v(" 清空和删除文件夹")]),e._v(" "),i("p",[e._v("FileUtils.deleteDirectory(File directory) // 删除文件夹，包括文件夹和文件夹里面所有的文件")]),e._v(" "),i("p",[e._v("FileUtils.cleanDirectory(File directory) // 清空文件夹里面的所有的内容")]),e._v(" "),i("p",[e._v("FileUtils.forceDelete(File file) // 删除，会抛出异常")]),e._v(" "),i("p",[e._v("FileUtils.deleteQuietly(File file) // 删除，不会抛出异常")]),e._v(" "),i("p"),e._v(" "),i("h3",{attrs:{id:"创建文件夹"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#创建文件夹"}},[e._v("#")]),e._v(" 创建文件夹")]),e._v(" "),i("p",[e._v("FileUtils.forceMkdir(File directory) // 创建文件夹(可创建多级)")]),e._v(" "),i("p",[e._v("FileUtils.forceMkdirParent(File file) // 创建文件的父级目录")]),e._v(" "),i("p"),e._v(" "),i("h3",{attrs:{id:"获取文件输入-输出流"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#获取文件输入-输出流"}},[e._v("#")]),e._v(" 获取文件输入/输出流")]),e._v(" "),i("p",[e._v("FileUtils.openInputStream(File file)")]),e._v(" "),i("p",[e._v("FileUtils.openOutputStream(File file)")]),e._v(" "),i("h3",{attrs:{id:"读取文件"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#读取文件"}},[e._v("#")]),e._v(" 读取文件")]),e._v(" "),i("p",[e._v("FileUtils.readFileToByteArray(File file) // 把文件读取到字节数组")]),e._v(" "),i("p",[e._v("FileUtils.readFileToString(File file, Charset encoding) // 把文件读取成字符串")]),e._v(" "),i("p",[e._v("FileUtils.readFileToString(File file, String encoding)")]),e._v(" "),i("p",[e._v("FileUtils.readLines(File file, Charset encoding) // 把文件读取成字符串集合")]),e._v(" "),i("p",[e._v("FileUtils.readLines(File file, String encoding)")]),e._v(" "),i("p"),e._v(" "),i("h3",{attrs:{id:"测试两个文件的修改时间"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#测试两个文件的修改时间"}},[e._v("#")]),e._v(" 测试两个文件的修改时间")]),e._v(" "),i("p",[e._v("FileUtils.isFileNewer(File file, Date date)")]),e._v(" "),i("p",[e._v("FileUtils.isFileNewer(File file, File reference)")]),e._v(" "),i("p",[e._v("FileUtils.isFileNewer(File file, long timeMillis)")]),e._v(" "),i("p",[e._v("FileUtils.isFileOlder(File file, Date date)")]),e._v(" "),i("p",[e._v("FileUtils.isFileOlder(File file, File reference)")]),e._v(" "),i("p",[e._v("FileUtils.isFileOlder(File file, long timeMillis)")]),e._v(" "),i("p"),e._v(" "),i("p"),e._v(" "),i("h3",{attrs:{id:"文件-文件夹的迭代"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#文件-文件夹的迭代"}},[e._v("#")]),e._v(" 文件/文件夹的迭代")]),e._v(" "),i("p",[e._v("FileUtils.iterateFiles(File directory, IOFileFilter fileFilter, IOFileFilter dirFilter)")]),e._v(" "),i("p",[e._v("FileUtils.iterateFiles(File directory, String[] extensions, boolean recursive)")]),e._v(" "),i("p",[e._v("FileUtils.iterateFilesAndDirs(File directory, IOFileFilter fileFilter, IOFileFilter dirFilter)")]),e._v(" "),i("p",[e._v("FileUtils.lineIterator(File file)")]),e._v(" "),i("p",[e._v("FileUtils.lineIterator(File file, String encoding)")]),e._v(" "),i("p"),e._v(" "),i("p",[e._v("FileUtils.listFiles(File directory, IOFileFilter fileFilter, IOFileFilter dirFilter)")]),e._v(" "),i("p",[e._v("FileUtils.listFiles(File directory, String[] extensions, boolean recursive)")]),e._v(" "),i("p",[e._v("FileUtils.listFilesAndDirs(File directory, IOFileFilter fileFilter, IOFileFilter dirFilter)")]),e._v(" "),i("p"),e._v(" "),i("h3",{attrs:{id:"其他"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[e._v("#")]),e._v(" 其他")]),e._v(" "),i("p",[e._v("FileUtils.isSymlink(File file) // 判断是否是符号链接")]),e._v(" "),i("p",[e._v("FileUtils.directoryContains(File directory, File child) // 判断文件夹内是否包含某个文件或者文件夹")]),e._v(" "),i("p",[e._v("FileUtils.sizeOf(File file) // 获取文件或者文件夹的大小")]),e._v(" "),i("p",[e._v("FileUtils.getTempDirectory()// 获取临时目录文件")]),e._v(" "),i("p",[e._v("FileUtils.getTempDirectoryPath()// 获取临时目录路径")]),e._v(" "),i("p",[e._v("FileUtils.getUserDirectory()// 获取用户目录文件")]),e._v(" "),i("p",[e._v("FileUtils.getUserDirectoryPath()// 获取用户目录路径")]),e._v(" "),i("p",[e._v("FileUtils.touch(File file) // 创建文件")]),e._v(" "),i("p",[e._v("FileUtils.contentEquals(File file1, File file2) // 比较两个文件内容是否相同")]),e._v(" "),i("h1",{attrs:{id:"filenameutils-文件名-后缀名相关"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#filenameutils-文件名-后缀名相关"}},[e._v("#")]),e._v(" FilenameUtils（文件名/后缀名相关）")]),e._v(" "),i("p",[e._v("FilenameUtils.concat(String basePath, String fullFilenameToAdd) // 合并目录和文件名为文件全路径")]),e._v(" "),i("p",[e._v("FilenameUtils.getBaseName(String filename) // 去除目录和后缀后的文件名")]),e._v(" "),i("p",[e._v("FilenameUtils.getExtension(String filename) // 获取文件的后缀")]),e._v(" "),i("p",[e._v("FilenameUtils.getFullPath(String filename) // 获取文件的目录")]),e._v(" "),i("p",[e._v("FilenameUtils.getName(String filename) // 获取文件名")]),e._v(" "),i("p",[e._v("FilenameUtils.getPath(String filename) // 去除盘符后的路径")]),e._v(" "),i("p",[e._v("FilenameUtils.getPrefix(String filename) // 盘符")]),e._v(" "),i("p",[e._v("FilenameUtils.indexOfExtension(String filename) // 获取最后一个.的位置")]),e._v(" "),i("p",[e._v("FilenameUtils.indexOfLastSeparator(String filename) // 获取最后一个/的位置")]),e._v(" "),i("p",[e._v("FilenameUtils.normalize(String filename) // 获取当前系统格式化路径")]),e._v(" "),i("p",[e._v("FilenameUtils.removeExtension(String filename) // 移除文件的扩展名")]),e._v(" "),i("p",[e._v("FilenameUtils.separatorsToSystem(String path) // 转换分隔符为当前系统分隔符")]),e._v(" "),i("p",[e._v("FilenameUtils.separatorsToUnix(String path) // 转换分隔符为linux系统分隔符")]),e._v(" "),i("p",[e._v("FilenameUtils.separatorsToWindows(String path) // 转换分隔符为windows系统分隔符")]),e._v(" "),i("p",[e._v("FilenameUtils.equals(String filename1, String filename2) // 判断文件路径是否相同，非格式化")]),e._v(" "),i("p",[e._v("FilenameUtils.equalsNormalized(String filename1, String filename2) // 判断文件路径是否相同，格式化")]),e._v(" "),i("p",[e._v("FilenameUtils.directoryContains(String canonicalParent, String canonicalChild) // 判断目录下是否包含指定文件或目录")]),e._v(" "),i("p",[e._v("FilenameUtils.isExtension(String filename, String extension) // 判断文件扩展名是否包含在指定集合(数组、字符串)中")]),e._v(" "),i("p",[e._v("FilenameUtils.wildcardMatch(String filename, String wildcardMatcher) // 判断文件扩展名是否和指定规则匹配")])])}),[],!1,null,null,null);i.default=r.exports}}]);