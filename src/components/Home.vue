<template>
  <div class="home">
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
    <div v-if="events.length == 0 && !loading" class="row">
      <h4 class="d-block w-100 mt-1 mb-5 mx-auto text-center">
        Don't Panic και άκου μια live ηχογράφηση 🎼
      </h4>
      <br>
      <div class="w-100" v-html="recording.embed_code"></div>
    </div>
  </div>
</template>

<script>
import Api from '../api';
import moment from 'moment';

export default {
  name: 'Home',

  data () {
    return {
      events: [],
      recordings: [],
      recording: null,
      loading: true
    };
  },

  created () {
    this.fetchFutureEvents();
  },

  methods: {
    fetchFutureEvents: function() {
      Api.getFutureEvents().then(response => {
        this.loading = false;
        this.events = response.data;
        if (this.events.length === 0) {
          Api.getRecordings().then(response => {
            this.recordings = response.data;
            this.recording = this.recordings[Math.floor((Math.random() * this.recordings.length) + 1)];
          // eslint-disable-next-line
          }, error => {
            this.recordings = false;
          });
        }
      // eslint-disable-next-line
      }, error => {
        this.loading = false;
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

<style lang="scss">
</style>
