<template>
  <div class="grid grid-cols-2">
    <div>
      <h4 class="text-2xl mb-5">Items</h4>
      <form>
        <Item v-model:name="formData.product.name" v-model:price="formData.product.price"
          v-model:quantity="formData.product.quantity" :name="formData.product.name" :price="formData.product.price"
          :quantity="formData.product.quantity" />

        <div class="flex -mx-3 mb-3">
          <div class="px-3" style="flex: 0 0 320px">
            <label class="leading-8" for="item-ipt-name">Name</label>
            <input type="text" id="item-ipt-name"
              class="w-full lock outline-none p-2 border-2 border-solid border-inherit" placeholder="Name"
              v-model="formData.secondName" />
          </div>
          <div class="px-3">
            <label class="leading-8" for="item-ipt-price">Price</label>
            <input type="text" id="item-ipt-price"
              class="w-full block outline-none p-2 border-2 border-solid border-inherit" placeholder="Price"
              v-model="formData.secondPrice" />
          </div>
          <div class="px-3">
            <label class="leading-8" for="item-ipt-quantity">Quantity</label>
            <input type="text" id="item-ipt-quantity"
              class="w-full block outline-none p-2 border-2 border-solid border-inherit" placeholder="Quantity"
              v-model="formData.secondQuantity" />
          </div>
        </div>
      </form>

      <div>
        <label class="leading-8" for="form-username">Username</label>
        <input type="text" id="form-username" class="w-full block outline-none p-2 border-2 border-solid border-inherit"
          placeholder="Username" />
      </div>

      <h4 class="text-2xl mt-5 mb-3">Payment</h4>
      <div class="flex">
        <div class="mr-3">
          <input id="Wechat-Pay" type="radio" name="PaymentMethod" />
          <label class="ml-1" for="Wechat-Pay">Wechat</label>
        </div>
        <div class="mr-3">
          <input id="Alipay-Pay" type="radio" name="PaymentMethod" />
          <label class="ml-1" for="Alipay-Pay">Alipay</label>
        </div>
        <div class="mr-3">
          <input id="PayPal-Pay" type="radio" name="PaymentMethod" />
          <label class="ml-1" for="PayPal-Pay">PayPal</label>
        </div>
      </div>
      <hr class="my-5" />
      <router-link to="/checkout" class="inline-block w-full py-3 rounded text-center bg-blue-500 text-white text-lg">
        Continue to checkout
      </router-link>
    </div>
    <div>
      <h4 class="text-2xl text-slate-500 mb-5">Cart</h4>
      <ul>
        <li class="flex justify-between bg-white p-2 -mb-2 border-2 border-solid border-inherit">
          <span>First Product</span>
          <span>{{ formData.product.price * formData.product.quantity }}</span>
        </li>
        <li class="flex justify-between bg-white p-2 -mb-2 border-2 border-solid border-inherit">
          <span>First Product</span>
          <span>{{ formData.secondPrice * formData.secondQuantity }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import Item from "../components/Item.vue";

const formData = reactive({
  product: {
    name: "",
    price: 0,
    quantity: 1
  },
  secondName: '',
  secondPrice: '',
  secondQuantity: ''
})
</script>

<style scoped>
</style>
 