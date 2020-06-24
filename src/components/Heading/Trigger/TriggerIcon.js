import "./TriggerIcon.scss";

export default {
  props: {
    isActive: {
      type: Boolean,
      required: true
    },
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
        staticClass: "vsa-item__trigger__icon",
        class: {
          "vsa-item__trigger__icon--is-default": !this.data.length,
          "vsa-item__trigger__icon--is-active": this.isActive
        },
        ref: "vsa-item__trigger__icon"
      },
      [...this.data]
    );
  }
};
