# diff-match-patch-rs-bench
Benchmarking the crate `diff-match-patch-rs` against other implementations.

## `Diff`
| Lang.   | Library   | Avg. (ms)   | High (ms)   | Low (ms)   | Bencher   | Mode |
|:-------:|:---------:|:-----------:|:-----------:|:----------:|:---------:|:-----:
| `rust`  | [diff_match_patch v0.1.1](https://crates.io/crates/diff_match_patch) | 68.108 | 68.178 | 68.062 | Criterion | - |
| `rust`  | [diffmatchpatch v0.0.4](https://crates.io/crates/diffmatchpatch) | 66.454 | 66.476 | 66.434 | Criterion | - |
| `rust`  | [dmp v0.2.0](https://crates.io/crates/dmp) | 69.019 | 66.476 | 68.991 | Criterion | - |
| `rust`  | [diff-match-patch-rs](https://github.com/AnubhabB/diff-match-patch-rs.git)<sup>our</sup> | 65.487 | 65.519 | 65.458 | Criterion | `Efficient` |
| `rust`  | [diff-match-patch-rs](https://github.com/AnubhabB/diff-match-patch-rs.git)<sup>our</sup> | 65.642 | 65.667 | 65.621 | Criterion | `Compat` |
| `go`    | [go-diff<sup>*</sup>](https://github.com/sergi/go-diff.git) | 22 | - | - | `go test` | - |

>
> Note:
> Omitting [dissimilar](https://crates.io/crates/dissimilar) from the results, I believe that crate has different goals and a headon benchmark is not fair
> Results: Avg[197.30] High[197.46] Low[197.19]

>
> `*` diff not accurate with unicode?

<br>

## Patch
| Lang.   | Library   | Avg.   | High   | Low   | Bencher   | Mode |
|:-------:|:---------:|:-----------:|:-----------:|:----------:|:---------:|:-----:
| `rust`  | [diff_match_patch v0.1.1<sup>*</sup>](https://crates.io/crates/diff_match_patch) | 10.596 ms | 10.631 ms | 10.557 ms | Criterion | - |
| `rust`  | [dmp v0.2.0](https://crates.io/crates/dmp) | 14.654 ms | 14.662 ms | 14.646 ms | Criterion | - |
| `rust`  | [diff-match-patch-rs](https://github.com/AnubhabB/diff-match-patch-rs.git)<sup>our</sup> | 631.13 µs | 631.56 µs | 630.73 µs | Criterion | `Efficient` |
| `rust`  | [diff-match-patch-rs](https://github.com/AnubhabB/diff-match-patch-rs.git)<sup>our</sup> | 1.1703 ms | 1.1722 ms | 1.1685 ms | Criterion | `Compat` |
| `go`    | [go-diff](https://github.com/sergi/go-diff.git) | - | - | - | `go test` | - |

>
> `*` - Adds an extra clone to the iterator because the `patch_apply` method takes mutable refc. to `diffs`
>
> `**` - Panics on our test set
>

> Note:
> The crate [diffmatchpatch v0.0.4](https://crates.io/crates/diffmatchpatch) is still a WIP, cound't find the `patch_apply` method