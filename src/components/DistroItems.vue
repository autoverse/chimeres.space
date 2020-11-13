<template>
  <div class="distro">

    <ol class="breadcrumb" v-if="!loading">
      <li class="breadcrumb-item"><router-link :to="{ name: 'Distro'}">Distro</router-link></li>
      <li class="breadcrumb-item active" v-if="items.length > 0">{{ items[0].category.name }}</li>
    </ol>

    <DistroIntro />

    <div v-if="loading" class="graph-spinner text-center">
      <div class="three-quarters" id="spinner-people">loading...</div>
    </div>

    <div class="row" v-if="items.length == 0 && !loading">
      <h5 class="d-block w-100 mt-3 mx-auto text-center">
        <i class="fa fa-window-close" aria-hidden="true"></i>
        Δεν υπάρχουν ακόμα αντικείμενα σε αυτή την κατηγορία!
      </h5>
    </div>

    <div class="card-deck">
      <div class="card" v-for="item in items" :key="item.code">
        <div @click='lightbox("img-" + item.code)'>
          <img :src="item.image_url" class="card-img-top" :alt="item.title">
        </div>
        <div class="card-block">
          <vue-markdown class="description" :source="item.description | subDesc"></vue-markdown>
          <div class="desc-more d-inline pr-3" v-if="item.description.length > 100">
            <i class="fa fa-info-circle" aria-hidden="true"></i>
            <a class="desc-link" @click='lightbox("desc-" + item.code)'>περισσότερα</a>
          </div>
          <div class="link d-inline" v-if="item.link">
            <i class="fa fa-external-link-square" aria-hidden="true"></i>
            <a class="card-link" :href="item.link" target="_blank">link</a>
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
          <i class="fa fa-times close" aria-hidden="true" @click='lightclose("img-" + item.code)'></i>
          <img :src="item.image_url" :alt="item.title">
        </div>

        <div class="lightbox" :id='"desc-" + item.code' @click='lightclose("desc-" + item.code)'>
          <i class="fa fa-times close" aria-hidden="true" @click='lightclose("desc-" + item.code)'></i>
          <vue-markdown class="light-description" :source="item.description"></vue-markdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '../api';
import VueMarkdown from 'vue-markdown';
import DistroIntro from './DistroIntro';

export default {
  name: 'Distro',

  data () {
    return {
      items: [],
      loading: true
    };
  },

  components: {
    VueMarkdown,
    DistroIntro
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
    subLink: function(string) {
      return string.substring(0, 32) + '...';
    },
    subDesc: function(string) {
      const clamp = '...';
      const length = 100;
      var node = document.createElement('div');
      node.innerHTML = string;
      var content = node.textContent;
      return content.length > length ? content.slice(0, length) + clamp : content;
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
        width: 210px;
        height: 210px;
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
        > div:last-child {
          margin-bottom: 40px;
        }

        .title {
          font-weight: bold;
        }

        .description {
          padding-top: 5px;
        }

        .desc-more {
          font-size: 0.9rem;

          .desc-link {
            color: #42b983;

            &:hover {
              color: black;
            }
          }
        }

        .link {
          margin-top: 5px;
          font-size: 0.9rem;
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
      background-color: rgba(58, 58, 58, 0.9);
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

      .light-description {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        color: black;
        width: 600px;
        max-width: 100%;
        text-align: left;
        padding: 15px;
        border-radius: 5px;

        @media all and (max-width: 575px) {
          width: 100%;
          padding: 5px;
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>
