#!/bin/bash

echo "Running Rust benchmarks"
cd rust
cargo bench
cd ..
