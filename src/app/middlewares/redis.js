const cache = require('express-redis-cache')

cache = cache({
    prefix: 'redis-test',
    host: 'redis',
    port: 6379
});
