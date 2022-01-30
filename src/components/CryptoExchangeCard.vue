<template>
  <q-card class="row flex-center justify-between q-mb-md">
      <q-card-section class="col-xs-5 col-md-6 border-right card-section">
          <div class="text-h6 market-name">
              {{ticker.market.name}}
          </div>
          <div class="text-h7 opacity-07">
              Trust: <q-avatar size="xs" :color="ticker.trust_score"></q-avatar>
          </div>
      </q-card-section>
      <q-separator></q-separator>
      <q-card-section class="col-xs-5 col-md-4 border-right card-section">
          <div class="flex flex-center column">
              <div class="text-h5 exch-card-price">
                  <q-icon 
                    :name="changeInLast24Hr > 0 ? 'trending_up' : 'trending_down'" 
                    :color="changeInLast24Hr > 0 ? 'green' : 'red'"
                    class="exch-card-trending-img"
                    /> 
                    <span :class="changeInLast24Hr > 0 ? 'text-green-4' : 'text-red-4'">
                        ${{ticker.last.toFixed(2)}}
                    </span>
                    
              </div>
              <div class="text-h7 volume opacity-07">
                  Vol: {{ticker.volume.toFixed(2)}}
              </div>
          </div>
      </q-card-section>
      <q-card-actions class="flex flex-center col-xs-2">
          <q-btn
            type="a"
            color="light-blue-6"
            size="lg"
            :href="ticker.trade_url"
            target="__blank"
            class="trade-btn"
          >
            Trade
          </q-btn>
      </q-card-actions>
  </q-card>
</template>

<script>
import {defineComponent} from 'vue';
export default defineComponent({
    name: 'CryptoExchangeCard',
    props: {
        ticker: {
            type: Object,
            required: true
        },
        changeInLast24Hr: {
            type: Number,
            required: true
        },
    }
})
</script>

<style>
.card-section {
    padding: .5rem 1rem !important;
}
.exch-card-trending-img {
    width: 1rem;
    height: auto;
    margin-right: 0.2rem;
}
.opacity-07 {
    opacity: .6 !important;
}
.trade-btn {
    padding: 0 1.5rem !important;
    font-size: 0.9rem !important;
    font-weight: 700 !important;
    letter-spacing: 1px !important;
}
@media (max-width:760px){
    .exch-card-price {
        font-size: 1rem;
    }
    .volume {
        font-size: 0.8rem;
    }
   .trade-btn {
        font-size: 0.8rem !important;
        padding: 0 1rem !important;
    } 
}
@media (max-width:580px){
    .market-name {
        font-size: 1rem;
    }
   .trade-btn {
        font-size: 0.7rem !important;
        padding: 0 0.2rem !important;
    } 
}
</style>