import * as fs from "fs";
import * as ts from "typescript";
import colors from "./src/color";
import compile from "./scripts/compiler";

const theme = `
	interface Theme {
		name: string;
		colors: Colors;
	}

	interface Colors {
		[key: string]: {
			[key: number]: any;
		}
	};

	const theme: Theme = {
		name: 'blue',
		colors: ${JSON.stringify(colors)},
	};

	export default theme;
`;

const files = ["./computed/index.ts"];
files.map(fileName => fs.writeFileSync(fileName, theme));

compile(files, {
  noEmitOnError: true,
  noImplicitAny: true,
  target: ts.ScriptTarget.ES5,
  module: ts.ModuleKind.CommonJS,
  outDir: "build",
  declaration: true
});
