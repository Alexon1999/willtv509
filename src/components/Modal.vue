<template>
  <div
    class="modal fade"
    :id="id"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div
      class="
        modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable
      "
    >
      <div class="modal-content text-dark">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">
            Modes de Paiement
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <slot>
            <p>.....</p>
          </slot>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn text-light bg-dark"
            data-bs-dismiss="modal"
          >
            Fermer
          </button>
          <!-- <button type="button" class="btn btn-primary">Understood</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: { id: String },
};
</script>

<style>
</style>