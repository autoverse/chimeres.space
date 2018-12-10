<template>
  <div class="event">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link :to="{ name: 'Home'}">Δράσεις</router-link></li>
      <li class="breadcrumb-item active">{{ event.title }}</li>
    </ol>
    <div v-if="loading" class="graph-spinner text-center">
      <div class="three-quarters" id="spinner-people">loading...</div>
    </div>
    <div class="row item">
      <div class="col-sm-4">
        <img :src="event.image_url" :alt="event.title" class="img-fluid">
        <div>
          <i class="fa fa-calendar-o" aria-hidden="true"></i>
          {{ event.starts | moment }}
        </div>
        <div class="link" v-if="event.link">
          <i class="fa fa-link" aria-hidden="true"></i>
          <a :href="event.link" target="_blank">περισσότερα</a>
        </div>
        <div class="link" v-if="event.fb_link">
          <i class="fa fa-facebook-official" aria-hidden="true"></i>
          <a :href="event.fb_link" target="_blank">fb event</a>
        </div>
        <div class="link" v-if="event.imdb_link">
          <i class="fa fa-imdb" aria-hidden="true"></i>
          <a :href="event.imdb_link" target="_blank">imdb</a>
        </div>
      </div>
      <div class="col-sm-8">
        <h4>{{ event.title }}</h4>
        <div v-if="recordings.length > 0">
          <h6><i class="fa fa-microphone" aria-hidden="true"></i> recordings</h6>
          <div v-for="rec in recordings" :key="rec.key">
            <div v-html="rec.embed_code" class="rec"></div>
            <hr>
          </div>
        </div>
        <vue-markdown :source="event.description"></vue-markdown>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '../api';
import moment from 'moment';
import VueMarkdown from 'vue-markdown';

export default {
  name: 'Event',

  data () {
    return {
      event: [],
      inner: 'event',
      error: false,
      loading: true,
      recordings: []
    };
  },

  components: {
    VueMarkdown
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
    Api.getEvent(this.$route.params.id).then(response => {
      this.loading = false;
      this.event = response.data;
      this.inner = this.event.title;
      this.$emit('updateHead');
      Api.getEventRecordings(this.$route.params.id).then(response => {
        this.recordings = response.data;
      // eslint-disable-next-line
      }, error => {
        this.recordings = false;
      });
    // eslint-disable-next-line
    }, error => {
      this.loading = false;
      this.error = true;
    });
  },

  filters: {
    moment: function (date) {
      moment.locale('el');
      let m = moment(date);
      return m.parseZone().format('dddd HH:mm, DD.MM.YYYY');
    }
  }
};
</script>

<style lang="scss" scoped>
.event {
  .item {
    margin-top: 20px;
  }

  div {
    margin-top: 20px;

    .fa {
      margin-right: 5px;
    }
  }

  .rec {
    margin-bottom: 8px;
  }
}
</style>
