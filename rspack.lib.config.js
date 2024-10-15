const { defineConfig, usePreEsModuleConfig } = require("rspack-lib");
const { RspackDtsPlugin } = require('rspack-dts-plugin');

module.exports = defineConfig({
    // 会合并rspack中的配置
    lib: [
        // 编译commonjs
        {
            output: {
                filename: "index.cjs",
                library: {
                    type: "commonjs2",
                },
            },
            // 注册生成ts描述文件插件
            plugins: [new RspackDtsPlugin()],
        },
        // 编译esmodule
        usePreEsModuleConfig({
            output: {
                filename: 'index.mjs',
            },
        }),
    ],
    // rspack 配置
    rspack: {
        watch: true,
        entry: "./src/index.ts",
        devtool: false,
        resolve: {
            extensions: [".ts", ".js", ".json"],
        },
        externals: {
            '@wangeditor/editor': '@wangeditor/editor',
            slate: 'slate',
            snabbdom: 'snabbdom',
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: [/node_modules/],
                    loader: 'builtin:swc-loader',
                    options: {
                        jsc: {
                            parser: {
                                syntax: 'typescript',
                            },
                        },
                    },
                    type: 'javascript/auto',
                },
            ],
        },
    },
});