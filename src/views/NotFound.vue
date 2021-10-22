<template>
  <!-- <h1>404 Not Found Page</h1> -->
  <div class="notfound">
    <img src="../assets/404.gif" />
  </div>
</template>

<script>
export default {};
</script>

<style>
.notfound {
  max-width: 800px;
  width: 100%;
  margin: auto;
  height: 80vh;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.notfound img {
  object-fit: contain;
  border-radius: 10px;
}
</style>