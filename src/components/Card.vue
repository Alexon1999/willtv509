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
        ><img src="https://i.ibb.co/ThPNnzM/blade-runner.jpg" class="poster"
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
.poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
}
.card {
  width: 270px;
  height: 350px;
  flex: initial;
  position: relative;
  background: #0f171e;
  box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
  -moz-perspective: 200rem;
  perspective: 200rem;
  margin: 0 2rem;
}
.card__side {
  height: 350px;
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

.card__heading {
  text-align: center;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
}
</style>