<template>
  <div>
    <div class="code-snippet">
      <prism language="markup" :code="template" />
    </div>
    <div>
      <button type="button" @click="() => handleToggle(1)">
        Filter ID !== 1
      </button>
      <button type="button" @click="() => handleToggle(2)">
        Filter ID !== 2
      </button>
      <button type="button" @click="() => handleToggle(3)">
        Filter ID !== 3
      </button>
    </div>

    <vsa-list class="filter-active" :auto-collapse="false">
      <vsa-item
        v-for="item in listOfItems"
        :key="item.id"
        :force-active="isForced(item)"
      >
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
      forceActive: undefined,
      template: `<template>
  <!-- ... -->
    <div>
      <button type="button" @click="() => handleToggle(1)">
        Filter ID !== 1
      </button>
      <button type="button" @click="() => handleToggle(2)">
        Filter ID !== 2
      </button>
      <button type="button" @click="() => handleToggle(3)">
        Filter ID !== 3
      </button>
    </div>

    <vsa-list :auto-collapse="false">
      <vsa-item
        v-for="item in listOfItems"
        :key="item.id"
        :force-active="isForced(item)"
      >
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
      forceActive: undefined
    };
  }
  // ...
<\/script>`
    };
  },

  methods: {
    isForced(item) {
      return item.id !== this.forceActive;
    },

    handleToggle(id) {
      this.forceActive = id;
    }
  }
};
</script>

<style lang="scss" scoped>
.filter-active {
  --vsa-max-width: 720px;
  --vsa-default-icon-size: 0.8;
  margin: 1rem auto;
}
</style>
