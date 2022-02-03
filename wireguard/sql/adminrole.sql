CREATE ROLE wg_admin LOGIN PASSWORD 'Employee-Buzz4-Unsaved-Unloader-Bats-Phony-Stainable-Canned-Junkie-Campsite' NOINHERIT;
GRANT USAGE ON SCHEMA wireguard TO wg_admin;
GRANT SELECT, INSERT, UPDATE, DELETE ON wireguard.client TO wg_admin;
GRANT USAGE, SELECT ON SEQUENCE wireguard.client_client_id_seq TO wg_admin;