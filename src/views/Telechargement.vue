<template>
  <div className="telecharger" id="telecharger">
    <div className="telecharger-page">
      <div className="telecharger__headings">
        <h1>Télécharger</h1>

        <p>
          Bientôt disponible <span>gratuitement</span> sur mobile et tablette
        </p>
      </div>

      <div className="telecharger__container">
        <div
          className="telecharger__app-android telecharger__card"
          ref="{telechargerCard1}"
        >
          <div className="telecharger__card__container">
            <div className="telecharger__card__image-container">
              <img
                src="../assets/android.png"
                alt="android smartphone"
                className="img_android telecharger__card__image-container__img"
              />
            </div>

            <div className="telecharger__card__content">
              <h1 className="android">
                <i className="fab fa-android fa-2x"></i> Android
              </h1>
              <div
                variants="{ButtonTelechargerVariants}"
                whileHover="hover"
                whileTap="hover"
                className="telecharger__button android"
              >
                <span>Télécharger sur</span>
                <img src="../assets/google-play.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="telecharger__app-apple telecharger__card"
          ref="{telechargerCard2}"
        >
          <div className="telecharger__card__container">
            <div className="telecharger__card__image-container">
              <img
                src="../assets/iphone.png"
                alt="android smartphone"
                className="img_apple telecharger__card__image-container__img"
              />
            </div>

            <div className="telecharger__card__content">
              <h1 className="apple">
                <i className="fab fa-apple fa-2x"></i>Apple
              </h1>
              <div
                variants="{ButtonTelechargerVariants}"
                whileHover="hover"
                whileTap="hover"
                className="telecharger__button apple"
              >
                <span>Télécharger sur</span>
                <img src="../assets/app-store.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Telecharger",
};
</script>

<style>
.telecharger-page {
  /* background: #f6f7fa; */
  /* padding: 1rem 1rem 2rem; */
  padding: 30px 10px 30px;
  color: #333;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 18px;
  line-height: 22px;
  box-sizing: border-box;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.telecharger__headings {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
}
.telecharger__headings h1 {
  padding-bottom: 10px;
  margin: 5px 0 0px;
}

.telecharger__headings > p {
  font-weight: 550;
  text-transform: uppercase;
  font-size: 1.5rem;
  margin: 2rem 0;
}
.telecharger__headings > p:last-child {
  margin-top: 1rem;
  color: #3bb9e0;
  text-transform: none;
}

.telecharger__headings > p > span {
  color: rgb(228, 225, 225);
}

.telecharger__headings > h4 {
  font-size: 1.3rem;
  font-weight: lighter !important;
  color: rgb(165, 165, 165);
}

.telecharger__container {
  width: 45vw;
  /* height: 100%; */
  display: -ms-grid;
  display: grid;
  overflow: visible;
  grid-auto-columns: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 30px;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  place-items: center;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
}

a:active,
a:hover {
  outline: 0;
}
.telecharger__card {
  width: 100%;
  padding: 40px 20px;
  /* border: 0.7px solid #f6f7fa; */
  border-radius: 15px;
  background-color: rgb(17, 23, 36);
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
  color: #333;
  text-decoration: none;
  max-width: 100%;
  display: inline-block;
  box-shadow: 0 6px 31px -2px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

.telecharger__card:hover {
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.4);
  -webkit-transform: translate(0px, -10px);
  -ms-transform: translate(0px, -10px);
  transform: translate(0px, -10px);
}

.telecharger__card__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.telecharger__card__image-container {
  text-align: center;
  height: 200px;
  width: 100%;
  position: relative;
}

.telecharger__card__image-container img {
  display: inline-block;
  object-fit: contain;
  height: 300px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  pointer-events: none;
  user-select: none;
}

.telecharger__card__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.telecharger__card__content > h1 {
  font-size: 0.7rem;
  padding: 0.5rem 0.75rem;
  border-radius: 12px;
  color: rgb(226, 226, 226);
  display: flex;
  align-items: center;
  box-shadow: 0 6px 31px -2px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  text-align: center;
}
.telecharger__card__content > h1.android {
  /* background-color: #0ceb7b; */
  /* color: rgb(10, 10, 10); */
}

.telecharger__card__content > h1 > i {
  margin-right: 10px;
}

.telecharger__card__content > h1.android > i {
  color: #3de21c !important;
}

.telecharger__card__content .telecharger__button img {
  max-width: 125px;
  height: 30px;
  object-fit: contain;
}

.telecharger__button {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  border-radius: 10px;
  padding: 10px 15px;
  background: transparent;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  color: rgb(226, 222, 222);
}

.telecharger__button:hover {
  cursor: pointer;
}

.telecharger__button span {
  margin: 0 10px;
}

@media (max-width: 1309px) {
  .telecharger__container {
    width: 60vw;
  }
}
@media (max-width: 990px) {
  .telecharger__container {
    width: 80vw;
  }
}

@media (max-width: 750px) {
  .telecharger__headings {
    text-align: center;
  }

  .telecharger__container {
    width: 90vw;
  }
}
@media (max-width: 660px) {
  .telecharger__container {
    width: 95vw;
  }
}

@media (max-width: 600px) {
  .telecharger__container {
    width: 70vw;
    grid-template-columns: 1fr;
    grid-row-gap: 100px;
    padding-top: 20px;
  }

  /* .telecharger {
    padding-top: 50px;
    justify-content: space-between;
  } */

  .telecharger__headings {
    margin-bottom: 70px;
  }

  .telecharger__headings > p:last-child {
    font-size: 1.3rem;
  }

  .telecharger__button {
    font-size: 15px;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
    border: 1px solid rgb(117, 116, 116);
  }

  .telecharger__card {
    backdrop-filter: unset;
  }

  .telecharger__card__content > h1 {
    box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0.2);
    border: 1px solid rgb(117, 116, 116);
    backdrop-filter: unset;
  }
}

@media (max-width: 330px) {
  .telecharger__container {
    width: 80vw;
  }
}
</style>