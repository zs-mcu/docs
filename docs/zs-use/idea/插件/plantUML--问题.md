# plantUML--问题

![image-20240120003105664](./images/image-20240120003105664.png)





![image-20240120005341469](./images/image-20240120005341469.png)



## 使用远程服务

### vscode

<img src="./images/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FpYW5odWFuXw==,size_16,color_FFFFFF,t_70.png" alt="img" style="zoom:50%;" />

修改为

<img src="./images/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FpYW5odWFuXw==,size_16,color_FFFFFF,t_70-20240120004023571.png" alt="img" style="zoom:50%;" />

### Idea

![image-20240120013930476](./images/image-20240120013930476.png)

## 使用本地服务

> **安装Graphviz（**[下载地址](https://link.zhihu.com/?target=https%3A//graphviz.gitlab.io/download/)）

### windows(未亲测)

**安装Graphviz（**[下载地址](https://link.zhihu.com/?target=https%3A//graphviz.gitlab.io/download/)）

本文使用的是windows 64位的版本，下载完成之后双击安装（***记住安装目录哈，后面需要***）；

本文安装到D盘下（D:\Program Files\Graphviz）

<img src="./images/image-20240120005443012.png" alt="image-20240120005443012" style="zoom:50%;" />

<img src="./images/image-20240120011025466.png" alt="image-20240120011025466" style="zoom:50%;" />

![image-20240120005506369](./images/image-20240120005506369.png)

**实战画C4架构图**

**下载C4-Model的lib库到本地，后续画图使用(***[下载地址](https://link.zhihu.com/?target=https%3A//github.com/plantuml-stdlib/C4-PlantUML)***)**

本文下载的是目前最新的版本v2.5.0

![image-20240120005741170](./images/image-20240120005741170.png)

下载后解压，本文解压到D:\work\C4\ 目录下，实际上我们只需要根目录中的C4_开头的文件；

![image-20240120005806270](./images/image-20240120005806270.png)

**开始画C4架构图**

```
@startuml
!RELATIVE_INCLUDE="D:\work\C4\C4-PlantUML-2.5.0\"
!include D:\work\C4\C4-PlantUML-2.5.0\C4_Container.puml

Person(admin, "Administrator")
System_Boundary(c1, "Sample System") {
    Container(web_app, "Web Application", "C#, ASP.NET Core 2.1 MVC", "Allows users to compare multiple Twitter timelines")
}
System(twitter, "Twitter")

Rel(admin, web_app, "Uses", "HTTPS")
Rel(web_app, twitter, "Gets tweets from", "HTTPS")
@enduml
```

> !RELATIVE_INCLUDE="D:\work\C4\C4-PlantUML-2.5.0\" 这段代码如果不设置，则默认会去[https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/](https://link.zhihu.com/?target=https%3A//raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/) 访问对应版本的puml文件，如果网速不好会报错，所以还是建议设置成本地的资源；
> !include D:\work\C4\C4-PlantUML-2.5.0\C4_Container.puml 指定容器的资源文件路径

![image-20240120005851589](./images/image-20240120005851589.png)

至于其他的语法说明，可以去C4-PlantUML 的[Github地址](https://link.zhihu.com/?target=https%3A//github.com/plantuml-stdlib/C4-PlantUML)查询；





### mac（使用本地服务）

未安装 graphviz

```shell
# macos
# 先下载 Graphviz，然后查看 dot 是否安装成功
brew install Graphviz
dot -version


sudo mkdir -p /opt/local/bin
sudo cp /opt/homebrew/Cellar/graphviz/2.49.3/bin/dot /opt/local/bin
```

重启 idea

graphviz 官网地址： http://www.graphviz.org/download/







#### Mac m1 brew install graphviz报错 (网络收集)

```
doubleq@doubleq ~ % brew install graphviz

Running `brew update --auto-update`...
Error: Cannot install in Homebrew on ARM processor in Intel default prefix (/usr/local)!
Please create a new installation in /opt/homebrew using one of the
"Alternative Installs" from:
  https://docs.brew.sh/Installation
You can migrate your previously installed formula list with:
  brew bundle dump

```

根据报错提示，需要将命令行从[arm指令集](https://so.csdn.net/so/search?q=arm指令集&spm=1001.2101.3001.7020)切换到x86指令集，因此在命令前加一个`arch -x86_64`即可正常安装

```
arch -x86_64 brew install graphviz
```

如果要在Python中运行`utils.plot_model(model)`，可能还需要一次重启。

参考：https://medium.com/swlh/run-x86-terminal-apps-like-homebrew-on-your-new-m1-mac-73bdc9b0f343



### 动手安装失败过程记录

> 系统信息

![image-20240120010930898](./images/image-20240120010930898.png)





> 官网安装方式

```
/bin/bash -c "$(curl -fsSL https://raw.GitHubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

```
# 进入Brew本地仓库，找到.git文件夹，然后打开config文件：
cd "$(brew --repo)"

# 在config文件中找到[remote "origin"]模块，将url修改为：url = Https://mirrors.aliyun.com/homebrew/brew.git
vim .git/config

修改后，文件格式如下：
[core]  repositoryfORMatversion = 0  filemode = true  bare = false  logallrefupdates = true  symlinks = false  ignorecase = true  autocrlf = input[remote "origin"]  url = https://mirrors.aliyun.com/homebrew/brew.git  fetch = +refs/heads/*:refs/remotes/origin/*[branch "master"]  remote = origin  merge = refs/heads/master
```

测试Brew是否工作正常

```
brew update
如果能看到以下输出，则说明Brew已经成功安装并且配置了国内镜像：
Updated 1 tap (homebrew/core).==> Updated Formulae...
```



> 国内脚本安装方式

https://blog.csdn.net/W_Fe5/article/details/134428377?spm=1001.2014.3001.5501

```
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

该地址提供多个国内源地址

![img](./images/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAU2lieWxzZg==,size_20,color_FFFFFF,t_70,g_se,x_16.png)





> ```
> Warning: formula.json: update failed, falling back to cached version.
> Error: Cannot download non-corrupt https://formulae.brew.sh/api/formula.json!
> Error: Kernel.exit
> ```

> brew install nginx报错Operation too slow. Less than 100 bytes/sec transferred the last 5 seconds

```
export HOMEBREW_NO_INSTALL_FROM_API=1
```



> curl: (35) LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to raw.githubusercontent.com:443  Error: graphviz: Failed to download resource "libx11.rb"

![image-20240120011917242](./images/image-20240120011917242.png)

上科技

![image-20240120011819789](./images/image-20240120011819789.png)



> Error: A newer Command Line Tools release is available.
>
> Update them from Software Update in System Preferences.

![image-20240120011954577](./images/image-20240120011954577.png)

```
miyufeng@MacBook-Pro ~ % llvm-gcc --version
Apple clang version 12.0.5 (clang-1205.0.22.11)
Target: x86_64-apple-darwin20.3.0
Thread model: posix
InstalledDir: /Library/Developer/CommandLineTools/usr/bin
miyufeng@MacBook-Pro ~ % 
```

https://developer.apple.com/download/all/

![image-20240120011636133](./images/image-20240120011636133.png)

![image-20240120011714993](./images/image-20240120011714993.png)



访问 : https://developer.apple.com/download/more/

去下载最新的`Command Line Tools for Xcode 12.5 beta`入下图



> 完成报文

```bash
miyufeng@MacBook-Pro ~ % brew install graphviz
Warning: You are using macOS 11.
We (and Apple) do not provide support for this old version.
It is expected behaviour that some formulae will fail to build in this old version.
It is expected behaviour that Homebrew will be buggy and slow.
Do not create any issues about this on Homebrew's GitHub repositories.
Do not create any issues even if you think this message is unrelated.
Any opened issues will be immediately closed without response.
Do not ask for help from Homebrew or its maintainers on social media.
You may ask for help in Homebrew's discussions but are unlikely to receive a response.
Try to figure out the problem yourself and submit a fix as a pull request.
We will review it but may or may not accept it.

==> Fetching dependencies for graphviz: doxygen, python@3.11, docutils, python-flit-core, python-packaging, python-pathspec, python-typing-extensions, python-setuptools-scm, python-pluggy, python-trove-classifiers, python-hatchling, pygments, python-markupsafe, python-jinja, python-certifi, python-charset-normalizer, python-idna, python-urllib3, python-requests, python-tabulate, sphinx-doc, jpeg-xl, ninja, meson, libsodium, lua, ncurses, berkeley-db@5, gdbm, perl, autoconf, libssh2, libgit2, z3, llvm, rust, ruby, vim, libvmaf, yasm, aom, libavif, gd, glib, jasper, netpbm, gts, xorgproto, libxau, libxdmcp, xcb-proto, libxcb, util-macros, xtrans, libx11, libxext, libxrender, lzo, pixman, cairo, gdk-pixbuf, fribidi, graphite2, gobject-introspection, harfbuzz, pango and librsvg
==> Fetching doxygen
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/24a15b0996cf9739b75d02b460418caeffff0781bed5863865de9aefb11fb77d--doxygen.rb
==> Downloading https://doxygen.nl/files/doxygen-1.10.0.src.tar.gz
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/57ac36faf2c88ea162775e6223fd62edc274d310dbbbf486fb730b16b3d0ea1a--doxygen-1.10.0.src.tar.gz
==> Fetching python@3.11
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/749bbc537869aeb8582a7d6433d6f40e85b411f62593aaf7e0ae1032ae16b648--python@3.11.rb
==> Downloading https://raw.githubusercontent.com/Homebrew/formula-patches/6d2fb
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/2322057182c6bb73dfe09e098010168a5a9d0712a89cee86d2c5ddb11052137e--3.11-sysconfig.diff
==> Downloading https://raw.githubusercontent.com/Homebrew/formula-patches/a1618
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/5fea40db1cb33001d6ab42c76fc28693ce292532c6ed6f89dd3154dac29167bb--3.10-distutils-scheme.diff
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/c4/e6/c1ac50fe3eebb38
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/839df6b8e58f6ef46c0ebc33871e2b489d13182f2bf3bc2b56d90105181d04b9--flit_core-3.9.0.tar.gz
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/1f/7f/4da15e07ccd11c8
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/a1ddf9e52c9a8fe75212d70a357f96cf367e70e22377cc9dfcaa20a96cc9c0e0--pip-23.3.1.tar.gz
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/4b/d9/d0cf66484b7e28a
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/7a906866f4634a5422362200ce21b315c747b23f769ab867eee3560f0fb5b29b--setuptools-69.0.2.tar.gz
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/b0/b4/bc2baae3970c282
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/dc136e605b75d715777b384e9d3de56ba92e05f28a38d3781ca332969e5e72b8--wheel-0.42.0.tar.gz
==> Downloading https://www.python.org/ftp/python/3.11.7/Python-3.11.7.tgz
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/5ba08911f318adee9027b1d563857d05ec6f1a19fcf960884db72e42e52cd1a8--Python-3.11.7.tgz
==> Fetching dependencies for docutils: python@3.11
==> Fetching docutils
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/5838df242d76d886fab71bc8592b2e7d36ee75cc4a8476e53bc575f402d5748b--docutils.rb
==> Downloading https://downloads.sourceforge.net/project/docutils/docutils/0.20
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/843f96fc0be572750995ce1ef90118c1956086c462a39e2f211f124301e3a3a1--docutils-0.20.1.tar.gz
==> Fetching dependencies for python-flit-core: python@3.11
==> Fetching python-flit-core
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/515babbda4501c91d7799a7c76cd7f1b3e83125d75f9cbe21c48814bc4524bf9--python-flit-core.rb
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/c4/e6/c1ac50fe3eebb38
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/839df6b8e58f6ef46c0ebc33871e2b489d13182f2bf3bc2b56d90105181d04b9--flit_core-3.9.0.tar.gz
==> Fetching dependencies for python-packaging: python@3.11 and python-flit-core
==> Fetching python-packaging
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/e3ec422cabfe647405377c98c49c6afa430d7de271342ab55e289f2c27634f50--python-packaging.rb
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/fb/2b/9b9c33ffed44ee9
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/9d7d2aa4ba81f8928729aade5f00d3f4b0f28b47e86172b82572f01e0f3d6f34--packaging-23.2.tar.gz
==> Fetching dependencies for python-pathspec: python@3.11 and python-flit-core
==> Fetching python-pathspec
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/e54b9ac26066f8ad3b7b285bab114d5470e7a927fe4615cc8a4c88cc24b26de4--python-pathspec.rb
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/ca/bc/f35b8446f4531a7
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/ccfc7d92462262825087899a1226cad29ba695c7c57210887120ee59b7a349b3--pathspec-0.12.1.tar.gz
==> Fetching dependencies for python-typing-extensions: python@3.11 and python-flit-core
==> Fetching python-typing-extensions
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/04297613aec4b54edc16b6dd52eb738c6d33b69c646d3be552503793cabe9979--python-typing-extensions.rb
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/0c/1d/eb26f5e75100d53
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/246e971161d08a556e1042cb36552401fb368ee0ccd4464487eb21cdb2d16d31--typing_extensions-4.9.0.tar.gz
==> Fetching dependencies for python-setuptools-scm: python@3.11, python-flit-core, python-packaging and python-typing-extensions
==> Fetching python-setuptools-scm
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/f4607b85a0ee0ad65ff81f60889c7e6ef23a8a7e492bfefa43994a3be063a9d7--python-setuptools-scm.rb
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/eb/b1/0248705f10f6de5
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/cdca6eaa7fdada79a66e000c3dc1adebddd96b6b16d55b16b97792de26a778c3--setuptools-scm-8.0.4.tar.gz
==> Fetching dependencies for python-pluggy: python@3.11, python-flit-core, python-packaging, python-typing-extensions and python-setuptools-scm
==> Fetching python-pluggy
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/e96e1f546a229c311d24d27c037b8848dc6bc953eecb3fdfa3c959139459d14b--python-pluggy.rb
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/36/51/04defc761583568
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/26d2ffe2e1bb5f900de09aea227b29cbc7025b768c829f6bde8b2236cba00491--pluggy-1.3.0.tar.gz
==> Fetching dependencies for python-trove-classifiers: python@3.11
==> Fetching python-trove-classifiers
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/e69d19f498e42c3c5df4c792ea23f78ac4fd4fd1e22c51d44aaf5881e1b8e7d5--python-trove-classifiers.rb
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/44/e4/9de7cda4a03a996
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/6d252c9a90b8d6a905a14ef0006fa13d62fb564ca4f9f470d83c578b9d0a6cd4--trove-classifiers-2024.1.8.tar.gz
==> Fetching dependencies for python-hatchling: python@3.11, python-flit-core, python-packaging, python-pathspec, python-typing-extensions, python-setuptools-scm, python-pluggy and python-trove-classifiers
==> Fetching python-hatchling
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/a5fa394260767700ab5ba62a4148eb2f140bf91bded5ecfa3d397c7c9512c4b4--python-hatchling.rb
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/37/4a/986d35164e2033d
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/f95a1ff11b6fa51db04a297e5c4c16a78dc595b0f52557ef277ffbddcab949a1--editables-0.5.tar.gz
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/fb/2b/9b9c33ffed44ee9
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/9d7d2aa4ba81f8928729aade5f00d3f4b0f28b47e86172b82572f01e0f3d6f34--packaging-23.2.tar.gz
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/ca/bc/f35b8446f4531a7
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/ccfc7d92462262825087899a1226cad29ba695c7c57210887120ee59b7a349b3--pathspec-0.12.1.tar.gz
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/36/51/04defc761583568
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/26d2ffe2e1bb5f900de09aea227b29cbc7025b768c829f6bde8b2236cba00491--pluggy-1.3.0.tar.gz
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/3d/14/fe9a127564317f1
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/09f380e4051b1fd55b49af38d8a8bc2374fe2377baae26be79f9e1c6a84bca8c--trove-classifiers-2023.11.29.tar.gz
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/fd/4a/8196e79c0d6e5eb
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/063e900f664aa897b2ab83437d720f6eb849f37bff3e9411cdddcedf21cad896--hatchling-1.21.0.tar.gz
==> Fetching dependencies for pygments: python@3.11, python-flit-core, python-packaging, python-pathspec, python-typing-extensions, python-setuptools-scm, python-pluggy, python-trove-classifiers and python-hatchling
==> Fetching pygments
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/c1ac9fec393b1be558b4217a5a685c6df25842d4df736a27ffc497a0afe079d0--pygments.rb
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/55/59/8bccf4157baf25e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/c2dfc0b992035dbafaa9c5c52670f31475c2835f3958dfa05ac840d3d89e5a23--pygments-2.17.2.tar.gz
==> Fetching dependencies for python-markupsafe: python@3.11
==> Fetching python-markupsafe
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/da5afe994016b2151b5d87c5d7d67f10345ec2d52f4e44fe5f054591ff8c8bf8--python-markupsafe.rb
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/6d/7c/59a3248f411813f
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/63977516113ec5e29e0456a66712484bf0279ff145f659359014f40dc4a65ba6--MarkupSafe-2.1.3.tar.gz
==> Fetching dependencies for python-jinja: python@3.11 and python-markupsafe
==> Fetching python-jinja
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/d5cc9863d7ec96f40896f0a5d064b26015eacfa0144e494eab4ed7c220bbaaf4--python-jinja.rb
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/b2/5e/3a21abf3cd467d7
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/f6928bc6de9db31bbd7e7476c28575b6f9310eb39697143a66f1cf55f73a0bb1--Jinja2-3.1.3.tar.gz
==> Fetching dependencies for python-certifi: python@3.11
==> Fetching python-certifi
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/62b7db7e610706b3e170e04dcfd2f1b107c8e4b39b0becfbbfbaa0ff63f32df2--python-certifi.rb
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/d4/91/c89518dd4fe1f3a
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/0686d4b1fa39220facdc3da0febf2189f1337d61214f50327804889d640ac6ff--certifi-2023.11.17.tar.gz
==> Fetching dependencies for python-charset-normalizer: python@3.11
==> Fetching python-charset-normalizer
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/25a53b160de51d08ae0674a33ff5940e81e7bea29a773052689a02aedbc70628--python-charset-normalizer.rb
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/63/09/c1bc53dab74b181
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/bde996f836d603fb77954c69ab6e0b3d39183de35b2c9491a337baf635c5f1db--charset-normalizer-3.3.2.tar.gz
==> Fetching dependencies for python-idna: python@3.11 and python-flit-core
==> Fetching python-idna
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/8a016830e41c5fcb637b3d5c45c7f6e199077de748a581c3a06d6c27b3204afb--python-idna.rb
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/bf/3f/ea4b9117521a1e9
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/112295d7309613d28fc84aa0ca9373703c370af24af05a97d415563adf995217--idna-3.6.tar.gz
==> Fetching dependencies for python-urllib3: python@3.11, python-flit-core, python-packaging, python-pathspec, python-typing-extensions, python-setuptools-scm, python-pluggy, python-trove-classifiers and python-hatchling
==> Fetching python-urllib3
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/b71114540814b2c5b44bbd67f372af0f5b4ec4622284fd73eaa47b78c5deac3c--python-urllib3.rb
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/36/dd/a6b232f449e1bc7
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/67e6683a2dd2c824fe30a37cb5ced783a39febfb6e6d2785abfb319e4ce1b046--urllib3-2.1.0.tar.gz
==> Fetching dependencies for python-requests: python@3.11, python-certifi, python-charset-normalizer, python-flit-core, python-idna, python-packaging, python-pathspec, python-typing-extensions, python-setuptools-scm, python-pluggy, python-trove-classifiers, python-hatchling and python-urllib3
==> Fetching python-requests
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/e773d6cb65116e4c6c0885bee4d1ba133ac259e097799d275eea98a690f80eca--python-requests.rb
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/9d/be/10918a2eac4ae9f
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/91b12b2653c78816995714b52781ee70e3584d7a04a3f7c5ea1b86b74b6f9e9c--requests-2.31.0.tar.gz
==> Fetching dependencies for python-tabulate: python@3.11
==> Fetching python-tabulate
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/283ced8f23d55bf5470082b0fd7a13a10e78bbf913352aec49025d7878a907ee--python-tabulate.rb
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/ec/fe/802052aecb21e37
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/b1ab9113dce9c40ea02b9ff339fd8f2f67e32df66b14cfdfa3b2b1eaf6147cac--tabulate-0.9.0.tar.gz
==> Fetching dependencies for sphinx-doc: python@3.11, docutils, python-flit-core, python-packaging, python-pathspec, python-typing-extensions, python-setuptools-scm, python-pluggy, python-trove-classifiers, python-hatchling, pygments, python-markupsafe, python-jinja, python-certifi, python-charset-normalizer, python-idna, python-urllib3, python-requests and python-tabulate
==> Fetching sphinx-doc
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/248270088b2cbbdddf287aa5b63258374fc8ac792f6e6aec0eaec1e3314d10e2--sphinx-doc.rb
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/94/71/a8ee96d1fd95ca0
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/d5174e56260d7dce513f00e8bd508574e4bbab6ad0adf2744ff4791c8187fe6a--alabaster-0.7.13.tar.gz
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/e2/80/cfbe44a9085d112
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/0a39f3e36f63aa2b4d8fa7590fbe0840e2322db0166dd4a0998c42741a7a7cbe--Babel-2.14.0.tar.gz
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/a7/84/62473fb57d61e31
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/45ad40518ccfc5536d2d0c62642fc6984f2d6d914ea1f04cf38b2846d55d3e2b--imagesize-1.4.1.tar.gz
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/5f/ed/5ca4b2e90f4b078
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/170e957314451a4f92611e46f2129e96b70a421cad687ded4b7b9192b9619fb2--numpydoc-1.6.0.tar.gz
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/44/7b/af302bebf22c749
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/8dfcc491cbe0fbd3ef52a9645b55c6522e2e89c22d997618ab51f80cabf55b5a--snowballstemmer-2.2.0.tar.gz
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/1c/5a/fce19be5d4db26e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/a17bd81c7823c88504857d5a5980dbef198687e19250fa93dda6c3ce667305ee--sphinxcontrib_applehelp-1.0.7.tar.gz
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/2e/f2/6425b6db37e7c22
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/d4a03591ff6e36aedeb6e5f1766c44201494b68ea31da45a2afc2fc212d8b186--sphinxcontrib_devhelp-1.0.5.tar.gz
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/fd/2d/abf5cd4cc1d5cd9
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/0bbb928358abb44a2b5ed9af507989ee7a107f558cf1d6eff4640659c7923e42--sphinxcontrib_htmlhelp-2.0.4.tar.gz
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/b2/e8/9ed3830aeed71f1
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/72efa0fd978bb73454f7f93e31cf3d32cc3e3d3908f006a026f0391681f5d71a--sphinxcontrib-jsmath-1.0.1.tar.gz
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/4f/a2/53129fc967ac840
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/bfebd3f69ef7c02da216101563c0373c099aabde971a1c574b6988d5eb5ef3b4--sphinxcontrib_qthelp-1.0.6.tar.gz
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/5c/41/df4cd017e8234de
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/bd039cb8418d8f1052e9b4fb6366a8b058ea9fdfc0079ed44c07ef3b926fc431--sphinxcontrib_serializinghtml-1.1.9.tar.gz
==> Downloading https://pypi.tuna.tsinghua.edu.cn/packages/73/8e/6e51da4b26665b4
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/78e7ddaaa58862f6ce89aaf1bf7747746084a4710de4285572f7ae27f1960a01--sphinx-7.2.6.tar.gz
==> Fetching dependencies for jpeg-xl: doxygen, python@3.11, docutils, python-flit-core, python-packaging, python-pathspec, python-typing-extensions, python-setuptools-scm, python-pluggy, python-trove-classifiers, python-hatchling, pygments, python-markupsafe, python-jinja, python-certifi, python-charset-normalizer, python-idna, python-urllib3, python-requests, python-tabulate and sphinx-doc
==> Fetching jpeg-xl
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/5b8fc61b227640c39af64aa1bbc14f79bd82db70797040eab5b4f85c40b5e3e3--jpeg-xl.rb
==> Cloning https://github.com/webmproject/sjpeg.git
Updating /Users/miyufeng/Library/Caches/Homebrew/jpeg-xl--sjpeg--git
origin/HEAD set to master
refs/remotes/origin/master
==> Checking out revision e5ab13008bb214deb66d5f3e17ca2f8dbff150bf
HEAD is now at e5ab130 Merge pull request #119 from szabadka/master
HEAD is now at e5ab130 Merge pull request #119 from szabadka/master
==> Downloading https://github.com/libjxl/libjxl/archive/refs/tags/v0.9.1.tar.gz
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/10dae9c34f85af44df3590bbf57cc7304cafc4472671544a7710391811c70b47--libjxl-0.9.1.tar.gz
==> Fetching ninja
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/ninja-1.11.1.big_su
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/bf460e1a8a94ae5f6272a53203db06ccc1d95654530def5e175b6c8135481f5b--ninja-1.11.1.big_sur.bottle.1.tar.gz
==> Fetching meson
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/meson-1.3.1.all.bot
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/28d09db99626491092dc294a01938da34c1322e2805772486c7ed1f69b60314d--meson-1.3.1.all.bottle.tar.gz
==> Fetching libsodium
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/ce7541331d0147933cbc2bf95be1b418d5863ac06207a50ca757ecca2a4f99ca--libsodium.rb
==> Downloading https://download.libsodium.org/libsodium/releases/libsodium-1.0.
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/33d4c319ba604c918c50d1455bbfe3b80c34ad88a20101bc535a10174afa1335--libsodium-1.0.19.tar.gz
==> Fetching lua
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/lua-5.4.6.big_sur.b
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/565145b52b3fc9e9044ed376b3581d3fd6557a419b46eeb9f5f153a9307a1555--lua-5.4.6.big_sur.bottle.tar.gz
==> Fetching ncurses
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/ncurses-6.4.big_sur
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/80cee1de08b663d52e8d7135461a7fe876ccae02d49bd5cd6463423b96d365f0--ncurses-6.4.big_sur.bottle.1.tar.gz
==> Fetching berkeley-db@5
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/berkeley-db%405-5.3
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/a6410d31395d6eb0ec66fc677b250bc7e836b409d4b52dcda8474048b8679b48--berkeley-db@5-5.3.28_1.big_sur.bottle.tar.gz
==> Fetching gdbm
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/gdbm-1.23.big_sur.b
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/92e90fcf0e255b2d100adc9d4e1fd6bf93f149f28612fa8740b1dc1adfe1348b--gdbm-1.23.big_sur.bottle.tar.gz
==> Fetching perl
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/297b052a35daae8389abe6d963e59f184352d5be18730ffbe9e611f749979216--perl.rb
==> Downloading https://www.cpan.org/src/5.0/perl-5.38.2.tar.xz
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/59059b1694745f54d6176394f8b422739d4e28ab01f02ad4a13ffa341ddd1561--perl-5.38.2.tar.xz
==> Fetching autoconf
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/c15c478b38a8272a0c56de168dc726be498dca4aadb986a2222420f3122668f9--autoconf.rb
==> Downloading https://ftp.gnu.org/gnu/autoconf/autoconf-2.72.tar.gz
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/9a3697ed87a3692851abdc3ff90de3998d70e7ffafb4781984a7f200a19e1c43--autoconf-2.72.tar.gz
==> Fetching libssh2
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/libssh2-1.11.0_1.bi
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/d47eb51f958b7eec1519aa45d30c3c435a8629eef14ed66ca775fa26aa039e13--libssh2-1.11.0_1.big_sur.bottle.tar.gz
==> Fetching libgit2
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/libgit2-1.7.1.big_s
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/866336d55c0344766260a0df7f95fb033862a34ba06acf7159cdd4330ad401fe--libgit2-1.7.1.big_sur.bottle.tar.gz
==> Fetching z3
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/f90d084840cd09c221e7d7305b75de57639cecc54b23a10b1b2f5d1fb3684460--z3.rb
==> Downloading https://github.com/Z3Prover/z3/archive/refs/tags/z3-4.12.4.tar.g
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/7f4986a6b7c027372ebdf1affa351d5c892a1269886b858b162355da41b895a7--z3-z3-4.12.4.tar.gz
==> Fetching dependencies for llvm: z3
==> Fetching llvm
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/63a1bf028c74445d0a6bb583bab11af9f0e34a0c9950eb60b6b2224f00e21edf--llvm.rb
==> Downloading https://raw.githubusercontent.com/Homebrew/formula-patches/23704
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/0a6947e1d87105ba00f3500f3e8cc81f2085adb907cfce8feac4478022cb266e--17.x-arm64-opt.patch
==> Downloading https://github.com/llvm/llvm-project/releases/download/llvmorg-1
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/0f45ee25df06c0fb1fa6d0d6df4677a9487c4b95f1020855dc61f95b532eb9c0--llvm-project-17.0.6.src.tar.xz
==> Fetching dependencies for rust: z3 and llvm
==> Fetching rust
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/dd9f877ce50ff6035b2c8b00e10d10ca97ef7951aed627cc2d9d8c6417af2d41--rust.rb
==> Downloading https://github.com/rust-lang/cargo/archive/refs/tags/0.76.0.tar.
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/221fe93aa7e66ce065b653bc2868c69f06668026e8fad37f6150a9a9a62e814d--cargo-0.76.0.tar.gz
==> Downloading https://static.rust-lang.org/dist/2023-11-16/cargo-1.74.0-x86_64
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/a7bee9fc293b287688b09749e67f22f06704b2a439b44cc21cb4cd21e01db4cf--cargo-1.74.0-x86_64-apple-darwin.tar.xz
==> Downloading https://static.rust-lang.org/dist/rustc-1.75.0-src.tar.gz
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/7a2b7d1cd22034c707fba211e1a52300b51442e89be4e03d89e304fe2a8d913b--rustc-1.75.0-src.tar.gz
==> Fetching dependencies for ruby: autoconf, z3, llvm and rust
==> Fetching ruby
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/47a540118df1beef83165a3c03a85ed9a997521e26a65dad9a19653888c81e39--ruby.rb
==> Downloading https://rubygems.org/rubygems/rubygems-3.5.4.tgz
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/d32bb5b9ca64539e005ebc2f78ac9a5f1231fa063f2625c15c99babeca1e6d81--rubygems-3.5.4.tgz
==> Downloading https://cache.ruby-lang.org/pub/ruby/3.3/ruby-3.3.0.tar.gz
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/de83c59d4a835d69648b2cfd4a4db97bd16590236d6967dfd5beedc048ab1855--ruby-3.3.0.tar.gz
==> Fetching dependencies for vim: libsodium, perl, autoconf, z3, llvm, rust and ruby
==> Fetching vim
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/98a63f4f602ddac6b7fb4c483d601ed248dc05066231b9618474da182f44c226--vim.rb
==> Downloading https://github.com/vim/vim/archive/refs/tags/v9.1.0.tar.gz
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/6a99a1c6e7e916e038eca15f8d78c7bc778c2a62651bbaa796052bbe296fb2ef--vim-9.1.0.tar.gz
==> Fetching dependencies for libvmaf: libsodium, perl, autoconf, z3, llvm, rust, ruby and vim
==> Fetching libvmaf
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/d552a14219d822aabae9022e6c0f81f0d98bf37ff970267246ee692660f62d5d--libvmaf.rb
==> Downloading https://github.com/Netflix/vmaf/archive/refs/tags/v3.0.0.tar.gz
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/09a182a91f4cd9a0611fecb9449a5aea6875429b64bf39b3f327b24eb95dbc43--vmaf-3.0.0.tar.gz
==> Fetching yasm
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/yasm-1.3.0_2.big_su
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/0b73f4a8a5e206f5e67986f07258c36574dfe41897e05cf302cfca787a89daea--yasm-1.3.0_2.big_sur.bottle.1.tar.gz
==> Fetching dependencies for aom: doxygen, python@3.11, docutils, python-flit-core, python-packaging, python-pathspec, python-typing-extensions, python-setuptools-scm, python-pluggy, python-trove-classifiers, python-hatchling, pygments, python-markupsafe, python-jinja, python-certifi, python-charset-normalizer, python-idna, python-urllib3, python-requests, python-tabulate, sphinx-doc, jpeg-xl, libsodium, perl, autoconf, z3, llvm, rust, ruby, vim and libvmaf
==> Fetching aom
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/03e2f19bc6749fd3a326ca3f610e4720ac462ebb49f70381d980290e8092e943--aom.rb
==> Downloading https://media.xiph.org/video/derf/y4m/bus_qcif_15fps.y4m
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/ced756f9d1f53c598f4f2b5c3676f9a313d4102ac938a50a36d66ea7343e22bd--bus_qcif_15fps.y4m
==> Cloning https://aomedia.googlesource.com/aom.git
Updating /Users/miyufeng/Library/Caches/Homebrew/aom--git
==> Checking out tag v3.8.0
HEAD is now at b681eac839 Update CHANGELOG for libaom 3.8.0
HEAD is now at b681eac839 Update CHANGELOG for libaom 3.8.0
==> Fetching dependencies for libavif: doxygen, python@3.11, docutils, python-flit-core, python-packaging, python-pathspec, python-typing-extensions, python-setuptools-scm, python-pluggy, python-trove-classifiers, python-hatchling, pygments, python-markupsafe, python-jinja, python-certifi, python-charset-normalizer, python-idna, python-urllib3, python-requests, python-tabulate, sphinx-doc, jpeg-xl, libsodium, perl, autoconf, z3, llvm, rust, ruby, vim, libvmaf and aom
==> Fetching libavif
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/2b214b110649237cdb0d10e7419f9550a8a1161edf613af89ebbe4b6d7a153c6--libavif.rb
==> Downloading https://github.com/AOMediaCodec/libavif/archive/refs/tags/v1.0.3
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/ee0da4e1ed76f4741f5708eb4ceaf1215ecbaad0c9f28d579214c12ad038f615--libavif-1.0.3.tar.gz
==> Fetching dependencies for gd: doxygen, python@3.11, docutils, python-flit-core, python-packaging, python-pathspec, python-typing-extensions, python-setuptools-scm, python-pluggy, python-trove-classifiers, python-hatchling, pygments, python-markupsafe, python-jinja, python-certifi, python-charset-normalizer, python-idna, python-urllib3, python-requests, python-tabulate, sphinx-doc, jpeg-xl, libsodium, perl, autoconf, z3, llvm, rust, ruby, vim, libvmaf, aom and libavif
==> Fetching gd
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/gd-2.3.3_6.big_sur.
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/bbdbdc0e0048bdc4d62c2e4b27439bbdd1501df4155bef3f7b22e82fe53ca909--gd-2.3.3_6.big_sur.bottle.tar.gz
==> Fetching glib
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/941a9853cf978779b9dae1fb57f82af7072a55e9bbd62754dea0799faa534795--glib.rb
==> Downloading https://raw.githubusercontent.com/Homebrew/formula-patches/43467
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/3cff797fba2e962ee6871405f3f9c105575e25520c4eeadd25ebfe6c746d3f15--hardcoded-paths.diff
==> Downloading https://download.gnome.org/sources/glib/2.78/glib-2.78.3.tar.xz
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/ff9a80b70b4e57c34b202cb0be4137c02317d088159cc34ec191b896257fc0f9--glib-2.78.3.tar.xz
==> Fetching jasper
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/05293ec2b26359b1fc78576a818b9ee3ce1dd8ecba48c427f58709d8130c8fb8--jasper.rb
==> Downloading https://github.com/jasper-software/jasper/releases/download/vers
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/709737b58ef1701f953ecad64371e615ed00bb73140273e6f357bddf775b4da4--jasper-4.1.2.tar.gz
==> Fetching dependencies for netpbm: jasper
==> Fetching netpbm
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/87112ce208fafa992acd6d4b58588e6c2a9a9b1aafff30eaa3a672b8f20ec70c--netpbm.rb
==> Cloning https://svn.code.sf.net/p/netpbm/code/stable
Updating /Users/miyufeng/Library/Caches/Homebrew/netpbm--svn
==> Checking out 4822
==> Fetching dependencies for gts: glib, jasper and netpbm
==> Fetching gts
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/gts-0.7.6_3.big_sur
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/069bc1a78e33d5a64ef8e69d65f10008691c220fb49462c971a92fff61429974--gts-0.7.6_3.big_sur.bottle.tar.gz
==> Fetching xorgproto
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/xorgproto-2023.2.bi
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/8d231a0c17dcc9c3f1416bd3da23691eb7374eb7025716ab1045e5eeea002e21--xorgproto-2023.2.big_sur.bottle.tar.gz
==> Fetching libxau
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/libxau-1.0.11.big_s
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/3603bb9d6f77bdf3db3c14775d1a819072853709fe8b7186ae1036cdb9d3d92f--libxau-1.0.11.big_sur.bottle.tar.gz
==> Fetching libxdmcp
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/libxdmcp-1.1.4.big_
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/07c305a44c209d75535db78c5aca5ad89e02acda221d1712b156775868af8b30--libxdmcp-1.1.4.big_sur.bottle.tar.gz
==> Fetching xcb-proto
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/xcb-proto-1.16.0.al
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/dd3af3c1189f5bfbcd69348b41572dc38459d3203980e2757765f83376643288--xcb-proto-1.16.0.all.bottle.1.tar.gz
==> Fetching libxcb
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/c1cbe724372835fcf610344e945e4be02e192c7827925778e19821e263bae80f--libxcb.rb
==> Downloading https://xorg.freedesktop.org/archive/individual/lib/libxcb-1.16.
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/727dddf4e04c0611cdfea968cc375691595942339e442e8716fa3bd9549049c1--libxcb-1.16.tar.xz
==> Fetching util-macros
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/util-macros-1.20.0.
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/8bdf39b202c70f5bd4384b4a2857a073c8f85cbb534511ea8e34c8e5e88efc34--util-macros-1.20.0.big_sur.bottle.tar.gz
==> Fetching xtrans
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/xtrans-1.5.0.all.bo
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/08847d758532c6a4f7989d3853ed1f8b160a67e9637c943219884202c159ff37--xtrans-1.5.0.all.bottle.2.tar.gz
==> Fetching dependencies for libx11: libxcb
==> Fetching libx11
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/be6bf6628bc9e880010c47822b2f9fa3c21dd65956c7c9d17dff4dfab5937f71--libx11.rb
==> Downloading https://www.x.org/archive/individual/lib/libX11-1.8.7.tar.gz
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/dfd7993a89ca0991b36ac91ae831015fd92550c0ca94053fa896cdaa49b23f7b--libX11-1.8.7.tar.gz
==> Fetching dependencies for libxext: libxcb and libx11
==> Fetching libxext
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/libxext-1.3.5.big_s
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/40d572fa5c3ece24aababef40bfd549a4c47f5f6eec3a1a110f140fbaae6170e--libxext-1.3.5.big_sur.bottle.tar.gz
==> Fetching dependencies for libxrender: libxcb and libx11
==> Fetching libxrender
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/libxrender-0.9.11.b
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/4288765f0e5fe6b5c86fda40a442487c96aa22048777a4e2088052ef20937d3a--libxrender-0.9.11.big_sur.bottle.tar.gz
==> Fetching lzo
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/lzo-2.10.big_sur.bo
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/fc1c2830d8139db5277e1a943a416b0840eaa08937b7aaf2d473f1d0310baa08--lzo-2.10.big_sur.bottle.tar.gz
==> Fetching pixman
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/pixman-0.42.2.big_s
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/d5f3921c230d120e9654f2c9ed7df4413e0697b7ae4162a7f0f0715e475f364e--pixman-0.42.2.big_sur.bottle.1.tar.gz
==> Fetching dependencies for cairo: glib, libxcb and libx11
==> Fetching cairo
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
######################################################################### 100.0%
==> Downloading https://cairographics.org/releases/cairo-1.18.0.tar.xz
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/64a9224202ec01f036561637599fe1749f87c4619b747d0143d97299cd458996--cairo-1.18.0.tar.xz
==> Fetching dependencies for gdk-pixbuf: glib
==> Fetching gdk-pixbuf
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/gdk-pixbuf-2.42.10_
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/241eda424ca9a6f01faed99dba7018e33366eaa5feeba2cae4f199d8cf1b082f--gdk-pixbuf-2.42.10_1.big_sur.bottle.tar.gz
==> Fetching fribidi
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/fribidi-1.0.13.big_
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/ac137160a3e76c1cc4f0f0bcb78d8794a02e83f59494c6696c4bda84e3299476--fribidi-1.0.13.big_sur.bottle.tar.gz
==> Fetching graphite2
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/graphite2-1.3.14.bi
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/fb48f8f10501d642a8be70f6273fc86f268f77ca5d6153b6a0fb4f95b21d44f3--graphite2-1.3.14.big_sur.bottle.tar.gz
==> Fetching dependencies for gobject-introspection: glib, libxcb, libx11 and cairo
==> Fetching gobject-introspection
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
######################################################################### 100.0%
==> Downloading https://gitlab.gnome.org/tschoonj/gobject-introspection/-/commit
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/8b05b2a9de1da2191fe40b8fb80652d77efaa426382912d3d850e303bcf08d38--a7be304478b25271166cd92d110f251a8742d16b.diff
==> Downloading https://download.gnome.org/sources/gobject-introspection/1.78/go
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/c9bae6da8be051e9f93b8287293bed755097d06184a1b68c8f0b74c8eebc3241--gobject-introspection-1.78.1.tar.xz
==> Fetching dependencies for harfbuzz: glib, libxcb, libx11, cairo and gobject-introspection
==> Fetching harfbuzz
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
######################################################################### 100.0%
==> Downloading https://github.com/harfbuzz/harfbuzz/raw/fc0daafab0336b847ac1468
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/b0f20064588dc70dd5c74e36b842326d9dbbeacab35c63c3d900a8b34aaba98f--270b89df543a7e48e206a2d830c0e10e5265c630.ttf
==> Downloading https://github.com/harfbuzz/harfbuzz/archive/refs/tags/8.3.0.tar
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/1096cc02bd4f36f3a14498ff83285d3a72972d5239abc239bf5541f7dcc98aef--harfbuzz-8.3.0.tar.gz
==> Fetching dependencies for pango: glib, libxcb, libx11, cairo, gobject-introspection and harfbuzz
==> Fetching pango
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/pango-1.50.14.big_s
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/244f3ce4bb97e5a296f4029f14b7de16db19177ef681726bf4b44469538daa62--pango-1.50.14.big_sur.bottle.tar.gz
==> Fetching dependencies for librsvg: glib, libxcb, libx11, cairo, gobject-introspection, harfbuzz, z3, llvm and rust
==> Fetching librsvg
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/3f6970e
######################################################################### 100.0%
==> Downloading https://download.gnome.org/sources/librsvg/2.57/librsvg-2.57.1.t
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/460d64882a6a360b24bb8bc1e7861490ab46be3f77bdf020555114c137d29dcb--librsvg-2.57.1.tar.xz
==> Fetching graphviz
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/graphviz-9.0.0.big_
Already downloaded: /Users/miyufeng/Library/Caches/Homebrew/downloads/391f47e6ff149bb1c412a681479432da871247c342be1260f399bc47a574c2ef--graphviz-9.0.0.big_sur.bottle.tar.gz
==> Installing dependencies for graphviz: doxygen, python@3.11, docutils, python-flit-core, python-packaging, python-pathspec, python-typing-extensions, python-setuptools-scm, python-pluggy, python-trove-classifiers, python-hatchling, pygments, python-markupsafe, python-jinja, python-certifi, python-charset-normalizer, python-idna, python-urllib3, python-requests, python-tabulate, sphinx-doc, jpeg-xl, ninja, meson, libsodium, lua, ncurses, berkeley-db@5, gdbm, perl, autoconf, libssh2, libgit2, z3, llvm, rust, ruby, vim, libvmaf, yasm, aom, libavif, gd, glib, jasper, netpbm, gts, xorgproto, libxau, libxdmcp, xcb-proto, libxcb, util-macros, xtrans, libx11, libxext, libxrender, lzo, pixman, cairo, gdk-pixbuf, fribidi, graphite2, gobject-introspection, harfbuzz, pango and librsvg
==> Installing graphviz dependency: doxygen
Warning: A newer Command Line Tools release is available.
Update them from Software Update in System Preferences.

If that doesn't show you any updates, run:
  sudo rm -rf /Library/Developer/CommandLineTools
  sudo xcode-select --install

Alternatively, manually download them from:
  https://developer.apple.com/download/all/.
You should download the Command Line Tools for Xcode 13.2.1.

==> Downloading https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles/api/formul
-=O=-                                                                       ###
curl: (6) Could not resolve host: mirrors.tuna.tsinghua.edu.cn
==> Downloading https://formulae.brew.sh/api/formula.jws.json
######################################################################### 100.0%
==> cmake -S . -B build -DPYTHON_EXECUTABLE=/usr/bin/python3
Last 15 lines from /Users/miyufeng/Library/Logs/Homebrew/doxygen/01.cmake:
-- Found Threads: TRUE  
-- Looking for iconv_open
-- Looking for iconv_open - not found
-- Performing Test ICONV_COMPILES
-- Performing Test ICONV_COMPILES - Success
-- Found Iconv: /Library/Developer/CommandLineTools/SDKs/MacOSX11.sdk/usr/lib/libiconv.tbd  
-- One (and only one) of the ICONV_ACCEPTS_... tests must pass
-- Performing Test ICONV_ACCEPTS_NONCONST_INPUT
-- Performing Test ICONV_ACCEPTS_NONCONST_INPUT - Success
-- Performing Test ICONV_ACCEPTS_CONST_INPUT
-- Performing Test ICONV_ACCEPTS_CONST_INPUT - Failed
-- Build spdlog: 1.11.0
-- Build type: Release
-- The javacc executable not found, using existing files
-- Configuring incomplete, errors occurred!

Do not report this issue to Homebrew/brew or Homebrew/homebrew-core!


Error: You are using macOS 11.
We (and Apple) do not provide support for this old version.
It is expected behaviour that some formulae will fail to build in this old version.
It is expected behaviour that Homebrew will be buggy and slow.
Do not create any issues about this on Homebrew's GitHub repositories.
Do not create any issues even if you think this message is unrelated.
Any opened issues will be immediately closed without response.
Do not ask for help from Homebrew or its maintainers on social media.
You may ask for help in Homebrew's discussions but are unlikely to receive a response.
Try to figure out the problem yourself and submit a fix as a pull request.
We will review it but may or may not accept it.


Error: A newer Command Line Tools release is available.
Update them from Software Update in System Preferences.

If that doesn't show you any updates, run:
  sudo rm -rf /Library/Developer/CommandLineTools
  sudo xcode-select --install

Alternatively, manually download them from:
  https://developer.apple.com/download/all/.
You should download the Command Line Tools for Xcode 13.2.1.
```

