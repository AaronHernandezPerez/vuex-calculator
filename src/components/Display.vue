<template>
  <div class="display">
    <div class="flex">
      <div class>{{operator}}</div>
      <div class="total">{{total || '0'}}</div>
    </div>
    <div class="current">{{displayNumber || '0'}}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Display",
  computed: mapGetters(["displayNumber", "total", "operator"])
};
</script>

<style scoped>
.display {
  text-align: right;
  background-color: #ba000d;
  margin-bottom: 10px;
  color: #ffffff;
  padding: 0 0.1em;
}

.current {
  font-size: 1.2em;
}

.total {
  flex-grow: 1;
}

.flex {
  display: flex;
  font-size: 0.9em;
}
</style>