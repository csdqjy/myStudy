

## 环境变量  process
Node.js 的 process 核心模块提供了 env 属性，该属性承载了在启动进程时设置的所有环境变量。

这是访问 NODE_ENV 环境变量的示例，该环境变量默认情况下被设置为 development。
```javascript
process.env.NODE_ENV // "development"
```
在脚本运行之前将其设置为 "production"，则可告诉 Node.js 这是生产环境。

## process.cwd()
process.cwd() 是当前执行node命令时候的文件夹地址 —-—工作目录，保证了文件在不同的目录下执行时，路径始终不变;
__dirname 是被执行的js 文件的地址 ——文件所在目录