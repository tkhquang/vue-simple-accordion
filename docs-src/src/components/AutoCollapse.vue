<template>
  <div>
    <div class="code-snippet">
      <prism language="markup" :code="template" />
    </div>
    <vsa-list class="auto-collapse">
      <vsa-item v-for="item in listOfItems" :key="item.id">
        <vsa-heading>
          {{ item.heading }}
        </vsa-heading>

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
  <vsa-list>
    <vsa-item v-for="item in listOfItems" :key="item.id">
      <vsa-heading>
        {{ item.heading }}
      </vsa-heading>

      <vsa-content>
        {{ item.content }}
      </vsa-content>
    </vsa-item>
  </vsa-list>
</template>`
    };
  }
};
</script>

<style lang="scss" scoped>
.auto-collapse {
  --vsa-highlight-color: rgba(85, 170, 119, 1);
  --vsa-max-width: 720px;
  --vsa-default-icon-size: 0.8;
  margin: 1rem auto;
}
</style>
