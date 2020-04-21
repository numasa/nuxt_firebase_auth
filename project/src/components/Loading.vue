<template>
  <div class="loading-page" v-if="loading">
    <v-progress-circular
      :size="70"
      :width="7"
      color="#009688"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  layout: 'default',
})
export default class Loading extends Vue {
  loading: boolean = false
  start () {
    this.loading = true
  }
  finish () {
    this.loading = false
  }
}
</script>

<style>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  text-align: center;
  padding-top: 200px;
  z-index: 1;
}
</style>