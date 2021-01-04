var TimeZone = {
    type: 'object',
    properties: {
        time: {
            type: 'string',
            description: 'Time of Timezone'
        },
        timezone: {
            type: 'string',
            description: 'Number of Timezone'
        }
    }
};

module.exports.timezones = {
    post: {
        tags: ['CRUD Timezone'],
        description: 'Get UTC',
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: TimeZone
                }
            },
            required: true
        },
        responses: {
            '200': {
                description: 'Get UTC Successfully'
            },
            '422': {
                description: 'Missing Parameters',
                content: {
                    'application/json': {
                        example: {
                            message: 'Field is required',
                            internal_code: 'REQUIRED_FIELD_MISSING'
                        }
                    }
                }
            }
        }
    }
};

module.exports.timezone = TimeZone;