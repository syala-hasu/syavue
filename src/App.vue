<template>
  <div id="app">
    <sya-key-input-text text="hogehoge"></sya-key-input-text>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
}
</style>
