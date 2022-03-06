import Name from "../models/name";
import { Pool } from "pg";
import Config from "../models/config";
import WgKey from "../models/wgKey";

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  port: parseInt(process.env.POSTGRES_PORT, 10),
});

const addConfig = async (config: Config) => {
  await pool.query(`
        INSERT INTO wireguard.client (
            client_name,
            client_ip_address,
            client_allowed_ip_range,
            client_public_key,
            client_private_key,
            client_date_added)
        VALUES ($1, $2, $3, $4, $5, $6)`,
    [
      config.name.toString(),
      config.ipAddress.toString(),
      config.allowedIpRange.toString(),
      config.publicKey.toString(),
      config.privateKey.toString(),
      config.dateAdded.toString(),
    ]
  );
};

const removeConfig = async (publicKey: WgKey) => {
  await pool.query(
    `
        DELETE FROM wireguard.client
        WHERE client.client_public_key = $1
    `,
    [publicKey.toString()]
  );
};

const addUser = async (username: Name, hash: string, salt: string) => {
  await pool.query(
    `
        INSERT INTO wireguard.user (
            user_username,
            user_hash,
            user_salt)
        VALUES ($1, $2, $3)`,
    [username.toString(), hash, salt]
  );
};

const dbService = {
  addConfig,
  removeConfig,
  addUser,
};

export default dbService;
