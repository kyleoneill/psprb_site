<script setup lang="ts">

</script>

<template>
  <h1>Bookmarking</h1>

  <p>
    We have a bookmarking folder located in the Message of the Day (MOTD) for our corporation chat channel.
  </p>

  <div class="page-header">
    <h2>Bookmark Rules</h2>
    <hr />

    <div class="sub-header">
      <h3>Bookmark Name</h3>
      <p>
        For data, relic, gas, and combat sites, right click on the scanned signature and save it in the relevant folder
        with the automatically generated name.
        <br />
        For wormholes, we have a standardized naming format. The wormhole name should be the first three letters of the
        anomaly signature ID followed by the wormhole type. As an example, if a wormhole is a C2 and has a signature
        ID of DVL-761 then its bookmark name should be "DVL C2". The exception to this is when you bookmark a wormhole
        you have just entered. After jumping into a wormhole, bookmark the wormhole you just came from as "*HOME". The
        asterisk puts it to the top of the list of wormholes in the bookmark folder, and this name allows you to follow
        a breadcrumb of "*HOME" wormholes back to your starting location.
        <br />
        For an explanation of wormhole mechanics, please see the <RouterLink to="/education/exploration">Exploration</RouterLink> page.
        <br />
        When you scan down a wormhole, it is important to warp to the wormhole, right click it, and select "Save
        location" in order to create the bookmark. This will allow somebody using the bookmark to warp directly onto
        the wormhole. If you save the signature as a bookmark, the bookmark will be several kilometers off of the
        wormhole.
      </p>
      <img src="/src/assets/save-wh-bookmark.jpg" alt="save bookmark location in the UI">
    </div>

    <div class="sub-header">
      <h3>Bookmark Folder</h3>
      <p>
        Anomaly bookmarks should be placed in one of two locations. Wormhole anomalies should be placed in the
        "Wormholes" folder, the rest should be placed in the "Sites" folder.
        <br />
        Safe bookmarks should be placed in the "Safe Locations" folder. A "safe" is any bookmark created mid-warp, which
        brings you to an arbitrary point in space that cannot be warped to from anything visible on the overview.
        <br />
        Bookmarks for significant structures should be placed in the "Structures" folder and are typically created to
        make <a href="https://wiki.eveuniversity.org/Bookmark#Instadock" target="_blank" rel="noopener noreferrer">instadock</a> or
        <a href="https://wiki.eveuniversity.org/Bookmark#Insta-undock" target="_blank" rel="noopener noreferrer">insta-undock</a> bookmarks.
      </p>
    </div>

    <div class="sub-header">
      <h3>Expiration Time</h3>
      <p>
        Anomaly bookmarks should always be set to an expiration time of "In 2 Days", unless they are an end-of-life
        wormhole, in which case the bookmark should be set to "In 3 Hours". This keeps the bookmark folder tidy and
        prevents a buildup of bookmarks to dead signatures.
        <br />
        Bookmarks stored in the "Safe Locations", "Tacticals" or "Structures" folders should be set to never expire.
        Try to minimize the number of bookmarks you create that do not expire and limit them to locations where we live
        or are deployed to regularly.
      </p>
    </div>
  </div>
</template>

<style scoped>

p > br {
  margin-bottom: 0.5rem;
}

</style>
