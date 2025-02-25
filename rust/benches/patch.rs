use std::{path::Path, time::Duration};

use criterion::{criterion_group, criterion_main, BenchmarkId, Criterion};
use diff_match_patch_rs::{Compat, Efficient, PatchInput};

fn patch_main(c: &mut Criterion) {
    let basedir = Path::new("../testdata");
    let old = std::fs::read_to_string(basedir.join("txt_old.txt")).unwrap();
    let new = std::fs::read_to_string(basedir.join("txt_new.txt")).unwrap();

    let mut group = c.benchmark_group("patch_apply");
    group.measurement_time(Duration::from_secs(10));

    {
        // benchmark diff_match_patch crate
        let mut dmp = diff_match_patch::Dmp::new();
        let mut diffs = dmp.diff_main(&old, &new, true);
        let patches = dmp.patch_make4(&old, &mut diffs);

        group.bench_with_input(
            BenchmarkId::new("diff_match_patch", "patch"),
            &old.as_str(),
            |b, txt| {
                let mut p = patches.clone();
                b.iter(|| dmp.patch_apply(&mut p, txt));
            },
        );
    }

    {
        // benchmark dmp crate
        let dmp = dmp::new();
        let diffs = dmp.diff_main(&old, &new, true);
        let patches = dmp.patch_make4(&old, &diffs);

        group.bench_with_input(
            BenchmarkId::new("dmp", "patch"),
            &(&patches, new.as_str()),
            |b, (lhs, rhs)| {
                b.iter(|| dmp.patch_apply(&lhs[..], rhs));
            },
        );
    }

    {
        let dmp = diff_match_patch_rs::dmp::DiffMatchPatch::default();
        let diffs = dmp.diff_main::<Efficient>(&old, &new).unwrap();
        let patches = dmp
            .patch_make(PatchInput::new_text_diffs(&old, &diffs))
            .unwrap();

        group.bench_with_input(
            BenchmarkId::new("diff-match-patch-rs", "patch-efficient"),
            &(&patches, &old),
            |b, (lhs, rhs)| {
                b.iter(|| dmp.patch_apply::<Efficient>(lhs, rhs));
            },
        );

        let diffs = dmp.diff_main::<Compat>(&old, &new).unwrap();
        let patches = dmp
            .patch_make(PatchInput::new_text_diffs(&old, &diffs))
            .unwrap();

        group.bench_with_input(
            BenchmarkId::new("diff-match-patch-rs", "patch-compat"),
            &(&patches, &old),
            |b, (lhs, rhs)| {
                b.iter(|| dmp.patch_apply::<Compat>(lhs, rhs));
            },
        );
    }
}

criterion_group!(patch, patch_main);
criterion_main!(patch);
