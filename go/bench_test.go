package main

import (
	"os"
	"testing"

	"github.com/sergi/go-diff/diffmatchpatch"
)

func BenchmarkDiffMain(b *testing.B) {
	oldb, _ := os.ReadFile("../testdata/txt_old.txt")
	newb, _ := os.ReadFile("../testdata/txt_new.txt")

	old := string(oldb)
	new := string(newb)

	dmp := diffmatchpatch.New()

	for i := 0; i < b.N; i++ {
		DiffMain(dmp, old, new)
	}
}

func BenchmarkPatch(b *testing.B) {
	oldb, _ := os.ReadFile("../testdata/txt_old.txt")
	newb, _ := os.ReadFile("../testdata/txt_new.txt")

	old := string(oldb)
	new := string(newb)

	dmp := diffmatchpatch.New()
	diffs := dmp.DiffMain(old, new, true)
	patches := dmp.PatchMake(diffs)

	for i := 0; i < b.N; i++ {
		PatchApply(dmp, patches, old)
	}
}
