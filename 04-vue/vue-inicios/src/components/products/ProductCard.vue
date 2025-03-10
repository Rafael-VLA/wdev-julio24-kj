<template>

    <article class="product-card">

        <div class="product-card-header">

            <div class="product-card-header-primary">

                <h1 style="height: 43.188px;" class="line-clamp">{{ title }}</h1>
            
                <div>
                    <span class="rating">{{ getRate }}</span>
                </div>

            </div>

            <div class="product-card-header-secondary">
                <p style="--line-clamp-number: 1" class="line-clamp">
                    {{ description }}      
                </p>
                
            </div>
        </div>

        <div class="product-card-body mt-3">
            <img 
                :src="urlImage"
                :alt="`Product Image - ${title}`"
                width="100%"
                height="300px"
            > 
        </div>

        <div class="product-card-price">
            <span>{{ getPrice }}</span>
        </div>

    </article>

</template>

<script>
export default {
    props: {
        title: {
            required: true,
            type: String,
            default: "[Title]"
        }, 
        description: {
            required: true,
            type: String,
            default: "[Description]"
        },
        urlImage: {
            required: true,
            type: String,
            default: "https://t3.ftcdn.net/jpg/05/04/28/96/360_F_504289605_zehJiK0tCuZLP2MdfFBpcJdOVxKLnXg1.jpg"
        },
        price: {
            required: true,
            type: Number,
            default: 0.0
        },
        rate: {
            require: true,
            type: Number,
            default: 0.0
        }
    },
    computed: {
        getPrice(){
            const formatPrice = new Intl.NumberFormat("en-US", 
                { 
                    style: "currency", 
                    currency: "USD" 
                }
            );
            
            return formatPrice.format(this.price);
        },
        getRate(){
            return this.rate.toFixed(1)
        }
    }
}
</script>

<style scoped>

.product-card {
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    /* max-width: 320px; */
    /* top  right   bottom   left */
    padding: 20px 12px 12px 12px;
    border-radius: 20px;
    position: relative;
}

.product-card-header {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.product-card-header-primary {
    display: flex;
    column-gap: 4px;
    justify-content: space-between;
}

.product-card-header-primary h1 {
    font-size: 18px;
    margin-bottom: 4px;
}

.product-card-header-secondary p {
    font-size: 14px;
    color: #5f5f6d;
    margin-bottom: 0;
}

.rating {
    /* border-width: 1px;
    border-color: red;
    border-style: solid; */
    border: 1px solid var(--bs-indigo);
    font-weight: 500;
    padding: 8px;


    border-radius: 50%;
}

.product-card-body {
    border-radius: 24px;
    overflow: hidden;
}

.product-card-body img {
    transition: all 300ms ease;
    object-fit: contain; /* contain */ 
}

.product-card-body img:hover {
    transform: scale(1.1);
}

.product-card-price {
    background-color: white;
    padding: 8px;
    border-radius: 12px;
    position: absolute;
    bottom: 24px;
    right: 24px;
    max-width: 100px;
    border: 1px solid rgba(0, 0, 0, 0.1)
}

.product-card-price span {
    font-weight: 500;
    color: var(--bs-indigo)
}

</style>