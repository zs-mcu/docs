#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

now=$(date +'%Y%m%d%H%M%S')

# 生成静态文件
echo "开始备份静态文件仓库信息"
mv ./zsdist/dist ./zsdist/bakdist-$now


# 生成静态文件
echo "开始打包静态文件"
yarn docs:build

# 进入生成的文件夹
echo "开始还原仓库信息"
#cp -r zsdist/bakdist-$now/.git zsdist/dist/
mv zsdist/bakdist-$now/.git zsdist/dist/
#rm -rf zsdist/bakdist

echo "进入发布文件夹"
cd zsdist/dist

# 如果是发布到自定义域名
echo "开始推送"
echo 'docs.xiaoshaozi.site' > CNAME
git add .
git commit -m 'deploy'

git push -u

echo "开始清除备份文件夹"
cd -
rm -rf ./zsdist/bakdist-$now