export default {
    css: ['~/node_modules/bootstrap/dist/css/bootstrap.min.css'],
    script: ['~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'],
    modules: [
      '@nuxtjs/axios'
    ],
  
    axios: {
      proxy: true
    },
  
    proxy: {
      '/message': process.env.BASE_URL || 'http://localhost:8080',
    }
  }
  