<template>
  <hr class="line border-2 opacity-75 my-4">
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .line {
    -webkit-animation: 0.8s 0s 1 ease-in-out growLine;
            animation: 0.8s 0s 1 ease-in-out growLine;
    -webkit-transform-origin: left;
        -ms-transform-origin: left;
            transform-origin: left;
  }

  @-webkit-keyframes growLine {
    0% { width: 0%; }
    100% { width: 100%; }
  }
  @keyframes growLine {
    0% { width: 0%; }
    100% { width: 100%; }
  }

</style>