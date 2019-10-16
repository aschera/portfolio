<template>
  <li class="pet-item media">

    <div class="media-left">
      <button class="pet-delete btn btn-xs btn-danger"
        @click="requestRemoval">
      <span class="glyphicon glyphicon-remove"></span></button>
    </div><!-- media-left -->

    <div class="pet-info media-body">

      <div class="pet-head">
        <span class="pet-name"
          contenteditable="true"
          ref="itemName"
          @blur="requestUpdate('itemName')"
        >{{Item.itemName}}</span>
        <span class="apt-date pull-right">{{this.formattedDate}}</span>
      </div><!-- pet-head -->

      <div class="owner-name">
        <span class="label-item">Owner:</span>
        <span
          contenteditable="true"
          ref="itemAuthor"
          @blur="requestUpdate('itemAuthor')"
        >{{Item.itemAuthor}}</span>
      </div>
      <div class="apt-notes"
        contenteditable="true"
        ref="itemNotes"
        @blur="requestUpdate('itemNotes')"
      >{{Item.itemNotes}}</div>

    </div><!-- pet-info -->

  </li><!-- pet-item -->


</template>

<script>

import moment from 'moment';

export default {
  name: 'PetItemItem',
  props: ['Item'],
  methods: {

    requestRemoval: function() {
      this.$parent.$emit('remove', this.Item);
    }, //requestremoval

    requestUpdate: function(myRef) {
      this.Item[myRef] =
        this.$refs[myRef].innerText;
    }

  }, //methods

  computed: {
    formattedDate: function() {
      return moment(new Date(this.Item.itemDate)).format('MM-DD-YY, h:mm a');
    } //formattedDate
  } //computed
} //default
</script>

<style scoped>

  .pet-item {
    border-bottom: 1px dotted gray;
    padding-bottom: 10px;
  }

  .pet-item:last-child {
    border-bottom: none;
  }

  .pet-name {
    font-weight: 600;
    color: #337ab7;
    font-size: 1.3em;
    line-height: 100%;
  }

  .pet-info {
    font-size: 1.7em;
  }

  .label-item {
    font-weight: 600;
    color: #667B82;
  }

  .pet-delete {
    font-size: 1.2em;
  }

  .apt-date {
    font-style: italic;
  }

  [contenteditable]:focus {
    outline: none;
    background: #EEE8D6;
  }
</style>
