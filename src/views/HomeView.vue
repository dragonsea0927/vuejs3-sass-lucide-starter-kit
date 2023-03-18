<script>
import noteOSS from "@/components/noteOSS.vue"
import { useHead } from "@unhead/vue"

export default {
  components: {
    noteOSS,
  },
  mounted() {
    useHead({
      title: "Home - Template Vue.js 3 + Vue Router + SASS + Lucide Icons",
    })
  },
}
</script>

<template>
  <main>
    <noteOSS />
  </main>
</template>
