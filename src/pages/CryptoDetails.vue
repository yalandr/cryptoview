<template>
<q-page padding>
    <div v-if="details">
        <CryptoDetailsHeader
            :image="details.image.small"
            :name="details.name"
            :symbol="details.symbol"
        />
        <q-separator></q-separator>
        <CryptoDetailsSocialMediaButtons
            :facebookUserName="details.links.facebook_username"
            :twitterUserName="details.links.twitter_screen_name"
            :redditLink="details.links.subreddit_url"
        />
        <div class="row q-pt-lg">
            <div class="col">
                <p v-html="details.description.en" class="details-paragraph"></p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h5>Exchanges</h5>
            </div>
        </div>
        <div 
            v-for="(ticker, index) in usdTickers"
            :key="index"
        >
            <CryptoExchangeCard
                :ticker="ticker"
                :changeInLast24Hr="details.market_data.price_change_24h"
            />
        </div>
    </div>
</q-page>
</template>

<script>
import { defineComponent } from 'vue';
import CryptoDetailsHeader from '../components/CryptoDetailsHeader.vue';
import CryptoDetailsSocialMediaButtons from '../components/CryptoDetailsSocialMediaButtons.vue';
import CryptoExchangeCard from '../components/CryptoExchangeCard.vue';

export default defineComponent({
    data: () => ({
        details: undefined
    }),
    components: {
        CryptoDetailsHeader,
        CryptoDetailsSocialMediaButtons,
        CryptoExchangeCard
    },
    async created() {
        try {
            const id = this.$route.params.id;

            if (!id) {
                alert("No currency specified");
                return;
            }

            const res = await this.$api.get(`coins/${id}`);

            res.status === 200 ? (this.details = res.data) : alert('Fetching Error Details');
        } catch (error) {
            console.log(error);
            alert('Fetching Error Alert Details');
        }
    },
    computed: {
        usdTickers() {
            return this.details.tickers.filter((ticker) => ticker.target === 'USD');
        }
    }
})
</script>

<style>
.details-paragraph {
    padding: 1rem;
    border-radius: 6px;
    background-color: #252e42;
}
</style>
