<template>
  <div class="library">
    <form id="search" class="form">
      <div class="form-row align-items-center">
        <div class="col-12">
          <label class="sr-only" for="searchquery">search query</label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text"><i class="fa fa-search" aria-hidden="true"></i></div>
            </div>
            <input type="text" class="form-control" id="searchquery" placeholder="search" v-model="searchQuery">
          </div>
        </div>
      </div>
    </form>

    <div v-if="loading" class="graph-spinner text-center">
      <div class="three-quarters" id="spinner-people">loading...</div>
    </div>

    <div class="items">
      <div class="item" v-for="item in filteredItems" :key="item.id">
        <a href=""><img :src="item.image_url" :alt="item.title" class="cover"></a>
        <div class="title">
          <a href="">{{ item.title }}</a>
        </div>
        <div class="author">
          {{ item.author }}
        </div>
        <div class="tags">
          <span v-for="tag in item.tags" :key="tag.name" class="badge badge-secondary">{{ tag.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '../api';
import moment from 'moment';

export default {
  name: 'Library',

  data () {
    return {
      items: [],
      loading: true,
      searchQuery: ''
    };
  },

  created () {
    this.fetchItems();
  },

  methods: {
    fetchItems: function() {
      Api.getLibraryItems().then(response => {
        this.loading = false;
        this.items = response.data;
      // eslint-disable-next-line
      }, error => {
        this.loading = false;
      });
    }
  },

  computed: {
    filteredItems: function () {
      let filterKey = this.searchQuery && this.searchQuery.toLowerCase();
      let items = this.items;
      if (filterKey) {
        items = items.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
          });
        });
      }
      return items;
    }
  },

  filters: {
    moment: function (date) {
      moment.locale('el');
      let m = moment(date);
      return m.parseZone().format('dddd, DD.MM HH:mm');
    }
  }
};
</script>

<style lang="scss" scoped>
.library {
  .form {
    padding-bottom: 20px;
  }

  .items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 30px;
    justify-items: center;

    @media all and (max-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media all and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    .item {
      text-align: center;

      a {
        display: inline-block;
      }

      .cover {
        display: block;
        max-width: 100%;
        height: 240px;
        object-fit: cover;
      }

      .title {
        padding-top: 5px;
        font-weight: bold;
      }
    }
  }
}
</style>
