// import DiffMatchPatch from 'diff-match-patch';


// const TEXT_OLD = `** Paragraph 2
// Let's start with some basics 😊. We've got your standard smiley face 🙂, your sad face ☹️, and your angry face 😠. But wait, there's more! 🤩 We've also got some more complex emotions like 😍, 🤤, and 🚀. And let's not forget about the classics: 😉, 👍, and 👏.`

// const TEXT_NEW = `** Paragraph 2
// Now, let's explore some emotional extremes 🌊. We've got your ecstatic face 🤩, your devastated face 😭, and your utterly confused face 🤯. But that's not all! 🤔 We've also got some subtle emotions like 😐, 🙃, and 👀.`

// const dmp = new DiffMatchPatch();

// let patches = dmp.patch_make(TEXT_OLD, TEXT_NEW)
// let patch_txt = dmp.patch_toText(patches)

// console.log(`${JSON.stringify(patch_txt)}`)

// let diffs = dmp.diff_main(TEXT_OLD, TEXT_NEW);
// let delta = dmp.diff_toDelta(diffs);

// console.log(`${JSON.stringify(delta)}`);