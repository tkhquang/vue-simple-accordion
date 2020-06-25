<template>
  <div class="container">
    <nav class="navigation">
      <ul class="navigation__list">
        <li
          v-for="example in listOfExamples"
          :key="example.id"
          class="navigation__item"
        >
          <a
            :href="`#${example.id}`"
            :name="`#${example.id}`"
            class="navigation__item__link"
            @click="(e) => handleAnchorClick(example.id)"
          >
            {{ example.text }}
          </a>
        </li>
      </ul>
    </nav>
    <vsa-list class="example-list" :auto-collapse="true">
      <vsa-item
        v-for="example in listOfExamples"
        :id="example.id"
        :key="example.id"
        :on-heading-click="({ item }) => scrollToElement(item.$el)"
      >
        <vsa-heading>
          {{ example.text }}
        </vsa-heading>
        <vsa-content>
          <component :is="example.component" :list-of-items="listOfItems" />
        </vsa-content>
      </vsa-item>
    </vsa-list>
  </div>
</template>

<script>
import AutoCollapse from "./components/AutoCollapse";
import InitActive from "./components/InitActive";
import ToggleAll from "./components/ToggleAll";
import FilterActive from "./components/FilterActive";
import ReturnValue from "./components/ReturnValue";
import CustomIcons from "./components/CustomIcons";
import Recursive from "./components/Recursive";

import { dummy } from "./constants";

const Examples = [
  {
    id: "auto-collapse",
    component: "AutoCollapse",
    text: "Auto Collapse (default)"
  },
  {
    id: "init-active",
    component: "InitActive",
    text: "Expand By Default"
  },
  {
    id: "toggle-control",
    component: "ToggleAll",
    text: "Toggle Control"
  },
  {
    id: "filter-item",
    component: "FilterActive",
    text: "Filter Item"
  },
  {
    id: "return-value",
    component: "ReturnValue",
    text: "Return Value"
  },
  {
    id: "custom-icon",
    component: "CustomIcons",
    text: "Custom Icons"
  },
  {
    id: "recursive",
    component: "Recursive",
    text: "Recursive"
  }
];

export default {
  components: {
    AutoCollapse,
    InitActive,
    ToggleAll,
    FilterActive,
    ReturnValue,
    CustomIcons,
    Recursive
  },

  data() {
    return {
      listOfItems: dummy.listOfItems,
      listOfExamples: Examples
    };
  },

  mounted() {
    const hash = window.location.hash;
    if (hash) {
      this.handleAnchorClick(hash.replace("#", ""));
    }
  },

  methods: {
    scrollToElement(el) {
      // Wait for transition effects to finish
      setTimeout(() => {
        if (el) {
          window.scrollTo({
            top: el.getBoundingClientRect().top + window.pageYOffset,
            behavior: "smooth"
          });
        }
      }, 310);
    },

    handleAnchorClick(id) {
      const el = document.getElementById(id);
      if (el.dataset.vsaActive === "true") {
        return;
      }
      el.querySelector(".vsa-item__heading > .vsa-item__trigger").click();
    }
  }
};
</script>

<style lang="scss">
.container {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: visible;
}

.navigation {
  width: 100%;
  display: flex;
  justify-content: center;
  position: static;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #ffffff;
  z-index: 1;

  .navigation__list {
    max-width: 320px;
    list-style: none;
    margin: 1rem;
    padding: 0;

    .navigation__item {
      margin: 0;
      padding: 0;
      &__link {
        display: block;
        margin: 1rem 0;
      }
    }
  }
}

@media only screen and (min-width: 720px) {
  .container {
    flex-direction: row;
  }

  .navigation {
    position: sticky;
  }
}

.code-snippet {
  margin: 1rem auto;
}

.example-list {
  flex: 1 0 70%;

  &.vsa-list {
    --vsa-max-width: 100%;
    --vsa-min-width: 300px;
    --vsa-content-padding: 0;
    --vsa-heading-padding: 0.25rem 1rem;
    --vsa-default-icon-size: 0.6;
    box-shadow: none;
  }

  & > .vsa-item {
    & > .vsa-item__heading {
      & > .vsa-item__trigger {
        text-transform: uppercase;

        & > .vsa-item__trigger__icon {
          //
        }
      }
    }
  }

  & > .vsa-item--is-active {
    & > .vsa-item__heading {
      & > .vsa-item__trigger {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }

    & > .vsa-item__content {
      max-width: 720px;
      margin: 1rem auto;
      padding: 0 1rem;
    }
  }
}
</style>
