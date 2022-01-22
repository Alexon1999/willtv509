<template>
  <div class="spinner__container">
    <div class="spinner spinner-border text-warning" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Spinner",
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