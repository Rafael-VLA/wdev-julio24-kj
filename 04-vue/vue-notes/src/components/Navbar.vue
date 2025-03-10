<template>
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <router-link class="navbar-brand" to="/" style="color: black !important; font-weight: 600">Notas app</router-link>
      
      <button
        class="navbar-toggler btn-sm"
        style="padding-bottom: 6.5px;"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span style="width: 20px; height: 20px;" class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" :to="{ name: 'home' }">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/contact', query: { id: 7, name: 'rafael' } }">Contacto</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>