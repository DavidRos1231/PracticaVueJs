<template>
    <div>
        <button>David</button>
        <form
  id="formulario"
 @submit="checkForm"
>
<p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error.index">{{ error }}</li>
    </ul>
  </p>
  <h1>Nombre completo</h1>
  <p>
    <label for="name">Nombre</label>
    <input
      id="name"
      v-model="name"
      type="text"
      name="name"
    >
  </p>
  <p>
    <label for="lname">Apellido paterno</label>
    <input
      id="lname"
      v-model="lname"
      type="text"
      name="lname"
    >
  </p>
  <p>
    <label for="mname">Apellido materno</label>
    <input
      id="mname"
      v-model="mname"
      type="text"
      name="mname"
    >
  </p>
  <h1>Direccion</h1>
  <p>
    <label for="cp">Codigo postal</label>
    <input
      id="cp"
      v-model="cp"
      type="number"
      name="cp"
      min="0"
    >
  </p> 
  <p>
    <label for="calle">calle</label>
    <input
      id="calle"
      v-model="calle"
      type="text"
      name="calle"
    >
  </p>
  <p>
    <label for="numerocasa">Numero casa</label>
    <input
      id="numerocasa"
      v-model="numerocasa"
      type="number"
      name="numerocasa"
      min="0"
    >
  </p> 
  <p>
    <label for="ciudad">Ciudad</label>
    <input
      id="ciudad"
      v-model="ciudad"
      type="text"
      name="ciudad"
    >
  </p>
  <h1>Otros datos</h1>
  <p>
    <label for="birth">Fecha Nacimiento</label>
    <input type="date" 
    id="birth" 
    name="birth" 
    v-model="birth"
    />
  </p>
  <p>
    <label for="correo">Correo</label>
    <input
      id="correo"
      v-model="correo"
      type="text"
      name="correo"
    >
  </p>
  <p>
    <label for="numerotel">Numero de telefono</label>
    <input
      id="numerotel"
      v-model="numerotel"
      type="number"
      name="numerotel"
      min="0"
    >
  </p> 
  <p>
    <label for="foto">foto</label>
    <input 
    type="file" 
    id="foto" 
    name="foto" 
    @change="changeFiles" ref="miarchivo"
    accept="image/png, image/jpeg" />
  </p> 
  <p>
    <input
      type="submit"
      value="Submit"
    >
  </p>

</form>
</div>
</template>

<script>
export default{
    data(){
        return {
            errors: [],
            name: null,
            mname: null,
            lname: null,
            cp: null,
            calle:null,
            numerocasa:null,
            ciudad:null,
            birth:null,
            correo:null,
            numerotel:null,
            foto:null
        }
    },
    methods:{
        changeFiles(){
     //obtenemos los archivos
     // se pueden asignar a un array u objeto
     this.foto=this.$refs.miarchivo.files[0];
    },
    checkForm: function (e) {

        var myDate= new Date(this.birth);
        var fechaActual = new Date();
        var edad = fechaActual.getFullYear() - myDate.getFullYear();
        this.errors = [];
        var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if (!this.name) {
        this.errors.push('Nombre requerido.');
        }
        if (!this.lname) {
        this.errors.push('Apellido Paterno requerido.');
        }
        if (!this.cp) {
            this.errors.push('Codigo postal requerido.');
            
        }else if(this.cp.length != 5){
            this.errors.push('Codigo postal debe tener 5 digitos.');
        }
        if (!this.calle) {
            this.errors.push('Calle requerido.');
        }
        if (!this.numerocasa) {
            this.errors.push('Numero casa requerido.');
        }
        if (!this.ciudad) {
            this.errors.push('Ciudad requerido.');
        }
        if (!this.birth) {
            this.errors.push('Fecha nacimiento requerida.');
        }else if(myDate > Date.now()){
            this.errors.push('Fecha nacimiento no puede ser mayor a la fecha actual.');
            // no menor a 18
        }else if (edad < 18){
            this.errors.push('Fecha nacimiento no puede ser menor a 18 años.');
        }

        if (!this.correo) {
            this.errors.push('Correo requerido.');
        }else if( !validEmail.test(this.correo)){
            this.errors.push('Correo invalido.');
        }
        
        if (!this.numerotel) {
            this.errors.push('Numero telefono requerido.');
        }else if(this.numerotel.length != 10){
            this.errors.push('Numero telefono debe tener 10 digitos.');
        }
        console.log(this.foto);
        if (!this.foto) {
          this.errors.push("La imagen es obligatoria.");
        }else if(this.foto.size > 3000000){
          console.log(this.foto.size);
          this.errors.push("La imagen debe ser menor a 3mb.");
        }


      e.preventDefault();
    },
    checkCorreo: function (correo) {
      
    }
  }
}
</script>

<style>

</style>