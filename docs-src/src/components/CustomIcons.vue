<template>
  <div>
    <div class="code-snippet">
      <prism language="markup" :code="template" />
    </div>

    <vsa-list class="custom-icon">
      <vsa-item v-for="item in listOfItems" :key="item.id">
        <vsa-heading>
          {{ item.heading }}
        </vsa-heading>

        <vsa-icon>
          <span class="open">V</span>
          <span class="close">X</span>
        </vsa-icon>

        <vsa-content>
          {{ item.content }}
        </vsa-content>
      </vsa-item>
    </vsa-list>
  </div>
</template>

<script>
export default {
  props: {
    listOfItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      template: `<template>
  <vsa-item v-for="item in listOfItems" :key="item.id">
    <vsa-heading>
      {{ item.heading }}
    </vsa-heading>

    <vsa-icon>
      <span class="open">V</span>
      <span class="close">X</span>
    </vsa-icon>

    <vsa-content>
      {{ item.content }}
    </vsa-content>
  </vsa-item>
</template>

<style lang="scss" scoped>
.vsa-item {
  &--is-active {
    .vsa-item__trigger__icon {
      .open {
        display: none;
      }

      .close {
        display: block;
      }
    }
  }
  &__trigger__icon {
    .open {
      display: block;
    }

    .close {
      display: none;
    }
  }
}
</style>`
    };
  }
};
</script>

<style lang="scss" scoped>
.custom-icon {
  --vsa-highlight-color: rgba(85, 170, 119, 1);
  --vsa-max-width: 720px;
  margin: 1rem auto;

  .vsa-item {
    &--is-active {
      .vsa-item__trigger__icon {
        .open {
          display: none;
        }

        .close {
          display: block;
        }
      }
    }
    &__trigger__icon {
      .open {
        display: block;
      }

      .close {
        display: none;
      }
    }
  }
}
</style>
