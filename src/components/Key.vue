<template>
  <div @click="keyPress()" class="key">{{keybind}}</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Number",
  props: ["keybind"],
  methods: {
    ...mapActions([
      "append",
      "delete",
      "reset",
      "clear",
      "negPos",
      "decimal",
      "setOperator",
      "result"
    ]),
    keyPress() {
      switch (this.keybind) {
        case "CE":
          this.clear();
          break;
        case "C":
          this.reset();
          break;
        case "<":
          this.delete();
          break;
        case "/":
          this.setOperator(this.keybind);
          break;
        case "x":
          this.setOperator(this.keybind);
          break;
        case "-":
          this.setOperator(this.keybind);
          break;
        case "+":
          this.setOperator(this.keybind);
          break;
        case "+-":
          this.negPos();
          break;
        case ",":
          this.decimal();
          break;
        case "=":
          this.result();
          break;
        default:
          this.append(this.keybind);
          break;
      }
    }
  }
};
</script>

<style scoped>
.key {
  background-color: #f44336;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
}
.key:active {
  background-color: #ff795f;
}
</style>