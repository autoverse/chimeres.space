<template>
  <div class="newsletter">
    <form action="https://tinyletter.com/chimeres" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/chimeres', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
      <div class="card mx-auto">
        <div class="card-block">
          <h4 class="card-title">newsletter</h4>
          <p class="card-text">
            <div>
              <i class="fa fa-heart" aria-hidden="true"></i>
              (α)περιοδική περίληψη χιμαιρικής γαματοσύνης
            </div>
            <div class="form-group">
              <label class="sr-only" for="exampleInputEmail1">συμπλήρωσε το email σου</label>
              <input type="email" class="form-control" id="email" placeholder="συμπλήρωσε το email σου">
            </div>
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
