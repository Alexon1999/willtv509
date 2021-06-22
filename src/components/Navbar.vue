<template>
  <div class="navbar">
    <div class="navbar__left_container">
      <div class="navbar__logo">
        <router-link to="/">
          <img srcset="../assets/logo.png" alt="willtv509" />
        </router-link>
      </div>

      <div class="navbar__links">
        <router-link to="/"><i class="fas fa-home"></i></router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/telecharger">Télécharger</router-link>
      </div>
    </div>

    <div class="navbar__right_container">
      <div class="navbar__search">
        <input type="text" placeholder="rechercher" />
        <button><i class="fas fa-search"></i></button>
      </div>

      <div class="navbar__profile">
        <div class="navbar__profile__avatar">
          <i class="fas fa-user-alt"></i>
        </div>
        <p>Felipe</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.navbar {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 20px 40px 20px 50px;
  max-height: 10vh;
  background-color: #13202b;
}
.navbar__left_container {
  display: flex;
  align-items: center;
  width: 50%;
}
.navbar__right_container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.navbar__logo {
  width: 100px;
  margin-right: 40px;
}
.navbar__logo img {
  width: 100%;
  object-fit: contain;
}

.navbar__links {
  margin-top: 5px;
  flex: 1;
  display: flex;
  align-items: center;
}

.navbar__links a {
  text-decoration: none;
  color: rgb(202, 202, 202);
  font-weight: 600;
  font-size: 1rem;
  margin-right: 20px;
}

.navbar__links a.router-link-active,
.navbar__links a.router-link-exact-active {
  padding-bottom: 2px;
  border-bottom: 1px solid white;
}

.navbar__search {
  display: flex;
  justify-content: center;
}

.navbar__search input,
.navbar__search button {
  border: none;
  padding: 7px;
  background: none;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  color: #ccc;
}

.navbar__search input {
  border-right: 2px solid black;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  /* visibility: collapse; */
}

.navbar__search input:focus {
  outline: none;
}
.navbar__search button {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.navbar__profile {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.navbar__profile p {
  color: #ccc;
  margin: 0;
}

.navbar__profile__avatar {
  display: flex;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid #ccc;
  padding: 10px;
  margin-right: 5px;
  color: #ccc;
}

.navbar__profile__avatar:hover {
  color: rgb(233, 198, 42);
  border-color: rgb(233, 198, 42);
}
</style>