<template>
  <div>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link :to="{ name: 'home'}">Δράσεις</router-link></li>
      <li class="breadcrumb-item active">{{ event.title }}</li>
    </ol>
    <div class="row event">
      <div class="col-sm-4">
        <img :src="event.image" :alt="event.title" class="img-fluid">
      </div>
      <div class="col-sm-8">
        <h4>{{ event.title }}</h4>
        <div>
          {{ event.description }}
        </div>
        <div>
          <i class="fa fa-calendar-o" aria-hidden="true"></i>
          <span class="date">{{ event.starts }}</span>
        </div>
        <div v-if="event.link">
          <i class="fa fa-link" aria-hidden="true"></i>
          <a :href="event.link">περισσότερα</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Api from '../api';

  export default {
    name: 'event',

    data () {
      return {
        event: [],
        loading: true
      }
    },

    created () {
      Api.getEvent(this.$route.params.id).then(response => {
        this.loading = false;
        this.event = response.data;
      }, error => {
        this.loading = false;
        console.error(error);
      });
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
