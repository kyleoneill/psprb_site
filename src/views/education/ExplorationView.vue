<script setup lang="ts">

</script>

<template>
  <h1>Exploration</h1>

  <div class="sub-header">
    <h2>Wormholes</h2>
    <p>
      Wormholes are anomalies that can be used to move between two systems. Wormholes can connect to high, low, or null
      security systems, referred to as k-space. They can also connect to wormhole systems, referred to as w-space or
      j-space. A wormhole system is one where there are no stargates and the only method of moving between systems
      is using wormholes.
    </p>
    <h3>Wormhole Health</h3>
    <p>
      You can consider a wormhole to have two health bars, when either one of these runs out the wormhole will close.
      Every wormhole has a limited amount of time in which it lasts, wormholes spawn with a lifespan of about 24 hours.
      Each wormhole also has a maximum amount of mass that can go through it before it collapses, every time a ship
      passes through the wormhole it will take damage equivalent to the mass of the passing ship. The maximum amount
      of mass a wormhole can handle is determined by its size. The information box of the wormhole will display this
      information.
    </p>
    <br />
    <h4>Wormhole Lifespan</h4>
    <table>
      <thead>
        <tr>
          <th scope="col">Text</th>
          <th scope="col">Meaning</th>
          <th scope="col">Slang</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Not yet begun</th>
          <td>More than 24 hours</td>
          <td>Fresh</td>
        </tr>
        <tr>
          <th scope="row">Beginning to decay</th>
          <td>Between 4 and 24 hours</td>
          <td>Fresh</td>
        </tr>
        <tr>
          <th scope="row">Reaching the end</th>
          <td>Less than 4 hours</td>
          <td>End of Life (EOL)</td>
        </tr>
      </tbody>
    </table>
    <br />
    <h4>Wormhole Mass</h4>
    <table>
      <thead>
      <tr>
        <th scope="col">Text</th>
        <th scope="col">Meaning</th>
        <th scope="col">Slang</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">Not yet</th>
        <td>Over 50%</td>
        <td>Fresh</td>
      </tr>
      <tr>
        <th scope="row">Not to a critical degree</th>
        <td>Between 10% and 50%</td>
        <td>Shrink</td>
      </tr>
      <tr>
        <th scope="row">Critically disrupted</th>
        <td>Less than 10%</td>
        <td>Crit</td>
      </tr>
      </tbody>
    </table>
    <br />
    <p>
      When somebody in the corp asks if a wormhole is "healthy", they are asking if it is still in the "beginning to
      decay" portion of its lifespan and that it has not yet been mass disrupted.
    </p>
    <div class="img-with-text">
      <img src="/src/assets/wh-info-box.jpg" alt="information box of a wormhole">
      <p>This wormhole will last less than 4 more hours, has not been mass disrupted, and up to battleships can use it.</p>
    </div>
    <h3>Classification</h3>
    <p>
      Each wormhole system has a classification which begins at C1 at the lower bound and ends at C6 at the higher
      bound. A wormholes classification determines the types of anomalies that spawn inside of it, how many statics it
      will likely have, and the strength of the NPCs that spawn inside of it. Some wormholes have system-wide
      modifiers, where the strength of the modifier is determined by the classification.
    </p>
    <h3>Visual Identification</h3>
    <p>
      The visual characteristics of a wormhole can tell you most of the information contained in its information box,
      and more. The center of the wormhole will always look like the skybox of the destination system. When the
      wormhole goes to k-space, this can help you determine what region of space it will go to before you jump through
      it.
      <br />
      Wormhole systems will always have the same skybox, determined by their classification. This means that every
      single wormhole going to a C1 system will <i>always</i> look the same. <a href="https://wiki.eveuniversity.org/Visual_wormhole_identification" target="_blank" rel="noopener noreferrer">Eve University</a>
      has a page showing what each class of wormhole looks like.
      <br />
      Additionally, wormholes will aggressively shake when they have reached end-of-life and will be surrounded by an
      aurora that tells you its size.
    </p>
    <br />
    <h4>Visual Wormhole Size</h4>
    <table>
      <thead>
      <tr>
        <th scope="col">Color</th>
        <th scope="col">Max Mass</th>
        <th scope="col">Max Equivalent Ship Size</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">Royal Blue</th>
        <td>5,000,000 kg</td>
        <td>Frigate</td>
      </tr>
      <tr>
        <th scope="row">Teal</th>
        <td>20,000,000 kg</td>
        <td>Cruisers, Battlecruisers</td>
      </tr>
      <tr>
        <th scope="row">Gray</th>
        <td>300,000,000 kg</td>
        <td>Battleships</td>
      </tr>
      <tr>
        <th scope="row">Yellow</th>
        <td>1,800,000,000 kg</td>
        <td>Freighters, capitals</td>
      </tr>
      </tbody>
    </table>
    <p>
      There is a slight distinction in the above table between "max mass" and "max equivalent ship size" because there
      are some ways to change the mass of a ship, and some ships with special mass values. The Nestor is an exploration
      focused battleship that has a mass equal to the largest cruiser mass value. Heavy interdiction cruisers are able
      to fit special modules that greatly reduce their mass. Entering a wormhole with an afterburner or microwarpdrive
      will increase the mass of your ship, this is known as "going in hot".
    </p>
    <div class="img-with-text">
      <img src="/src/assets/c3-wormhole.jpg" alt="image of a wormhole">
      <p>This wormhole goes to a C3 wormhole system and will allow battleships to pass through.</p>
    </div>
    <h3>Special Characteristics</h3>
    <p>
      While in wormhole space, local chat is restricted. This means other pilots in the same wormhole system as you will
      not appear in the local chat, unless they speak. This makes it vital to check your directional scanner constantly
      and be on the lookout for other ships or scanning probes. Keep in mind that cloaked ships will not appear on
      the directional scanner.
    </p>
    <h3>Statics</h3>
    <p>
      Every wormhole system contains "static" wormholes. A static connection means that a wormhole will <i>always</i>
      contain a connection to a type of system, but not necessary the same exact system. As an example, a C1 wormhole
      with a high-sec static may point to Jita one day and Dodixie the next. Generally, higher class wormholes will
      contain more static connections.
    </p>
  </div>

  <div class="sub-header">
    <h2>Staying Safe in Dangerous Space</h2>
    <h3>Local Chat</h3>
    <p>
      While in low and null security space, local chat is your best friend for determining how safe a system is. Always
      keep an eye on local chat, and assume anybody you see who is not blue is aggressive.
      <br />
      <b>NOTE:</b> While in wormhole or pochven space, other players will not appear in local chat unless they type
      in it.
    </p>
    <h3>Directional Scanner</h3>
    <p>
      By default, the 'V' key will perform a directional scan. When you're in dangerous space, especially if local chat
      is restricted, you should be checking your directional scanner constantly. When using it defensively, make sure
      it's set to the maximum range (14.3 AU) and the maximum angle (360 degrees). The d-scanner will tell you when
      hostile ships are within its range, or when scanning probes are nearby.
      <br />
      <b>NOTE:</b> Cloaked ships and Combat Recon cruisers will <i>not</i> appear on the d-scanner. Always assume
      cloaked ships are in system and be on the lookout for scanning probes.
    </p>
  </div>
</template>

<style scoped>

</style>
