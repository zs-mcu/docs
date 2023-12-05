---
title: '附录1、常见的实际问题'
---

## Git替换远程仓库地址
```powershell
# 查看当前的远程仓库
zs@MacBook-Pro docs % git remote -v  
origin  https://github.com/zs-mcu/docs.git (fetch)
origin  https://github.com/zs-mcu/docs.git (push)
# 删除当前端远程仓库
zs@MacBook-Pro docs % git remote add origin git@github.com:zs-mcu/zs-empty.git
# 设置分支
zs@MacBook-Pro docs % git branch -M main
# 提交指定分支到远程仓库
zs@MacBook-Pro docs % git push -u origin main
```