const express = require('express');
const swaggerUi = require('swagger-ui-express');
const openApiDocumentation = require('../../controllers/docs/v1/documentation');

const timezoneController = require('../../controllers/apis/timezone');

let router = express.Router();

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));
router.use('/timezone', timezoneController);

module.exports = router;