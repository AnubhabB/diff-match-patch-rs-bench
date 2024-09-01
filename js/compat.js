import { makeDiff, makePatches, stringifyPatches } from '@sanity/diff-match-patch';
import fs from "fs";


const DATA = JSON.parse(fs.readFileSync("../tests_data.json", 'utf8'));

function make() {
    for(let i in DATA) {
        let d = DATA[i];
        let diffs = makeDiff(d["old"], d["new"]);
        // try {
        //     let delta = toDelta(diffs);
        //     d["delta_js"] = delta;
        // } catch(e) {
        //     console.log(`Error[DELTA]: ${e}`);
        //     console.log(`${d["old"]} ${d["new"]} ${diffs}`);
        // }

        try {
            let patches = makePatches(d["old"], diffs);
            let patch_text = stringifyPatches(patches);
            d["patch_js"] = patch_text;
        } catch(e) {
            console.log(`Error[PATCH_TEXT]: ${e}`);
            console.log(`${d["old"]} ${d["new"]} ${diffs}`);
        }
    }

    fs.writeFileSync('../tests_data.json', JSON.stringify(DATA), 'utf8');
}

let arg = process.argv[2];
if(arg == "make") {
    make();
} else if(arg == "exec") {
    console.log("Not yet implemented!")
} else {
    console.error(`Allowed options are "exec" | "make". Got ${arg}`);
    process.exit(1)
}