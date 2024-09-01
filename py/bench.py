import timeit

from diff_match_patch import diff_match_patch

with open("../testdata/txt_old.txt", "r") as old:
    TEXT_OLD = old.read()

with open("../testdata/txt_new.txt", "r") as old:
    TEXT_NEW = old.read()

dmp = diff_match_patch()

EXEC_COUNT = 60

elapsed = timeit.timeit(stmt="dmp.diff_main(TEXT_OLD, TEXT_NEW)", globals=locals(), number=EXEC_COUNT)
print((elapsed/EXEC_COUNT))

patches = dmp.patch_make(TEXT_OLD, TEXT_NEW)

EXEC_COUNT = 200
elapsed = timeit.timeit(stmt="dmp.patch_apply(patches, TEXT_OLD)", globals=locals(), number=EXEC_COUNT)
print((elapsed/EXEC_COUNT))