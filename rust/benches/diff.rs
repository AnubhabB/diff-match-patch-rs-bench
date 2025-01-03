use std::{path::Path, time::Duration};

use criterion::{criterion_group, criterion_main, BenchmarkId, Criterion};
use diff_match_patch_rs::{Compat, Efficient};

fn diff_main(c: &mut Criterion) {
    let basedir = Path::new("../testdata");
    let old = std::fs::read_to_string(basedir.join("txt_old.txt")).unwrap();
    let new = std::fs::read_to_string(basedir.join("txt_new.txt")).unwrap();

    let mut group = c.benchmark_group("diff_main");
    group.measurement_time(Duration::from_secs(10));

    // {
    //     // benchmark diffmatchpatch crate
    //     let dmp = diffmatchpatch::DiffMatchPatch::new();
    //     group.bench_function("diffmatchpatch", |bencher| {
    //         bencher.iter(|| {
    //             let old_chars = old.chars().collect::<Vec<_>>();
    //             let new_chars = new.chars().collect::<Vec<_>>();
    //             dmp.diff_main(&old_chars[..], &new_chars[..], true)
    //         });
    //     });
    // }

    // {
    //     // benchmark dissimilar
    //     group.bench_function("dissimilar", |bencher| {
    //         bencher.iter(|| dissimilar::diff(&old, &new));
    //     });
    // }

    {
        // benchmark diff_match_patch crate
        let mut dmp = diff_match_patch::Dmp::new();
        group.bench_with_input(
            BenchmarkId::new("diff_match_patch", "diff"),
            &(old.as_str(), new.as_str()),
            |b, (lhs, rhs)| {
                b.iter(|| dmp.diff_main(lhs, rhs, true));
            },
        );
    }

    {
        // benchmark dmp crate
        let dmp = dmp::new();
        group.bench_with_input(
            BenchmarkId::new("dmp", "diff"),
            &(old.as_str(), new.as_str()),
            |b, (lhs, rhs)| {
                b.iter(|| dmp.diff_main(lhs, rhs, true));
            },
        );
    }

    {
        let dmp = diff_match_patch_rs::dmp::DiffMatchPatch::default();
        group.bench_with_input(
            BenchmarkId::new("diff-match-patch-rs", "diff-efficient"),
            &(&old, &new),
            |b, (lhs, rhs)| {
                b.iter(|| dmp.diff_main::<Efficient>(lhs, rhs));
            },
        );

        group.bench_with_input(
            BenchmarkId::new("diff-match-patch-rs", "diff-compat"),
            &(old.as_str(), new.as_str()),
            |b, (lhs, rhs)| {
                b.iter(|| dmp.diff_main::<Compat>(lhs, rhs));
            },
        );
    }
}

criterion_group!(diff, diff_main);
criterion_main!(diff);
