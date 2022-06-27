<template>
    <div>
      <b-navbar toggleable="lg" type="dark"  class="nuxt-color shadow-md" fixed="top">
        <b-navbar-brand to="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Nuxt_logo_%282021%29.svg/2560px-Nuxt_logo_%282021%29.svg.png" width="150px" alt="" srcset="">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/post">POST</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <Nuxt/>

    </div>
</template>

<style>
body{
  background-color: #fbfbfb;
}

.nuxt-color {
  background-color:#0b412b;
  color:#026904;
}
.mt-5 {
  margin-top: 100px!important;
}
</style>

