const path = require("path");

module.exports = {
    entry: "./webpack.js",
    output: {
        filename: "MIDIFile.js",
        path: path.resolve(__dirname, ''),
        library: "MIDIFile"
    },
    devtool: 'inline-source-map',
    mode: "development"
};
