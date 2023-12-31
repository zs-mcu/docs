---
autoGroup+1: 'Linux概述'
---
# Linux概述--1.初识Linux

## 一、计算机资源介绍

计算机资源分为2 部分：硬件资源、软件资源

**硬件：** 一般硬件是指计算机的物理组成，由真实（看得见，摸得着）的设备组成的

**软件：** 软件一般是指应用程序，应用程序程序是由开发人员去按照编程语言的特定的规则去

编写的程序。除了上述的应用程序之外，操作系统也属于软件资源的范畴，它属特殊的软件。

![image-20231031134814818](./images/image-20231031134814818.png)

## 二、常见操作系统

常见操作系统有：Windows、MacOS、Linux。

> Windows：其是微软公司研发的收费操作系统（闭源）
>
> Windows系统分为两类：用户（个人）操作系统、服务器（企业）操作系统
>
> 个人操作系统：win 95、win 98、win NT、win Me、win xp、vista、win7、win8、win10
>
> 服务器操作系统：windows server 2003/2008/2012/2016



> MacOS：其是由苹果公司开发的一款收费（变相收费，买电脑送系统）操作系统。该系统从
>
> 终端角度来看分为：watch OS、IOS、MacOS
>
> 其表现突出的地方：底层优化实现的很好
>



> Linux：Linux 是目前全球使用量最多的**服务器**操作系统（开源）
>
> 其体系很强大，其分支有很多（数不胜数），其目前主要的分支有：RedHat（红帽）、Debian、乌班图（ubuntu）、CentOS等等。其在世界范围最大的使用分支是安卓。
>
> 闭源：不开放源代码，用户是没有办法看到软件的底层实现（闭源≠收费）
>
> 开源：表示开放源代码（开源≠免费）



## 三、Linux简单介绍

### 1、Linux特性

- 完全开源

  使用Linux，包括对它的拷贝，修改，再发布，在遵循GPL的协议下，你不会有任何版权问题的担心，对于企业部署可以极大的降低成本。而正因为Linux平台不会依赖于任何一家私有软件公司，所有各大软硬件厂商都支持并发展Linux，如REDHAT，IBM，DELL，ORACLE，VMWARE，GOOGLE，INTEL等。

- 多用户多任务系统

  Linux继承了UNIX多用户多任务的设计理念，允许多人同时上线工作，并合理分配资源。

- 安全高效稳定

  严格的用户权限管理使得不同的使用者之间保持高度的保密性和安全性。Linux得到来自各大软硬件厂商的支持，特别是企业级应用。

- 支持多种硬件平台

  Linux是一种UNIX Like 操作系统，它遵循 1 标准,运行在UNIX下的软件很容易移植到Linux下，这使得Linux立刻拥有了大量优秀的软件。



### 2、Linux发行版本

**用户**——>计算机

计算机资源——>硬件资源+软件资源

软件资源——>**操作系统**——>内核（内核空间）+**应用程序**（用户空间）

**Linux发行版**指的就是通常所说的“Linux操作系统”，它可能是由一个组织，公司或者个人发布的。

通常来讲，一个Linux发行版包括Linux内核，各种GNU软件，及其他的一些自由软件。在一些特定的Linux发行版中也有一些专有软件。

发行版为许多不同的目的而制作，包括对不同计算机硬件结构的支持，对一个具体区域或语言的本地化，实时应用，和嵌入式系统。目前，数百个Linux发行版被积极的开发，被广泛应用的发行版有：

- **Red Hat Enterprise Linux**

  RHEL是Red Hat（红帽）公司的企业版Linux系统，因其稳定强大，各大厂商认证和良好的技术支持，在Linux服务器上市场占领超过50%份额。采用RPM的包管理方式，很多发行版都或多或少的受到它的影响。

- **CentOS**

  由**社区**开发并维护，基于RHEL，并与RHEL版本号保持一致。致力于提供一个自由使用且稳定的RHEL。开发者直接修改RHEL的源代码，去除了红帽的商标和商业服务组件，修复了很多存在的Bug。其拥有自己的软件仓库，提供免费的在线更新程序。

- **Fedora**

  主要由RedHat主持的社区Linux项目，采用同样的RPM包管理，致力于最新技术的开发和引入。经过测试稳定且有价值的技术将被RHEL吸纳。坚持每半年发布一个版本。

- **SUSE Linux**

  在欧洲非常流行的Linux发行版，以界面华丽和简单易用著称。2004年被NOVELL收购。NOVELL提供企业级的SUSE Linux Enterprise Server｜Desktop软件和商业技术支持服务，企业市场占有率较高。OpenSUSE是基于企业版的社区提供的免费SUSE Linux。

- **Debian**

  Debian是完全开放，一个强烈信奉自由软件的系统，由Debian计划组织维护，其背后没有任何营利组织的支持，开发人员完全来自于全世界各地的志愿者。Debian基于Deb的包管理方式，apt的在线软件安装更新非常方便且快速。提供超过18000个软件包的支持，受到研究机构开发人员的极大欢迎。

- **Ubuntu**

  基于Debian开发，采用相同的deb和apt。通过精挑细选，保证软件质量，致力于开发一个简单易用的Linux系统。由Canonical支持，坚持每6个月发布一个版本，分别提供6个月和3年（LTS）的技术支持。由于其易用性和遍布世界各地的镜像源服务器，使得它近年来变得非常流行。

- **其他Linux发行版**

  Arch Linux，一个基于KISS（Keep It Simple and Stupid）的滚动更新的操作系统。

  Gentoo，一个面向高级用户的发行版，所有软件的源代码需要自行编译。

  Elementary OS：基于Ubuntu，界面酷似Mac OS X。

  Linux Mint，从Ubuntu派生并与Ubuntu兼容的系统。

![image-20231031135630748](./images/image-20231031135630748.png)

### 3、开源文化

**什么是GNU？什么是GPL协议？GNU和Linux是怎么结合在一起的？**

GNU是在1983年由理查德·马修·斯托曼提出的一个项目计划，目标是提供一个和Unix100%兼容的 2 的操作系统。这个系统的名字叫GNU，是GNU's Not Unix的首字母递归缩写——这是对Unix的技术思想致敬的一种方法，同时表达GNU有所不同。从技术上说，GNU很像Unix。但是它不同于Unix，GNU给予其用户自由。

GPL（General Public License）协议是指GNU通用公共许可证。任何软件发布，都需要许可证，GNU 认为任何软件都应当以自由软件发布。要让一个软件成为自由软件，就需要把它以自由软件许可证发布。我们通常使用GNU通用公共许可证 GNU GPL发布软件。

简单地说，GPL授权具有以下几个特点：

1. 任何软件挂上GPL授权之后，即为自由的软件，任何人均可获取，同时，亦可取得其源代码；

2. 取得GPL授权的软件后，任何人均可修改源代码，以使其符合自己的喜好；

3. 除此之外，经过修改的源代码应回报给网络社会，供大家参考！

   注意：并非挂上GPL之后的软件就不可贩卖，这是不同的两回事！



**GNU和Linux是怎么结合在一起的呢？**

1991年，林纳斯·托瓦兹编写出了与UNIX兼容的Linux操作系统内核并以GPL授权发布。Linux之后在网上广泛流传，许多程序员参与了开发与修改。

1992年，Linux与其他GNU软件结合，完全自由的操作系统正式诞生。该操作系统往往被称为“GNU/Linux”或简称Linux。





### 4、总结

1. Linux是什么？

   严格来说，Linux只是一个操作系统内核。大多数Linux发行版是由操作系统内核加上GNU的软件或工具形成完整的操作系统，也就是GNU/Linux。GNU/Linux是一种Unix Like操作系统。

2. 广泛使用的Linux发行版有哪些？

   常见的Linux发型版本：Red Hat Enterprise Linux、CentOS、Ubuntu、SUSE Linux等。

3. Linux有哪些特点？

   - 完全开源
   - 支持多种硬件平台
   - 多用户多任务
   - 安全高效稳定

4. 扩展阅读

   GNU相关介绍：http://www.gnu.org/

   Centos官网：https://www.centos.org/

   Linux内核官网：https://www.kernel.org/

   主流Linux桌面版简介：https://www.jianshu.com/p/7b187c515d77