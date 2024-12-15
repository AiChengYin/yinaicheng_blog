# Maven安装

> 卸载Maven

在Debian中卸载Maven，可以使用以下命令：

首先，使用以下命令停止maven服务和其它相关进程：

sudo systemctl stop maven

然后，使用以下命令卸载Maven：

sudo apt-get remove maven

最后，使用以下命令删除Maven的配置和依赖项：

sudo apt-get purge maven

请注意，以上命令将卸载Maven及其所有相关组件和配置。如果您只想删除Maven的配置和依赖项，可以跳过第二步，并直接执行第三步。

> 安装Maven

在Debian系统上安装Maven，可以按照以下步骤进行：

打开终端并使用root权限登录系统。

输入以下命令，更新系统软件包列表：

apt-get update


安装Maven软件包，输入以下命令：

apt-get install maven


等待Maven软件包安装完成后，输入以下命令，检查Maven版本：

mvn -version

安装完成后，可以使用Maven构建项目。

```log
root@VM-0-8-debian:/yinaicheng/data/software/jdk# mvn -version
Apache Maven 3.6.3
Maven home: /usr/share/maven
Java version: 11.0.18, vendor: Debian, runtime: /usr/lib/jvm/java-11-openjdk-amd64
Default locale: en_US, platform encoding: UTF-8
OS name: "linux", version: "5.10.0-19-amd64", arch: "amd64", family: "unix"
```

## 更换/新增maven镜像源


要将Maven的镜像源设置为国内镜像源，请按照以下步骤进行操作：

1. 打开Maven的配置文件settings.xml，该文件通常位于用户目录下的.m2文件夹中。

2. 在文件中找到<mirrors>标签，如果没有则创建一个。

3. 在<mirrors>标签内添加一个<mirror>标签，，<name>为国内镜像源名称（可自定义），<url>为国内镜像源地址，例如：

```xml
<mirror>
    <id>alimaven</id>
    <mirrorOf>central</mirrorOf>
    <name>aliyun maven</name>
    <url>http://maven.aliyun.com/nexus/content/repositories/central/</url>
</mirror>
```

4.保存配置文件并重新运行Maven命令即可使用国内镜像源。