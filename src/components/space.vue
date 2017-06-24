<template>
  <div class="row">
    <div class="col-sm-4">
      <div class="details ml-2">
        <div>
          <i class="fa fa-map-marker" aria-hidden="true"></i> <strong>Τοποθεσία</strong><br>
          <a href="http://www.openstreetmap.org/way/494771197" target="_blank">Πυθοδώρου 6</a><br>
          (1ος όροφος)<br>
          Αθήνα (Βοτανικός)<br>
          10444
        </div>
        <div>
          <i class="fa fa-subway" aria-hidden="true"></i> <strong>Πρόσβαση</strong><br>
          Μεταξουργείο (κόκκινη γραμμή)<br>
          Καραμεικός (μπλε γραμμή)
        </div>
        <div>
          <i class="fa fa-envelope" aria-hidden="true"></i> <strong>Επικοινωνία</strong><br>
          <img src="https://chimeres.info/static/img/mail.png" alt="contact">
        </div>
      </div>
    </div>
    <div class="col-sm-8 ">
      <div class="mr-2 text-right">
        <a data-flickr-embed="true" href="https://www.flickr.com/photos/chimeresgr/albums/72157682366017022" title="Chimeres.Space"><img src="https://c1.staticflickr.com/5/4276/35267129542_34bd001c0e_z.jpg" width="100%" height="427" alt="Chimeres.Space"></a>
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
<script src="../assets/js/flickr-client-code.js" charset="utf-8"></script>

<style>
  .details div {
      margin-bottom: 20px;
  }
</style>
