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
  name: 'P404',

  head: {
    title: {
      inner: '404',
      separator: '|'
    }
  }
};
</script>

<style lang="scss" scoped>
.p404 {
  text-align: center;

  p {
    margin-top: 50px;
  }
}
</style>
