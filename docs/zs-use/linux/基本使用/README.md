---
autoGroup+1: 'Linux概述'
---
# 说明

> 参考教程：黑马2019Linux系统教程189讲
> 
> https://linux265.com/course/linux-command-ldconfig.html


命令速查：[https://man.niaoge.com/](https://man.niaoge.com/)
<style>
#appid {
    transform: scale(0.7, 1);
    width: 150%;
    height: 500px;
    transform-origin: left top;
}
#appid iframe {
    vertical-align: bottom;
    width: 100%;
    height: 100%;
}
</style>
<div id="appid">
<iframe src="https://man.niaoge.com/" scrolling="yes" border="0" frameborder="no" framespacing="0" allowfullscreen="yes"></iframe>
</div>

::: tip 了解

Linux系统安装、help、man手册

:::

::: danger 必会

语法：
  
    $()：括号里面的命令优先执行
    `` ：引号里面的命令优先执行，不允许嵌套
    相关符号

命令：  
    
    开关机、echo、find
    cp、mv、ls、mkdir、touch、tar、rm
    cat、less、tail
:::

::: details 必会的命令简介

```shell

#=====开关机=====#
reboot            #重启系统
shutdown -r now   #立刻马上重启
shutdown -r 30 30 #分钟后重启系统

#=====echo=====#
echo
  -n 不输出最后的换行符“\n”
  -e 解释转义字符
#=====ls=====#
ls
  最常用选项
  -a all,查看目录下的所有文件，包括隐藏文件
  -l 长列表显示
  -S 按文件的大小排序
  -R 递归列出目录中的内容

#=====mkdir=====#
mkdir
  -p 级联创建

#=====touch=====#
touch 

#=====命令查找=====#
which
  which mkdir

whereis
  whereis mkdir

#=====find=====#
find
  -name
  -iname
  -size
  -exec

#=====tar=====#
tar
  -c  创建tar包（打包）
  -z  调用gzip工具压缩
  -v  显示详细信息
  -f  指定包名
  -x  解压

#=====cat=====#
cat
  常见选项：
  -n：显示行号
#=====less=====#
less 文件
	enter键：一行一行查看
	空格键：一页一页查看
	退出：Q键
	/:搜索
	n:查找下一个
	gg:回到开头

#=====tail=====#
tail 
  默认查看文件后10行
  -n 15或tail -15 表示查看后15行； 
  -f 表示动态查看

#=====cp=====#
cp
  最常用选项：
  -a 递归拷贝文件，包括目录及文件属性信息
  -r 拷贝目录
  -v 显示拷贝过程信息


#=====rm=====#
rm
  常用选项
  -r 递归删除，一般用于删除目录
  -f 直接删除，不提示

#=====date=====#
date
  查表
```
::: 
