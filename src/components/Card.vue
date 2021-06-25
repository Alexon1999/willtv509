<template>
  <!-- https://codepen.io/faelplg/pen/MWwxred -->
  <!-- https://codepen.io/jorgemoovein-the-bashful/pen/rNOXXxb -->
  <div class="card">
    <div class="card__side card__side--back">
      <div class="card__cover">
        <h4 class="card__heading">
          <span class="card__heading-span">Skill Set</span>
        </h4>
      </div>
      <div class="card__details">
        <ul>
          <li>test</li>
        </ul>
      </div>
    </div>

    <div class="card__side card__side--front">
      <a href="#"
        ><img
          src="https://i.ibb.co/ThPNnzM/blade-runner.jpg"
          class="card__poster"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style>
.card {
  width: 200px;
  min-height: 200px;
  height: 260px;
  flex: initial;
  position: relative;
  background: #0f171e;
  box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
  -moz-perspective: 200rem;
  perspective: 200rem;
  margin: 0 2rem;
}
.card__side {
  height: 260px;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  -webkit-backface-visibility: hidden;
  /* We don't want to see the back part of the element. */
  backface-visibility: hidden;
  /* We don't want to see the back part of the element. */
  border-radius: 3px;
  overflow: hidden;
  /* The image is overflowing the parent. */
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.15);
}
/* .card__side--front {
  background-image: linear-gradient(
      to right bottom,
      rgba(30, 11, 54, 0.65),
      rgba(202, 55, 130, 0.7)
    ),
    url(https://cdn.spacetelescope.org/archives/images/screen/heic0406a.jpg);
} */
.card__side--back {
  background-color: #fff;
  transform: rotateY(180deg);
}
.card:hover .card__side--back {
  transform: rotateY(0);
}
.card:hover .card__side--front {
  transform: rotateY(-180deg);
}

.card__poster {
  width: 100%;
  height: 100%;
  object-fit: fill;
  box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
}

.card__heading {
  text-align: center;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
}

@media only screen and (max-width: 600px), only screen and (hover: none) {
  .card {
    /* height: auto; */
    /* background-color: #fff; */
    border-radius: 3px;
    box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.15);
    height: 220px;
    width: 170px;
    margin: 0 1rem;
  }
  .card__side {
    height: 220px;
  }

  /* .card__side--front {
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
  } */
  .card__side--back {
    transform: rotateY(0);
  }
  .card:hover .card__side--front {
    transform: rotateY(0);
  }

  .card__poster {
    box-shadow: none;
    /* object-fit: contain; */
  }
}
</style>