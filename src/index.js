const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const validateOptions = require('schema-utils');

class IslandWebpackPlugin {
  constructor(options = {}) {
    options = Object.assign({}, IslandWebpackPlugin.defaultOptions, options);
    validateOptions(
      path.resolve(__dirname, './schema.json'),
      options,
      'Island Webpack Plugin'
    );
    this.options = options;
  }

  static get defaultOptions() {
    return {
      author: 'null',
      email: 'null',
      homepage: 'null'
    };
  }

  apply(compiler) {
    const options = this.options;
    compiler.plugin('emit', function(compilation, callback) {
      compilation.chunks.forEach(function(chunk) {
        chunk.files.forEach(function(filename) {
          const source = compilation.assets[filename].source();
          const authorInfo = `\n @Author: ${options.author} \n\n @Email: ${options.email} \n\n @Homepage: ${options.homepage} \n\n @Date: ${new Date()} \n\n`;
          const rawSource = `${authorInfo} \n\n ${source}`;
          Promise.resolve(rawSource).then(source => {
            compilation.assets[filename] = {
              source: () => source,
              size: () => source.length
            };
            callback();
          });
        });
      });
    });
  }
}

module.exports = IslandWebpackPlugin;
