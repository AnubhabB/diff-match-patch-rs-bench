import sys
import json

from diff_match_patch import diff_match_patch

dmp = diff_match_patch()


with open("tests_data.json", 'r') as file:
    DATA = json.load(file)

def make():
    for d in DATA:
        diffs = dmp.diff_main(d["old"], d["new"])
        delta = dmp.diff_toDelta(diffs)
        d["delta_py"] = delta

        patches = dmp.patch_make(d["old"], diffs)
        patch_txt = dmp.patch_toText(patches)
        d["patch_py"] = patch_txt

    with open("tests_data.json", "w") as file:
        json.dump(DATA, file)

def execcompat():
    for (i, d) in enumerate(DATA):
        # Check compatibility with `Self`
        patches_py = dmp.patch_fromText(d["patch_py"])
        (new, _) = dmp.patch_apply(patches_py, d["old"])

        if new != d["new"]:
            print(f"[Py Patch] Apply1: for Idx[{i}]  - Old[{d['old']}] New[{d['new']}] Patched[{new}]")
            continue

        diffs = dmp.diff_fromDelta(d["old"], d["delta_py"])
        patches_py = dmp.patch_make(d["old"], diffs)
        (new, _) = dmp.patch_apply(patches_py, d["old"])
        if new != d["new"]:
            print(f"[Py Patch] Apply2: for Idx[{i}]  - Old[{d['old']}] New[{d['new']}] Patched[{new}]")
            continue

        # Checking compatibility with `Go`
        patches_go = dmp.patch_fromText(d["patch_go"])
        (new, _) = dmp.patch_apply(patches_go, d["old"])

        if new != d["new"]:
            print(f"[Go Patch] Apply1: for Idx[{i}]  - Old[{d['old']}] New[{d['new']}] Patched[{new}]")

        diffs = dmp.diff_fromDelta(d["old"], d["delta_go"])
        patches_go = dmp.patch_make(d["old"], diffs)
        (new, _) = dmp.patch_apply(patches_go, d["old"])
        if new != d["new"]:
            print(f"[Go Patch] Apply2: for Idx[{i}]  - Old[{d['old']}] New[{d['new']}] Patched[{new}]")

        # Checking compatibility with `Rust`
        patches_rs = dmp.patch_fromText(d["patch_rs"])
        (new, _) = dmp.patch_apply(patches_rs, d["old"])

        if new != d["new"]:
            print(f"[Rs Patch] Apply1: for Idx[{i}]  - Old[{d['old']}] New[{d['new']}] Patched[{new}]")

        diffs = dmp.diff_fromDelta(d["old"], d["delta_rs"])
        patches_rs = dmp.patch_make(d["old"], diffs)
        (new, _) = dmp.patch_apply(patches_rs, d["old"])
        if new != d["new"]:
            print(f"[Rs Patch] Apply2: for Idx[{i}]  - Old[{d['old']}] New[{d['new']}] Patched[{new}]")

        # Checking compatibility with `Js`
        patches_js = dmp.patch_fromText(d["patch_js"])
        (new, _) = dmp.patch_apply(patches_js, d["old"])

        if new != d["new"]:
            print(f"[Js Patch] Apply1: for Idx[{i}]  - Old[{d['old']}] New[{d['new']}] Patched[{new}]")

        # diffs = dmp.diff_fromDelta(d["old"], d["delta_rs"])
        # patches_js = dmp.patch_make(d["old"], diffs)
        # (new, _) = dmp.patch_apply(patches_js, d["old"])
        # if new != d["new"]:
        #     print(f"[Rs Patch] Apply2: for Idx[{i}]  - Old[{d['old']}] New[{d['new']}] Patched[{new}]")

if sys.argv[1] == "make":
    make()
elif sys.argv[1] == "exec":
    execcompat()