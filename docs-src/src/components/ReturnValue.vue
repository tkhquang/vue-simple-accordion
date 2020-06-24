<template>
  <div>
    <div class="code-snippet">
      <prism language="markup" :code="template" />
    </div>
    <vsa-list class="return-value" :init-active="false" :auto-collapse="true">
      <vsa-item
        v-for="item in listOfItems"
        :key="item.id"
        :on-heading-click="onHeadingClick"
      >
        <vsa-heading>
          {{ item.heading }}
        </vsa-heading>

        <vsa-content>
          {{ item.content }}
        </vsa-content>
      </vsa-item>
    </vsa-list>
    <div class="result-panel">
      <div>
        You have just clicked:
      </div>
      <prism language="markup" :code="element" />
    </div>
  </div>
</template>

<script>
/* eslint-disable no-useless-escape */

export default {
  props: {
    listOfItems: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      element: null,
      script: `data() {
  return {
    element: null
  };
},

methods: {
  onHeadingClick(data) {
    this.element = data.item.$el.innerHTML;
  }
}`,
      template: `<template>
  <!-- ... -->
    <vsa-list>
      <vsa-item
        v-for="item in listOfItems"
        :key="item.id"
        :on-heading-click="onHeadingClick"
      >
        <vsa-heading>
          {{ item.heading }}
        </vsa-heading>

        <vsa-content>
          {{ item.content }}
        </vsa-content>
      </vsa-item>
    </vsa-list>
    <div>
      <div>
        You have just clicked:
      </div>
      <code>
        {{ element }}
      </code>
    </div>
  <!-- ... -->
<template>

<script>
  // ...
  data() {
    return {
      element: null
    };
  },

  methods: {
    onHeadingClick(data) {
      this.element = data.item.$el.innerHTML;
    }
  }
  // ...
<\/script>`
    };
  },

  methods: {
    onHeadingClick(data) {
      this.element = data.item.$el.innerHTML;
    }
  }
};
</script>

<style lang="scss" scoped>
.return-value {
  --vsa-max-width: 720px;
  margin: 1rem auto;
}
.result-panel {
  margin: 1rem auto;
  max-width: 720px;
}
</style>
