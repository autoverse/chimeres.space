<template>
  <div class="archive">

    <div v-if="loading" class="graph-spinner text-center">
      <div class="three-quarters" id="spinner-people">loading...</div>
    </div>

    <div class="card-deck">
      <router-link :to='"/event/" + event.id + "/" + event.slug' class="card" v-for="event in events" :key="event.id">
        <div class="card-img" v-bind:style='{ backgroundImage: "url(" + event.image_url + ")", }'></div>
        <div class="card-block">
          <h4 class="card-title">{{ event.title }}</h4>
        </div>
        <div class="card-footer">
          <i class="fa fa-calendar-o" aria-hidden="true"></i>
          <span class="date">{{ event.starts | moment }}</span>
          <span class="category" v-for="cat in event.category" :key="cat.name">
            <i :class='"fa " + cat.icon_class' aria-hidden="true"></i>
            <span class="category-name">{{ cat.name }}</span>
          </span>
        </div>
      </router-link>
    </div>

    <div v-if="moreEvents" class="text-center mt-4">
      <button class="btn btn-primary" @click="loadmore">περισσότερες δράσεις...</button>
    </div>

  </div>
</template>

<script>
import Api from '../api';
import moment from 'moment';

const PAGE_SIZE = 24;

export default {
  name: 'Archive',

  data () {
    return {
      events: [],
      inner: 'event',
      loading: true,
      total: 0,
      psize: PAGE_SIZE,
      offset: 0
    };
  },

  head: {
    title: {
      inner: 'χώρος',
      separator: '|'
    }
  },

  created () {
    Api.getPastEvents(this.offset).then(response => {
      this.loading = false;
      this.events = response.data.results;
      this.total = response.data.count;
      this.$emit('updateHead');
      this.offset += this.events.length;
    // eslint-disable-next-line
    }, error => {
      this.loading = false;
    });
  },

  computed: {
    moreEvents () {
      return this.events.length < this.total;
    }
  },

  methods: {
    loadmore: function () {
      Api.getPastEvents(this.offset).then(response => {
        this.events = this.events.concat(response.data.results);
        this.offset += this.events.length;
      });
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
</style>
