<template>
  <div class="space">
    <div class="row">
      <div class="col-sm-8">
        <b-tabs>
          <b-tab title="GR" active>
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
          </b-tab>
          <b-tab title="EN">
            <p>
              Chimeres.space was created to accommodate ideas and projects of people still chasing Chimeras.
              150 square meters, on the first floor of an independent building, with a terrace between
              blocks of flats, on a quiet pedestrian street below the lines of Konstantinoupoleos St.
            </p>
            <p>
              The space can host screenings, performances, installations, exhibitions, theatrical plays,
              workshops, lessons, presentations, dj-sets & acoustic lives, meetings or simply relaxing
              gatherings by our library. There is still the possibility to accommodate rehearsals.
            </p>
            <p>
              Chimeres.space is a space of change and creativity, a place of self-determination and self-management.
            </p>
          </b-tab>
        </b-tabs>
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
          Μεταξουργείο <b-btn v-b-modal.modal2 class="metro">(κόκκινη γραμμή)</b-btn><br>
          Κεραμεικός <b-btn v-b-modal.modal3 class="metro">(μπλε γραμμή)</b-btn>
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

    <!-- Modal 2 Component -->
    <b-modal id="modal2" size="lg" title="κόκκινη γραμμή" ok-disabled="true">
      <p class="my-4">
        <img class="img-fluid mx-auto" src="../assets/img/metro2.jpg" alt="metro2">
      </p>
    </b-modal>

    <!-- Modal 3 Component -->
    <b-modal id="modal3" size="lg" title="μπλε γραμμή" ok-disabled="true">
      <p class="my-4">
        <img class="img-fluid mx-auto" src="../assets/img/metro3.jpg" alt="metro3">
      </p>
    </b-modal>

  </div>
</template>

<script>
export default {
  name: 'Space',

  head: {
    title: {
      inner: 'χώρος',
      separator: '|'
    }
  }
};
</script>
<script src="../assets/js/flickr-client-code.js" charset="utf-8"></script>

<style scoped>
.details div {
  margin-bottom: 20px;
}

.tab-content {
  padding: 10px 0 0 5px;
}
</style>
