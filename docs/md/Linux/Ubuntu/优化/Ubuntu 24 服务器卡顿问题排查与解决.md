# Ubuntu 24 服务器卡顿问题排查与解决

这次排查其实非常典型：

> “1G 小内存 Ubuntu + 宝塔 + Mongo + Docker”
> 导致的复合型卡顿问题。

服务器环境大概是：

* Ubuntu 24
* 宝塔面板
* MongoDB
* Docker
* Python
* Redis
* Google Cloud Agent
* 1G RAM / 2 Core

最终问题不是单点，而是：

# 多个问题叠加导致系统长期处于“Swap抖动 + CPU尖峰”状态

---

# 一、最初现象

你最开始的问题：

```text id="v4z3j2"
服务器很卡顿，但是不知道为什么卡顿
```

表现包括：

* SSH 卡
* shell 输入延迟
* 宝塔面板卡
* Mongo 响应慢
* 偶发“像死机”
* CPU 时不时飙高

这种问题：

# 不能只看 top

因为：

```text id="p7m4ka"
等你登录上去的时候，问题已经恢复了
```

所以：

# 第一阶段：建立持续监控系统

---

# 二、第一阶段：建立 Linux 监控脚本

我们先写了：

# server_monitor.sh

核心思路：

> “卡的时候自动留下现场”

脚本持续记录：

* CPU
* load
* 内存
* swap
* vmstat
* IO
* 网络
* TOP 进程
* Mongo
* Docker
* dmesg

并且：

# 当 load 异常时自动抓详细现场

包括：

* top
* thread
* 网络连接
* 进程CPU

这是：

# 第一次关键突破

因为：

```text id="z2x6bw"
终于看到了“卡顿瞬间”
```

---

# 三、第一次定位问题

日志分析后发现：

# 真正问题并不是 Mongo

而是：

---

# 1. Ruby gem 异常任务

日志中：

```text id="t4x7pr"
ruby /usr/bin/gem outdated
CPU 96%
```

说明：

# gem 正在疯狂扫描依赖

导致：

* CPU爆满
* load飙升

---

# 2. 宝塔 btpython 高CPU

日志中：

```text id="s8w1nc"
/www/server/panel/pyenv/bin/python3
CPU 85%+
```

说明：

# 宝塔后台任务异常

可能是：

* 自动更新
* 软件商店
* pip检查
* 风险扫描

---

# 3. 机器长期处于 Swap 状态（最核心）

日志：

```text id="d6m8qa"
Mem: 958MB
Swap Used: 1175MB
```

说明：

# 系统已经长期在换页

Linux：

* 会把内存写入磁盘
* 导致整个系统“像冻结”

这是：

# Ubuntu 卡顿的真正核心原因

---

# 四、为什么会卡？

这里是关键原理。

你的机器：

```text id="j9p2lt"
1G RAM
```

但同时跑：

* MongoDB
* Redis
* Docker
* 宝塔
* Python
* Google Agent

实际上：

# 内存根本不够

导致：

---

# 1. Mongo cache 占内存

Mongo 默认：

```text id="m5q8fa"
会尽量吃内存做 cache
```

1G机器非常危险。

---

# 2. Linux 开始 swap

当内存不足：

Linux 会：

```text id="v1r7yo"
把内存页换到磁盘
```

导致：

* shell卡
* SSH卡
* Mongo卡
* 整机卡

---

# 3. 宝塔后台任务瞬间打满 CPU

本来内存就不够。

结果：

```text id="r4c8ny"
btpython + gem
```

再爆 CPU。

于是：

# 机器彻底进入“假死状态”

---

# 五、第二阶段：系统优化

开始进行针对性优化。

---

# 1. 干掉 gem 异常任务

执行：

```bash id="x4k9va"
pkill -f "gem outdated"
pkill -f "gem update"
```

并检查：

```bash id="p2w8cs"
crontab -l
```

删除相关自动任务。

---

# 效果

CPU 尖峰明显下降。

---

# 2. 禁用 Google Cloud Ops Agent

发现：

```text id="h6z1pe"
google-cloud-ops-agent
```

对 1G 小机器来说太重。

执行：

```bash id="k7q4dn"
systemctl stop google-cloud-ops-agent
systemctl disable google-cloud-ops-agent
```

---

# 效果

减少：

* 内存占用
* 后台扫描
* 日志收集

---

# 3. 优化 swappiness

执行：

```bash id="g3t9yb"
sysctl vm.swappiness=10
```

作用：

# 降低 Linux 使用 swap 的积极性

默认 Ubuntu：

```text id="u8x5rm"
60
```

太容易 swap。

改成：

```text id="f5q7wa"
10
```

后：

* 系统更愿意用内存
* 卡顿明显减少

---

# 4. MongoDB 内存限制（关键优化）

发现：

```text id="r7m2ko"
Mongo cache 太大
```

修改：

```yaml id="t3p9lu"
storage:
  wiredTiger:
    engineConfig:
      cacheSizeGB: 0.25
```

后面进一步改成：

```yaml id="m9c4ax"
0.15
```

适配：

```text id="d4v8pk"
1G RAM 小机器
```

---

# 效果

Mongo：

* 不再疯狂抢内存
* swap下降
* 系统稳定很多

---

# 六、第三阶段：发现“错误优化”

后来日志又发现：

```text id="n8w3fj"
drop_caches
```

频繁执行。

原本以为：

```text id="z5t2ry"
清缓存 = 提升性能
```

但实际上：

# 这是错误操作

因为 Linux cache：

# 本来就是性能优化

频繁：

```bash id="y7k1qs"
echo 3 > /proc/sys/vm/drop_caches
```

会导致：

* Mongo cache失效
* 文件缓存失效
* IO增加
* 反而更卡

---

# 所以进行了修复

删除：

```bash id="v3r8my"
drop_caches
```

相关逻辑。

这是：

# 第二次关键突破

---

# 七、第四阶段：优化监控系统本身

后来发现：

原来的监控：

```text id="c2m7qx"
15秒采样一次
```

对于：

```text id="k8w4vn"
1G机器
```

太重。

于是：

---

# 1. 改成 60 秒采样

减少：

* CPU占用
* IO
* top调用

---

# 2. 不再 while true 常驻

改成：

# systemd + cron

这是：

# 生产环境标准方案

避免：

* shell泄漏
* monitor自身变负担

---

# 3. 自动日志清理

否则：

```text id="g5n2rt"
日志越来越大
```

最终：

* 磁盘爆炸
* IO升高

---

# 八、最终形成的稳定方案

最终形成：

# server_guard 系统

目录：

```text id="p9m6cw"
/root/server_guard/
```

包括：

* optimize.sh
* monitor.sh
* logs/
* reports/
* health/

---

# 核心能力

## monitor.sh

负责：

* 系统监控
* 自动抓异常
* 记录现场

---

## optimize.sh

每小时自动执行：

* kill gem
* kill BT-Task
* 清 zombie
* rotate logs
* Mongo优化

---

## systemd

负责：

* 守护 monitor
* 自动重启

---

## cron

负责：

* 每小时优化

---

# 九、最终效果

优化后日志显示：

---

# 1. CPU idle 恢复正常

之前：

```text id="b3v7yn"
CPU 90%+
```

现在：

```text id="t8m2lf"
idle 90%+
```

---

# 2. load 恢复正常

之前：

```text id="f6k1qa"
load 20+
```

现在：

```text id="w4c9zp"
load < 1
```

---

# 3. swap 明显下降

之前：

```text id="m2v8cx"
1175MB
```

后面：

```text id="z7r4ny"
680MB
```

虽然还高。

但已经明显改善。

---

# 4. Mongo 健康

现在：

```text id="d9q3wp"
mongod CPU 2%~9%
```

说明：

# Mongo 优化成功

---

# 十、最终结论（最关键）

# Ubuntu 24 卡顿的真正根因

不是：

* Ubuntu 本身
* Mongo 本身
* Docker 本身

而是：

# “1G 小内存机器承载了超出能力范围的服务”

最终导致：

```text id="k4x7mu"
Swap抖动 + 后台任务CPU尖峰
```

这是：

# Linux 小内存服务器最典型的问题

---

# 十一、最有效的真正解决方案

虽然进行了大量优化。

但：

# 最终最有效的方案仍然是：

## 升级内存

从：

```text id="y6p1qc"
1G
```

升级到：

```text id="q2w8mz"
2G
```

甚至：

```text id="a7r5tn"
4G
```

效果会：

# 远超所有软件优化

因为：

* swap会大幅减少
* Mongo cache正常
* Docker稳定
* 宝塔稳定
* SSH丝滑

---

# 十二、这次排查的核心经验

# Linux 卡顿排查最重要的不是：

```text id="h9x4kr"
看当前状态
```

而是：

# “记录卡顿瞬间”

因为：

```text id="s5n8vy"
大部分问题都是瞬时的
```

真正有效的方法：

# 持续监控 + 异常自动抓现场

这也是：

# 生产环境真正的排障思路。
