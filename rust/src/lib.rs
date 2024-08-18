// use std::path::Path;

// use criterion::{criterion_group, criterion_main, Criterion};
// use diff_match_patch_rs::dmp::DiffMatchPatch;

// #[cfg(test)]
// mod bench {
//     use super::*;

//     fn diff_main(c: &mut Criterion) {
//         let basedir = Path::new("testdata");
//         let old = std::fs::read_to_string(basedir.join("txt_old.txt")).unwrap();
//         let new = std::fs::read_to_string(basedir.join("txt_new.txt")).unwrap();
    
//         let dmp = DiffMatchPatch::default();
    
//         c.bench_function("diff-match-patch", |bencher| {
//             bencher.iter(|| dmp.diff_main(&old, &new).unwrap());
//         });
//     }
    
//     criterion_group!(diff, diff_main);
//     criterion_main!(diff);
// }

#[cfg(test)]
mod tests {
    use diffmatchpatch::ToChars;

    #[test]
    fn diff_bisect() {
        let mut dmp = diffmatchpatch::DiffMatchPatch::new();
    
        let diffs = dmp.diff_bisect(
            &"My name is Sheela🙂😂🤔".to_chars(),
            &"My name is bello🙂🎉🎂🍔🤔".to_chars()
        );

        // assert_eq!(
        //     vec![
        //         diffmatchpatch::Diff::Delete("c".into()),
        //         diffmatchpatch::Diff::Insert("m".into()),
        //         diffmatchpatch::Diff::Equal("a".into()),
        //         diffmatchpatch::Diff::Delete("t".into()),
        //         diffmatchpatch::Diff::Insert("p".into())
        //     ], diffs)
    }
}