<template>
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>

    <h1>
        Inicio
    </h1>
    <b-button href="/#/info" >Info</b-button>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Inicio',
            active:true
        }
    ]
      }
    }
  }
  
</script>

<style>

</style>