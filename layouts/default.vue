<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <span v-if="!loggedIn">
          <v-list-item
            v-for="(item, i) in loginItems"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </span>
        <span v-if="loggedIn">
          <v-list-item
            v-for="(item, i) in logoutItems"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </span>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="yellow lighten-1"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <span v-if="loggedIn">{{ userName }}</span>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.state.user.loggedIn
    }
  },
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      userName: "",
      items: [
        {
          icon: 'mdi-note-multiple',
          title: '記事一覧',
          to: '/post/'
        },
        {
          icon: 'mdi-grease-pencil',
          title: '記事を投稿する',
          to: '/post/new_post'
        },
        {
          icon: 'mdi-account-multiple',
          title: 'ユーザ一覧',
          to: '/user/'
        }
      ],
      loginItems: [
        {
          icon: 'mdi-account-plus',
          title: 'ログイン',
          to: '/user/login'
        },
        {
          icon: 'mdi-account-check',
          title: 'サインイン',
          to: '/user/create'
        }
      ],
      logoutItems: [
        {
          icon: 'mdi-account',
          title: 'マイページ',
          to: '/user/mypage'
        },
      ],
      miniVariant: false,
      right: true,
      title: 'yikegaya blog app',
      isLoggin: false
    }
  },
  mounted() {
    if (localStorage.yikegayaBlogSessionId) {
      this.$store.commit('user/changeLoggedIn')
      this.userName = localStorage.getItem('yikegayaBlogUserName')
    }
  },
}
</script>
