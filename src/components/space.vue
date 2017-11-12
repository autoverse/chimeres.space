<template>
  <div>
    <div class="row">
      <div class="col-sm-8">
        <p>
          Το chimeres.space φτιάχτηκε με σκοπό να φιλοξενήσει ιδέες και project ανθρώπων που ακόμα κυνηγάνε Χίμαιρες.
          150 τετραγωνικά, στον 1ο όροφο ενός ανεξάρτητου κτιρίου, με ταράτσα ανάμεσα σε μπαλκόνια πολυκατοικιών,
          σε έναν ήσυχο πεζόδρομο κάτω από τις γραμμές της Κωνσταντινουπόλεως.
        </p>
        <p>
          Ο χώρος μπορεί να φιλοξενήσει προβολές, performances, installations, εκθέσεις, παραστάσεις, εργαστήρια,
          μαθήματα, παρουσιάσεις, dj sets &amp; ακουστικά lives, συναντήσεις ή απλά χαλαρωτικές συναθροίσεις με μελέτη της
          βιβλιοθήκης μας. Υπάρχει ακόμα η δυνατότητα να διατεθεί για πρόβες μετά από συνεννόηση.
        </p>
        <p>
          Το chimeres.space είναι ένας χώρος ευμετάβλητος και δημιουργικός, ένας χώρος αυτοδιάθεσης και αυτοδιαχείρισης.
        </p>
      </div>
      <div class="col-sm-4 text-right details">
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
          Κεραμεικός (μπλε γραμμή)
        </div>
        <div>
          <i class="fa fa-envelope" aria-hidden="true"></i> <strong>Επικοινωνία</strong><br>
          <img src="https://chimeres.info/static/img/mail.png" alt="contact">
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-sm-12">
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
