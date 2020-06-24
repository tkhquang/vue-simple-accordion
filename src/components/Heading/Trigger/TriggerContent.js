import "./TriggerContent.scss";

export default {
  props: {
    tag: {
      type: String,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  },

  render(h) {
    return h(
      this.tag,
      {
        staticClass: "vsa-item__trigger__content",
        ref: "vsa-item__trigger__content"
      },
      [...this.data]
    );
  }
};
