# Docker安装

安装Docker需要以下步骤：

确认系统版本是否为Ubuntu 64位版本，并且系统内核版本不低于3.10。

更新系统软件包列表：

sudo apt-get update

安装Docker的依赖包：

sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release

添加Docker官方GPG密钥：

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

添加Docker官方软件包库：

echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

更新系统软件包列表：

sudo apt-get update

安装Docker：

sudo apt-get install docker-ce docker-ce-cli containerd.io

确认Docker是否安装成功：

sudo docker run hello-world

如果安装成功，将看到以下输出：

Hello from Docker!
This message shows that your installation appears to be working correctly.
...

## docker-componse安装

Docker Compose是Docker官方推出的一个用于定义和运行多容器Docker应用的工具。它可以简化Docker应用的部署和管理，让开发人员可以更加专注于业务逻辑的开发，而不是繁琐的配置和管理工作。


以下是在Linux系统下安装Docker Compose的步骤：



下载Docker Compose的二进制文件：


sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

这里使用的是Docker Compose的1.29.2版本，如果有更新的版本可以在官方的GitHub仓库中查看。



授权二进制文件：


sudo chmod +x /usr/local/bin/docker-compose


验证是否安装成功：


docker-compose --version

如果输出了Docker Compose的版本信息，说明安装成功。


注意事项：



如果在安装过程中出现了权限问题，可以使用sudo命令或者切换到root用户进行操作。


在安装之前需要确保已经安装了Docker引擎。


如果需要卸载Docker Compose，只需要删除/usr/local/bin/docker-compose这个文件即可。