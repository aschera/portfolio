<template>
  <ul class="Item-list">
    <Item-item
      v-for="(item, i) in Items"
      :Item="item"
      :key="i"
    />
  </ul>
</template>

<script>

import ItemListItem from './ItemListItem.vue';

export default {
  name: 'ItemList',

  props: ['Items'],

  components: {
    'Item-item': ItemListItem
  }, //components

} //export
</script>


<style scoped lang="scss">

@import "../assets/_variables.scss";

  .Item-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 1rem;
  }
</style>