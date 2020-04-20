<template>
  <v-row no-gutters>
    <v-col>
      <v-card height="100%">
        <v-card-title>ユーザ情報を登録してください</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              name="name"
              label="ユーザー名"
              type="text"
              v-model="name"
              :rules="[required]"
            ></v-text-field>
            <v-text-field
              name="mail"
              label="メールアドレス"
              type="text"
              v-model="mail"
              :rules="[required]"
            ></v-text-field>
            <v-text-field
              name="password"
              label="パスワード"
              type="password"
              v-model="password"
              :rules="[required]"
            ></v-text-field>
          </v-form>
          <v-row id="message-area" justify="center"></v-row>
          <v-row justify="center">
            <v-btn
              @click="signup"
              :disabled="!name||!mail||!password"
            >登録する</v-btn>
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
  name: string = ''
  mail: string = ''
  password: string = ''

  required: any = (value: any) => !!value || "入力してください"

  signup() {
    fb.auth().createUserWithEmailAndPassword(this.mail, this.password)
      .then(user => {
        let currentUser: any | null = fb.auth().currentUser;
        currentUser.updateProfile({ displayName: this.name })
        this.$router.push('/')
      })
      .catch(e => {
        const messageArea: any | null = document.getElementById('message-area')
        messageArea.innerHTML = ''
        if(e.message == "The email address is badly formatted.") messageArea.insertAdjacentHTML('afterbegin','<strong class="red--text text--lighten-1">メールアドレスの形式に誤りがあります</strong>')
        else if (e.message == "Password should be at least 6 characters") messageArea.insertAdjacentHTML('afterbegin','<strong class="red--text text--lighten-1">パスワードは6文字以上で入力してください</strong>')
        else if (e.message == "The email address is already in use by another account.") messageArea.insertAdjacentHTML('afterbegin','<strong class="red--text text--lighten-1">入力されたメールアドレスはすでに使われています</strong>')
        else messageArea.insertAdjacentHTML('afterbegin','<strong class="red--text text--lighten-1">'+ e.message + '</strong>')
      })
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