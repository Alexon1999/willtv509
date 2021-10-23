<template>
  <div class="contact">
    <div class="contact__container">
      <div class="contact__info">
        <h3 class="contact__info_heading">Contactez-Nous</h3>
        <p class="mb-4">
          Nous serons ravi de vous répondre dans le plus bref délai.
        </p>

        <div class="contact__info_details">
          <div>
            <i class="fas fa-phone-alt"></i>
            <p>(1) 307 776 9710</p>
          </div>
          <div>
            <i class="fas fa-paper-plane"></i>
            <p>contact@willtv509.com</p>
          </div>
        </div>
      </div>

      <div class="contact__form">
        <form ref="form" @submit.prevent="sendEmail">
          <div class="mb-3">
            <label for="username" class="form-label">Votre Nom et Prenom</label>
            <input type="text" name="name" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Adresse Mail</label>
            <input type="email" name="email" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="objet" class="form-label"
              >La raison de votre requête</label
            >
            <select
              class="form-select mb-3"
              aria-label="Default select example"
              name="subject"
              required
            >
              <option value="demande de renseignement" selected>
                demande de renseignement
              </option>
              <option value="problème avec votre compte">
                problème avec mon compte
              </option>
              <option value="autre">autre</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea
              class="form-control textarea_message"
              rows="3"
              required
              name="message"
            ></textarea>
          </div>

          <button
            type="submit"
            class="
              btn btn-primary
              d-block
              mx-auto
              mt-4
              contact__form_submit_btn
            "
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>

    <div class="notification" :class="{ active: message }">
      {{ message }}
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import { ref } from "vue";

export default {
  name: "Contact",

  setup() {
    const form = ref(); // undefined
    const message = ref(null);

    const sendEmail = () => {
      emailjs
        .sendForm(
          "service_ut2q37o",
          "template_70u6v6g",
          form.value,
          "user_yaOAs2qSvTIFVmWUQMGTv"
        )
        .then(
          function (response) {
            // console.log("SUCCESS!", response.status, response.text);

            // document.getElementById("newForm").reset();
            form.value.reset();
            message.value = "Votre Message a bien été envoyé 😀.";
            setTimeout(() => (message.value = null), 5000);
          },
          function (error) {
            // console.log("FAILED...", error);
            message.value =
              "Il y a eu un problème, reéssayez ou contacter nous directement par mail.";
            setTimeout(() => (message.value = null), 5000);
          }
        );
    };

    return {
      sendEmail,
      form,
      message,
    };
  },
};
</script>

<style>
.contact {
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: relative;
  overflow: hidden;
}

.notification {
  position: absolute;
  top: -50px;
  right: 50%;
  max-width: 500px;
  width: 100%;
  transform: translateX(50%);
  background: rgb(211, 245, 63);
  color: rgb(0, 0, 0);
  text-align: center;
  transition: all 1s ease;
  border-radius: 5px;
  padding: 10px;
}

.notification.active {
  top: 0;
}

.contact__container {
  max-width: 800px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 10px;
  background: #fff;
  padding: 5px;
  box-shadow: 0 5px 20px 3px rgba(53, 53, 53, 0.6);
}

.contact__info {
  background: #3e2093;
  padding: 25px 20px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  color: rgb(228, 228, 228);
}

.contact__info_heading {
  color: #fff;
  font-weight: 600;
}

.contact__info_details {
  margin-top: 2.5rem;
}
.contact__info_details > div {
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
}
.contact__info_details > div > p {
  margin-left: 1rem;
  z-index: 3;
}

.contact__info::before {
  content: "";
  position: absolute;
  bottom: -110px;
  right: -120px;
  background: #fa949d;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  z-index: 1;
}
.contact__info::after {
  content: "";
  position: absolute;
  bottom: 70px;
  right: 80px;
  background: #7e53f9;
  opacity: 0.9;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  z-index: 2;
}

.contact__form {
  padding: 20px;
}
.contact__form .textarea_message {
  min-height: 100px;
}

.contact__form_submit_btn {
  background: #3e2093;
  padding: 0.5rem 2rem;
}

.form-label {
  color: rgb(82, 81, 81);
}

@media (max-width: 700px) {
  .contact__info::before {
    bottom: -170px;
  }
  .contact__info::after {
    bottom: 40px;
    right: 60px;
  }
}
@media (max-width: 600px) {
  .contact {
    padding: 2rem 1rem;
  }
  .contact__container {
    grid-template-columns: 1fr;
  }
  /* changer l'ordre de passage */
  /* .contact__form {
    order: 0;
  }
  .contact__info {
    order: 1;
  } */

  .contact__info::before {
    bottom: -200px;
  }
  .contact__info::after {
    bottom: 30px;
    width: 90px;
    height: 90px;
  }
}

@media (max-width: 500px) {
  .contact__info::before {
    opacity: 0.6;
    bottom: -210px;
    right: -150px;
  }
  .contact__info::after {
    opacity: 0.6;
    bottom: 20px;
    right: 50px;
    width: 75px;
    height: 75px;
  }
}
</style>