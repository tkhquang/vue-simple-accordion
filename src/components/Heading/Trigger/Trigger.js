import "./Trigger.scss";

export default {
  props: {
    isActive: {
      type: Boolean,
      required: true
    }
  },

  render(h) {
    return h(
      "button",
      {
        attrs: {
          type: "button",
          "aria-expanded": String(this.isActive)
        },
        staticClass: "vsa-item__trigger",
        ref: "vsa-item__trigger"
      },
      this.$slots.default
    );
  }
};
