<template>
    <Navbar />

    <main class="container mt-4">
        <RouterView />
    </main>

    <!-- <footer>??</footer> -->
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
    components: {
        Navbar
    }
}
</script>