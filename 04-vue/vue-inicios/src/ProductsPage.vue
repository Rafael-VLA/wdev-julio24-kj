
<template>

    <div class="container">
        <h1>Product page</h1>
        <hr>

        <div class="d-flex flex-column gap-5 my-5">
            <ProductsList category="electronics" />
            <ProductsList category="jewelery" />
            <ProductsList category="men's clothing" />
            <ProductsList category="women's clothing" />
        </div>
    </div>

</template>

<script>
import ProductsList from './components/products/ProductsList.vue';

export default {
    components: {
        ProductsList
    }
}

</script>