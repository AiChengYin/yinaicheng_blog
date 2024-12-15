# XXL-JOB

> 前提

1. 安装好JDK，需要1.8及其以上版本
2. 安装MySQL数据库，版本要求：5.6.5+
3. 安装有Maven

> 安装
1. 下载：wget https://github.com/xuxueli/xxl-job/archive/refs/tags/2.4.0.zip
2. 解压：unzip xxl-job-2.4.0.zip
3. 初始化数据库：
   将xxl-job-2.4.0/doc/db/tables_xxl_job.sql 导入 MySQL 数据库：
```log
mysql> use xxl_job
Database changed
mysql> source tables_xxl_job.sql
Query OK, 1 row affected, 1 warning (0.01 sec)
Database changed
mysql> exit;
Bye
```
4. 修改配置文件：数据库连接配置
```log
vim /xxl-job/xxl-job-2.4.0/xxl-job-admin/src/main/resources/application.properties
```

5. 部署执行器：  
到官方提供的默认执行器目录下执行命令mvn package
```log
cd /xxl-job/xxl-job-2.4.0
mvn package
```

6.  执行
```
nohup java -jar *.jar > /某目录/xxljob.log 2>&1 &
```

7. 浏览器访问

服务启动之后，可以通过浏览器访问http://ip:8080/xxl-job-admin访问管理后台，默认用户名密码：admin/123456
