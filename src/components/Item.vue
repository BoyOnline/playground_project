<template>
    <div class="flex -mx-3 mb-3">
        <div class="px-3" style="flex: 0 0 320px">
            <label class="leading-8" for="item-ipt-name">Name</label>
            <input type="text" id="item-ipt-name"
                class="w-full lock outline-none p-2 border-2 border-solid border-inherit" placeholder="Name"
                @input="updateName($event.target.value)" :value="name" />
        </div>
        <div class="px-3">
            <label class="leading-8" for="item-ipt-price">Price</label>
            <input type="text" id="item-ipt-price"
                class="w-full block outline-none p-2 border-2 border-solid border-inherit" placeholder="Price"
                @input="updatePrice($event.target.value)" :value="price" />
        </div>
        <div class="px-3">
            <label class="leading-8" for="item-ipt-quantity">Quantity</label>
            <input type="text" id="item-ipt-quantity"
                class="w-full block outline-none p-2 border-2 border-solid border-inherit" placeholder="Quantity"
                @input="updateQuantity($event.target.value)" :value="quantity" />
        </div>
    </div>
</template>

<script setup>
const { name, price, quantity } = defineProps({
    name: {
        default: '',
        type: String,
    },
    price: {
        default: '',
        type: Number,
    },
    quantity: {
        default: '',
        type: Number
    }
});
const emit = defineEmits(['update:name', 'update:price', 'update:quantity']);

const updateName = value => emit('update:name', value);
const updatePrice = value => emit('update:price', value);
const updateQuantity = value => emit('update:quantity', value);


</script>

<style lang="scss">
</style>