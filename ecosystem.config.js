module.exports = {
    apps: [
      {
        name: 'my-next-app',          // 应用的名字
        script: 'node_modules/next/dist/bin/next',  // 启动 Next.js 的脚本
        args: 'start',             // 使用 next start 启动应用
        exec_mode: 'cluster',      // 启用集群模式
        instances: 'max',          // 实例数设置为最大核心数
        max_memory_restart: '1G',  // 每个进程内存限制，超出会重启
        env: {
          NODE_ENV: 'production'  // 设置生产环境
        }
      }
    ]
  };
  