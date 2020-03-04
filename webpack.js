import MIDIFile from "./src/MIDIFile";

(function(root, factory) {
    console.log("Load MIDIFile...");
    if (typeof define === "function" && define.amd) {
        define("MIDIFile", [], factory);
    } else if (typeof module == "object" && module.exports) {
        module.exports = factory();
    } else {
        if (root === undefined) {
            root = window;
        }
        root.JSAP = factory();
    }
})(this, function() {
    return MIDIFile;
});
