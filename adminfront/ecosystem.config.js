module.exports = {
  apps: [
    {
      name: 'app-fund-adminfront',
      port: 4002,
      script: 'npm start',
      env: {
        NODE_ENV: 'production',
        API_URL: 'http://xn--80aap3adkp6cxd.xn--p1ai/server'
      },
      env_production: {
        NODE_ENV: 'production',
        API_URL: 'http://xn--80aap3adkp6cxd.xn--p1ai/server'
      }
    },
  ]
};
