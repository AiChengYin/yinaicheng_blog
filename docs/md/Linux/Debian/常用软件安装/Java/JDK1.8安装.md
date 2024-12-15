# JDK1.8安装

> 安装前先卸载系统已有JDK

要在Debian系统上卸载JDK，可以按照以下步骤操作：

打开终端或命令行界面并且以管理员身份登录。

运行以下命令以查看系统上已安装的JDK版本：sudo update-alternatives --config java

选择要卸载的JDK版本并记下其路径。

运行以下命令以卸载JDK：sudo apt-get remove --purge <jdk-package-name>

将<jdk-package-name>替换为您要卸载的JDK软件包名称。

运行以下命令以删除JDK相关的配置文件：sudo apt-get autoremove

运行以下命令以删除JDK相关的依赖项：sudo apt-get autoclean

这样就已成功卸载JDK。

> 安装JDK1.8

以下是在Debian系统上安装Oracle JDK 1.8的步骤：

前往Oracle JDK 1.8下载页面下载Linux x64版本的tar.gz文件。

打开终端并转到下载的文件所在的目录。

解压缩tar.gz文件：

tar -zxvf jdk-8uXXX-linux-x64.tar.gz (其中XXX是版本号)

将解压缩的文件夹移动到/usr/lib/jvm目录下：

```log
sudo mv jdk1.8.XXX /usr/lib/jvm/  
sudo mv jdk1.8.XXX jdk1.8
```


运行以下命令配置Java环境变量： 

```log
sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/jdk1.8/bin/java 1
sudo update-alternatives --install /usr/bin/javac javac /usr/lib/jvm/jdk1.8/bin/javac 1
sudo update-alternatives --install /usr/bin/jar jar /usr/lib/jvm/jdk1.8/bin/jar 1
```

使用以下命令选择Java版本并检查是否正确安装：

```log
sudo update-alternatives --config java
java -version
```

如果一切正常，应该会显示Java版本信息。

```log
root@VM-0-8-debian:/yinaicheng/data/software/jdk# java -version
java version "1.8.0_221"
Java(TM) SE Runtime Environment (build 1.8.0_221-b11)
Java HotSpot(TM) 64-Bit Server VM (build 25.221-b11, mixed mode)

```

注意：在安装Oracle JDK之前，请确保您已经卸载了OpenJDK。

