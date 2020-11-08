<template>
  <div class="distro">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link :to="{ name: 'Distro'}">Distro</router-link></li>
      <li class="breadcrumb-item active">{{ items[0].category.name }}</li>
    </ol>

    <div v-if="loading" class="graph-spinner text-center">
      <div class="three-quarters" id="spinner-people">loading...</div>
    </div>

    <div class="card-deck">
      <div class="card" v-for="item in items" :key="item.code">
        <div @click='lightbox("img-" + item.code)'>
          <img :src="item.image_url" class="card-img-top" :alt="item.title">
        </div>
        <div class="card-block">
          <vue-markdown class="description" :source="item.description"></vue-markdown>
          <div class="link" v-if="item.link">
            <a :href="item.link" target="_blank">{{ item.link | subStr }}</a>
          </div>
        </div>
        <div class="price">
          <i class="fa fa-euro" aria-hidden="true"></i>
          <span v-if="item.price > 0">{{ item.price }}</span>
          <span v-if="item.price == 0">donation</span>
        </div>
        <div class="card-footer">
          <input type="text" disabled :value="item.code" size="5" :id="item.code">
          <button @click="copy(item.code)" class="btn btn-sm" title="copy"><i class="fa fa-files-o" aria-hidden="true"></i></button>
        </div>

        <div class="lightbox" :id='"img-" + item.code'>
          <img :src="item.image_url" :alt="item.title">
          <i class="fa fa-times close" aria-hidden="true" @click='lightclose("img-" + item.code)'></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '../api';
import VueMarkdown from 'vue-markdown';

export default {
  name: 'Distro',

  data () {
    return {
      items: [],
      loading: true
    };
  },

  components: {
    VueMarkdown
  },

  created () {
    this.fetchItems();
  },

  methods: {
    fetchItems: function() {
      Api.getDistroItems(this.$route.params.lettercode).then(response => {
        this.loading = false;
        this.items = response.data;
      // eslint-disable-next-line
      }, error => {
        this.loading = false;
      });
    },

    async copy(s) {
      await navigator.clipboard.writeText(s);
    },

    lightbox: function(img) {
      const el = document.getElementById(img);
      el.classList.add('table');
    },

    lightclose: function(img) {
      const el = document.getElementById(img);
      el.classList.remove('table');
    }
  },

  filters: {
    subStr: function(string) {
      return string.substring(0, 30) + '...';
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  .card-deck {
    .card {
      height: auto;
      flex-direction: row;
      max-width: 510px;
      min-width: 410px;
      border-bottom: 3px solid rgba(0, 0, 0, .125);

      @media all and (max-width: 575px) {
        min-width: auto;
        flex-direction: column;
      }

      &:hover {
        box-shadow: none;
        text-decoration: none;
        filter: none;
        border-bottom: 3px solid rgba(0, 0, 0, .125);
      }

      .card-img-top {
        width: 200px;
        height: 200px;
        object-fit: cover;
        cursor: pointer;

        @media all and (max-width: 575px) {
          width: 100%;
        }

        &:hover {
          filter: grayscale(100%);
          transition: 0.5s;
        }
      }

      .card-block {
        .title {
          font-weight: bold;
        }

        .description {
          padding-top: 5px;

          p {
            margin-bottom: 0;
          }
        }

        .code {
          padding-top: 5px;
        }
      }

      .card-footer {
        bottom: 0;
        right: 0;
        position: absolute;
        padding: 0 0 5px 0;

        input {
          text-align: right;
        }
      }

      .price {
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: black;
        color: white;
        padding: 4px;
        font-size: 0.9rem;

        @media all and (max-width: 575px) {
          top: 0;
          bottom: auto;
        }
      }
    }

    .lightbox {
      position: fixed;
      z-index: 9998;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(58, 58, 58, 0.6);
      display: none;
      transition: opacity .5s ease;

      &.table {
        display: table;
      }

      img {
        display: block;
        margin: auto;
        max-width: 100%;
        overflow: hidden;
      }

      .close {
        position: absolute;
        top: 15px;
        right: 15px;
        color: white;
        font-size: 2rem;
        opacity: 1;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
}
</style>
