<template>
  <div class="footer">
    <div className="footer__container">
      <div className="footer__a-propos-de-nous">
        <div className="footer__a-propos-de-nous__image-container">
          <img src="../assets/logo.png" alt="logo markus" />
        </div>

        <div className="footer__a-propos-de-nous__content">
          <div className="footer__a-propos-de-nous__content__headings">
            <p>Vissionnez tout ce que vous voulez</p>
          </div>
        </div>
      </div>

      <div className="footer__telechargement">
        <h1>Télécharger gratuitement l'application</h1>
        <a href="#test">
          <img src="../assets/google-play.svg" alt="google play store" /> Google
          Play
        </a>
        <a href="#test">
          <img src="../assets/app-store.svg" alt="Apple store" /> Apple store
        </a>
      </div>

      <div className="footer__contacts">
        <h1>Prendre contact avec nous</h1>
        <div className="footer__contacts-content">
          <p>
            <i className="fas fa-phone-alt"></i>Internationale (1) 307 776 9710
          </p>
          <p><i className="fas fa-phone-alt"></i>Haïti (509) 44026620</p>
          <a href="mailto:contact@willtv509.com">
            <i className="fas fa-envelope"></i>contact@willtv509.com</a
          >
          <!-- <p><i className="fas fa-map-marker-alt"></i> {contacts.addr}</p> -->
        </div>
        <div className="footer__suivez-nous">
          <a href="#test" rel="noopener" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#test" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#test" rel="noopener" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <!-- <a href="#test" rel="noopener" target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </a> -->
        </div>
      </div>

      <div className="footer__legales">
        <h1>Conformité</h1>
        <a href="CGV&MENTIONS-LEGALES.pdf" target="_blank">
          CGV &amp; Mentions légales
        </a>
        <a href="CGU.pdf" target="_blank">CGU</a>
        <a href="COOKIES.pdf" target="_blank">Cookies</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  background: #13202b;
}

.footer__container {
  max-width: 1600px;
  width: 90%;
  height: 100%;
  margin: auto;
  padding: 1.5rem 0 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  /* place-items: center; */
  /* place-content: center; */
}

.footer__a-propos-de-nous {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 0.5px solid #344757;
}

.footer__a-propos-de-nous .footer__a-propos-de-nous__image-container {
  max-width: 125px;
}

.footer__a-propos-de-nous .footer__a-propos-de-nous__image-container img {
  width: 100%;
  object-fit: contain;
}

.footer__a-propos-de-nous__content {
  color: rgb(175, 175, 175);
}

.footer__a-propos-de-nous__content__headings {
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  /* color: #44aeeb; */
}

.footer__telechargement {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  border-right: 0.5px solid #344757;
}

.footer__telechargement > h1 {
  font-size: 1.1rem;
  color: rgb(226, 223, 223);
  position: relative;
  padding-bottom: 0.7rem;
}

.footer__telechargement > h1::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 20%;
  height: 5px;
  background: #344757;
  border-radius: 10px;
}

.footer__telechargement > a {
  color: rgb(226, 223, 223);
  padding: 10px 0 5px;
  text-decoration: none !important;
  display: flex;
  align-items: center;
}
.footer__telechargement > a > img {
  width: 30px;
  margin-right: 10px;
}

.footer__contacts {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-right: 5px;
}

.footer__contacts > h1 {
  font-size: 1.1rem;
  color: rgb(226, 223, 223);
  position: relative;
  padding-bottom: 0.7rem;
}

.footer__contacts > h1::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 20%;
  height: 5px;
  background: #344757;
  border-radius: 10px;
}

.footer__contacts-content > p,
.footer__contacts-content > a {
  margin: 3px 0 !important;
  padding: 0;
  font-size: 0.7rem;
}
.footer__contacts-content > a {
  display: block;
  text-decoration: none;
}

.footer__contacts-content {
  color: rgb(151, 150, 150);
}

.footer__contacts-content a {
  color: rgb(151, 150, 150);
}

.footer__contacts-content i {
  margin-right: 10px;
}

.footer__suivez-nous {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.footer__suivez-nous a {
  margin-right: 1rem;
}
.footer__suivez-nous a > i {
  color: #ccc;
}

.footer__contacts {
  border-right: 0.5px solid rgb(70, 70, 70);
}

.footer__legales {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.footer__legales > h1 {
  font-size: 1.1rem;
  color: rgb(226, 223, 223);
  position: relative;
  padding-bottom: 0.7rem;
}

.footer__legales > h1::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 20%;
  height: 5px;
  background: #344757;
  border-radius: 10px;
}

.footer__legales > a {
  margin: 3px 0;
  padding: 0;
  font-size: 0.7rem;
  color: rgb(151, 150, 150);
  text-decoration: none;
}

@media (min-width: 1500px) {
  .footer__suivez-nous {
    padding-top: 15px;
  }
}

@media (max-width: 1200px) {
  .footer__container {
    width: 98%;
  }
}
@media (max-width: 1100px) {
  .footer__container {
    width: 98%;
  }
}

@media (max-width: 850px) {
  .footer__container {
    grid-template-columns: 1fr;
    width: 90%;
  }

  .footer__a-propos-de-nous {
    border-right: 0;
    border-bottom: 0.75px solid rgb(102, 100, 100);
  }
  .footer__contacts {
    border-right: 0;
    border-bottom: 0.75px solid rgb(102, 100, 100);
    padding: 25px 8px;
  }

  .footer__telechargement {
    border-right: 0;
    border-bottom: 0.75px solid rgb(102, 100, 100) !important;
    padding: 25px 8px;
  }

  .footer__legales {
    border-right: 0;
    padding: 25px 8px;
  }
}
</style>