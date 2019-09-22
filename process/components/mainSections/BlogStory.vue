<!-- // -------------------------------------------------------------------------------------------------------- // -->
<!-- // -------------------------------------- App Main Section Component -------------------------------------- // -->

<template>

    <div class="story">

        <figure class="story__shape">
            <img :src="appointment.aptImage" alt="1" class="story__image">
            <figcaption class="story__caption">
                {{appointment.petName}}
            </figcaption>
        </figure>

        <div class="story__text">

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
    margin-right: 24px;
    padding: 24px;

    width: 100%;
    max-width: calc((50% - 48px) / 3);
    height: 430px;

    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    background-color: #222;
    color: #aaa;


      @media (max-width: 1160px){
            flex: none;
            margin: 0 0 24px 0 !important;
            max-width: none;
            width: auto;
      }

    & p {
        color: #fff;
        /* hide text if it more than N lines  */
        overflow: hidden;
        /* for set '...' in absolute position */
        position: relative;
        /* use this value to count block height */
        line-height: $line-height;
        /* max-height = line-height (1.2) * lines max number (3) */
        //max-height: 5em;
        /* fix problem when last visible word doesn't adjoin right side  */
        text-align: justify;
        /* place for '...' */
        //margin-right: -1em;
        //padding-right: 1em;

        &:before {
            /* points in the end */
            content: '...';
            /* absolute position */
            position: absolute;
            /* set position to right bottom corner of block */
            right: 0;
            bottom: 0;
        }

        &:after {
            /* points in the end */
            content: '';
            /* absolute position */
            position: absolute;
            /* set position to right bottom corner of text */
            right: 0;
            /* set width and height */
            width: 1em;
            height: 1em;
            margin-top: 0.2em;

        }

        @media (max-width: 56.25em) {
            font-size: 1.5rem;
        }
    }

    .story__image {
        height: 100%;
        transform: translateX(-4rem) scale(1.4);
        backface-visibility: hidden;
        transition: $transitions;
    }

    &:hover .story__caption {
        opacity: 1;
        transform: translate(-50%, -50%);
    }

    &:hover .story__image {
        transform: translateX(-2rem) scale(1);
        filter: blur(3px), brightness(80%);
    }
}

// image on the left
figure.story__shape {
    width: 7rem;
    height: 7rem;
    margin: 1em;
    float: left;
    -webkit-shape-outside: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
    -webkit-clip-path: circle(45% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
    backface-visibility: hidden;

    & image.story__image {
        height: 100%;
        transform: translateX(-4rem) scale(1.4);
        backface-visibility: hidden;
        transition:$transitions;
    }

    & figcaption.story__caption {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 20%);
        text-transform: uppercase;
        font-size: 1.7rem;
        text-align: center;
        opacity: 0;
        transition: $transitions;
        backface-visibility: hidden;
    }
}

// text to the right
div.story__text {
    // stuff
}

</style>
