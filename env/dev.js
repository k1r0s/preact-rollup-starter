import buble from "@rollup/plugin-buble";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { string } from "rollup-plugin-string";
import replace from "@rollup/plugin-replace";

export default {
  input: "src/index.jsx",
  output: {
    file: "static/app.js",
    format: "iife",
    sourcemap: true
  },
  plugins: [
    nodeResolve(),
    buble({ jsx: "h", exclude: "**/*.css" }),
    string({
      include: "**/*.css"
    }),
    replace({ preventAssignment: true, "process.env.NODE_ENV": "development" })
  ]
}
