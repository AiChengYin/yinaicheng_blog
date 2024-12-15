# Nacos

> 特点

Nacos是一个更易于构建云原生应用的动态服务发现、配置管理和服务管理平台。  
Nacos 致力于帮助您发现、配置和管理微服务。  
Nacos 提供了一组简单易用的特性集，帮助您快速实现动态服务发现、服务配置、服务元数据及流量管理。

> 前提

1. 安装好JDK，需要1.8及其以上版本
2. 安装数据库，版本要求：5.6.5+

> 安装流程

1. 下载nacos：  
wget https://github.com/alibaba/nacos/releases/download/1.4.0/nacos-server-1.4.0.tar.gz

2. 解压：
   tar -zxvf nacos-server-1.4.0.tar.gz 

3. 修改配置文件的数据库连接，修改为自己实际的数据库连接
```log
cd /nacos/conf
vim application.properties
```

```properties
spring.datasource.platform=mysql
db.num=1
db.url.0=jdbc:mysql://127.0.0.1:3306/nacos?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=UTC
db.user=nacos
db.password=******
```

4. 在数据库中刷入/nacos/conf目录下的nacos-mysql.sql数据库脚本

```log
mysql> use nacos
Database changed
mysql> source nacos-mysql.sql
Query OK, 0 rows affected (0.21 sec)
mysql> exit;
Bye
```

5. 启动
```log
cd /nacos/bin
sh startup.sh -m standalone
```

6. 防火墙添加端口8848

7. 浏览器访问
服务启动之后，可以通过浏览器访问http://ip:8848/nacos访问管理后台，默认用户名密码：nacos/nacos
