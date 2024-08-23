# diff-match-patch-rs-bench
Benchmarking the crate `diff-match-patch-rs` against other implementations.

## `Diff`
| Lang.   | Library   | Avg. (ms)   | High (ms)   | Low (ms)   | Bencher   |
|:-------:|:---------:|:-----------:|:-----------:|:----------:|:---------:|
| `rust`  | [diff_match_patch v0.1.1](https://crates.io/crates/diff_match_patch) | 68.108 | 68.178 | 68.062 | Criterion |
| `rust`  | [diffmatchpatch v0.0.4](https://crates.io/crates/diffmatchpatch) | 66.454 | 66.476 | 66.434 | Criterion |
| `rust`  | [dmp v0.2.0](https://crates.io/crates/dmp) | 69.019 | 66.476 | 68.991 | Criterion |
| `rust`  | [diff-match-patch-rs](https://github.com/AnubhabB/diff-match-patch-rs.git)<sup>our</sup> | 65.457 | 65.484 | 65.433 | Criterion |

>
> Note:
> Omitting [dissimilar](https://crates.io/crates/dissimilar) from the results, I believe that crate has different goals and a headon benchmark is not fair
> Results: Avg[197.30] High[197.46] Low[197.19]