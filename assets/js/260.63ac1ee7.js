(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{1542:function(t,a,n){"use strict";n.r(a);var e=n(4),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"启动报错-gpu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动报错-gpu"}},[t._v("#")]),t._v(" 启动报错--GPU")]),t._v(" "),a("h2",{attrs:{id:"unknown-runtime-specified-nvidia"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unknown-runtime-specified-nvidia"}},[t._v("#")]),t._v(" Unknown runtime specified nvidia.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("docker: Error response from daemon: Unknown runtime specified nvidia.\nSee "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'docker run --help'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),a("p",[t._v("修改/创建"),a("code",[t._v("/etc/docker/daemon.json")]),t._v("（需要管理员权限），添加如下的内容：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"runtimes"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nvidia"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/bin/nvidia-container-runtime"')]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"runtimeArgs"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("重启docker")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl daemon-reload\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n")])])]),a("h2",{attrs:{id:"安装nvidia-container-runtime-离线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装nvidia-container-runtime-离线"}},[t._v("#")]),t._v(" 安装nvidia-container-runtime（离线）：")]),t._v(" "),a("p",[t._v("1、下载")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/NVIDIA/libnvidia-container/tree/gh-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("libnvidia-container（软件包下载地址）"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("nvidia容器工具包的相关软件包目前已由https://nvidia.github.io/libnvidia-container存储库提供服务。在GitHub libnvidia-container仓库的gh-pages分支下，可以看到相关的软件包（建议选择stable文件夹下稳定版本的软件包来进行离线下载）")]),t._v(" "),a("p",[t._v("选择符合的系统，查看内部repo文件的值，按照路径返回到stable下查找需要的rpm下载")]),t._v(" "),a("p",[t._v("libnvidia-container核心包包括：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("libnvidia-container-tools\nlibnvidia-container1\nnvidia-container-runtime\nnvidia-container-toolkit\nnvidia-container-toolkit-base\nnvidia-docker2\n")])])]),a("p",[t._v("下载到服务器手动执行")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("rpm -Uvh *.rpm --nodeps --force\n")])])]),a("p",[t._v("(Ubuntu)执行")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dpkg -i --force-overwrite *.deb\n")])])]),a("p",[t._v("2、修改配置文件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("vi /etc/docker/daemon.json\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n\t"default-runtime": "nvidia",\n\t"runtimes": {\n\t\t"nvidia": {\n\t\t\t"path": "nvidia-container-runtime",\n\t\t\t"runtimeArgs": []\n\t\t}\t\n\t}\n}\n')])])]),a("p",[t._v("3、完成")]),t._v(" "),a("p",[t._v("检查命令")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nvidia-container-runtime -v\n")])])]),a("p",[t._v("重启docker生效")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("systemctl restart docker\n")])])]),a("p",[t._v("运行docker检查")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("docker run --rm --runtime=nvidia nvidia/cuda nvidia-smi\n")])])]),a("p",[t._v("进docker后 使用 nvidia-smi 检查是否正常")]),t._v(" "),a("h1",{attrs:{id:"nvidia-container-cli-initialization-error-nvml-error-insufficient-permissions-unkown解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nvidia-container-cli-initialization-error-nvml-error-insufficient-permissions-unkown解决"}},[t._v("#")]),t._v(" nvidia-container-cli: initialization error: nvml error: insufficient permissions:unkown解决")]),t._v(" "),a("p",[t._v("问题：NVIDIA-Docker 在启docker的时候gpu挂不上")]),t._v(" "),a("p",[t._v("报错：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("docker: Error response from daemon: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: error during container init: error running hook #0: error running hook: exit status 1, stdout: , stderr: Auto-detected mode as 'legacy'\nnvidia-container-cli: initialization error: nvml error: insufficient permissions: unknown.\n")])])]),a("p",[t._v("看起来是没有权限的问题")]),t._v(" "),a("p",[t._v("https://link.zhihu.com/?target=https%3A//github.com/NVIDIA/nvidia-docker/issues/1547")]),t._v(" "),a("p",[t._v("解决方法：")]),t._v(" "),a("p",[t._v("打开 '/etc/nvidia-container-runtime/config.toml' 文件")]),t._v(" "),a("p",[t._v("将文件中的"),a("code",[t._v('user = "root:video"')]),t._v(" 取消注释")]),t._v(" "),a("p",[t._v("然后改成"),a("code",[t._v('user = "root:root"')])]),t._v(" "),a("p",[t._v("应该是因为用户组的问题。")]),t._v(" "),a("p",[t._v("使用命令查看")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ll /dev/nvidia*\n")])])]),a("p",[t._v("显示结果为")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("crw-rw---- 1 root vglusers     195,   0 Aug 17 09:55 /dev/nvidia0\ncrw-rw---- 1 root vglusers     195,   1 Aug 17 09:55 /dev/nvidia1\ncrw-rw---- 1 root vglusers     195,   2 Aug 17 09:55 /dev/nvidia2\ncrw-rw---- 1 root vglusers     195,   3 Aug 17 09:55 /dev/nvidia3\ncrw-rw---- 1 root vglusers     195, 255 Aug 17 09:55 /dev/nvidiactl\ncrw-rw---- 1 root vglusers     195, 254 Jan 11 11:58 /dev/nvidia-modeset\ncrw-rw-rw- 1 root root         235,   0 Aug 17 09:55 /dev/nvidia-uvm\ncrw-rw-rw- 1 root root         235,   1 Aug 17 09:55 /dev/nvidia-uvm-tools\n\n/dev/nvidia-caps:\ntotal 0\ndrwxr-xr-x  2 root huangqinlong     80 Aug 17 12:15 ./\ndrwxr-xr-x 22 root root           4420 Jan 11 11:58 ../\ncr--------  1 root root         238, 1 Aug 17 12:15 nvidia-cap1\ncr--r--r--  1 root root         238, 2 Aug 17 12:15 nvidia-cap2\n")])])]),a("p",[t._v("所以我们必须将docker设置为相同的用户/组才能获得GPU设备的访问权限")])])}),[],!1,null,null,null);a.default=r.exports}}]);