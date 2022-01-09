<template>
  <div class="about">
    <div class="about_top about_container">
      <div class="about_top_right">
        <h1 class="about_top__heading">
          <span class="about_title">WillTV509</span> est né avec l'idée de vous
          donner une plateforme de streaming tout à fait légal où vous pouvez
          trouver beaucoup de titres pour vous divertir au maximum.
        </h1>
      </div>
      <div>
        <img src="../assets/movie_time.svg" alt="movie_time" />
      </div>

      <div class="mouse">
        <div class="mouse-icon"><span class="mouse-wheel"></span></div>
      </div>
    </div>

    <div class="about__catalogue">
      <h1 class="about__catalogue_heading">Nous vous proposons de découvrir</h1>
      <div class="about__catalogue_items">
        <div class="about__catalogue__item">
          <img src="../assets/movies.png" alt="movies" />
          <p>Films des feuilletons</p>
        </div>
        <div class="about__catalogue__item">
          <img src="../assets/series.png" alt="series" />
          <p>Séries télévisées</p>
        </div>
        <div class="about__catalogue__item">
          <img src="../assets/video_clips.png" alt="vide clips" />
          <p>Vidéos clips</p>
        </div>
        <div class="about__catalogue__item">
          <img src="../assets/events.png" alt="events" />
          <p>Evénements en direct</p>
        </div>
      </div>
    </div>

    <div class="about__services">
      <div class="about__services__free">
        <div>
          <h1 class="about__services__free_heading_1">
            Nous avons une multitude de contenu gratuit que vous pouvez
            visionner sans avoir à vous s'inscrire
          </h1>
          <h1 class="about__services__free_heading_2">
            Alors Bonne Exploration !
          </h1>
        </div>
        <div>
          <img src="../assets/free.svg" alt="free" />
        </div>
      </div>

      <div class="about__services__subscription">
        <div>
          <img src="../assets/subscription.svg" alt="subscription" />
        </div>
        <div>
          <h1 class="about__services__subscription_heading_1">
            Mais Vous avez la possibilité de vous abonner pour accéder à nos
            contenus payants et pour vous éviter d'avoir des publicités
          </h1>
          <h1 class="about__services__subscription_heading_2">
            Sachez que ce sont des
            <span
              class="about__services__subscription__engagement"
              data-toggle="tooltip"
              data-placement="top"
              title="Vous pouvez vous désabonner à n’importe quel moment"
              >abonnements sans engagement <i class="far fa-laugh-wink"></i>
            </span>
          </h1>
          <div class="about__services__subscription_btn">
            <router-link class="" to="/abonnement">Voir les tarifs</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>


<style>
.about {
}

.about_container {
  max-width: 1200px;
  margin: auto;
  padding: 1rem;
}

.about_title {
  color: rgb(117, 207, 243);
}

.about_top {
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about_top img {
  object-fit: contain;
  min-width: 400px;
}

.about_top__heading {
  font-size: 1.6rem;
  text-align: center;
  line-height: 3rem;
}

.about__catalogue {
  margin: 1.5rem 0 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about__catalogue_heading {
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 1rem;
}

.about__catalogue_items {
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
  row-gap: 70px;
}

.about__catalogue__item {
  width: 250px;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(153, 198, 236);
  color: rgb(0, 0, 0);
  border-radius: 10px;
  position: relative;
  transition: all 0.5s ease;
}

.about__catalogue__item:hover {
  transform: translateY(-10px);
}

.about__catalogue__item > img {
  position: absolute;
  top: -40%;
  right: 50%;
  transform: translateX(50%);
  max-height: 125px;
  object-fit: contain;
}

.about__catalogue__item > p {
  margin-top: 60px;
}

.about__services__free,
.about__services__subscription {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: #ffffff;
  color: #1b1725;
}

.about__services__subscription {
  background: #c1cbff;
  column-gap: 30px;
}

.about__services__free_heading_1,
.about__services__subscription_heading_1 {
  font-size: 2.2rem;
}

.about__services__free_heading_2,
.about__services__subscription_heading_2 {
  font-size: 2.7rem;
  font-weight: 600;
  margin-top: 1.2rem;
  color: #266af1;
}
.about__services__subscription_heading_1 {
  text-align: center;
}
.about__services__subscription_heading_2 {
  text-align: center;
  color: #fc5a90;
}
.about__services__free img,
.about__services__subscription img {
  max-width: 500px;
  object-fit: contain;
}

.about__services__subscription_btn {
  text-align: center;
  width: 200px;
  margin: 1.3rem auto 0;
}

.about__services__subscription_btn > a {
  display: block;
  padding: 1rem 0.5rem;
  border-radius: 5px;
  background: rgb(250, 109, 187);
  text-decoration: none;
  color: white;
  transition: opacity 0.3s;
}

.about__services__subscription_btn > a:hover {
  opacity: 0.9;
}

.mouse {
  position: absolute;
  bottom: 7%;
  left: 50%;
  transform: translateX(-50%);
}
.mouse-icon {
  width: 30px;
  height: 50px;
  border: 2px solid #ebe83a;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  text-align: center;
}
.mouse-wheel {
  height: 6px;
  margin: 2px auto 0;
  display: block;
  width: 3px;
  background-color: #ebe83a;
  border-radius: 50%;
  -webkit-animation: wheel-up-down 1.6s ease infinite;
  animation: wheel-up-down 1.6s ease infinite;
}
@keyframes wheel-up-down {
  0% {
    margin-top: 2px;
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    margin-top: 20px;
    opacity: 0;
  }
}
</style>
