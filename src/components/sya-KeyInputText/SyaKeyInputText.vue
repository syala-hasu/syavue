<template>
  <span class="sya-key-input-text">
    {{ displayText }} 
  </span>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"

@Component({})
export default class SyaKeyInputText extends Vue {

  @Prop({
    type: String,
    required: true
  })
  readonly text!: string
  
  @Prop({
    type: Number,
    default: 100
  })
  readonly delay!: number

  @Prop({
    type: Number,
    default: 0
  })
  readonly offset!: number

  private displayText = ""
  private textCount = 0
  private charList: Array<string> = []
  private displayed = false

  created(): void {
    this.charList = this.text.split("")
    this.textCount = this.charList.length
    console.log(this.charList)
  }
  
  mounted(): void {
    for (let count = 1; count <= this.textCount; count++) {
      setTimeout(() => {
        this.displayText += this.charList.shift();
        if (this.charList.length === 0) {
          this.displayed = true;
          this.$emit("displayed");
        }
      }, count * this.delay + this.offset
        );
    }
  }
}
</script>
<style lang="scss">
</style>

