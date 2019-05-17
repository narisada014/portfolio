<template>
  <div>
    <nuxt-link :to="linkUrl">{{linkName}}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    linkUrl: {
      type: String,
      required: true
    },
    linkName: {
      type: String,
      required: true
    }
  }
}
</script>
