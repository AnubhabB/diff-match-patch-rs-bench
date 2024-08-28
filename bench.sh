#!/bin/bash

echo "Running Rust benchmarks"
cd rust
cargo bench --bench diff
cargo bench --bench patch
cd ..
