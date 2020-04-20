<template>
  <v-app-bar app>
    <v-toolbar-title>
      <a href="/" class="header-title">
      <svg class="NuxtLogo" width="30" height="30" viewBox="0 0 452 342" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <path
            d="M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z"
            fill="#00C58E"
          />
          <path
            d="M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z"
            fill="#108775"
          />
          <path
            d="M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z"
            fill="#2F495E"
            fill-rule="nonzero"
          />
        </g>
      </svg>
      project
      </a>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if="loginUser">
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
          <v-avatar color="teal">
            <v-icon dark>mdi-account-circle</v-icon>
          </v-avatar>
          </v-btn>
        </template>
        
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <v-icon class="mx-2">mdi-account</v-icon>
              {{ loginUser }}
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn rounded dark color="teal" class="mx-2">Edit</v-btn>
              <v-btn rounded dark color="grey" class="mx-2" @click="logout">Logout</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div v-else>
      <v-btn class="my-1" @click="login" align="right">ログインへ</v-btn>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator'
import { fb } from '../plugins/firebase'

@Component
export default class DefaultHeader extends Vue {
  loginUser:string  | null = null
  async mounted() {
    await fb.auth().onAuthStateChanged((user) => {
      if(user) {
        this.loginUser = user.displayName
      }
    })
  }
  async logout() {
    await fb.auth().signOut()
    this.loginUser = null
    this.$router.push('/')
  }
  async login() {
    this.$router.push('/login')
  }
}
</script>

<style>
.header-title {
  text-decoration: none;
  color: #35495e !important;
  display: flex;
}
</style>