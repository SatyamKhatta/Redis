const Redis = require('ioredis');
const client = new Redis(); // Default connection to localhost:6379

client.on('error', (err) => {
    console.error('Redis error:', err);
});

module.exports = client;
