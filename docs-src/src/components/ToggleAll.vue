<template>
  <div>
    <div class="code-snippet">
      <prism language="markup" :code="template" />
    </div>
    <div>
      <button type="button" @click="forceActive = true">
        Expand All
      </button>
      <button type="button" @click="forceActive = false">
        Collapse All
      </button>
      <button type="button" @click="forceActive = !forceActive">
        Toggle
      </button>
    </div>

    <vsa-list
      class="toggle-all"
      :init-active="true"
      :auto-collapse="false"
      :force-active="forceActive"
    >
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
      // The default should be set in sync with initActive
      forceActive: true,

      template: `<template>
  <!-- ... -->
    <div>
      <button type="button" @click="forceActive = true">
        Expand All
      </button>
      <button type="button" @click="forceActive = false">
        Collapse All
      </button>
      <button type="button" @click="forceActive = !forceActive">
        Toggle
      </button>
    </div>

    <vsa-list
      :init-active="true"
      :auto-collapse="false"
      :force-active="forceActive"
    >
      <vsa-item v-for="item in listOfItems" :key="item.id">
        <vsa-heading>
          {{ item.heading }}
        </vsa-heading>

        <vsa-content>
          {{ item.content }}
        </vsa-content>
      </vsa-item>
    </vsa-list>
  <!-- ... -->
</template>

<script>
  // ...
  data() {
    return {
      // The default should be set in sync with initActive
      forceActive: true
    };
  }
  // ...
<\/script>`
    };
  }
};
</script>

<style lang="scss" scoped>
.toggle-all {
  --vsa-highlight-color: rgba(177, 119, 77, 1);
  --vsa-max-width: 720px;
  margin: 1rem auto;
}
</style>
