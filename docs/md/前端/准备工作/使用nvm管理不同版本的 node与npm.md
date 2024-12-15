# 使用nvm管理不同版本的node与npm

不同的前端工程，可能需要依赖不同的NodeJS运行环境，使用nvm可以实现管理不同版本的node与npm。

这里通过nvm-windows做演示。

## 卸载全局安装的node/npm

在安装nvm之前，先把自己之前安装的NodeJS卸载掉（通过控制面板\程序\程序和功能的卸载程序进行卸载），避免与nvm起冲突。

卸载完成后，使用清理软件清理下注册表。

## windows下安装nvm

下载好nvm-setup.exe安装包，直接双击安装。

## 使用nvm

> 执行完成后，通过nvm -v命令可以查看是否安装成功

输入
```log
 nvm -v
```

输出
```log
Running version 1.1.9.

Usage:

  nvm arch                     : Show if node is running in 32 or 64 bit mode.
  nvm current                  : Display active version.
  nvm install <version> [arch] : The version can be a specific version, "latest" for the latest current version, or "lts" for the
                                 most recent LTS version. Optionally specify whether to install the 32 or 64 bit version (defaults
                                 to system arch). Set [arch] to "all" to install 32 AND 64 bit versions.
                                 Add --insecure to the end of this command to bypass SSL validation of the remote download server.
  nvm list [available]         : List the node.js installations. Type "available" at the end to see what can be installed. Aliased as ls.
  nvm on                       : Enable node.js version management.
  nvm off                      : Disable node.js version management.
  nvm proxy [url]              : Set a proxy to use for downloads. Leave [url] blank to see the current proxy.
                                 Set [url] to "none" to remove the proxy.
  nvm node_mirror [url]        : Set the node mirror. Defaults to https://nodejs.org/dist/. Leave [url] blank to use default url.
  nvm npm_mirror [url]         : Set the npm mirror. Defaults to https://github.com/npm/cli/archive/. Leave [url] blank to default url.
  nvm uninstall <version>      : The version must be a specific version.
  nvm use [version] [arch]     : Switch to use the specified version. Optionally use "latest", "lts", or "newest".
                                 "newest" is the latest installed version. Optionally specify 32/64bit architecture.
                                 nvm use <arch> will continue using the selected version, but switch to 32/64 bit mode.
  nvm root [path]              : Set the directory where nvm should store different versions of node.js.
                                 If <path> is not set, the current root will be displayed.
  nvm version                  : Displays the current running version of nvm for Windows. Aliased as v.
```

> 列出远程服务器上所有的可用版本

输入
```log
nvm ls available
```

输出
```log
|   CURRENT    |     LTS      |  OLD STABLE  | OLD UNSTABLE |
|--------------|--------------|--------------|--------------|
|    18.9.0    |   16.17.0    |   0.12.18    |   0.11.16    |
|    18.8.0    |   16.16.0    |   0.12.17    |   0.11.15    |
|    18.7.0    |   16.15.1    |   0.12.16    |   0.11.14    |
|    18.6.0    |   16.15.0    |   0.12.15    |   0.11.13    |
|    18.5.0    |   16.14.2    |   0.12.14    |   0.11.12    |
|    18.4.0    |   16.14.1    |   0.12.13    |   0.11.11    |
|    18.3.0    |   16.14.0    |   0.12.12    |   0.11.10    |
|    18.2.0    |   16.13.2    |   0.12.11    |    0.11.9    |
|    18.1.0    |   16.13.1    |   0.12.10    |    0.11.8    |
|    18.0.0    |   16.13.0    |    0.12.9    |    0.11.7    |
|    17.9.1    |   14.20.0    |    0.12.8    |    0.11.6    |
|    17.9.0    |   14.19.3    |    0.12.7    |    0.11.5    |
|    17.8.0    |   14.19.2    |    0.12.6    |    0.11.4    |
|    17.7.2    |   14.19.1    |    0.12.5    |    0.11.3    |
|    17.7.1    |   14.19.0    |    0.12.4    |    0.11.2    |
|    17.7.0    |   14.18.3    |    0.12.3    |    0.11.1    |
|    17.6.0    |   14.18.2    |    0.12.2    |    0.11.0    |
|    17.5.0    |   14.18.1    |    0.12.1    |    0.9.12    |
|    17.4.0    |   14.18.0    |    0.12.0    |    0.9.11    |
|    17.3.1    |   14.17.6    |   0.10.48    |    0.9.10    |

This is a partial list. For a complete list, visit https://nodejs.org/en/download/releases
```

> 安装指定的Node版本

输入
```log
nvm install 8.17.0
```
输出
```log
Downloading node.js version 8.17.0 (64-bit)...
Complete
Creating C:\software\nvm\temp

Downloading npm version 6.13.4... Complete
Installing npm v6.13.4...

Installation complete. If you want to use this version, type

nvm use 8.17.0
```
> 使用指定的Node版本

需要使用管理员身份打开cmd命令行工具，否则可能会有乱码无法指定Node版本的问题。

执行
```log
nvm use 8.17.0
```

输出
```log
Now using node v8.17.0 (64-bit)
```

执行
```log
node -v
```

输出
```log
v8.17.0
```

执行
```log
npm -v
```

输出
```log
6.13.4
```