# Maven安装

## 安装环境
* 系统：CentOS 7.3
* JDK版本：JDK1.8

## 下载Maven归档
```text
wget https://dlcdn.apache.org/maven/maven-3/3.9.1/binaries/apache-maven-3.9.1-bin.tar.gz
```

## 安装
```text
tar -xzvf apache-maven-3.9.1-bin.tar.gz
```

## 配置环境变量
```text
vim /etc/profile

export PATH=/data/software/maven/apache-maven-3.9.1/bin:$PATH

source /etc/profile
```

## 查看maven版本
```text
mvn -v
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

## 本机正确使用Maven Archetype

1. 进入模板项目根目录，执行命令
```log
mvn archetype:create-from-project
```
然后项目根目录会生成target文件夹

2. 找到target文件夹下archetype-resources根目录下的pom文件，会发现缺少module信息，需要补上

示例如下：
```log
<modules>
    <module>${rootArtifactId}-xxx</module>
</modules>
```
父POM依赖引用的每个module都需要修改，特别注意groupId和artifactId按照参数配置的方式来修改，不能写死。

3. 修改完成之后，进入target/generated-sources/archetype目录，执行命令

```log
mvn install
```

此时\.m2\repository仓库下archetype-catalog.xml文件多了以下内容
```xml
<?xml version="1.0" encoding="UTF-8"?>
<archetype-catalog xsi:schemaLocation="http://maven.apache.org/plugins/maven-archetype-plugin/archetype-catalog/1.0.0 http://maven.apache.org/xsd/archetype-catalog-1.0.0.xsd"
    xmlns="http://maven.apache.org/plugins/maven-archetype-plugin/archetype-catalog/1.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <archetypes>
    <archetype>
      <groupId>top.yinaicheng</groupId>
      <artifactId>trade-archetype</artifactId>
      <version>0.0.1-SNAPSHOT</version>
    </archetype>
  </archetypes>
</archetype-catalog>

```

4. 本机使用该模板项目，进入想要保存项目的路径，需要执行以下命令

```log
mvn archetype:generate -DarchetypeCatalog=local -DgroupId=xxx -DartifactId=xxx -Dversion=xxx
# 例如
mvn archetype:generate -DarchetypeCatalog=local -DgroupId=top.yinaicheng -DartifactId=test -Dversion=1.0
```
这样新项目就创建成功了