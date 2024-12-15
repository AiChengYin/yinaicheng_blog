# Zookeeper用于实现配置中心

## Zookeeper单机版安装

* 注意要点
  * 示例安装环境系统：Centos 7.3
  * Zookeeper是Java开发的，需要先安装JDK，建议JDK1.8
  * Zookeeper最好配置环境变量

* 下载Zookeeper存档到指定位置
```text
wget -P /data/software/zookeeper http://archive.apache.org/dist/zookeeper/zookeeper-3.4.13/zookeeper-3.4.13.tar.gz
```

* 解压Zookeeper存档
```text
cd /data/software/zookeeper 
tar -zxvf zookeeper-3.4.13.tar.gz -C /data/software/zookeeper
```

* 解压后的conf目录，增加配置文件zoo.cfg
```text
cd /data/software/zookeeper/zookeeper-3.4.13/conf
cp zoo_sample.cfg zoo.cfg
```

* 启动服务端
```text
cd /data/software/zookeeper/zookeeper-3.4.13/bin
nohup ./zkServer.sh start >> /data/software/zookeeper/zookeeper-3.4.13/log/zookeeper.file 2>&1 &

参数说明：
1. nohup：表示所属终端关闭后，进程不会死掉
2. >>：/data/software/zookeeper/zookeeper-3.4.13/log/zookeeper.file 日志输出到zookeeper.file文件
3. 2>&1：标准出错重定向到标准输出，也输出到zookeeper.file文件
4. &：表示是后台任务
```

* 启动客户端
```text
cd /data/software/zookeeper/zookeeper-3.4.13/bin
nohup ./zkCli.sh -server 127.0.0.1:2181 >> /data/software/zookeeper/zookeeper-3.4.13/log/zookeeper.file 2>&1 &

参数说明：
1. nohup：表示所属终端关闭后，进程不会死掉
2. >>：/data/software/zookeeper/zookeeper-3.4.13/log/zookeeper.file 日志输出到zookeeper.file文件
3. 2>&1：标准出错重定向到标准输出，也输出到zookeeper.file文件
4. &：表示是后台任务
```

* 查看Zookeeper服务端启动情况
```text
ps -aux | grep 'zookeeper'
```

* 外部访问需要防火墙放行2181端口

## zkui安装

### 简介
它提供了一个管理页面，可以针对Zookeeper的节点值进行CRUD操作，同时也提供了安全认证，装一个UI界面，就不用敲zookeeper命令了

### 注意要点
* 需要安装Java、Maven

### 下载源码压缩包，上传到Linux服务器
```text
下载链接：https://codeload.github.com/DeemOpen/zkui/zip/refs/heads/master
得到zkui-master.zip压缩包
```

### 编译zkui
```text
unzip zkui-master.zip
cd zkui-master
mvn clean install
mv config.cfg target/zkui-2.0-SNAPSHOT-jar-with-dependencies.jar /data/software/zkui/
```

### 启动
```text
nohup java -jar zkui-2.0-SNAPSHOT-jar-with-dependencies.jar &
```

### 访问
```text
默认端口号是9090
zkui访问地址：http://外网ip:9090/login
用户名默认：admin
密码默认：manager
用户名和密码可以在配置文件config.cfg中更改
```







































