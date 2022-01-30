<template>
  <q-page class="">
    <div class="q-pa-md">
      <q-table
        grid
        title=""
        :rows="coins"
        :columns="columns"
        row-key="name"
        :filter="filter"
        hide-header
        :pagination="{rowsPerPage:10}"
        :rows-per-page-options="[10,20,50,100]"
      >
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

        <template v-slot:item="props">
          <div class="q-pa-xs col-xs-12">
            <q-card class="row flex-center justify-between">
              <q-card-section class="border-right col-xs-7">
                <span class="text-h7 curr-name">
                  {{props.row.name}}
                </span>
              </q-card-section>
              <q-card-section class="flex flex-center text-center uppercase border-right col-xs-3 text-green-5 curr-code">
                {{props.row.symbol}}
              </q-card-section>
              <q-card-actions class="flex flex-center col-xs-2">
                <q-btn size="lg" color="deep-purple-6" class="view-btn" label="View" @click="navToCryptoDetails(props.row.id)"></q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data: () => ({
    coins: [],
    columns: [
      {
        name: 'name',
        align: 'center',
        label: 'Name',
        field: 'name'
      },
      {
        name: 'symbol',
        align: 'center',
        label: 'Symbol',
        field: 'symbol'
      },
    ],
    filter: ''
  }),
  async created() {
    try {
      const res = await this.$api.get('coins/list');
      res.status === 200 ? (this.coins = res.data) : alert('Fetching Error');
    } catch (error) {
      alert('Fetching Error');
    }
  },
  methods: {
    navToCryptoDetails(id) {
      this.$router.push({
        name: 'CryptoDetails',
        params: {id}
      })
    }
  }
})
</script>

<style>
.border-right {
  border-right: 1px solid #555 !important
}
.uppercase {
  text-transform: uppercase;
  letter-spacing: 1px;
}
.q-card__section {
  border-radius: 6px 0 0 6px !important;
}
.curr-name {
  font-weight: 300;
}
.curr-code {
  font-size: .85rem;
}
.view-btn {
  font-size: .85rem !important;
  font-weight: 700 !important;
  padding: 0 1.5rem !important;
  letter-spacing: 1px !important;
}
@media (max-width:760px){
  .curr-code {
    font-size: .75rem;
  }
  .view-btn {
    font-size: 0.75rem !important;
    padding: 0 1rem !important;
  } 
}
@media (max-width:500px){
.curr-name {
  font-size: .7rem;
}
  .curr-code {
    font-size: .7rem;
  }
  .view-btn {
    font-size: 0.7rem !important;
    padding: 0 .4rem !important;
  } 
}
</style>
