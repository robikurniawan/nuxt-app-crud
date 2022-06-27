<template>
  <div>
  <b-container fluid="md" class="mt-5 mb-5">
    <div class="row">
      <b-col md="12">
        <b-card class="rounded">

          <h4>Data</h4>
          <hr>
          <b-button :to="{ name: 'post-create'}" variant="primary" class="mb-3" >Add</b-button>

          <b-table striped hover :items="posts" :fields="fields" show-empty>
            <template v-slot:cell(actions)="row">
              <b-button :to="{name: 'post-edit-id' , params: {id: row.item.id }}" variant="warning" size="sm">Edit</b-button>
              <b-button variant="danger" size="sm" @click="deletePost(row)">Delete</b-button>

            </template>

          </b-table>

        </b-card>
      </b-col>
    </div>
  </b-container>
  </div>
</template>

<script>
  export default {
    layout: 'app',

    head: {
      title: 'Post',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page description'
        }
      ],
    },


    data() {
      return {
        fields: [
              { key: "title", label: "Title", tdClass: ''},
              { key: "content", label: "Content" , tdClass: ''},
              { key: "actions", label: "Actions" , tdClass: 'w-20',  thClass: 'w-20'}
        ],
        posts: [],
      }
    },

    mounted() {

      this.$axios.get('posts')

        .then(response => {
          this.posts = response.data.data

        }).catch(error => {
          console.log(error.response.data)

        });
    },

    methods: {

      async deletePost(row) {

        await this.$axios.delete(`posts/${row.item.id}`)

        .then(() => {
            this.posts.splice(row.index, 1);
            this.$toast.global.notif_success() //Using custom toast

        }).catch((err) => {

        });

      }

    },

  }
</script>
<style>
  .w-20{
    width: 15%;
  }

</style>
