<template>
  <v-simple-table>
  <thead>
    <tr>
      <th class="text-left">
        ユーザ名
      </th>
    </tr>
  </thead>
  <tbody>
    <tr
      v-for="user in users"
      :key="user.name"
    >
      <td>{{ user.name }}</td>
    </tr>
  </tbody>
  </v-simple-table>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      users: []
    }
  },
  mounted: function () {
    axios.get(`${process.env.backendUrl}/users`)
      .then(response => (this.users = response.data.users))
      // .then(response => (console.log(response)))
      .catch(error => console.log(error))
  }
}
</script>
