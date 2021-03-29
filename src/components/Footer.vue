<template>
  <div class="footer">
    <div class="left">Copyright © 2019-2021 十三. All rights reserved.</div>
    <div class="right">
      <a target="_blank" href="https://github.com/newbee-ltd/vue3-admin">vue3-admin Version 3.0.0</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .footer {
    height: 50px;
    border-top: 1px solid #e9e9e9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
</style>