import "./Content.scss";

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
    },
    transition: {
      type: String,
      required: true
    }
  },

  render(h) {
    return h(
      "transition",
      {
        attrs: {
          name: this.transition,
          appear: true
        }
      },
      [
        h(
          this.tag,
          {
            directives: [
              {
                name: "show",
                value: this.isActive
              }
            ],
            staticClass: "vsa-item__content",
            ref: "vsa-item__content"
          },
          [...this.data]
        )
      ]
    );
  }
};
