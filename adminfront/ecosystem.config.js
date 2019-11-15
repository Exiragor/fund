module.exports = {
  apps: [
    {
      name: 'app-fund-adminfront',
      port: 4002,
      script: 'npm start',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    },
  ]
};
