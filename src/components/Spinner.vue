<template>
  <div class="spinner__container" v-if="loading">
    <div class="spinner spinner-border text-warning" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  props:{
    loading: Boolean
  }
}
</script>

<style>
.spinner__container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
}

.spinner {
  width: 3rem;
  height: 3rem;
}
</style>