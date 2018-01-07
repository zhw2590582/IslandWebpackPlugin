import fs from 'fs';
import path from 'path';
import pify from 'pify';
import webpack from 'webpack';
import config from './webpack.config.js';

test('Insert author information and outputs JavaScript', async () => {
  await pify(webpack)(config({
    author: 'Harvey Zack',
    email: '717995589@qq.com',
    homepage: 'http://www.zhw-island.com'
  }));
  let bundle = fs.readFileSync(path.join(path.resolve(__dirname), 'bundle.js'), 'utf8');
  expect(bundle.includes('Harvey Zack')).toBeTruthy();
  expect(bundle.includes('717995589@qq.com')).toBeTruthy();
  expect(bundle.includes('http://www.zhw-island.com')).toBeTruthy();
});
