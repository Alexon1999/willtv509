<template>
  <!-- https://codepen.io/faelplg/pen/MWwxred -->
  <!-- https://codepen.io/jorgemoovein-the-bashful/pen/rNOXXxb -->
  <div class="card">
    <div class="card__side card__side--back">
      <div class="card__side card__side--back__content">
        <!-- <h4>Blade Runner</h4> -->
        <div class="card__details">
          <button class="card__btn__abonne">abonnez-vous</button>
          <button class="card__btn__acheter">acheter pour 14.32€</button>
          <router-link
            :to="{ name: 'Details', params: { id: data.id, categorie } }"
            class="card__voir_details"
            >voir détails <i class="fas fa-chevron-right"></i>
          </router-link>
        </div>
      </div>
    </div>

    <div class="card__side card__side--front">
      <router-link :to="{ name: 'Details', params: { id: data.id, categorie } }"
        ><img
          src="https://i.ibb.co/ThPNnzM/blade-runner.jpg"
          class="card__poster"
      /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: { data: Object, categorie: String },
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
  cursor: pointer;
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
  background-color: rgba(43, 42, 42, 0.3);
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

.card__details {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.card__details button {
  width: 100%;
  padding: 5px 2px;
  color: rgb(240, 240, 240);
  background: rgb(18, 163, 83);
  border-radius: 5px;
  border: none;
  margin-bottom: 15px;
}

.card__details button:hover {
  opacity: 0.9;
}

.card__details .card__btn__abonne {
  background: rgb(224, 80, 36);
}

.card__voir_details {
  color: rgb(197, 196, 196);
  text-decoration: none;
  cursor: pointer;
}
.card__voir_details:hover {
  color: rgb(197, 196, 196);
  border-bottom: 1px solid #fff;
}
.card__voir_details:hover i {
  margin-left: 5px;
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

@media (min-width: 601px) {
  .card__side--front {
    pointer-events: none;
  }
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
    display: none;
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