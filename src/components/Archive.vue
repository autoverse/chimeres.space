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

  </div>
</template>

<script>
import Api from '../api';
import moment from 'moment';

export default {
  name: 'Archive',

  data () {
    return {
      events: [],
      inner: 'event',
      loading: true
    };
  },

  head: {
    title: function () {
      return {
        inner: this.inner,
        separator: '|'
      };
    }
  },

  created () {
    Api.getPastEvents().then(response => {
      this.loading = false;
      this.events = response.data;
      this.inner = this.event.title;
      this.$emit('updateHead');
    // eslint-disable-next-line
    }, error => {
      this.loading = false;
    });
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
