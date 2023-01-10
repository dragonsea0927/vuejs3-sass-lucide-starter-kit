<template>
  <div>
    <p class="note_oss">
      This page is <b>Open Source on GitHub</b>. Don't hesitate
      <a href="https://github.com/thomasbnt/template-vuejs3-sass-lucide" target="_blank" rel="noopener noreferrer">
        to follow me and contribute to this repository
      </a>
      !
    </p>
  </div>
</template>
<script>
export default {
  name: "noteoss",
}
</script>
<style lang="scss" scoped>
div {
  margin: 1rem 0;
}
.note_oss {
  background-color: #00613f;
  color: white;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  line-height: 1.4rem;

  > a {
    color: white;
  }
}
</style>
