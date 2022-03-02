DROP TABLE IF EXISTS wireguard.client;
DROP TABLE IF EXISTS wireguard.user;

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

CREATE TABLE IF NOT EXISTS wireguard.user (
    user_id SERIAL PRIMARY KEY,
    user_username VARCHAR(80) UNIQUE NOT NULL,
    user_hash TEXT NOT NULL,
    user_salt TEXT NOT NULL
);

CREATE ROLE wg_admin LOGIN PASSWORD 'Steadfast-Plant-Coastland-Parish-Duller-Moonrise-Lens6-Outplayed-Sandal-Shining-Lying' NOINHERIT;
GRANT USAGE ON SCHEMA wireguard TO wg_admin;
GRANT SELECT, INSERT, UPDATE, DELETE ON wireguard.client TO wg_admin;
GRANT SELECT, INSERT, UPDATE, DELETE ON wireguard.user TO wg_admin;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA wireguard TO wg_admin;

CREATE ROLE pf_user LOGIN PASSWORD 'Plug-Vengeful-Extrovert-Crisply-Wheat-Consumer-Overrule-Divinely4-Subway-Smartness-Backhand' NOINHERIT;
GRANT USAGE ON SCHEMA wireguard TO pf_user;
GRANT SELECT ON wireguard.user TO pf_user;