# Apollo

## apollo2.1.0
> 下载安装包

wget https://github.com/apolloconfig/apollo/releases/download/v2.1.0/apollo-adminservice-2.1.0-github.zip

wget https://github.com/apolloconfig/apollo/releases/download/v2.1.0/apollo-configservice-2.1.0-github.zip

wget https://github.com/apolloconfig/apollo/releases/download/v2.1.0/apollo-portal-2.1.0-github.zip

wget https://github.com/apolloconfig/apollo/archive/refs/tags/v2.1.0.zip

> 解压缩安装包

unzip apollo-configservice-2.1.0-github.zip -d apollo-config  

unzip apollo-adminservice-2.1.0-github.zip -d apollo-admin  

unzip apollo-portal-2.1.0-github.zip -d apollo-portal  

unzip apollo-2.1.0.zip  

> 导入数据库表

进入数据库：
mysql -u root -p ***  
导入数据库  
source apolloconfigdb.sql  
source apolloportaldb.sql
连接数据库：  
* 数据库名：ApolloPortalDB，用户名：ApolloPortalDB，无密码，可后期加
* 数据库名：ApolloConfigDB，用户名：ApolloConfigDB，无密码，可后期加

> 修改config 、admin、portal数据库配置

config目录下application-github.properties文件

> 修改portal配置文件apollo-env.properties

> 最后依次启动config、admin、portal，完成部署（需要提前配置JDK环境）

找到/apollo-config/scripts下的startup.sh，启动命令：./startup.sh 
输出
```log
Tue Mar 14 13:34:06 CST 2023 ==== Starting ====
Application is running as root (UID 0). This is considered insecure.
Started [19161]
Waiting for server startup.....
Tue Mar 14 13:34:33 CST 2023 Server started in 25 seconds!
```
找到/apollo-admin/scripts下的startup.sh，启动命令：./startup.sh  
输出
```log
Tue Mar 14 13:34:59 CST 2023 ==== Starting ====
Application is running as root (UID 0). This is considered insecure.
Started [19654]
Waiting for server startup.....
Tue Mar 14 13:35:25 CST 2023 Server started in 25 seconds!
```
找到/apollo-portal/scripts下的startup.sh，启动命令：./startup.sh  
```log
Tue Mar 14 13:36:55 CST 2023 ==== Starting ====
Application is running as root (UID 0). This is considered insecure.
Started [20428]
Waiting for server startup....
Tue Mar 14 13:37:16 CST 2023 Server started in 20 seconds!
```

> 验证 :

防火墙配置规则，添加8070端口  
1. 请求地址：http://对外ip地址:8070
2. 输入用户名：apollo，密码：admin
3. 尝试新建appid及发布信息，无问题则部署成功

## apollo0.9.1

> 环境

JDK: 1.8.0_221  
Maven: 3.9.1（开发本地有即可，用于打jar包）  
MySQL: 5.7.34（远程可访问即可，用于存储apollo数据）  
apollo: 0.9.1

> 下载安装包（如果下载速度慢可以本地下载好再上传到服务器中）

wget https://github.com/ctripcorp/apollo/archive/v0.9.1.tar.gz

> 解压缩

tar zxvf apollo-0.9.1.tar.gz

> 导入数据库文件

进入数据库：
mysql -u root -p ***  
use apolloconfigdb  
导入数据库  
source apolloconfigdb.sql  

use apolloportaldb
source apolloportaldb.sql  

连接数据库：
* 数据库名：apolloconfigdb，用户名：ApolloPortalDB，无密码，可后期加
* 数据库名：apolloportaldb，用户名：ApolloConfigDB，无密码，可后期加

> 打包前的配置修改

* 修改/data/apollo/apollo-0.9.1/scripts/build.sh，把数据库账号密码修改为我们的密码以及mysql服务器地址。
* 只保留dev_meta，删除fat_meta、uat_meta、pro_meta的配置  
dev_meta=http://localhost:8080  
META_SERVERS_OPTS="-Ddev_meta=$dev_meta"

build.bat文件
```log
@echo off

rem apollo config db info
set apollo_config_db_url="xxx"
set apollo_config_db_username="xxx"
set apollo_config_db_password="xxx"

rem apollo portal db info
set apollo_portal_db_url="xxx"
set apollo_portal_db_username="xxx"
set apollo_portal_db_password="xxx"

rem meta server url, different environments should have different meta server addresses
set dev_meta="http://localhost:8080"

set META_SERVERS_OPTS=-Ddev_meta=%dev_meta%

rem =============== Please do not modify the following content =============== 
rem go to script directory
cd "%~dp0"

cd ..

rem package config-service and admin-service
echo "==== starting to build config-service and admin-service ===="

call mvn clean package -DskipTests -pl apollo-configservice,apollo-adminservice -am -Dapollo_profile=github -Dspring_datasource_url=%apollo_config_db_url% -Dspring_datasource_username=%apollo_config_db_username% -Dspring_datasource_password=%apollo_config_db_password%

echo "==== building config-service and admin-service finished ===="

echo "==== starting to build portal ===="

call mvn clean package -DskipTests -pl apollo-portal -am -Dapollo_profile=github,auth -Dspring_datasource_url=%apollo_portal_db_url% -Dspring_datasource_username=%apollo_portal_db_username% -Dspring_datasource_password=%apollo_portal_db_password% %META_SERVERS_OPTS%

echo "==== building portal finished ===="

echo "==== starting to build client ===="

call mvn clean install -DskipTests -pl apollo-client -am %META_SERVERS_OPTS%

echo "==== building client finished ===="

pause
```

build.sh文件
```log
#!/bin/sh

# apollo config db info
apollo_config_db_url=xxx
apollo_config_db_username=xxx
apollo_config_db_password=xxx

# apollo portal db info
apollo_portal_db_url=xxx
apollo_portal_db_username=xxx
apollo_portal_db_password=xxx

# meta server url, different environments should have different meta server addresses
dev_meta=http://localhost:8080

META_SERVERS_OPTS="-Ddev_meta=$dev_meta"

# =============== Please do not modify the following content =============== #
# go to script directory
cd "${0%/*}"

cd ..

# package config-service and admin-service
echo "==== starting to build config-service and admin-service ===="

mvn clean package -DskipTests -pl apollo-configservice,apollo-adminservice -am -Dapollo_profile=github -Dspring_datasource_url=$apollo_config_db_url -Dspring_datasource_username=$apollo_config_db_username -Dspring_datasource_password=$apollo_config_db_password

echo "==== building config-service and admin-service finished ===="

echo "==== starting to build portal ===="

mvn clean package -DskipTests -pl apollo-portal -am -Dapollo_profile=github,auth -Dspring_datasource_url=$apollo_portal_db_url -Dspring_datasource_username=$apollo_portal_db_username -Dspring_datasource_password=$apollo_portal_db_password $META_SERVERS_OPTS

echo "==== building portal finished ===="

echo "==== starting to build client ===="

mvn clean install -DskipTests -pl apollo-client -am $META_SERVERS_OPTS

echo "==== building client finished ===="
```

然后执行

linux执行./build.sh或者windows执行./build.bat

该脚本会依次打包apollo-configservice、apollo-adminservice,和apollo-client。

> 启动

如果是本地打包需要上传apollo-adminservice-0.9.1-SNAPSHOT-github.zip、apollo-configservice-0.9.1-SNAPSHOT-github.zip、apollo-portal-0.9.1-SNAPSHOT-github.zip到服务器

* apollo-configservice

切换到目录/apollo-0.9.1/apollo-configservice/target，解压apollo-configservice-0.9.1-SNAPSHOT-github.zip
```log
unzip apollo-configservice-0.9.1-SNAPSHOT-github.zip
```
然后执行
```log
cd scripts/
sudo -iu cloud
./startup.sh
```

* apollo-adminservice

切换到目录 /data/apollo/apollo-0.9.1/apollo-adminservice/target，解压apollo-adminservice-0.9.1-SNAPSHOT-github.zip   
```log
unzip apollo-adminservice-0.9.1-SNAPSHOT-github.zip
```
然后执行  
```log
cd scripts/
sudo -iu cloud
./startup.sh
```

* apollo-portal

apollo-portal的默认端口是8080，和apollo-configservice一致，所以如果需要在一台机器上同时启动apollo-portal和apollo-configservice的话，需要修改apollo-portal的端口。直接修改startup.sh中的SERVER_PORT即可，如SERVER_PORT=8070。
切换到目录 /data/apollo/apollo-0.9.1/apollo-portal/target，解压apollo-portal-0.9.1-SNAPSHOT-github.zip
```log
unzip apollo-portal-0.9.1-SNAPSHOT-github.zip
```
然后执行  
```log
cd scripts/
sudo -iu cloud
./startup.sh
```

> 验证 :

防火墙配置规则，添加8070端口
1. 请求地址：http://对外ip地址:8070
2. 输入用户名：apollo，密码：admin
3. 尝试新建appid及发布信息，无问题则部署成功

> 添加用户

添加用户：http://apollo地址/user-manage.html
