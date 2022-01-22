const { Pool } = require("pg")

const pool = new Pool({
    user: "postgres",
    password: "password",
    host: "wireguard_db",
    database: "postgres",
})

const addConfig = async (config) => {
    const res = await pool.query(`
        INSERT INTO wireguard.client (
            client_name,
            client_ip_address,
            client_allowed_ip_range,
            client_public_key,
            client_private_key)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *`,
        [config.name, config.ipAddress, config.allowedIpRange, config.publicKey, config.privateKey]);
    
    return res.rows[0];
}