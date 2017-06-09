<template>
  <div class="newsletter">
    <form action="https://tinyletter.com/chimeres" method="post" target="_blank">
      <div class="card mx-auto">
        <div class="card-block">
          <h4 class="card-title">newsletter</h4>
          <p class="card-text">
            <div>
              <i class="fa fa-heart" aria-hidden="true"></i>
              (α)περιοδική περίληψη χιμαιρικής γαματοσύνης
            </div>
            <div class="form-group">
              <label class="sr-only" for="tlemail">συμπλήρωσε το email σου</label>
              <input type="email" name="email" class="form-control" id="tlemail" placeholder="συμπλήρωσε το email σου">
            </div>
            <input type="hidden" value="1" name="embed">
            <button type="submit" class="btn btn-primary">εγγραφή</button>
            <hr>
            <small class="text-muted"><a href="https://tinyletter.com/chimeres/letters/" target="_blank">τελευταίο newsletter</a></small>
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'newsletter',
  };
</script>
