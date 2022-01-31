#!/bin/bash

mkdir -p /home/github/wireguard/clients/$1
cd /home/github/wireguard/clients/$1
wg genkey | tee privatekey | wg pubkey > publickey