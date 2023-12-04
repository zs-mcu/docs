#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn docs:build
cd ../animating-resume
yarn build
cd -
cp -r ../animating-resume/public/ docs/.vuepress/dist/resume

# Mac下的sed命令需要添加 “” 空字符串
sed -i '' 's/\/static/\.\/static/g' docs/.vuepress/dist/resume/index.html

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'docs.xiaoshaozi.site' > CNAME
git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
# 如果想修改 cname 就必须使用ssh推送了
git push -f git@github.com:zs-mcu/docs.git master:gh-pages

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# 第一次发布的时候使用
# git push -f https://github.com/zs-mcu/docs.git master:gh-pages
cd -