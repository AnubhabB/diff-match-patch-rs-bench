package main

import (
	"github.com/sergi/go-diff/diffmatchpatch"
)

func DiffMain(dmp *diffmatchpatch.DiffMatchPatch, old, new string) {
	dmp.DiffMain(old, new, true)
}

func PatchApply(dmp *diffmatchpatch.DiffMatchPatch, patches []diffmatchpatch.Patch, old string) {
	dmp.PatchApply(patches, old)
}
