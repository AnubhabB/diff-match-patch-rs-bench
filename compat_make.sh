#!/bin/bash

# Prepares data for compatibility tests
echo "Making data with Rust"
cd rust
cargo run make --release
cd ..

echo "Making data with Go"
cd go
go run main.go make
cd ..

echo "Making data with JavaScript"
cd js
node compat.js make
cd ..

echo "Making data with Python"
py/venv/bin/python3 py/compat.py make