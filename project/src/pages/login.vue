<template>
  <v-row no-gutters>
    <v-col clos="6">
      <v-card height="100%">
        <v-card-title>SNSでログイン</v-card-title>
        <v-card-text>
          <v-row justify="center" class="ma-2">
            <v-btn block color="#DB4437" @click="googleLogin" class="white--text"><v-icon left>mdi-google</v-icon>google</v-btn>
          </v-row>
          <!-- <v-row justify="center" class="ma-2">
            <v-btn block color="#1DA1F2" @click="twitterLogin" class="white--text" disabled><v-icon left>mdi-twitter</v-icon>twitter</v-btn>
          </v-row>
          <v-row justify="center" class="ma-2">
            <v-btn block color="#3B5998" @click="facebookLogin" class="white--text" disabled><v-icon left>mdi-facebook</v-icon>facebook</v-btn>
          </v-row> -->
        </v-card-text>
      </v-card>
    </v-col>
    <v-col height="100%">
      <v-card>
        <v-card-title>メールアドレスでログイン</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              name="login"
              label="メールアドレス"
              type="text"
              v-model="mail"
              :rules="[required]"
            ></v-text-field>
            <v-text-field
              name="password"
              label="パスワード"
              id="password"
              type="password"
              v-model="password"
              :rules="[required]"
            ></v-text-field>
          </v-form>
          <v-row id="message-area" justify="center"></v-row>
          <v-row justify="center">
            <v-btn
              @click="emailLogin"
              :disabled="!mail||!password"
            >ログイン</v-btn>
          </v-row>
          <v-row justify="center" class="mt-5">
            <v-btn text href="/signup">新規登録する</v-btn>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { fb } from '../plugins/firebase'

@Component({
  layout: 'default',
})
export default class LoginPage extends Vue {
  mail: string = ''
  password: string = ''

  required: any = (value: any) => !!value || "入力してください"

  emailLogin() {
    fb.auth().signInWithEmailAndPassword(this.mail, this.password)
      .then(user => this.$router.push('/'))
      .catch(e => {
        const messageArea: any | null = document.getElementById('message-area')
        messageArea.innerHTML = ''
        if(e.message == "The email address is badly formatted.") messageArea.insertAdjacentHTML('afterbegin','<strong class="red--text text--lighten-1">メールアドレスの形式に誤りがあります</strong>')
        else if (e.message == "Password should be at least 6 characters") messageArea.insertAdjacentHTML('afterbegin','<strong class="red--text text--lighten-1">パスワードは6文字以上で入力してください</strong>')
        else if (e.message == "The email address is already in use by another account.") messageArea.insertAdjacentHTML('afterbegin','<strong class="red--text text--lighten-1">入力されたメールアドレスはすでに使われています</strong>')
        else messageArea.insertAdjacentHTML('afterbegin','<strong class="red--text text--lighten-1">'+ e.message + '</strong>')
      })
  }

  googleLogin() {
    const provider = new fb.auth.GoogleAuthProvider()
    fb.auth().signInWithRedirect(provider)
  }

  twitterLogin() {
    const provider = new fb.auth.TwitterAuthProvider()
    fb.auth().signInWithRedirect(provider)
  }

  facebookLogin() {
    const provider = new fb.auth.FacebookAuthProvider()
    fb.auth().signInWithRedirect(provider)
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