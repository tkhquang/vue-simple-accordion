<template>
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
</script>
