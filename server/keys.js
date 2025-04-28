module.exports = {
    redisHost: process.env.REDIS_HOST || 'localhost',
    redisPort: process.env.REDIS_PORT || 6379,
    pgUser: process.env.PGUSER || 'postgres',
    pgHost: process.env.PGHOST || 'localhost',
    pgDatabase: process.env.PGDATABASE || 'postgres',
    pgPassword: process.env.PGPASSWORD || 'postgres',
    pgPort: process.env.PGPORT || 5432
}