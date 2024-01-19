## docker默认存储目录

当你在使用 Docker 时，如果 /var/lib/docker 目录的空间不足，可能会导致一些问题，如无法创建新的容器或无法下载镜像等。为了解决这个问题，你可以采取以下几个步骤：

- 清理无用的镜像和容器：
  使用 `docker system prune` 命令可以清理掉未使用的镜像、停止的容器和无用的网络等资源。这将释放一些磁盘空间。

- 移动 Docker 数据目录：
  如果你的 `/var/lib/docker` 目录所在的分区空间非常有限，你可以考虑将 Docker 的数据目录迁移到另一个具有足够空间的分区上。
  首先，停止 Docker 服务：`systemctl stop docker`。
  然后，将 `/var/lib/docker` 目录下的所有内容复制到新的目录中（例如 `/new/docker`）。
  接下来，在 `/etc/docker/daemon.json` 文件中添加以下配置项：

  ```json
  vim /etc/docker/daemon.json
  {
    "data-root":"/new/docker"
  }
  ```

  保存并退出文件，然后启动 Docker 服务：`systemctl start docker`。这样 Docker 将使用新的数据目录来存储镜像、容器等数据。

- 调整 Docker 镜像存储位置：
  Docker 默认将镜像存储在 `/var/lib/docker` 目录下的 `overlay2` 文件夹中。
  你可以修改 Docker 配置，将镜像存储到具有更多空间的位置。
  首先，停止 Docker 服务：`systemctl stop docker`。然后，编辑 `/etc/docker/daemon.json` 文件，在其中添加以下配置项：

  ```json
  vim /etc/docker/daemon.json
  { 
      "graph": "/new/image/storage/path" 
  } 
  ```

  将 `/new/image/storage/path` 替换为一个具有足够空间的目录路径。
  保存并退出文件，然后启动 Docker 服务：`systemctl start docker`。

这些方法都可以帮助你解决 `/var/lib/docker` 空间不足的问题，并确保 Docker 的正常运行。记得在操作前备份重要的数据，以免丢失。