#!/bin/bash

# Prepares data for compatibility tests
echo "Compat test with Rust"
cd rust
cargo run exec --release
cd ..

echo "Compat test with Go"
cd go
go run main.go exec
cd ..

echo "Compat test with JavaScript"
cd js
npm i
node compat.js exec
cd ..

echo "Compat test with Python"
cd py
virtualenv -p python3 venv
venv/bin/python3 -m pip install --upgrade pip
venv/bin/python3 -m pip install -r requirements.txt
cd ..
py/venv/bin/python3 py/compat.py exec
