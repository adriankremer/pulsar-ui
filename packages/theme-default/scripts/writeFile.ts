import * as fs from "fs";
const mkdirp = require("mkdirp");
const getDirName = require("path").dirname;

function writeFileSync(
  path: string,
  contents: string,
  cb?: (input: any) => void
) {
  mkdirp(getDirName(path), function(err: Error) {
    if (err && cb) return cb(err);

    fs.writeFileSync(path, contents);
  });
}

export default writeFileSync;
