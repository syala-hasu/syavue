<template>
  <div id="app">
    <sya-key-input-text text="hogehoge" delay=300 leave-caret=true></sya-key-input-text>
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
