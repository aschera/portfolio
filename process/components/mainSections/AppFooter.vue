<!-- // -------------------------------------------------------------------------------------------------- // -->
<!-- // -------------------------------------- App Footer Component -------------------------------------- // -->

<template>

    <footer>
      <div class="content container">
        <div class="row">
          <div class="col">
            <p>
              <span class="footer__text">
                {{strings.website_author}}
              </span>
              <em class="footer__date">
                &copy; {{strings.year}}
              </em>
            </p>
          </div><!-- col -->
        </div><!-- row -->
      </div><!-- content container -->
    </footer><!-- footer -->

</template>

<script>

export default {

  props: ["strings"],

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

  overflow: unset;
  margin-left: 60px;
  transition: $transitions;

    @media only screen and (min-width: 1600px) {
      margin-left:185px;
    }

.container {

  .row {

    div.col {
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