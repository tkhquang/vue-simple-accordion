<template>
  <div>
    <div class="code-snippet">
      <prism language="markup" :code="recursiveTemplate" />
      <prism language="markup" :code="template" />
    </div>
    <div>
      <label for="level">Level </label>
      <select
        id="level"
        v-model="level"
        name="level"
        class=""
        @change="onChange"
      >
        <option v-for="lvl in 5" :key="lvl" class="" :value="lvl">
          {{ lvl }}
        </option>
      </select>
    </div>
    <vsa-list class="recursive-sample" :auto-collapse="true">
      <RecursiveAccordion v-for="item in data" :key="item.id" :item="item" />
    </vsa-list>
  </div>
</template>

<script>
export default {
  name: "RecursiveAccordion",

  props: {
    listOfItems: {
      type: Array,
      required: true
    }
  }
};
</script>

<script>
import RecursiveAccordion from "./RecursiveAccordion";

export default {
  components: {
    RecursiveAccordion
  },
  props: {
    listOfItems: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      data: [],
      level: 1,
      recursiveTemplate: `<template>
  <vsa-item>
    <vsa-heading>
      {{ item.heading }}
    </vsa-heading>
    <vsa-content v-if="Array.isArray(item.content)">
      <vsa-list :auto-collapse="true">
        <RecursiveAccordion
          v-for="child in item.content"
          :key="child.id"
          :item="child"
        />
      </vsa-list>
    </vsa-content>
    <vsa-content v-else>
      {{ item.content }}
    </vsa-content>
  </vsa-item>
</template>

<script>
export default {
  name: "RecursiveAccordion",

  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
<\/script>`,
      template: `<template>
  <div>
    <select v-model="level" name="level" @change="onChange">
      <option v-for="lvl in 5" :key="lvl" :value="lvl">
        {{ lvl }}
      </option>
    </select>
    <vsa-list :auto-collapse="true">
      <RecursiveAccordion v-for="item in data" :key="item.id" :item="item" />
    </vsa-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      level: 1
    };
  },
  created() {
    this.data = this.generateData(this.listOfItems, this.level);
  },

  methods: {
    onChange() {
      this.data = this.generateData(this.listOfItems, this.level);
    },

    generateData(items, level) {
      if (level === 1) {
        return items;
      }
      const results = items.map((item) => {
        return {
          ...item,
          id: \`\${item.id}.\${level}\`,
          content: [...this.generateData(items, level - 1)]
        };
      });
      return results;
    }
  }
};
<\/script>`
    };
  },

  created() {
    this.data = this.generateData(this.listOfItems, this.level);
  },

  methods: {
    onChange() {
      this.data = this.generateData(this.listOfItems, this.level);
    },

    generateData(items, level) {
      if (level === 1) {
        return items;
      }
      const results = items.map((item) => {
        return {
          ...item,
          id: `${item.id}.${level}`,
          content: [...this.generateData(items, level - 1)]
        };
      });
      return results;
    }
  }
};
</script>

<style lang="scss" scoped>
.recursive-sample {
  --vsa-highlight-color: rgba(85, 170, 119, 1);
  --vsa-max-width: 720px;
  margin: 1rem auto;
}
</style>
