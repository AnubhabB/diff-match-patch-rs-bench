// #[cfg(test)]
// mod tests {
//     use std::{path::Path, time::Instant};

//     use diff_match_patch_rs::{Compat, Efficient};

//     #[test]
//     fn diff_match_patch_rs() {
//         let basedir = Path::new("../testdata");
//         let old = std::fs::read_to_string(basedir.join("txt_old.txt")).unwrap();
//         let new = std::fs::read_to_string(basedir.join("txt_new.txt")).unwrap();

//         let dmp = diff_match_patch_rs::dmp::DiffMatchPatch::default();
//         println!("{dmp:#?}");

//         let start = Instant::now();
//         for _ in 0 .. 10000 {
//             dmp.diff_main::<Compat>(&old, &new).unwrap();
//         }
//         let elapsed = (Instant::now() - start).as_millis();
//         println!("{elapsed}")
//         // group.bench_function("diff-match-patch-rs-efficient", |bencher| {
//         //     bencher.iter(|| dmp.diff_main::<Efficient>(&old, &new).unwrap());
//         // });

//         // group.bench_function("diff-match-patch-rs-compat", |bencher| {
//         //     bencher.iter(|| dmp.diff_main::<Compat>(&old, &new).unwrap());
//         // });
//     }
// }