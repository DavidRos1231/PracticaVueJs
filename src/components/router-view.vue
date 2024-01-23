<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div>
    <header>
    <div>
    <b-navbar  toggleable="lg" type="dark" variant="info">
      <b-navbar-brand >NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
  

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
  </header>
  <container>
    <div>
    <b-sidebar  z-index="-1" visible=true no-header no-header-close no-close-on-backdrop no-close-on-esc no-close-on-route-change id="sidebar-1" title="Sidebar" shadow>
      <br><br>
      <h1>Opciones de Navegacion</h1>
      <div class="px-3 py-2">
        
        <b-nav-item 
    ><b-link :to="{ name: 'inicio' }">Inicio</b-link>
  </b-nav-item>

  <b-nav-item 
    ><b-link :to="{ name: 'info' }">Info</b-link>
  </b-nav-item>

  <b-nav-item 
    ><b-link :to="{ name: 'somerandom' }">Somerandom</b-link>
  </b-nav-item>
      </div>
    </b-sidebar>
  </div>
      <b-row>
        <b-col cols="3">
        </b-col>
      <b-col cols="9">  
       <div>
  <router-view/>
</div>
      </b-col>

    </b-row>
   
  </container>


  </div>
</template>


