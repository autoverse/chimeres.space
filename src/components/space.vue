<template>
  <div>
    <div id="map">
    </div>
  </div>
</template>

<script>
  import mapboxgl from 'mapbox-gl'

  export default {
    name: 'space',

    data () {
      return {
        map: null,
        marker: null
      }
    },

    mounted () {
      this.createMap()
    },

    methods: {
      createMap: function () {
        mapboxgl.accessToken = 'pk.eyJ1IjoiY29temVyYWRkIiwiYSI6ImxjQjFHNFUifQ.ohrYy34a8ZIZejrPSMWIww'

        // init the map
        this.map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v9',
          center: [23.71560, 37.98584],
          zoom: 18
        });

        //this.map.addControl(new mapboxgl.Navigation());
      }
    }
  }
</script>

<style>
  #map {
    width: 100%;
    height: 350px;
  }
</style>
