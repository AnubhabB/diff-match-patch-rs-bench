package main

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/sergi/go-diff/diffmatchpatch"
)

type TestData struct {
	Old     string `json:"old"`
	New     string `json:"new"`
	PatchPy string `json:"patch_py"`
	DeltaPy string `json:"delta_py"`
	PatchJs string `json:"patch_js"`
	DeltaJs string `json:"delta_js"`
	PatchRs string `json:"patch_rs"`
	DeltaRs string `json:"delta_rs"`
	PatchGo string `json:"patch_go"`
	DeltaGo string `json:"delta_go"`
}

func make() {
	d, err := os.ReadFile("../tests_data.json")
	if err != nil {
		panic("Error reading file")
	}

	data := []*TestData{}
	if err := json.Unmarshal(d, &data); err != nil {
		panic("error deserializing json")
	}

	dmp := diffmatchpatch.New()
	for _, d := range data {
		diffs := dmp.DiffMain(d.Old, d.New, true)
		delta := dmp.DiffToDelta(diffs)

		d.DeltaGo = delta

		patches := dmp.PatchMake(d.Old, diffs)
		patch_txt := dmp.PatchToText(patches)

		d.PatchGo = patch_txt
	}

	res, err := json.Marshal(data)
	if err != nil {
		panic(err.Error())
	}

	os.WriteFile("../tests_data.json", res, os.ModePerm)
}

func exec() {
	d, err := os.ReadFile("../tests_data.json")
	if err != nil {
		panic("Error reading file")
	}

	data := []*TestData{}
	if err := json.Unmarshal(d, &data); err != nil {
		panic("error deserializing json")
	}

	dmp := diffmatchpatch.New()

	for i, d := range data {
		// Check compatibility with `Self`
		patches_go, err := dmp.PatchFromText(d.PatchGo)
		if err != nil {
			fmt.Printf("[Go Patch] Make: for Idx[%d] - Old[%s] New[%s] \n", i, d.Old, d.New)
			continue
		}
		new, _ := dmp.PatchApply(patches_go, d.Old)
		if new != d.New {
			fmt.Printf("[Go Patch] Apply1: for Idx[%d] - Old[%s] New[%s] Patched[%s]", i, d.Old, d.New, new)
			continue
		}
		diffs, err := dmp.DiffFromDelta(d.Old, d.DeltaGo)
		if err != nil {
			fmt.Printf("[Go Patch] DiffFromDelta: for Idx[%d] - Old[%s] New[%s] \n", i, d.Old, d.New)
			continue
		}
		patches_del_go := dmp.PatchMake(d.Old, diffs)
		new, _ = dmp.PatchApply(patches_del_go, d.Old)
		if new != d.New {
			fmt.Printf("[Go Patch] Apply2: for Idx[%d] - Old[%s] New[%s] Patched[%s]", i, d.Old, d.New, new)
			continue
		}

		// Check compatibility with Python generated diffs
		patches_py, err := dmp.PatchFromText(d.PatchPy)
		if err != nil {
			fmt.Printf("[Py Patch] Make: for Idx[%d] - Old[%s] New[%s] \n", i, d.Old, d.New)
			continue
		}
		new_py, _ := dmp.PatchApply(patches_py, d.Old)
		if new_py != d.New {
			fmt.Printf("[Py Patch] Apply1: for Idx[%d] - Old[%s] New[%s] Patched[%s]", i, d.Old, d.New, new)
			continue
		}
		diffs_py, err := dmp.DiffFromDelta(d.Old, d.DeltaGo)
		if err != nil {
			fmt.Printf("[Py Patch] DiffFromDelta: for Idx[%d] - Old[%s] New[%s] \n", i, d.Old, d.New)
			continue
		}
		patches_del_py := dmp.PatchMake(d.Old, diffs_py)
		new, _ = dmp.PatchApply(patches_del_py, d.Old)
		if new != d.New {
			fmt.Printf("[Py Patch] Apply2: for Idx[%d] - Old[%s] New[%s] Patched[%s]", i, d.Old, d.New, new)
			continue
		}

		// Check compatibility with `diff-match-patch-rs` crate
		patches_rs, err := dmp.PatchFromText(d.PatchRs)
		if err != nil {
			fmt.Printf("[Rs Patch] Make: for Idx[%d] - Old[%s] New[%s] \n", i, d.Old, d.New)
			continue
		}
		new_rs, _ := dmp.PatchApply(patches_rs, d.Old)
		if new_rs != d.New {
			fmt.Printf("[Rs Patch] Apply1: for Idx[%d] - Old[%s] New[%s] Patched[%s]", i, d.Old, d.New, new)
			continue
		}
		diffs_rs, err := dmp.DiffFromDelta(d.Old, d.DeltaGo)
		if err != nil {
			fmt.Printf("[Rs Patch] DiffFromDelta: for Idx[%d] - Old[%s] New[%s] \n", i, d.Old, d.New)
			continue
		}
		patches_del_rs := dmp.PatchMake(d.Old, diffs_rs)
		new, _ = dmp.PatchApply(patches_del_rs, d.Old)
		if new != d.New {
			fmt.Printf("[Rs Patch] Apply2: for Idx[%d] - Old[%s] New[%s] Patched[%s]", i, d.Old, d.New, new)
			continue
		}

		// Check compatibility with javascript - expecting failure
		patches_js, err := dmp.PatchFromText(d.PatchJs)
		if err != nil {
			fmt.Printf("[Js Patch] Make: for Idx[%d] - Old[%s] New[%s] \n", i, d.Old, d.New)
			continue
		}
		new_js, _ := dmp.PatchApply(patches_js, d.Old)
		if new_js != d.New {
			fmt.Printf("[Js Patch] Apply1: for Idx[%d] - Old[%s] New[%s] Patched[%s]", i, d.Old, d.New, new)
			continue
		}

		if len(d.DeltaJs) > 0 {
			diffs_js, err := dmp.DiffFromDelta(d.Old, d.DeltaJs)
			if err != nil {
				fmt.Printf("[Js Patch] DiffFromDelta: for Idx[%d] - Old[%s] New[%s] \n", i, d.Old, d.New)
				continue
			}
			patches_del_js := dmp.PatchMake(d.Old, diffs_js)
			new, _ = dmp.PatchApply(patches_del_js, d.Old)
			if new != d.New {
				fmt.Printf("[Js Patch] Apply2: for Idx[%d] - Old[%s] New[%s] Patched[%s]", i, d.Old, d.New, new)
				continue
			}
		} else {
			// fmt.Printf("[Js Patch] DeltaJs not generated for idx[%d]\n", i)
			continue
		}
	}
}

func main() {
	args := os.Args

	if args[1] == "make" {
		make()
	} else if args[1] == "exec" {
		exec()
	} else {
		panic("Expected args `make` or `exec`")
	}
}
