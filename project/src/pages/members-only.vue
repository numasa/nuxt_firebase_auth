<template>
  <v-flex xs6>
    <v-card>
      <v-card-title>このページは</v-card-title>
      <v-card-text>
        ログインしたユーザのみが見ることができる
      </v-card-text>
      <v-card-actions class="justify-center">
        <a href='/' class='button--green'>Go To Top</a>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.links {
  padding-top: 15px;
}
</style>