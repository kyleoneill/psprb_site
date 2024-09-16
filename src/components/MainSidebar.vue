<script lang="ts">
export default {
  data() {
    return {
      corpProgramLinks: [
        { name: "Fleet Doctrines", url: "/programs/doctrines" },
        { name: "Buyback", url: "/programs/buyback" },
        { name: "Ship Replacement Program", url: "/programs/srp" },
      ],
      educationLinks: [
        { name: "Bookmarking", url: "/education/bookmarking" },
        { name: "Fleet Operations", url: "/education/fleet-ops" },
        { name: "Exploration", url: "/education/exploration" },
      ],
      links: [
        { name: "Home", url: "/" },
        { name: "Test", url: "/test" }
      ]
    }
  }
}
</script>

<template>
  <header class="sidebar">
    <div class="nav-title">
      <div class="logo">
        <img src="/src/assets/psprb_logo.webp" alt="corporation_logo">
      </div>
      <h1>The Peoples Space Republic</h1>
      <div class="subtext">
        <p>A Home For The People</p>
      </div>
    </div>
    <hr />
    <nav>
      <ul>
        <RouterLink to="/">
          <v-icon icon="mdi-space-station"></v-icon>
          Home
        </RouterLink>
      </ul>
      <h3>Corporation Programs</h3>
      <hr />
      <ul>
        <li v-for="link in corpProgramLinks" :key="link.name">
          <RouterLink :to="link.url">
            <v-icon icon="mdi-greater-than"></v-icon>
            {{link.name}}
          </RouterLink>
        </li>
      </ul>
      <h3>Education</h3>
      <hr />
      <ul>
        <li v-for="link in educationLinks" :key="link.name">
          <RouterLink :to="link.url">
            <v-icon icon="mdi-greater-than"></v-icon>
            {{link.name}}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.subtext {
  text-align: center;
}

.subtext > p {
  font-size: 18px;
}

.sidebar i {
  margin-right: 15px;
  font-size: 20px;
  color: var(--color-text);
}

.logo {
  text-align: center;
}

.logo > img {
  padding-top: 2vh;
  width: 5vw;
}

nav {
  padding-top: 15px;
  font-size: 12px;
  text-align: center;
}

nav hr {
  margin-left: 8px;
  width: 75%;
}

.nav-title {
  padding-bottom: 2vh;
}

nav > ul {
  list-style-type: None;
  padding-top: 5px;
  padding-bottom: 5px;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    font-size: 1rem;
  }
}
</style>
