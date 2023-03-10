const path = require("path");

module.exports = {

    mode: "production",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        library: {
            name: "Based",
            type: "var",
            export: "default"
        }
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: "ts-loader",
                exclude: /node_modules/,
            }
        ]
    },
    devServer: {
        static: path.join(__dirname, "."),
        compress: true,
        port: 3000,
    }
};
