<template>
  <div>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link :to="{ name: 'home'}">Δράσεις</router-link></li>
      <li class="breadcrumb-item active">{{ event.title }}</li>
    </ol>
    <div class="row event">
      <div class="col-sm-4">
        <img :src="event.image_url" :alt="event.title" class="img-fluid">
      </div>
      <div class="col-sm-8">
        <h4>{{ event.title }}</h4>
        <vue-markdown :source="event.description"></vue-markdown>
        <div>
          <i class="fa fa-calendar-o" aria-hidden="true"></i>
          <span class="date">{{ event.starts | moment }}</span>
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
    </div>
  </div>
</template>

<script>
  import Api from '../api';
  import moment from 'moment';
  import VueMarkdown from 'vue-markdown';

  export default {
    name: 'event',

    data () {
      return {
        event: [],
        error: false,
        loading: true
      }
    },

    components: {
      VueMarkdown
    },

    created () {
      Api.getEvent(this.$route.params.id).then(response => {
        this.loading = false;
        this.event = response.data;
      }, error => {
        this.loading = false;
        this.error = true;
      });
    },

    filters: {
      moment: function (date) {
        moment.locale('el');
        return moment(date).format('dddd, DD.MM HH:mm');
      }
    }
  };
</script>

<style lang="scss">
  .event {
    margin-top: 20px;

    div {
      margin-top: 20px;

      .date {
        margin-left: 5px;
      }
    }
  }
</style>
