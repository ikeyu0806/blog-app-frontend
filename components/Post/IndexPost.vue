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
      <td>{{ post.title }}</td>
      <td>{{ post.user_name == null ? '匿名投稿' : post.user_name }}</td>
    </tr>
  </tbody>
  </v-simple-table>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      posts: []
    }
  },
  mounted: function () {
    axios.get('http://localhost:5001/posts')
      .then(response => (this.posts = response.data.posts))
      // .then(response => (console.log(response)))
      .catch(error => console.log(error))
  }
}
</script>
