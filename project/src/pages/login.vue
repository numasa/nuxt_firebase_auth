<template>
  <v-flex xs6>
    <v-card>
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            name="login"
            label="メールアドレス"
            type="text"
            v-model="mail"
            required
          ></v-text-field>
          <v-text-field
            name="password"
            label="パスワード"
            id="password"
            type="password"
            v-model="pass"
            required
          ></v-text-field>
        </v-form>
        <v-row justify="center">
          <v-btn class="button--green" @click="login">ログイン</v-btn>
        </v-row>
        <v-row justify="center" class="mt-5">
          <v-btn text href="/signup">新規登録</v-btn>
        </v-row>
      </v-card-text>
    </v-card>
  </v-flex>
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