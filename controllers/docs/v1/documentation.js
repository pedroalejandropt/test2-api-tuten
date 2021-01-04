const { timezone, timezones } = require('./uris/time');

module.exports = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'API-Test2',
    description: '',
    contact: {
      name: 'Pedro Pacheco',
      email: 'pedro.alejandro.pt@gmail.com',
    }
  },
  servers: [
    {
      url: 'http://localhost:3000/api/v1',
      description: 'Local server'
    }
  ],
  security: [
    {
      ApiKeyAuth: []
    }
  ],
  tags: [],
  paths: {
    '/timezone': timezones
  },
  components: {
    schemas: {
      Time: timezone
    },
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'x-api-key'
      }
    }
  }
};