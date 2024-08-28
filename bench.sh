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
# go test -bench=BenchmarkPatch -benchtime=10s
cd ..