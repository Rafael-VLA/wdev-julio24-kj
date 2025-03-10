<template>
    <div class="card-container">
    <div class="mb-2">
      <span class="mb-0" :class="{ 'line-clamp': !show }">
        {{ description || "[description]" }}
        <span class="me-1"></span>
      </span>

      <span @click="handleShow" style="color: currentColor" class="btn btn-link btn-sm py-0 ps-0">
        {{ show === false ? "Ver más" : "Ver menos" }}
      </span>
    </div>

    <div class="d-flex justify-content-end">
        <button class="btn btn-outline-danger btn-sm rounded-circle">
            <i class="bi bi-trash3"></i>
        </button>
    </div>
  </div>
</template>


<script>

export default {
    props: ['description', 'id'],
    data(){
        return {
            show: false
        }
    },
    methods: {
        handleShow(){
            this.show = !this.show; // true a false
        }
    }
}
</script>

<style scoped>
    .card-container {
        border-radius: 16px;
        padding: 16px;
        border: 1px solid rgba(0, 0, 0, 0.1);
    }

    span.btn-link:hover {
        color: var(--bs-link-color) !important;
    }

    .line-clamp {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }
</style>