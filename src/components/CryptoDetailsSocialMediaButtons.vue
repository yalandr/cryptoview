<template>
  <div class="row q-pt-md">
      <div class="col flex flex-center">
          <q-btn
            v-if="facebookUserName"
            type="a"
            color="primary"
            class="q-mr-md"
            :href="`https://facebook.com/${facebookUserName}`"
            target="__blank"
          >
            <q-icon class="q-pr-sm" name="mdi-facebook"></q-icon> 
            Facebook
          </q-btn>
          <q-btn
            v-if="twitterUserName"
            type="a"
            color="blue"
            class="q-mr-md"
            :href="`https://twitter.com/${twitterUserName}`"
            target="__blank"
          >
            <q-icon class="q-pr-sm" name="mdi-twitter"></q-icon> 
            Twitter
        </q-btn>
          <q-btn
            v-if="redditLink"
            type="a"
            color="black"
            class="q-mr-md"
            :href="redditLink"
            target="__blank"
          >
            <q-icon class="q-pr-sm" name="mdi-reddit"></q-icon> 
            Reddit
          </q-btn>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CryptoDetailsSocialMediaButtons',
    props: {
        facebookUserName: {
            type: String,
            required: true
        },
        twitterUserName: {
            type: String,
            required: true
        },
        redditLink: {
            type: String,
            required: true
        },
    }
}
</script>

<style>

</style>