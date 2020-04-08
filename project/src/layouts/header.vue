<template>
  <v-app-bar app>
    <v-toolbar-title><a href='/'>Sample Project</a></v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if="loginUser">
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
          <v-avatar color="teal" >
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
      <v-row>
        <v-col cols=6>
          <div class="text-truncate my-3">未ログイン</div>
        </v-col>
        <v-col cols=6>
          <v-btn class="button--green my-1" @click="login" align="right">ログインへ</v-btn>
        </v-col>
      </v-row>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator'
import { auth } from '../plugins/firebase'

@Component
export default class DefaultHeader extends Vue {
  loginUser:string  | null = null
  async mounted() {
    await auth.onAuthStateChanged((user) => {
      if(user) {
        this.loginUser = user.email
      }
    })
  }
  async logout() {
    await auth.signOut()
    this.loginUser = null
    this.$router.push('/')
  }
  async login() {
    this.$router.push('/login')
  }
}
</script>