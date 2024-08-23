#!/bin/bash

echo "Running Rust benchmarks"
cd rust
cargo bench --bench diff
cd ..
