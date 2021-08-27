<template>
  <div>
    <v-container fluid>
      <v-btn
        v-if="showLogout"
        color="error"
        large
        @click="logout"
      >
        ログアウト
      </v-btn>
      <p v-if="!showLogout">ログインしていません</p>
    </v-container>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      showLogout: false
    }
  },
  methods: {
    logout () {
      localStorage.removeItem("yikegayaBlogSessionId")
      localStorage.removeItem("yikegayaBlogUserId")
      localStorage.removeItem("yikegayaBlogUserName")
      this.$router.push({path: '/'})
    }
  },
  mounted() {
    if (localStorage.yikegayaBlogSessionId) {
      this.showLogout = true;
    }
  },
}
</script>
