<template>
  <div class="p404 text-center">
    <p>
      <img src="../assets/img/404.svg" alt="404">
    </p>
    <p>
      δεν υπάρχει αυτή η σελίδα :(
    </p>

  </div>
</template>

<script>
  export default {
    name: 'p404',

    head: {
      title: {
        inner: '404',
        separator: '|'
      }
    }
  };
</script>

<style>
  .p404 p {
    margin-top: 50px;
  }
</style>
