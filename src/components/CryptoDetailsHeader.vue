<template>
  <div class="row q-pt-md">
      <div class="col flex flex-center">
          <q-img :src="image" class="curr-img"></q-img>
          <span class="text-h4 q-pt-md q-pb-md details-curr-name">
              {{name}} - <span class="uppercase text-green-4">{{symbol}}</span>
          </span>
      </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CryptoDetailsHeader',
    props: {
        image: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        symbol: {
            type: String,
            required: true
        },
    }
})
</script>


<style>
.curr-img {
    width: 50px;
    height: auto;
    margin-right: 1rem;
    border-radius: 4px;
}
.details-curr-name {
    font-size: 1.8rem;
}
</style>