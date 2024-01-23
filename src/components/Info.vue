<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>

    <h1>
        
        Info
    </h1>
    <b-button href="/#/somerandom" >SomeRandom</b-button>
    <b-button href="/#/formulario" >Formulario</b-button>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Inicio',
            href: '/#/inicio'
          },
          {
            text: 'Info',
            active:true
          }
        ]
      }
    }
  }
</script>

<style>

</style>