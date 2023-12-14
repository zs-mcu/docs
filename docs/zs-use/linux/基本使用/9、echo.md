---
autoSort: 2000
---
# echo命令

==echo会将输入的字符串送往标准输出==，并在最后加上换行符。 可以理解为打印字符串。

```powershell
常见选项：
-n ：不输出最后的换行符“\n”
-e：解释转义字符（字符串中出现\n、\t等特殊字符，则特别加以处理，而不会将它当成一般文字输出）
```

举例说明：

```powershell
[root@localhost ~]# echo hello world 打印hello world
hello world
[root@localhost ~]# echo aaaa 打印aaaa
aaaa
[root@localhost ~]# echo hello > file1 将hello重定向到file1文件中
[root@localhost ~]# cat file1
hello


总结：
1. echo表示打印字符串，默认将字符串送往标准输出；默认会打印一个换行符
2. echo可以结合>或者>>符号来使用，进行文件的创建或内容追加。


常见控制字符：
\t 表示制表符
\n 表示换行符
\r 表示回车


[root@localhost ~]# echo -e 'date\nuuu' > 1.sh //-e表示将\n解释为换行符
[root@localhost ~]# cat 1.sh
date
uuu


help echo
```

