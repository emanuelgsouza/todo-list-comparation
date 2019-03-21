<script>
export default {
  name: 'TodoListItem',
  props: {
    item: {
      type: String
    },
    index: {
      type: Number
    }
  },
  data: () => ({
    showInput: false,
    value: ''
  }),
  methods: {
    toggleShowInput () {
      this.showInput = !this.showInput

      this.$refs.input.focus()
    },
    handleBlur () {
      this.showInput = !this.showInput

      this.$emit('change', { index: this.index, value: this.value })
    }
  },
  mounted () {
    this.value = this.item
  }
}
</script>

<template>
  <div>
    <li v-if="!showInput" @click="toggleShowInput"> {{ item }} </li>
    <input
      ref="input"
      class="input is-primary"
      type="text"
      v-model="value"
      v-show="showInput"
      @blur="handleBlur">
  </div>
</template>
