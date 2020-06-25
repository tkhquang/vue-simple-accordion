import merge from "lodash.merge";

import * as components from "./components";
import { DEFAULT_OPTIONS } from "./constants";

export * from "./components";
export default {
  install(Vue, options = {}) {
    Vue.prototype.$vsaOptions = merge({}, DEFAULT_OPTIONS, options);

    Object.entries(components).forEach(([name, component]) => {
      Vue.component(name, component);
    });
  }
};
