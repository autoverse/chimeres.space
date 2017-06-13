<template>
  <div class="events-group">
    <div v-if="loading" class="graph-spinner text-center">
      <div class="three-quarters" id="spinner-people">loading...</div>
    </div>
    <div class="card" style="width: 20rem;" v-for="event in events">
      <router-link :to='"/event/" + event.id + "/" + event.slug'>
        <div class="card-img" v-bind:style='{ backgroundImage: "url(" + event.image + ")", }'></div>
        <div class="card-block">
          <h4 class="card-title">{{ event.title }}</h4>
          <p class="card-text">
            <i class="fa fa-calendar-o" aria-hidden="true"></i>
            <span class="date">{{ event.starts | moment }}</span>
            <span class="category" v-for="cat in event.category">
              <i :class='"fa " + cat.icon_class' aria-hidden="true"></i>
              <span class="category-name">{{ cat.name }}</span>
            </span>
          </p>
        </div>
      </router-link>
    </div>
    <div v-if="events.length == 0" class="row">
      <img src="../assets/img/space.jpg" alt="chimeres" class="img-fluid mx-auto">
      <h4 class="mt-4 mx-auto text-center">
        ο <router-link :to="{ name: 'space'}">χώρος</router-link> περιμένει τη δική σου δράση
      </h4>
    </div>
  </div>
</template>

<script>
  import Api from '../api';
  import moment from 'moment';

  export default {
    name: 'home',

    data () {
      return {
        events: [],
        loading: true
      }
    },

    created () {
      Api.getEvents().then(response => {
        this.loading = false;
        this.events = response.data;
      }, error => {
        this.loading = false;
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
