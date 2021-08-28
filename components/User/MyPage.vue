<template>
  <div>
    <v-container fluid>
      <v-btn
        v-if="loggedIn"
        color="error"
        large
        @click="logout"
      >
        ログアウト
      </v-btn>
      <p v-if="!loggedIn">ログインしていません</p>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.state.user.loggedIn
    }
  },
  methods: {
    logout () {
      localStorage.removeItem("yikegayaBlogSessionId")
      localStorage.removeItem("yikegayaBlogUserId")
      localStorage.removeItem("yikegayaBlogUserName")
      this.$store.commit('user/changeLoggedIn')
      this.$store.commit('message/changeMessage', 'ログアウトしました')
      this.$router.push({path: '/'})
    }
  }
}
</script>
