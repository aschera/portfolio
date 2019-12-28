<!-- // -------------------------------------------------------------------------------------------------------- // -->
<!-- // -------------------------------------- App Main Section Component -------------------------------------- // -->

<template>

    <div class="story tile">

        <a href="#popup" class="tile__link">
            <div class="story__text">
                <div class="tile__image tile__image--cropped">
                    <img
                    alt="image"
                    :src=Item.itemImage>
                </div>

                <h4 class=" tile__header heading-tertiary u-margin-bottom-small">
                    <span class="tile__link">
                        owner: {{Item.itemAuthor}}
                    </span>
                </h4>

                <p>
                {{Item.itemDate}} <br>
                {{Item.itemNotes}}
                </p>

                <div class="btn-text">
                    {{Item.link}}
                </div>

            </div>
        </a>
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

    color: $color-black;


      @media (max-width: 1160px){
            flex: none;
            margin: $gutter ;
            max-width: none;
            width: auto;
            height: 100%;
      }

    & p {
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
    background-color: $color-white;
    outline: 0.1em solid $color-grey;
    border: 0.1em solid $color-grey;
    z-index: 0;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0, 1);

    @media (max-width: 1023px) {
        margin-top:0;
        width: 100%;
    }

    img {
        height: 100%;
        display: block;
        border-radius: 5px;
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

.multi-up {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.multi-up .tile {
    padding: .75rem
}

@media screen and (max-width: 520px) {
    .multi-up>.tile {
        -ms-flex:1 1 100%;
        flex: 1 1 100%
    }
}

@media screen and (min-width: 521px) and (max-width:920px) {
    .multi-up>.tile {
        -ms-flex-preferred-size:50%;
        flex-basis: 50%;
        max-width: 50%
    }
}

@media screen and (min-width: 921px) {
    .multi-up>.tile:nth-child(odd) {
        -ms-flex-preferred-size:66.666%;
        flex-basis: 66.666%;
        max-width: 66.666%
    }

    .multi-up>.tile:nth-child(even) {
        -ms-flex-preferred-size: 33.333%;
        flex-basis: 33.333%;
        max-width: 33.333%
    }
}

.multi-up.multi-up--1 .tile {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%
}



@media screen and (min-width: 921px) {


    .multi-up--3.multi-up--hero .tile:nth-child(1n) {
        -ms-flex-preferred-size: 33.333%;
        flex-basis: 33.333%;
        max-width: 33.333%
    }


}


.multi-up--5>.tile:nth-child(2) {
    margin-bottom: 0
}

@media screen and (min-width: 521px) and (max-width:920px) {
    .multi-up--5>.tile:nth-child(1) {
        -ms-flex-preferred-size:100%;
        flex-basis: 100%;
        max-width: 100%
    }

    .multi-up--5:not([class*='multi-up--5 multi-up--'])>.tile:nth-child(2) {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        max-width: 100%;
        padding: 0
    }

    .multi-up--5>.tile:nth-child(2)>.tile {
        -ms-flex: 1 1 50%;
        flex: 1 1 50%;
        padding: 0 20px
    }
}

@media screen and (min-width: 921px) {


    .multi-up--5.multi-up--hero>.tile:nth-child(1n) {
        -ms-flex-preferred-size: 33.333%;
        flex-basis: 33.333%;
        max-width: 33.333%
    }

}

@media screen and (min-width: 921px) {
    .multi-up.multi-up--max .tile {
        -ms-flex-preferred-size:33.333%;
        flex-basis: 33.333%;
        max-width: 33.333%
    }

}



@media screen and (min-width: 521px) and (max-width:920px) {
    .multi-up--1.multi-up--slim .tile:nth-child(1n),.multi-up--2.multi-up--slim .tile:nth-child(1n),.multi-up--3.multi-up--slim .tile:nth-child(1n),.multi-up--4.multi-up--slim .tile:nth-child(1n),.multi-up--5.multi-up--slim .tile:nth-child(1n),.multi-up--max.multi-up--slim .tile:nth-child(1n) {
        -ms-flex-preferred-size:50%;
        flex-basis: 50%;
        max-width: 50%
    }
}

@media screen and (min-width: 921px) {
    .multi-up--1.multi-up--slim .tile:nth-child(1n),.multi-up--2.multi-up--slim .tile:nth-child(1n),.multi-up--3.multi-up--slim .tile:nth-child(1n),.multi-up--4.multi-up--slim .tile:nth-child(1n),.multi-up--5.multi-up--slim .tile:nth-child(1n),.multi-up--max.multi-up--slim .tile:nth-child(1n) {
        -ms-flex-preferred-size:33.333%;
        flex-basis: 33.333%;
        max-width: 33.333%
    }
}


.tile {
    margin: 0 0 3rem 0;
    padding: 0!important
}

.tile .ratio--2x1,.tile .tile__image--2x1 {
    display: block
}

.tile a {
    padding: 1.25rem;
    transition: box-shadow .3s cubic-bezier(.4,0,.2,1)
}

.tile > a:hover {
    box-shadow: 0 0 0 1px rgba(0,0,0,.16)
}

.tile>.tile {
    padding: 0
}

.tile__poster {
    position: relative;
    width: 100%
}

.tile__poster::after {
    border: 1px solid rgba(158,158,158,.3);
    content: '';
    pointer-events: none
}

.section--dark .tile a:hover {
    box-shadow: 0 0 0 1px rgba(255,255,255,.16)
}

.tile__image {
    display: block;
    width: 100%
}

.tile__link {
    color: inherit;
    display: block
}



</style>