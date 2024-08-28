use std::{path::Path, time::Duration};

use criterion::{criterion_group, criterion_main, Criterion};
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

        group.bench_function("diff_match_patch", |bencher| {
            bencher.iter(|| {
                let mut patches = patches.clone();
                dmp.patch_apply(&mut patches, &old)
            });
        });
    }

    // How to apply a patch?? Incomplete library??
    // {
    //     // benchmark diffmatchpatch crate
    //     let mut dmp = diffmatchpatch::DiffMatchPatch::new();
    //     let old_chars = old.chars().collect::<Vec<_>>();
    //     let new_chars = new.chars().collect::<Vec<_>>();
    //     let mut diffs = dmp.diff_main(&old_chars[..], &new_chars[..], true);

    //     let mut patches = dmp.patch_make2(&mut diffs);
    //     
    //     group.bench_function("diffmatchpatch", |bencher| {
    //         bencher.iter(|| {
    //             diffmatchpatch::DiffMatchPatch::
    //         });
    //     });
    // }

    {
        // benchmark dmp crate
        let dmp = dmp::new();
        let diffs = dmp.diff_main(&old, &new, true);
        let patches = dmp.patch_make4(&old, &diffs);

        group.bench_function("dmp", |bencher| {
            bencher.iter(|| dmp.patch_apply(&patches, &old));
        });
    }

    {
        // benchmark this crate - first efficiency mode
        let dmp = diff_match_patch_rs::dmp::DiffMatchPatch::default();
        let diffs = dmp.diff_main::<Efficient>(&old, &new).unwrap();
        let patches = dmp.patch_make(PatchInput::new_text_diffs(&old, &diffs)).unwrap();

        group.bench_function("diff-match-patch-rs-efficient", |bencher| {
            bencher.iter(|| dmp.patch_apply::<Efficient>(&patches, &old).unwrap());
        });

        let diffs = dmp.diff_main::<Compat>(&old, &new).unwrap();
        let patches = dmp.patch_make(PatchInput::new_text_diffs(&old, &diffs)).unwrap();
        group.bench_function("diff-match-patch-rs-compat", |bencher| {
            bencher.iter(|| dmp.patch_apply::<Compat>(&patches, &old).unwrap());
        });
    }
}

criterion_group!(patch, patch_main);
criterion_main!(patch);