<template>
    <div
    class="offcanvas offcanvas-end"
    data-bs-scroll="true"
    tabindex="-1"
    id="offcanvasWithBothOptions"
    aria-labelledby="offcanvasWithBothOptionsLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
        Nueva nota
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <form class="h-100 d-flex flex-column justify-content-between">
        <div class="mb-3">
          <label for="message" class="form-label">Nota:</label>
          <textarea
            class="form-control"
            id="message"
            rows="5"
            placeholder="Escribe tu nota..."
            name="message"
          ></textarea>
        </div>

        <div class="d-flex gap-2 justify-content-start">
            <button type="submit" class="btn btn-primary">Guardar</button>
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="offcanvas" aria-label="Close">Cancelar</button>
        </div>

      </form>
    </div>
  </div>
</template>