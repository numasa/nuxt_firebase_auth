<template>
  <div class="container">
    <v-flex xs6>
      <v-card>
        <v-card-title>Login</v-card-title>
        <v-card-text>
          <form>
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
          </form>
          <button class="button--green" @click="login">ログイン</button>
        </v-card-text>
      </v-card>
    </v-flex>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { auth } from '../plugins/firebase'

@Component({
  layout: 'default',
  components: {
  }
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

.links {
  padding-top: 15px;
}
</style>