<template>
  <div>
    <h2>記事を投稿する</h2>
    <v-container fluid>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          label="タイトル"
          outlined
        ></v-text-field>
        <v-textarea
          label="本文"
          outlined
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
  methods: {
    postForm () {
      axios.get('http://localhost:6000')
           .then(response => console.log(response))
           .catch(error => console.log(error))
    }
  }
}
</script>
