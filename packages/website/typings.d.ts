declare module "rehype-react" {
  import * as React from "react";

  interface Options {
    createElement: typeof React.createElement;
    components: {
      [tagName: string]: React.ComponentType<any>;
    };
    prefix?: string;
  }

  class RehypeReact {
    constructor(options: Options);
    Compiler: (node: any) => any;
  }

  export = RehypeReact;
}
