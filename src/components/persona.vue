<template>
    <div class="overflow-auto">
      <b-pagination
        v-model="currentPage"
        :total-rows="personas.length"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
  
      <p class="mt-3">Current Page: {{ currentPage }}</p>
  
      <b-table
        id="my-table"
        :items="personas"
        :per-page="perPage"
        :current-page="currentPage"
        small
      ></b-table>
    </div>
  </template>
  
  <script>
import persona from '../services/persona';

    export default {
      data() {
        return {
          perPage: 15,
          currentPage: 1,
          personas: []
        }
      },
      mounted(){
        this.obtenerPersonas();
      },
      methods:{
        async obtenerPersonas(){
            try{
            const data=await persona.obtenerPersonasPaginadas(
                parseInt(this.currentPage),
                parseInt(this.perPage)
            )
            this.personas=data.content;
            console.log(this.personas)
            }catch(error){
                console.error(error);
            }
        }
      },
      computed: {
        rows() {
          return this.personas.length
        }
      }
    }
  </script>