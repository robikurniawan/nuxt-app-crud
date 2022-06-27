<template>
  <div>
    <b-container fluid="md" class="mt-5 mb-5">
      <b-row>
        <b-col md="12">
          <b-card class="rounded">
            <h5>Add Post</h5>
            <hr>
            <b-form @submit="store">
              <b-form-group label="Title">
                <b-form-input type="text" v-model="post.title" :class="{ 'is-invalid': validation.title }"
                  placeholder="Enter"></b-form-input>
                <div v-if="validation.title" class="mt-2">
                  <b-alert show variant="danger">{{ validation.title[0] }}</b-alert>
                </div>
              </b-form-group>
              <b-form-group label="Content Post">
                <b-form-textarea id="textarea" v-model="post.content" :class="{ 'is-invalid': validation.title }"
                  placeholder="masukkan content post" rows="5">
                </b-form-textarea>
                <div v-if="validation.content" class="mt-2">
                  <b-alert show variant="danger">{{ validation.content[0] }}</b-alert>
                </div>
              </b-form-group>
              <b-button type="submit" variant="primary">SIMPAN</b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>



<script>
export default {
  layout: 'app',

  head: {
      title: 'Create Post',
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
      post: {
        title : '',
        content : ''
      },

      validation: []
    }
  },

  methods: {

    async store(e) {
      e.preventDefault();

      await this.$axios.post('posts',{

        title: this.post.title,
        content: this.post.content

      })

      .then(() => {

          this.$router.push({
            name: 'post'
          }),

          this.$toast.global.notif_success() //Using custom toast

      }).catch((err) => {

          this.validation = err.response.data

      });

    }

  }

}
</script>

<style lang="css">

</style>
