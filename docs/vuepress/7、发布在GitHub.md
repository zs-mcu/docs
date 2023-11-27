

在你的项目中，创建一个如下的 deploy.sh 文件（请自行判断去掉高亮行的注释）:

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

![image-20231123134557582](/vuepress/image-20231123134557582.png)

![image-20231123134612933](/vuepress/image-20231123134612933.png)

![image-20231123134649477](/vuepress/image-20231123134649477.png)