<template>
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>

    <h1>
        SomeRandom
    </h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Inicio',
            href: '/#/Inicio'
          },
          {
            text: 'Info',
            href: '/#/Info'
          },
          {
            text: 'SomeRandom',
            active:true
          }
        ]
      }
    }
  }
</script>

<style>

</style>