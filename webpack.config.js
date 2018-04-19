const path = require("path");

const toPath = relativePath => path.resolve(__dirname, relativePath);

module.exports = (env, argv) => {
  const isDev = argv.mode === "development";

  console.info(isDev ? "development build" : "production build");

  return {
    entry: {
      main: "./src/index.ts"
    },

    output: {
      filename: "[name].js",
      path: toPath(".")
    },

    resolve: {
      extensions: [".js", ".ts", ".elm"]
    },

    module: {
      rules: [
        {
          test: /\.ts$/,
          use: {
            loader: "ts-loader"
          }
        },

        {
          test: /\.html$/,
          exclude: /node_modules/,
          loader: "file-loader",
          options: {
            name: "[name].[ext]"
          }
        },

        {
          test: /\.elm$/,
          exclude: [/elm-stuff/, /node_modules/],
          loader: "elm-webpack-loader",
          options: {
            debug: isDev,
            warn: true,
            verbose: isDev
          }
        }
      ]
    },

    devServer: {
      host: "0.0.0.0",
      disableHostCheck: true
    }
  };
};
