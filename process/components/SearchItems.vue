<template>
  <div class="row search-Items">
    <div class="col-sm-offset-3 col-sm-6">

      <div class="input-group">

        <input id="SearchApts" placeholder="Search" type="text" class="form-control" aria-label="Search Items"
        v-model="searchTerm" />

        <div class="input-group-btn">
          <button type="button" class="btn btn-primary dropdown-toggle"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span class="caret"></span></button>

            <ul class="dropdown-menu dropdown-menu-right">

              <li><a href="#" id="itemName"
                @click="requestKeyChange('itemName')">Pet Name
              <span class="glyphicon glyphicon-ok"
                v-if="myKey==='itemName'"></span></a></li>

              <li><a href="#" id="itemDate"
                @click="requestKeyChange('itemDate')">Date
                <span class="glyphicon glyphicon-ok"
                v-if="myKey==='itemDate'"></span></a></li>

              <li><a href="#" id="ownerName"
                @click="requestKeyChange('itemAuthor')">Owner
                <span class="glyphicon glyphicon-ok"
                v-if="myKey==='itemAuthor'"></span></a></li>

              <li role="separator" class="divider"></li>

              <li><a href="#" id="asc"
                @click="requestDirChange('asc')">Asc
                <span class="glyphicon glyphicon-ok"
                  v-if="myDir==='asc'"></span></a></li>

              <li><a href="#" id="desc"
                @click="requestDirChange('desc')">Desc
                <span class="glyphicon glyphicon-ok"
                  v-if="myDir==='desc'"></span></a></li>
            </ul>
        </div><!-- input-group-btn -->
      </div><!-- input-group -->
    </div><!-- col-sm-offset-3 -->
  </div><!-- search-Items -->
</template>

<script>
export default {

  name: 'SearchItems',
  data() {
    return {
      searchTerm: ''
    } //return
  }, //data

  watch: {
    searchTerm: function() {
      this.$emit('searchRecords', this.searchTerm);
    } //searchTerm
  }, //watch

  props: ['myKey', 'myDir'],

  methods: {

    requestKeyChange: function(value) {
      this.$emit('keyChange', value);
    }, //requestKeyChange

    requestDirChange: function(value) {
      this.$emit('dirChange', value);
    } //requestKeyChange

  }

} // export
</script>