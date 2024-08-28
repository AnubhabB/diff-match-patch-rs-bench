# diff-match-patch-rs-bench
Benchmarking the crate `diff-match-patch-rs` against other implementations.

## Benchmark

|  Lang.  |  Library                                      |  Diff Avg.  | Patch Avg. | Bencher    | Mode        |
|:-------:|:---------------------------------------------:|:-----------:|:----------:|:----------:|:-----------:|
| `rust`  | [diff_match_patch v0.1.1<sup>**</sup>](https://crates.io/crates/diff_match_patch)        | 68.108 ms | 10.596 ms | Criterion   | -           |
| `rust`  | [diffmatchpatch v0.0.4<sup>***</sup>](https://crates.io/crates/diffmatchpatch)           | 66.454 ms | -         | Criterion   | -           |
| `rust`  | [dmp v0.2.0](https://crates.io/crates/dmp)                                               | 69.019 ms | 14.654 ms | Criterion   | -           |
| `rust`  | [diff-match-patch-rs](https://github.com/AnubhabB/diff-match-patch-rs.git)<sup>our</sup> | 65.487 ms | 631.13 µs | Criterion   | `Efficient` |
| `rust`  | [diff-match-patch-rs](https://github.com/AnubhabB/diff-match-patch-rs.git)<sup>our</sup> | 65.642 ms | 1.1703 ms | Criterion   | `Compat`    |
| `go`    | [go-diff<sup>*</sup>](https://github.com/sergi/go-diff)                                  | 50.31 ms  | 135.2 ms  | `go test`   | -           |
| `node`  | [diff-match-patch](https://www.npmjs.com/package/diff-match-patch)                       | 246.90 ms | 1.07 ms   | `tinybench` | -           |

<!-- | Lang.   | Library                                       | Diff Avg. | Patch Avg. | Bencher    | Mode        | Correct |
|:-------:|:---------------------------------------------:|:-------- :|:----------:|:----------:|:-----------:|:-------:|
| `rust`  | [diff_match_patch v0.1.1<sup>**</sup>](https://crates.io/crates/diff_match_patch)        | 68.108 ms | 10.596 ms | Criterion   | -           |    ✅   |
| `rust`  | [diffmatchpatch v0.0.4<sup>***</sup>](https://crates.io/crates/diffmatchpatch)           | 66.454 ms | -         | Criterion   | -           |    ❌   |
| `rust`  | [dmp v0.2.0](https://crates.io/crates/dmp)                                               | 69.019 ms | 14.654 ms | Criterion   | -           |    ✅   |
| `rust`  | [diff-match-patch-rs](https://github.com/AnubhabB/diff-match-patch-rs.git)<sup>our</sup> | 65.487 ms | 631.13 µs | Criterion   | `Efficient` |    ✅   |
| `rust`  | [diff-match-patch-rs](https://github.com/AnubhabB/diff-match-patch-rs.git)<sup>our</sup> | 65.642 ms | 1.1703 ms | Criterion   | `Compat`    |    ✅   |
| `go`    | [go-diff<sup>*</sup>](https://github.com/sergi/go-diff)                                  | 50.31 ms  | 135.2 ms  | `go test`   | -           |    ❌   |
| `node`  | [diff-match-patch](https://www.npmjs.com/package/diff-match-patch)                       | 246.90 ms | 1.07 ms   | `tinybench` | -           |    ✅   | -->

>
> Note:
> Omitting [dissimilar](https://crates.io/crates/dissimilar) from the results, I believe that crate has different goals and a headon benchmark is not fair
> Results: Avg[197.30] High[197.46] Low[197.19]

>
> `*` [go-diff](https://github.com/sergi/go-diff) seems to generate wrong diffs for emoticons. This benchmark is on the text with the emoticons removed. <br>
> `**` Adds an extra clone to the iterator because the `patch_apply` method takes mutable refc. to `diffs` <br>
> `***` The crate [diffmatchpatch v0.0.4](https://crates.io/crates/diffmatchpatch) is still a WIP, cound't find the `patch_apply` method <br>