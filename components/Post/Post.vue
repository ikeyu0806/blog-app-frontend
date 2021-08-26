<template>
  <div>
    <v-container fluid>
    <v-card
    ></v-card>
      <v-card-title>{{ post.title }}</v-card-title>
      <v-card-text>
        <div>{{ post.content }}</div>
      </v-card-text>
    </v-container>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      post: {}
    }
  },
  mounted: function () {
    axios.get(`http://localhost:5001/post/${this.$route.params.id}`)
      .then(response => {
        console.log(response.data.post)
        this.post = response.data.post
      })
      .catch(error => console.log(error))
  }
}
</script>
