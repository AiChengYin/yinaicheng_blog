# 印爱成的博客笔记

## 部署方式

> 查看node版本
```log
node -v
v16.13.1
```

> 安装yarn
```log
npm install --global yarn
yarn install
```

> 通过yarn安装vuepress

```log
yarn global add vuepress
yarn add -D vuepress
```

> 初始化

```log
yarn init -y
```

> 启动与构建

针对 VuePress 项目的两个 npm 脚本。

"dev" 脚本用于启动开发服务器，实时预览文档；

```log
vuepress dev docs 或者yarn dev
```

"build" 脚本用于构建静态文件，以便部署到服务器或静态托管服务上。 

```log
vuepress build docs或者yarn build
```

构建完成的源代码压缩后可以上传到服务器并且解压缩，网站资源就能被外部用户访问了。

## git版本

> Git切换main分支
```
git checkout main
git fetch --all
git reset --hard origin/main
git pull
```

> 联想W541笔记本专用Git分支

```log
git checkout -b feat/yinaicheng_lenovo_w541
git push origin feat/yinaicheng_lenovo_w541:feat/yinaicheng_lenovo_w541
```

> 联想X1 Carbon笔记本专用Git分支

```log
git checkout -b feat/yinaicheng_lenovo_x1_carbon
git push origin feat/yinaicheng_lenovo_x1_carbon:feat/yinaicheng_lenovo_x1_carbon
```

> 网易台式机专用Git分支

```log
git checkout -b feat/netease_hih_d_28814
git push origin feat/netease_hih_d_28814:feat/netease_hih_d_28814
```

## jenkins（docker）构建发布

jenkis是一个整合工具，把代码从git或者其他代码托管平台拉取过来，然后通过脚本语言编写执行流程，达到了项目一键构建启动的目的。

shell脚本
```log
echo $WORKSPACE
node -v
npm -v
npm config delete registry
npm config set registry https://registry.npmmirror.com/
npm cache clean --force
npm install --global yarn
yarn config set registry https://registry.npmmirror.com/
yarn install
yarn global add vuepress
yarn add -D vuepress
yarn init -y
yarn build
```

文件存在位置可按下面的命令进行查找
```log
# 先看jenkins的数据存储目录是/www/dk_project/dk_app/dk_jenkins，再通过find命令查找
find /www/dk_project/dk_app/dk_jenkins/jenkins_home -name '404.html'
/www/dk_project/dk_app/dk_jenkins/jenkins_home/jobs/yinaicheng_blog_deployment/workspace/.site
```
