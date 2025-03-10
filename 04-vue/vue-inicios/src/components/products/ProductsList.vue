<template>
    <div>
        <h4>Lista de productos</h4>
        <hr>
        <div class="row row-gap-4">

        <div v-for="producto in productos" class="col-sm-6 col-md-4 col-lg-3" :key="producto.id">
            <ProductCard 
                :title="producto.title" 
                :description="producto.description" 
                :urlImage="producto.image"
                :price="producto.price"
                :rate="producto.rating.rate"
            />
            </div>
            
        </div>
    </div>
</template>


<script>
import ProductCard from './ProductCard.vue';

const getProductos = async(nombreCategoria) => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${nombreCategoria}`);

    if(res.ok === false){ // si está en false
        throw new Error("No se pudo traer la información");
    }

    const data = await res.json();

    return data;
}

export default {
    props: {
        category: {
            required: true,
            type: String
        }
    },
    components: {
        ProductCard
    },
    data(){
        return {
            productos: []
        }
    },
    async mounted(){

        try {
            this.productos = await getProductos(this.category);

            console.log(this.productos)
        } catch(err) {
            console.error(err)
        }

    }
}


</script>