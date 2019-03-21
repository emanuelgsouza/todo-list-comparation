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
  watch: {
    item (val) {
      this.value = val
    }
  },
  methods: {
    toggleShowInput () {
      this.showInput = !this.showInput

      this.$refs.input.focus()
    },
    handleBlur () {
      this.showInput = !this.showInput

      this.$emit('change', { index: this.index, value: this.value })
    },
    deleteElement () {
      this.$emit('delete', { index: this.index })
    }
  },
  mounted () {
    this.value = this.item
  }
}
</script>

<template>
  <div class="columns is-gapless">
    <div class="column is-11">
      <li v-if="!showInput" @click="toggleShowInput"> {{ item }} </li>
      <input
        ref="input"
        class="input is-primary"
        type="text"
        v-model="value"
        v-show="showInput"
        @blur="handleBlur">
    </div>
    
    <div class="column is-1">
      <button class="button is-danger" @click="deleteElement"> Del </button>
    </div>
  </div>
</template>
