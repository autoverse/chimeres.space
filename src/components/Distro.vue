<template>
  <div class="distro">
    <div v-if="loading" class="graph-spinner text-center">
      <div class="three-quarters" id="spinner-people">loading...</div>
    </div>

    <div class="card-deck">
      <router-link :to='"/distro/" + category.letter_code' class="card" v-for="category in categories" :key="category.letter_code">
        <div class="card-block">
          <img class="card-img" :src="category.image_url" :alt="category.name">
        </div>
        <h4 class="card-title">{{ category.name }}</h4>
      </router-link>
    </div>
  </div>
</template>

<script>
import Api from '../api';

export default {
  name: 'Distro',

  data () {
    return {
      categories: [],
      loading: true
    };
  },

  created () {
    this.fetchItems();
  },

  methods: {
    fetchItems: function() {
      Api.getDistroCategories().then(response => {
        this.loading = false;
        this.categories = response.data;
      // eslint-disable-next-line
      }, error => {
        this.loading = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  .card-deck {
    @media all and (max-width: 575px) {
      flex-direction: column;
      display: flex;
    }

    .card {
      height: auto;
      max-width: 200px;
      min-width: 200px;

      .card-img {
        display: block;
        max-width: 150px;
        margin: auto;
      }

      .card-title {
        text-align: center;
      }
    }
  }
}
</style>
