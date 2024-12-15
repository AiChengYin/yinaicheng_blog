# openvpn

要在Ubuntu上安装OpenVPN，可以按照以下步骤进行：

打开终端（Ctrl+Alt+T）。

运行以下命令以更新软件包列表：

sudo apt-get update

运行以下命令以安装OpenVPN：

sudo apt-get install openvpn

安装完成后，您可以使用以下命令来检查OpenVPN的版本：

openvpn --version

配置与启动
将vpn配置文件放在任意路径下, 比如我是放在 ~/data/vpn目录下  
使用以下命令启动  
sudo openvpn --config ~/data/vpn/xxx.ovpn

之后输入用户名和密码就可以了