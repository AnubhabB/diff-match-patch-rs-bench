#!/bin/bash

echo "Running Rust benchmarks"
cd rust
cargo bench --bench diff
cargo bench --bench patch
cd ..

echo "Running Go benchmarks"
cd go
go test -bench=BenchmarkDiffMain -benchtime=10s
# Panics on our test data
go test -bench=BenchmarkPatch -benchtime=10s
cd ..

echo "Running Node benchmarks"
cd node
npm i
node index.js
rm -rf node_modules
cd ..

echo "Running Python benchmarks"
cd python
virtualenv -p python3 venv
venv/bin/python3 -m pip install --upgrade pip
venv/bin/python3 -m pip install -r requirements.txt
venv/bin/python3 bench.py
# rm -rf venv
cd ..