<script setup lang="ts">
import { RouterView } from 'vue-router'
import Sidebar from "@/components/MainSidebar.vue";
</script>

<template>
  <Sidebar />
  <div class="content">
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
.img-with-text {
  text-align: justify;
}

.img-with-text > img {
  display: block;
}

.img-with-text > p {
  color: var(--vt-c-text-dark-4);
  font-size: var(--img-text-size);
}

img {
  margin-top: 1rem;
}

.content {
  width: 100%;
}

main {
  margin-left: 3.5rem;
  margin-top: 2.5rem;
}

main li {
  list-style-position: inside;
}

.page-header {
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.page-header hr {
  margin-bottom: 0.75rem;
}

.page-header > .sub-header {
  margin-bottom: 1.25rem;
}

.sub-header h2 {
  margin-top: 1.25rem;
}

.sub-header h3 {
  margin-top: 0.75rem;
}

.sub-header br {
  margin-bottom: 0.5rem;
}

table {
  border-collapse: collapse;
  border: 2px solid var(--vt-c-text-dark-2)
}

th, td {
  border: 1px solid var(--vt-c-text-dark-2);
  padding: 8px 10px;
}

</style>
