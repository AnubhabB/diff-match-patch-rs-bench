use std::{path::Path, time::Duration};

use criterion::{criterion_group, criterion_main, Criterion};

fn diff_main(c: &mut Criterion) {
    let basedir = Path::new("../testdata");
    let old = std::fs::read_to_string(basedir.join("txt_old.txt")).unwrap();
    let new = std::fs::read_to_string(basedir.join("txt_new.txt")).unwrap();

    let mut group = c.benchmark_group("diff_main");
    group.measurement_time(Duration::from_secs(10));

    {
        // benchmark diff_match_patch crate
        let mut dmp = diff_match_patch::Dmp::new();    
        group.bench_function("diff_match_patch", |bencher| {
            bencher.iter(|| dmp.diff_main(&old, &new, true));
        });
    }

    {
        // benchmark diffmatchpatch crate
        let dmp = diffmatchpatch::DiffMatchPatch::new();
        group.bench_function("diffmatchpatch", |bencher| {
            bencher.iter(|| {
                let old_chars = old.chars().collect::<Vec<_>>();
                let new_chars = new.chars().collect::<Vec<_>>();
                dmp.diff_main(&old_chars[..], &new_chars[..], true)
            });
        });
    }

    {
        // benchmark dmp crate
        let dmp = dmp::new();
        group.bench_function("dmp", |bencher| {
            bencher.iter(|| dmp.diff_main(&old, &new, true));
        });
    }

    {
        // benchmark dissimilar
        group.bench_function("dissimilar", |bencher| {
            bencher.iter(|| dissimilar::diff(&old, &new));
        });
    }

    {
        // benchmark this crate
        let dmp = diff_match_patch_rs::dmp::DiffMatchPatch::default();
        group.bench_function("diff-match-patch-rs", |bencher| {
            bencher.iter(|| dmp.diff_main(&old, &new).unwrap());
        });
    }
}

criterion_group!(diff, diff_main);
criterion_main!(diff);