<template>
  <div>

  </div>
</template>

<script>
import { menus } from '../projectConfig'

export default {
  data() {
    return {
      menus,
    }
  },
  mounted() {
    // this.menus[0].children.push({
    //   name: 111,
    // })
    console.log(this.menus)
  },
}
</script>

