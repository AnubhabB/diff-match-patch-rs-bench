from diff_match_patch import diff_match_patch

dmp = diff_match_patch()

TEXT_OLD = """** Paragraph 2
Let's start with some basics 😊. We've got your standard smiley face 🙂, your sad face ☹️, and your angry face 😠. But wait, there's more! 🤩 We've also got some more complex emotions like 😍, 🤤, and 🚀. And let's not forget about the classics: 😉, 👍, and 👏."""

TEXT_NEW = """** Paragraph 2
Now, let's explore some emotional extremes 🌊. We've got your ecstatic face 🤩, your devastated face 😭, and your utterly confused face 🤯. But that's not all! 🤔 We've also got some subtle emotions like 😐, 🙃, and 👀."""

patches = dmp.patch_make(TEXT_OLD, TEXT_NEW)
patches = dmp.patch_toText(patches)
import json

print("Patch text --------------------")
print(json.dumps(patches))
print("-------------------------------")

diffs = dmp.diff_main(TEXT_OLD, TEXT_NEW)
delta = dmp.diff_toDelta(diffs)
print("Delta --------------------")
print(json.dumps(delta))
print("-------------------------------")

# this patch was generated in `diff-match-patch-rs`
PATCH_TXT_RUST = "@@ -12,38 +12,52 @@\n h 2%0A\n-Let's start with some basics %F0%9F%98%8A\n+Now, let's explore some emotional extremes %F0%9F%8C%8A\n . We\n@@ -73,48 +73,47 @@\n our \n+ec\n sta\n-ndard smiley\n+tic\n  face \n-%F0%9F%99%82\n+%F0%9F%A4%A9\n , your \n-sa\n+devastate\n d face \n-%E2%98%B9%EF%B8%8F\n+%F0%9F%98%AD\n , an\n@@ -123,47 +123,54 @@\n our \n-angry\n+utterly confused\n  face \n-%F0%9F%98%A0\n+%F0%9F%A4%AF\n . But \n-wait, there's more! %F0%9F%A4%A9\n+that's not all! %F0%9F%A4%94\n  We'\n@@ -190,20 +190,14 @@\n ome \n-more comp\n+subt\n le\n-x\n  emo\n@@ -211,70 +211,16 @@\n ike \n-%F0%9F%98%8D, %F0%9F%A4%A4\n+%F0%9F%98%90, %F0%9F%99%83\n , and \n-%F0%9F%9A%80. And let's not forget about the classics: %F0%9F%98%89, %F0%9F%91%8D, and %F0%9F%91%8F\n+%F0%9F%91%80\n .\n"
patches = dmp.patch_fromText(PATCH_TXT_RUST)
new_txt = dmp.patch_apply(patches, TEXT_OLD)
assert new_txt, TEXT_NEW