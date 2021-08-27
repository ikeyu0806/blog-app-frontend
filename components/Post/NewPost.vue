<template>
  <div>
    <v-container fluid>
      <h2>記事を投稿する</h2>
      <br />
      <v-form
        ref="form"
      >
        <v-text-field
          label="タイトル"
          outlined
          v-model="title"
        ></v-text-field>
        <v-textarea
          label="本文"
          outlined
          v-model="content"
          name="post-content"
          value=""
          rows=30
        ></v-textarea>
        <v-btn
          color="success"
          class="mr-4"
          @click="postForm"
        >
        送信
      </v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    postForm () {
      axios.post(`${process.env.backendUrl}/create_post`, { 
        title: this.title,
        content: this.content,
        user_id: Number(localStorage.getItem("yikegayaBlogUserId"))
      })
        .then(response => {
          console.log(response)
          this.$router.push({ path: '/post/' })
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
