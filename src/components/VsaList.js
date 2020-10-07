import merge from "lodash.merge";

import { DEFAULT_OPTIONS } from "./../constants";
import "./VsaList.scss";

export default {
  props: {
    tags: {
      type: Object,
      required: false,
      default: Object
    },
    transition: {
      type: String,
      required: false,
      default: undefined
    },
    initActive: {
      type: Boolean,
      required: false,
      default: undefined
    },
    forceActive: {
      type: Boolean,
      required: false,
      default: undefined
    },
    autoCollapse: {
      type: Boolean,
      required: false,
      default: undefined
    },
    roles: {
      type: Object,
      required: false,
      default: Object
    },
    navigation: {
      type: Boolean,
      required: false,
      default: undefined
    }
  },

  provide() {
    return {
      vsaList: this,
      vsaListProps: () => {
        return this.$props;
      }
    };
  },

  data() {
    return {
      children: []
    };
  },

  computed: {
    mergedOptions() {
      return this.getMergedOptions();
    }
  },

  methods: {
    getMergedOptions() {
      return merge({}, DEFAULT_OPTIONS, this.$vsaOptions, this.$props);
    }
  },

  created() {
    this.$on("on-child-created", (newChild) => {
      this.children.push(newChild);
    });

    this.$on("on-child-removed", (removedChild) => {
      this.children = this.children.filter(
        (child) => child._uid !== removedChild._uid
      );
    });
  },

  render(h) {
    return h(
      this.mergedOptions.tags["list"],
      {
        attrs: {
          id: `vsa-list-${this._uid}`,
          "data-vsa-list": `${this._uid}`,
          ...(this.mergedOptions.roles["presentation"] && {
            role: "presentation"
          })
        },
        staticClass: "vsa-list",
        ref: "vsa-list"
      },
      this.$slots.default
    );
  }
};
