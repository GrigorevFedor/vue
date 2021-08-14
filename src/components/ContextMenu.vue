<template>
  <div class="context" v-if="shown" :style="styles">
      <div v-for="item in items" :key="item.text" class="context__item" @click="onClick(item)">
          {{item.text}}
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            items: [],
            shown: false,
            xPos: 0,
            yPos: 0,
        }
    },
    methods: {
        onClick(item){
            item.action()
        },
        onShow({ items, caller }) {
            this.items = items,
            this.shown = true
            this.setPosition (caller)
        },
        setPosition(caller){
            const computed = caller.getBoundingClientRect()
            this.xPos = computed.left
            this.yPos = computed.top
        },
        onClose(){
            this.items = [],
            this.shown = false
        }
    },
    computed: {
        styles(){
            return {
                top: `${this.yPos + 30}px`,
                left: `${this.xPos + 20}px`
            }
        }
    },
    mounted(){
        this.$context.EventBus.$on('shown', this.onShow)
        this.$context.EventBus.$on('close', this.onClose)
    },
    beforeDestroy(){
        this.$context.EventBus.$off('shown', this.onShow)
        this.$context.EventBus.$off('close', this.onClose)
    }
}
</script>

<style lang="scss" scoped>
.context {
    position: absolute;
    background: #eee;
    cursor: pointer;
}
</style>