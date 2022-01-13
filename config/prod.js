import replace from "rollup-plugin-replace";
import uglify from "rollup-plugin-uglify";

import config from "./dev";

config.output.file = "html/app.js";
config.plugins.pop(); // remove dev replace
config.plugins.push(replace({ preventAssignment: true, "process.env.NODE_ENV": "production" }));
config.plugins.push(uglify());

export default config;
