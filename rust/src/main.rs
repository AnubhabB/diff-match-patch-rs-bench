use diff_match_patch_rs::{Compat, DiffMatchPatch, PatchInput};
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
struct TestData {
    old: String,
    new: String,
    patch_py: String,
    delta_py: String,
    patch_js: String,
    delta_js: String,
    patch_rs: String,
    delta_rs: String,
    patch_go: String,
    delta_go: String,
}

fn make() {
    let d = std::fs::read_to_string("../tests_data.json").unwrap();
    let mut data: Vec<TestData> = serde_json::from_str(&d).unwrap();

    let dmp = DiffMatchPatch::new();

    for d in data.iter_mut() {
        let diffs = dmp.diff_main::<Compat>(&d.old, &d.new).unwrap();
        let delta = dmp.diff_to_delta(&diffs).unwrap();

        d.delta_rs = delta;

        let patches = dmp.patch_make(PatchInput::new_text_diffs(&d.old, &diffs)).unwrap();
        let patch_txt = dmp.patch_to_text(&patches);

        d.patch_rs = patch_txt;
    }

    let updated = serde_json::to_string(&data).unwrap();

    std::fs::write("../tests_data.json", &updated).unwrap();
}

fn exec() {
    let d = std::fs::read_to_string("../tests_data.json").unwrap();
    let data: Vec<TestData> = serde_json::from_str(&d).unwrap();

    let dmp = DiffMatchPatch::new();

    for (idx, d) in data.iter().enumerate() {
        // Check compatibility with `Self`
        {
            let patches_rs = match dmp.patch_from_text::<Compat>(&d.patch_rs) {
                Ok(p) => p,
                Err(_) => {
                    println!("[Rs Patch] Make: for Idx[{idx}] - Old[{}] New[{}]", &d.old, &d.new);
                    continue;
                }
            };

            let (new, _) = dmp.patch_apply(&patches_rs, &d.old).unwrap();
            if new != d.new {
                println!("[Rs Patch] Apply1: for Idx[{idx}] - Old[{}] New[{}] Patched[{}]", &d.old, &d.new, new);
                continue;
            }

            let diffs = match dmp.diff_from_delta::<Compat>(&d.old, &d.delta_rs) {
                Ok(d) => d,
                Err(_) => {
                    // fmt.Printf("[Go Patch] DiffFromDelta: for Idx[%d] - Old[%s] New[%s] \n", i, d.Old, d.New)
                    println!("[Rs Patch] DiffFromDelta: for Idx[{idx}] - Old[{}] New[{}]", &d.old, &d.new);
                    continue;
                }
            };
            let patches = dmp.patch_make(PatchInput::new_text_diffs(&d.old, &diffs)).unwrap();
            let (new, _) = dmp.patch_apply(&patches, &d.old).unwrap();
            if new != d.new {
                println!("[Rs Patch] Apply2: for Idx[{idx}] - Old[{}] New[{}] Patched[{}]", &d.old, &d.new, new);
                continue;
            }
        }

        // Check compatibility with `Python`
        {
            let patches_py = match dmp.patch_from_text::<Compat>(&d.patch_py) {
                Ok(p) => p,
                Err(_) => {
                    println!("[Py Patch] Make: for Idx[{idx}] - Old[{}] New[{}]", &d.old, &d.new);
                    continue;
                }
            };

            let (new, _) = dmp.patch_apply(&patches_py, &d.old).unwrap();
            if new != d.new {
                println!("[Py Patch] Apply1: for Idx[{idx}] - Old[{}] New[{}] Patched[{}]", &d.old, &d.new, new);
                continue;
            }

            let diffs = match dmp.diff_from_delta::<Compat>(&d.old, &d.delta_py) {
                Ok(d) => d,
                Err(_) => {
                    // fmt.Printf("[Go Patch] DiffFromDelta: for Idx[%d] - Old[%s] New[%s] \n", i, d.Old, d.New)
                    println!("[Py Patch] DiffFromDelta: for Idx[{idx}] - Old[{}] New[{}]", &d.old, &d.new);
                    continue;
                }
            };
            let patches = dmp.patch_make(PatchInput::new_text_diffs(&d.old, &diffs)).unwrap();
            let (new, _) = dmp.patch_apply(&patches, &d.old).unwrap();
            if new != d.new {
                println!("[Py Patch] Apply2: for Idx[{idx}] - Old[{}] New[{}] Patched[{}]", &d.old, &d.new, new);
                continue;
            }
        }

        // Check compatibility with `Go`
        {   
            let patches_go = match dmp.patch_from_text::<Compat>(&d.patch_go) {
                Ok(p) => p,
                Err(_) => {
                    println!("[Go Patch] Make: for Idx[{idx}] - Old[{}] New[{}]", &d.old, &d.new);
                    continue;
                }
            };

            let (new, _) = dmp.patch_apply(&patches_go, &d.old).unwrap();
            if new != d.new {
                println!("[Go Patch] Apply1: for Idx[{idx}] - Old[{}] New[{}] Patched[{}]", &d.old, &d.new, new);
                continue;
            }

            let diffs = match dmp.diff_from_delta::<Compat>(&d.old, &d.delta_go) {
                Ok(d) => d,
                Err(_) => {
                    // fmt.Printf("[Go Patch] DiffFromDelta: for Idx[%d] - Old[%s] New[%s] \n", i, d.Old, d.New)
                    println!("[Go Patch] DiffFromDelta: for Idx[{idx}] - Old[{}] New[{}]", &d.old, &d.new);
                    continue;
                }
            };
            let patches = dmp.patch_make(PatchInput::new_text_diffs(&d.old, &diffs)).unwrap();
            let (new, _) = dmp.patch_apply(&patches, &d.old).unwrap();
            if new != d.new {
                println!("[Go Patch] Apply2: for Idx[{idx}] - Old[{}] New[{}] Patched[{}]", &d.old, &d.new, new);
                continue;
            }
        }
    }
}

fn main() {
    let args: Vec<String> = std::env::args().collect();
    if args.len() < 2 {
        println!("E.g. cargo run <make | exec> --release");
        panic!("requires `make` or `exec` as the second arg!")
    }

    if args[1] == "make" {
        make();
    } else if args[1] == "exec" {
        exec();
    } else {
        panic!("Valid options at position 1 are `exec` | `make`");
    }
}