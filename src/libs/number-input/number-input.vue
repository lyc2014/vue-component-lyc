<template>
  <el-input class="input-number" size="small" v-model="val" :disabled="disabled" @keyup.native="keyUp"></el-input>
</template>
<script>
export default {
  name: 'inputNumber',
  data () {
    return {
      val: ''
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: [String, Number],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value: {
      handler (val) {
        this.val = val
      },
      immediate: true
    }
  },
  methods: {
    keyUp () {
      this.val = this.val.toString().replace(/[^0-9\\.]/g, '')
      if (!/^\d+\.?\d{0,2}$/.test(this.val)) {
        this.val = this.val.substring(0, this.val.length - 1)
      }
      this.$emit('input', this.val === '' ? '' : Number(this.val))
    }
  }
}
</script>
<style lang="scss" scoped>
.input-number{

}
</style>
