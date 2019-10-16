<!-- // -------------------------------------------------------------------------------------------------------- // -->
<!-- // -------------------------------------- App Main Section Component -------------------------------------- // -->

<template>

    <div class="story">

        <div class="story__text">
            <div class="tile__image tile__image--cropped">
                <img
                alt="image"
                style="
                width: 100%;
                display: block;
                position: absolute;
                bottom: 0px;
                left: 0px;
                right: 0px;
                top: 0px;
                overflow: hidden;
                transition: opacity 0.6s ease-out;"
                :src=appointment.aptImage>
            </div>

            <h3 class="heading-tertiary u-margin-bottom-small">
                owner: {{appointment.petOwner}}
            </h3>

            <transition name="fade">
                <p v-if="show">Toggle this</p>
            </transition>

            <p>
               {{this.formattedDate}} <br>
               {{appointment.aptNotes}}
            </p>

            <a href="#popup" class="btn-text">
                {{appointment.link}}
            </a>

        </div>

    </div>

</template>

<script>

export default {

  props: ['strings','appointment'],

  name: 'BlogStory',
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



// main wrapper
.story {
    position: relative;
    margin: 0 0 2em 0;
    padding: $gutter ;

    width: 100%;
    max-width: calc((100% - 48px) / 3);
    height: 430px;

    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    background-color: $color-black;
    color: $color-grey;


      @media (max-width: 1160px){
            flex: none;
            margin: 0 0 $gutter  0 !important;
            max-width: none;
            width: auto;
            height: 100%;
      }

    & p {
        color: #fff;
        overflow: hidden;
        position: relative;
        line-height: $line-height;

        @media (max-width: 56.25em) {
            font-size: 1.5rem;
        }
    }
} // end .story class

.story__text {
    width: 100%;
}

.tile__image {
    position: relative;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    outline: 1px solid $color-grey;
    border: 1px solid $color-grey;
    z-index: 0;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0, 1);

    @media (max-width: 1023px) {
        margin-top:0;
        width: 100%;
    }

    img {
        width: 100%;
        display: block;
    }
}

.tile__image--cropped {
    padding-top: 48.61111%;

    @media (max-width: 1023px) {
        padding-top:56.79758%;
    }

    img {
        position: absolute;
        top: 0;
    }
}


</style>