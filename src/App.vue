<template>
  <Calculator />
</template>

<script>
import Calculator from "./components/Calculator";

export default {
  name: "app",
  components: {
    Calculator
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
</style>
