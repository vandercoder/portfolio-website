<template>
  <hr class="line border-2 opacity-75 my-4">
</template>

<script>
export default {
  
}
</script>

<style scoped>
  @keyframes growLine {
    0% {
      transform: scalex(0);
    }
    100% {
      transform: scaleX(100%);
    }
  }

  .line {
    animation: 0.7s ease-in-out 0.2s 1 growLine;
    transform-origin: left;
  }
</style>