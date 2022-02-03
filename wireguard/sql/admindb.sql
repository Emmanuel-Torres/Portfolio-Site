DROP TABLE IF EXISTS wireguard.client;

DROP SCHEMA IF EXISTS wireguard;
CREATE SCHEMA IF NOT EXISTS wireguard;

CREATE TABLE IF NOT EXISTS wireguard.client (
    client_id SERIAL PRIMARY KEY,
    client_name VARCHAR(80) NOT NULL,
    client_ip_address VARCHAR(80) NOT NULL,
    client_allowed_ip_range VARCHAR(80) NOT NULL,
    client_public_key TEXT NOT NULL,
    client_private_key TEXT NOT NULL,
    client_date_added TIMESTAMP NOT NULL
);