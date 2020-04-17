<template>
  <v-row no-gutters>
    <v-col clos="6">
      <v-card height="100%">
        <v-card-title>SNSでログイン</v-card-title>
        <v-card-text>
          <v-row justify="center" class="ma-2">
            <v-btn block color="#DB4437" @click="login" class="white--text"><v-icon left>mdi-google</v-icon>google</v-btn>
          </v-row>
          <v-row justify="center" class="ma-2">
            <v-btn block color="#1DA1F2" @click="login" class="white--text"><v-icon left>mdi-twitter</v-icon>twitter</v-btn>
          </v-row>
          <v-row justify="center" class="ma-2">
            <v-btn block color="#3B5998" @click="login" class="white--text"><v-icon left>mdi-facebook</v-icon>facebook</v-btn>
          </v-row>
        </v-card-text>
      </v-card>
      </v-col>
      <v-col>
      <v-card height="100%">
        <v-card-title>メールアドレスでログイン</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              name="name"
              label="名前"
              type="text"
              v-model="name"
              required
            ></v-text-field>
            <v-text-field
              name="mail"
              label="メールアドレス"
              type="text"
              v-model="mail"
              required
            ></v-text-field>
            <v-text-field
              name="password"
              label="パスワード"
              type="password"
              v-model="password"
              required
            ></v-text-field>
          </v-form>
          <v-row justify="center">
            <v-btn class="button--green" @click="login">メールを送信</v-btn>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { auth } from '../plugins/firebase'

@Component({
  layout: 'default',
})
export default class LoginPage extends Vue {
  mail: string = ''
  pass: string = ''

  login() {
    auth.signInWithEmailAndPassword(this.mail, this.pass)
      .then(user => this.$router.push('/'))
      .catch(e => alert(e.message))
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>