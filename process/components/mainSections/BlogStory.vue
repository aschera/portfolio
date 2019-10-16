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
                src="https://images.unsplash.com/photo-1569243969448-c8c5eccfc940?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80">
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
    padding: 24px;

    width: 100%;
    max-width: calc((100% - 48px) / 3);
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
}

.story__text {
    width: 100%;
}

.tile__image {
    position: relative;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    outline: 1px solid #ebeae9;
    border: 1px solid #ebeae9;
    z-index: 0;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0, 1)
}

@media (max-width: 1023px) {
    .tile__image {
        margin-top:0;
        width: 100%
    }
}

.tile__image--proportional img,.tile__image--cropped img {
    position: absolute;
    top: 0
}

.tile__image--cropped,.tile__image--empty {
    padding-top: 48.61111%
}

@media (max-width: 1023px) {
    .tile__image--cropped,.tile__image--empty {
        padding-top:56.79758%
    }
}

.tile--large .tile__image--cropped,.tile--large .tile__image--empty {
    padding-top: 0;
    height: 100%
}

.tile__image--empty {
    border-width: 0 0 0 1px;
    border-style: solid;
    border-color: currentColor;
    overflow: visible
}

.tile__image--empty::before,.tile__image--empty::after {
    content: "";
    height: 1px;
    position: absolute;
    display: block
}

.tile__image--empty::before {
    right: 1px;
    top: 0;
    bottom: 0;
    height: auto;
    width: 2.73438vw;
    border-width: 0 1px;
    border-style: solid;
    border-color: currentColor
}

.tile__image--empty::after {
    right: 2.73438vw;
    top: 0;
    background: currentColor;
    width: 18.125vw;
    transform-origin: right top;
    transform: rotate(-45deg);
    transition: transform 0.7s cubic-bezier(0.4, 0, 0, 1)
}

@media (max-width: 1023px) {
    .tile__image--empty {
        display:none
    }
}

.tile--large .tile__image {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 60.69057%
}

@media (max-width: 1023px) {
    .tile--large .tile__image {
        position:relative;
        width: 100%;
        height: 50.13333vw
    }
}

.tile__image img {
    width: 100%;
    display: block
}

</style>