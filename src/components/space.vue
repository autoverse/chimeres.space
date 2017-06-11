<template>
  <div class="row">
    <div class="col-sm-5">
      <img src="../assets/img/painting.jpg" alt="building" class="img-fluid">
    </div>
    <div class="col-sm-7 details">
      <div>
        <i class="fa fa-map-marker" aria-hidden="true"></i> <strong>Τοποθεσία</strong><br>
        <a href="http://osm.org/go/xxSitiXh9-?m=" target="_blank">Πυθοδώρου 6</a><br>
        (1ος όροφος)<br>
        Αθήνα (Βοτανικός)<br>
        10444
      </div>
      <div>
        <i class="fa fa-subway" aria-hidden="true"></i> <strong>Πρόσβαση</strong><br>
        Μεταξουργείο (κόκκινη γραμμή)<br>
        Καραμεικός (μπλε γραμμή)</span>)
      </div>
      <div>
        <i class="fa fa-envelope" aria-hidden="true"></i> <strong>Επικοινωνία</strong><br>
        <img src="https://chimeres.info/static/img/mail.png" alt="contact">
      </div>
      <div>
        <a href="http://osm.org/go/xxSitiXh9-?m=" target="_blank"><img src="../assets/img/map.png" alt="map" class="img-fluid"></a>
      </div>
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
      // this.createMap()
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
      }
    }
  }
</script>

<style>
  #map {
    width: 100%;
    height: 350px;
  }

  .details div {
      margin-bottom: 20px;
  }
</style>
