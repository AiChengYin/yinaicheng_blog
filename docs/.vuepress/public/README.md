# GitHub Pages 部署说明

本项目已配置为自动部署到 GitHub Pages。

## 配置说明

1. VuePress 配置中的 `base` 已设置为 `/yinaicheng_blog/`（对应仓库名称）
2. 添加了 GitHub Actions 工流文件 `.github/workflows/deploy.yml`
3. package.json 中添加了 `homepage` 字段

## 部署步骤

1. 确保你的 GitHub 仓库名称是 `yinaicheng_blog`
2. 将代码推送到 `main` 分支
3. GitHub Actions 会自动构建并部署到 `gh-pages` 分支
4. 在仓库设置中启用 GitHub Pages，选择 `gh-pages` 分支作为源

## 访问地址

部署完成后，可以通过以下地址访问：
https://aichengyin.github.io/yinaicheng_blog/

## 本地开发

```bash
# 安装依赖
yarn install

# 启动开发服务器
yarn dev

# 构建静态文件
yarn build
```