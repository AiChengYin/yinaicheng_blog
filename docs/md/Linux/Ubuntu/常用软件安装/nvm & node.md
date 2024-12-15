# nvm & node

## 安装nvm

打开终端，输入以下命令，下载nvm的安装脚本：

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.3/install.sh | bash  
或者  
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.35.3/install.sh | bash

安装完成后，重新打开终端，输入以下命令激活nvm：

source ~/.nvm/nvm.sh

输入以下命令查看可安装的node版本：

nvm ls-remote

选择一个要安装的版本，输入以下命令安装：

nvm install 版本号

例如，安装最新版的node：

nvm install node

安装某个node版本

nvm install 8.9.3

安装完成后，输入以下命令查看已安装的node版本：

nvm ls

输入以下命令切换使用的node版本：

nvm use 版本号

例如，切换到最新版的node（需要使用管理员权限运行）：

nvm use node

输入以下命令查看当前使用的node版本：

node -v

安装node：

如果不需要管理多个node版本，也可以直接安装node：

打开终端，输入以下命令安装node：

sudo apt-get update
sudo apt-get install nodejs

安装完成后，输入以下命令查看node版本：

node -v

安装npm（node的包管理工具）：

sudo apt-get install npm

输入以下命令查看npm版本：

npm -v

## npm install失败处理

如果npm install失败，可以尝试以下方法：

检查网络连接是否正常，如果网络连接不稳定或者断开，会导致npm install失败。

检查npm源是否正确，可以使用npm config get registry命令查看当前npm源。如果npm源不正确，可以使用npm config set registry命令切换到其他源。

清除npm cache，使用npm cache clean --force命令清除缓存，然后重新执行npm install命令。

更新npm版本，使用npm install -g npm命令更新npm版本到最新版本。

如果还是无法解决问题，可以尝试切换到其他npm源或者使用淘宝npm镜像安装依赖。

## npm安装pm2

要在本地计算机安装pm2，您可以使用以下命令：

npm install pm2 -g

这将全局安装pm2，并将其添加到您的系统路径中，从而可以在任何地方使用该命令。