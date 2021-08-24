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
  <!-- <tbody>
    <tr
      v-for="post in posts"
      :key="post.title"
    >
      <td>{{ post.title }}</td>
      <td>投稿者</td>
    </tr>
  </tbody> -->
  </v-simple-table>
</template>

<script>
import axios from 'axios'

export default {
  mounted: function () {
    axios.get('http://localhost:5001/posts')
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }
}
</script>
