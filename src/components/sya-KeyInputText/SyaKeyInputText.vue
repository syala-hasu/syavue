<template>
  <span class="sya-key-input-text"
        v-bind:class="{
          displayed: displayed,
          'leave-caret': leaveCaret
        }" >{{ displayText }}</span>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class SyaKeyInputText extends Vue {
  @Prop({
    type: String,
    required: true
  })
  readonly text!: string;

  @Prop({
    type: Number,
    default: 100
  })
  readonly delay!: number;

  @Prop({
    type: Number,
    default: 0
  })
  readonly offset!: number;

  @Prop({
    type: Boolean,
    default: false
  })
  readonly leaveCaret!: boolean

  private displayText = "";
  private textCount = 0;
  private charList: Array<string> = [];
  private displayed = false

  created(): void {
    this.charList = this.text.split("");
    this.textCount = this.charList.length;
  }

  mounted(): void {
    this.inputText()
  }

  async inputText(): void {
      for (let count = 1; count <= this.textCount; count++) {
        await new Promise(resolve => setTimeout(resolve, count * this.delay + this.offset))
        this.displayText += this.charList.shift();
        if (this.charList.lenfth === 0) {
          this.displayed = true;
          this.$emit("displayed");
        }
      }
  }
}
</script>

<style lang="scss" scoped>
.sya-key-input-text {
  &:not(.displayed)::after {
    content: "|";
  }

  &.displayed.leave-caret::after {
    content: "|";
    animation: blink 1s linear infinite;
  }
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}
</style>
