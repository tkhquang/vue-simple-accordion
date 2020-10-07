import merge from "lodash.merge";

import { DEFAULT_OPTIONS } from "./../constants";
import {
  // Force chomp
  Heading,
  Trigger,
  TriggerContent,
  TriggerIcon
} from "./Heading/";
import { Content } from "./Content/";

import "./VsaItem.scss";

export default {
  props: {
    transition: {
      type: String,
      required: false,
      default: undefined
    },
    forceActive: {
      type: Boolean,
      required: false,
      default: undefined
    },
    initActive: {
      type: Boolean,
      required: false,
      default: undefined
    },
    level: {
      type: [String, Number],
      required: false,
      default: undefined
    },
    onHeadingClick: {
      type: Function,
      required: false,
      default: () => {}
    }
  },

  inject: {
    vsaList: {
      type: Object,
      required: true
    },
    vsaListProps: {
      type: Function,
      required: true
    }
  },

  data() {
    return {
      isActive: false
    };
  },

  computed: {
    rootProps() {
      return this.vsaListProps();
    },

    mergedOptions() {
      return this.getMergedOptions();
    },

    dataAttrs() {
      return this.getDataAttrs();
    },

    tags() {
      return this.mergedOptions.tags;
    },

    headingData() {
      return this.getComponent("VsaHeading");
    },

    iconData() {
      return this.getComponent("VsaIcon");
    },

    contentData() {
      return this.getComponent("VsaContent");
    }
  },

  watch: {
    mergedOptions: {
      handler(value) {
        if (typeof value.forceActive !== "undefined") {
          this.isActive = value.forceActive;
          return;
        }

        if (typeof value.initActive !== "undefined") {
          this.isActive = value.initActive;
        }
      },
      deep: true,
      immediate: true
    }
  },

  beforeDestroy() {
    this.vsaList.$emit("on-child-removed", this);
  },

  created() {
    this.$on("vsa-heading-click", (arg) => {
      this.onHeadingClick(arg);
    });

    this.vsaList.$emit("on-child-created", this);
  },

  methods: {
    getMergedOptions() {
      return merge(
        {},
        DEFAULT_OPTIONS,
        this.$vsaOptions,
        this.vsaList.$props,
        this.$props
      );
    },

    getComponent(name) {
      try {
        const wrapper = this.$slots.default.find((slot) => {
          if (typeof slot.componentOptions !== "undefined") {
            return new slot.componentOptions.Ctor().$options.name === name;
          }
        });

        if (!wrapper) {
          return [];
        }

        const children = wrapper.componentOptions.children;

        if (children) {
          return children;
        }

        return [wrapper];
      } catch (error) {
        return [];
      }
    },

    getDataAttrs() {
      return {
        "data-vsa-list": `${this.vsaList._uid}`,
        "data-vsa-item": `${this._uid}`,
        "data-vsa-active": String(this.isActive)
      };
    },

    handleClick() {
      this.isActive = !this.isActive;

      this.$nextTick(() => {
        const data = {
          list: this.vsaList,
          item: this
        };
        this.$emit("vsa-heading-click", data);
      });

      if (this.mergedOptions.autoCollapse) {
        const children = this.vsaList._data.children;

        children.forEach((child) => {
          if (child._uid !== this._uid) {
            child._data.isActive = false;
          }
        });
      }
    },

    handleKeyPress(e) {
      if (this.mergedOptions.navigation) {
        const current = this.$el;
        let target;

        switch (e.keyCode) {
          // Arrow Down
          case 40:
            if (current.nextElementSibling) {
              target = current.nextElementSibling;
            }
            break;
          // Arrow Up
          case 38:
            if (current.previousElementSibling) {
              target = current.previousElementSibling;
            }
            break;
          // End
          case 35:
            var last = current.nextElementSibling;

            while (last) {
              if (last.nextElementSibling) {
                last = last.nextElementSibling;
              } else {
                break;
              }
            }

            if (last) {
              target = last;
            }
            break;
          // Home
          case 36:
            var first = current.previousElementSibling;

            while (first) {
              if (first.previousElementSibling) {
                first = first.previousElementSibling;
              } else {
                break;
              }
            }

            if (first) {
              target = first;
            }
            break;
          default:
            return;
        }

        if (target) {
          target
            .querySelector(".vsa-item__heading > .vsa-item__trigger")
            .focus();
        }
      }
    }
  },

  render(h) {
    return h(
      this.tags["list__item"],
      {
        attrs: {
          id: `vsa-item-${this._uid}`,
          ...this.dataAttrs
        },
        staticClass: "vsa-item",
        class: {
          "vsa-item--is-active": this.isActive
        },
        style: this.styles,
        ref: "vsa-item"
      },
      [
        h(
          Heading,
          {
            attrs: {
              ...this.dataAttrs,
              ...(this.mergedOptions.roles["heading"] && {
                role: "heading",
                "aria-level": String(this.level)
              })
            },
            props: {
              tag: this.tags["item__heading"]
            }
          },
          [
            h(
              Trigger,
              {
                nativeOn: {
                  click: this.handleClick,
                  keydown: this.handleKeyPress
                },
                props: {
                  isActive: this.isActive
                },
                attrs: {
                  ...this.dataAttrs,
                  "aria-controls": `vsa-panel-${this._uid}`,
                  "aria-disabled": String(
                    !!(this.isActive && this.mergedOptions.forceActive)
                  )
                }
              },
              [
                h(TriggerContent, {
                  attrs: {
                    ...this.dataAttrs
                  },
                  props: {
                    tag: this.tags["heading__content"],
                    data: this.headingData
                  }
                }),
                h(TriggerIcon, {
                  attrs: {
                    ...this.dataAttrs
                  },
                  props: {
                    tag: this.tags["heading__icon"],
                    isActive: this.isActive,
                    data: this.iconData
                  }
                })
              ]
            )
          ]
        ),
        h(Content, {
          attrs: {
            id: `vsa-panel-${this._uid}`,
            ...this.dataAttrs,
            ...(this.mergedOptions.roles["region"] && {
              role: "region"
            }),
            "aria-labelledby": `vsa-item-${this._uid}`
          },
          props: {
            transition: this.mergedOptions.transition,
            tag: this.tags["item__content"],
            isActive: this.isActive,
            data: this.contentData
          }
        })
      ]
    );
  }
};
