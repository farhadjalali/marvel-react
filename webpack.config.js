// eslint-disable-next-line no-undef
module.exports = {
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            cacheDirectory: true,
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ],
                            plugins: [
                                [
                                    '@babel/plugin-transform-runtime',
                                    {
                                        'helpers': true,
                                        'regenerator': false
                                    }
                                ]
                            ]
                        },
                    },
                    {
                        loader: 'ts-loader',
                    },
                ],
                exclude: [/node_modules/]
            },
            {
                test: /\.js(x?)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            cacheDirectory: true,
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                                '@babel/preset-flow'
                            ],
                            plugins: [
                                [
                                    '@babel/plugin-transform-runtime',
                                    {
                                        'helpers': true,
                                        'regenerator': false
                                    }
                                ]
                            ]
                        },
                    },
                ],
                exclude: [/node_modules/]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }
        ],
    }
};
