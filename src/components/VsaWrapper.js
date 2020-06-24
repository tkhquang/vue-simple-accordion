const Wrapper = {
  extend: {
    props: {
      tag: {
        type: String,
        required: false,
        default: "div"
      }
    },

    render(h) {
      return h(this.tag, this.$slots.default);
    }
  }
};

const VsaHeading = {
  components: {
    Wrapper
  },
  name: "VsaHeading"
};

const VsaContent = {
  components: {
    Wrapper
  },
  name: "VsaContent"
};

const VsaIcon = {
  components: {
    Wrapper
  },
  name: "VsaIcon"
};

export { VsaHeading, VsaContent, VsaIcon };
