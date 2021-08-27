<template>
  <v-simple-table>
  <thead>
    <tr>
      <th class="text-left">
        記事タイトル
      </th>
      <th class="text-left">
        投稿ユーザ
      </th>
    </tr>
  </thead>
  <tbody>
    <tr
      v-for="post in posts"
      :key="post.title"
    > 
      <td @click="postDetail(post.id)">{{ post.title }}</td>
      <td @click="postDetail(post.id)">{{ post.user_name == null ? '匿名投稿' : post.user_name }}</td>
    </tr>
  </tbody>
  </v-simple-table>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      posts: []
    }
  },
  methods: {
    postDetail (id) {
      this.$router.push({ path: `/post/${id}` })
    },
  },
  mounted: function () {
    axios.get(`${process.env.backendUrl}/posts`)
      .then(response => {
        console.log(response)
        this.posts = response.data.posts
      })
      .catch(error => console.log(error))
  }
}
</script>
