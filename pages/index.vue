<template>
  <Layouts/>
</template>

<script>
import Layouts from '../layouts/app.vue';
export default {
   head: {
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page description'
        }
      ],
    },

    name: "IndexPage",
    components: { Layouts }
}
</script>
