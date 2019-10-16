<template>
  <div class="panel panel-primary">

    <div class="panel-heading apt-addheading"
      @click="hidepanel=!hidepanel">
      <span class="glyphicon glyphicon-plus"></span> Add Item
    </div><!-- panel-heading -->

    <div class="panel-body"
      :class="{ hide: hidepanel }">

      <form class="add-Item form-horizontal"
        @submit.prevent="requestAdd">

        <div class="form-group">
          <label class="col-sm-2 control-label" htmlFor="itemName">Pet Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="itemName" placeholder="Pet's Name"
            v-model="formData.itemName" />
          </div><!-- col-sm-10 -->
        </div><!-- form-group -->

        <div class="form-group">
          <label class="col-sm-2 control-label" htmlFor="itemAuthor">Pet Owner</label>
          <div class="col-sm-10">
            <input type="text" class="form-control"
              id="itemAuthor" placeholder="Owner's Name"
              v-model="formData.itemAuthor" />
          </div><!-- col-sm-10 -->
        </div><!-- form-group -->

        <div class="form-group">
          <label class="col-sm-2 control-label" htmlFor="itemDate">Date</label>
          <div class="col-sm-4">
            <input type="date" class="form-control" id="itemDate"
            v-model="formData.itemDate" />
          </div><!-- col-sm-4 -->
          <label class="col-sm-2 control-label" htmlFor="aptTime">Time</label>
          <div class="col-sm-4">
            <input type="time" class="form-control" id="aptTime"
            v-model="formData.aptTime" />
          </div><!-- col-sm-4 -->
        </div><!-- form-group -->

        <div class="form-group">
          <label class="col-sm-2 control-label" htmlFor="itemNotes">Apt. Notes</label>
          <div class="col-sm-10">
            <textarea class="form-control" rows="4" cols="50" id="itemNotes" placeholder="Item Notes"
            v-model="formData.itemNotes"></textarea>
          </div><!-- col-sm-10 -->
        </div><!-- form-group -->

        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-primary pull-right">Add Item</button>
          </div><!-- col-sm-offset-2 -->
        </div><!-- form-group -->

      </form>
    </div><!-- panel-body -->
  </div><!-- panel-primary -->
</template>

<script>

export default {

  name: 'AddItems',
  data() {
    return {
      hidepanel: true,
      formData: []
    } //return
  }, //data
  methods: {
    requestAdd: function() {
      var parsedData = {
        itemName: this.formData.itemName,
        itemAuthor: this.formData.itemAuthor,
        itemDate: this.formData.itemDate + ' ' + this.formData.aptTime,
        itemNotes: this.formData.itemNotes
      }
      this.$emit('addRecord', parsedData);
      this.formData = [];
      this.hidepanel = true;
    } //requestAdd
  } //methods
} //default
</script>

<style scoped>

  .panel-heading {
    cursor: pointer;
  }

</style>
