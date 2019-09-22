<!-- // -------------------------------------------------------------------------------------------------- // -->
<!-- // -------------------------------------- App Footer Component -------------------------------------- // -->

<template>

    <footer>
      <div class="content container-fluid">
        <div class="row">
          <div class="col-sm-6">
            <p>
              <span class="footer__text">
                {{strings.website-author}}
              </span>
              <em class="footer__date">
                &copy; {{strings.year}}
              </em>
            </p>
          </div><!-- col-sm-6 -->
        </div><!-- row -->
      </div><!-- content container -->
    </footer><!-- footer -->

</template>

<script>

export default {

  props: ['strings'],

  name: 'AppFooter',
  data() {
    return {
     // stuff
    } //return
  }, //data
  methods: {
    // functions
  } //methods
} //default
</script>

<style scoped lang="scss">

@import "../../assets/_variables.scss";

footer {
  margin-top: 5rem;
  border-top: 1px solid $color-red;

.container-fluid {

  .row {

    div.col-sm-6 {
      .footer__text {
        padding: 0 1rem;
        color: $color-red;
        text-transform: uppercase; 
        }
      .footer__date {
        color: $color-red;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.6rem; 
        }
      }
    }
  }
} // end footer element

</style>