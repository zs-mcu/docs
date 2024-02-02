# node--卸载

如果你的系统已经安装了node，请先卸载它。我的系统已经通过Homebrew安装了node。所以先把它卸载了。如果还没有安装就跳过。

```bash
brew uninstall --ignore-dependencies node 
brew uninstall --force node 
```

> 方式二：自己卸载自己

查看nodejs版本：

```bash
node -v
```

nodejs npm卸载：

```bash
sudo npm uninstall npm -g
sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /var/db/receipts/org.nodejs.*
sudo rm -rf /usr/local/include/node /Users/$USER/.npm
sudo rm /usr/local/bin/node
sudo rm /usr/local/share/man/man1/node.1
sudo rm /usr/local/lib/dtrace/node.d
```

验证是否删除成功：  
执行下面命令，查找不到，证明删除成功。

```bash
node -v
// -bash: /usr/local/bin/node: No such file or directory
npm -v
// -bash: /usr/local/bin/npm: No such file or directory
```

