<template>
  <div id="calculator">
    <Display />
    <div id="keyboard">
      <Key keybind="CE" />
      <Key keybind="C" />
      <Key keybind="<" />
      <Key keybind="/" />
      <Key keybind="7" />
      <Key keybind="8" />
      <Key keybind="9" />
      <Key keybind="x" />
      <Key keybind="4" />
      <Key keybind="5" />
      <Key keybind="6" />
      <Key keybind="-" />
      <Key keybind="1" />
      <Key keybind="2" />
      <Key keybind="3" />
      <Key keybind="+" />
      <Key keybind="+-" />
      <Key keybind="0" />
      <Key keybind="," />
      <Key keybind="=" />
    </div>
  </div>
</template>

<script>
import Display from "./Display";
import Key from "./Key";

export default {
  name: "Calculator",
  components: {
    Display,
    Key
  }
};
</script>

<style scoped>
#calculator {
  font-size: 10vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #000000;
  background-color: #000000;
  padding: 8px;
  overflow: hidden;
}

#keyboard {
  flex-grow: 1;
  display: grid;
  grid-gap: 1vw;
  grid-template-columns: repeat(4, 1fr);
}
</style>
