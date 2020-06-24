import "./Heading.scss";

export default {
  props: {
    tag: {
      type: String,
      required: true
    }
  },

  render(h) {
    return h(
      this.tag,
      {
        staticClass: "vsa-item__heading",
        ref: "vsa-item__heading"
      },
      this.$slots.default
    );
  }
};
