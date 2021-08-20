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
        v-model="name"
        :counter="30"
        :rules="nameRules"
        label="ユーザ名"
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
/* eslint-disable */
export default {
  data () {
    return {
      name: '',
      nameRules: [
        v => !!v || '名前は必須項目です。',
        v => (v && v.length <= 30) || '名前は30文字以下で入力してください。',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'パスワードは必須項目です。',
        v => (v && v.length >= 8) || 'パスワードは半角英数字8文字以上で入力してください。',
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
      console.log("未実装")
    }
  }
}
</script>
