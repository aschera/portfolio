<!-- // -------------------------------------------------------------------------------------------------------- // -->
<!-- // -------------------------------------- App Main Section Component -------------------------------------- // -->

<template>

    <div class="story">

        <div class="story__text">
            <div class="tile__image tile__image--cropped">
                <img
                alt="image"
                :src=Item.itemImage>
            </div>

            <h3 class="heading-tertiary u-margin-bottom-small">
                owner: {{Item.itemAuthor}}
            </h3>

            <p>
               {{Item.itemDate}} <br>
               {{Item.itemNotes}}
            </p>

            <a href="#popup" class="btn-text">
                {{Item.link}}
            </a>

        </div>

    </div>

</template>

<script>

export default {

  props: ['strings','Item'],

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
    margin: $gutter;
    padding: $gutter ;
    border-radius: 4%;
    width: 100%;
    max-width: 28%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: $color-pink;
    color: $color-grey;


      @media (max-width: 1160px){
            flex: none;
            margin: $gutter ;
            max-width: none;
            width: auto;
            height: 100%;
      }

    & p {
        color: $color-white;
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
    outline: 0.1em solid $color-grey;
    border: 0.1em solid $color-grey;
    z-index: 0;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0, 1);

    @media (max-width: 1023px) {
        margin-top:0;
        width: 100%;
    }

    img {
        width: 100%; */
        height: 100%;
        display: block;
        min-width: 60%;
        margin: 0 20%;
        overflow: hidden;
        transition: opacity 0.6s ease-out;
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