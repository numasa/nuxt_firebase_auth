<template>
  <v-app-bar app>
    <v-toolbar-title><a href='/'>Sample Project</a></v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if="loginUser">
      <v-row>
        <v-col cols=2>
          <v-avatar color="indigo">
            <v-icon dark>mdi-account-circle</v-icon>
          </v-avatar>
        </v-col>
        <v-col cols=6>
         <div class="text-truncate my-3">{{ loginUser }}</div>
        </v-col>
        <v-col cols=4>
          <v-btn class="button--green my-1" @click="logout"><span class="text-truncate">ログアウト</span></v-btn>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <v-row>
        <v-col cols=7>
          <div class="text-truncate my-3">未ログインです</div>
        </v-col>
        <v-col cols=5>
          <v-btn class="button--green my-1" @click="login" align="right"><span class="text-truncate">ログイン</span></v-btn>
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