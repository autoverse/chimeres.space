<template>
  <div class="events-group">
    <div v-if="loading" class="graph-spinner text-center">
      <div class="three-quarters" id="spinner-people">loading...</div>
    </div>
    <div v-if="error" class="row">
      <img src="http://placehold.it/1550x450" class="img-fluid">
      <h4 class="mt-5 mx-auto">
        ο <router-link :to="{ name: 'contact'}">χώρος</router-link> περιμένει τη δική σου δράση
      </h4>
    </div>
    <div class="card" style="width: 20rem;" v-for="event in events">
      <router-link :to='"/event/" + event.id + "/" + event.slug'>
        <div class="card-img" v-bind:style='{ backgroundImage: "url(" + event.image + ")", }'></div>
        <div class="card-block">
          <h4 class="card-title">{{ event.title }}</h4>
          <p class="card-text">
            <i class="fa fa-calendar-o" aria-hidden="true"></i>
            <span class="date">{{ event.starts }}</span>
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Api from '../api';

  export default {
    name: 'home',

    data () {
      return {
        events: [],
        error: false,
        loading: true
      }
    },

    created () {
      Api.getEvents().then(response => {
        this.loading = false;
        this.events = response.data;
      }, error => {
        this.loading = false;
        this.error = true;
      });
    }
  };
</script>
