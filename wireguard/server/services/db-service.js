const { Pool } = require("pg")

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    port: process.env.POSTGRES_PORT,
})

const addConfig = async (config) => {
    const res = await pool.query(`
        INSERT INTO wireguard.client (
            client_name,
            client_ip_address,
            client_allowed_ip_range,
            client_public_key,
            client_private_key,
            client_date_added)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *`,
        [config.name, config.ipAddress, config.allowedIpRange, config.publicKey, config.privateKey, config.dateAdded]);
    
    const config = res.rows[0];
    return {
        name: config.client_name,
        ipAddress: config.client_ip_address,
        allowedIpRange: config.client_allowed_ip_range,
        publicKey: config.client_public_key,
        privateKey: config.client_private_key,
        dateAdded: config.client_date_added
    }
}

module.exports.dbService = {
    addConfig
}