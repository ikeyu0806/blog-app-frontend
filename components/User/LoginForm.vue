<template>
  <div>
    <span v-if="loginFailure">
      <v-alert
        color="red"
        dense
        text
        type="error"
      >ログインに失敗しました。</v-alert>
    </span>
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="メールアドレス"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="パスワード"
        required
      ></v-text-field>

      <span @click="loginUser">
        <v-btn
          :disabled="!(this.valid)"
          color="primary"
          class="mr-4"
          @click="validate"
        >
          ログイン
        </v-btn>
      </span>
    </v-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      email: '',
      emailRules: [
        v => !!v || 'メールアドレスは必須項目です。'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'パスワードは必須項目です。'
      ],
      sendMessage: '',
      loginFailure: false,
      loginSuccess: false,
      valid: false
    }
  },
  methods: {
    validate () {
      this.$refs.form.validate()
    },
    returnTop(){
      this.$router.push({path: '/', query: {loginSuccess: this.loginSuccess}})
    },
    async loginUser () {
      axios.post(`${process.env.backendUrl}/login`, { 
        email: this.email,
        password: this.password
      })
      .then(response => {
        console.log(response)
        localStorage.setItem("yikegayaBlogSessionId", response.data.sessionId)
        localStorage.setItem("yikegayaBlogUserId", response.data.user_id)
        localStorage.setItem("yikegayaBlogUserName", response.data.user_name)
        this.$store.commit('user/changeLoggedIn')
        this.$router.push({ path: '/user/' })
      })
      .catch(error => console.log(error))
    }
  }
}
</script>
