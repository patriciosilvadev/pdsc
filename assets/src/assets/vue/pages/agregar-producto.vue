<template>
  <f7-page>
    <f7-navbar title="Agregar producto" back-link="Back"></f7-navbar>
    <f7-block>
      <f7-list inset>
        <!-- Fila principal-->
        <b-row>
          <!-- Columna izquierda -->
          <b-col md="5" lg="4" xl="3">
            <b-row>
              <!-- Vista de imagen -->
              <b-col cols='12'>
                <div class="display-flex justify-content-center align-content-center">
                  <img :src="foto.name" alt="" width="250px" height="250px" id="yourImgTag">
                </div>
              </b-col>
              <!-- Campo cargar imagen -->
              <b-col cols='12'>
                <f7-list-input 
                  accept="image/*capture=camera"
                  label="Foto"
                  type="file"
                  @input="foto = $event.target.files[0]"
                  placeholder="Foto"
                  @change="fotoValue = $event.target.value"
                  clear-button
                  required
                  validate
                  error-message="Debe cargar una imagen del producto"
                  autocomplete
                  @keyup.native.enter="agregarProducto"
                  multiple
                ></f7-list-input>
              </b-col>
            </b-row>
          </b-col>
          <!-- Columna derecha-->
          <b-col md="7" lg="8" xl="9">
            <b-row>
              <b-col md='6'>
                <f7-list-input
                  label="Nombre"
                  type="text"
                  :value="producto.nombre"
                  @input="producto.nombre = $event.target.value"
                  placeholder="Nombre"
                  clear-button
                  required
                  validate
                  error-message="Debe ingresar un nombre"
                  autocomplete
                  @keyup.native.enter="agregarProducto"
                ></f7-list-input>
              </b-col>
              <b-col md='6'>
                <f7-list-input
                  label="Marca"
                  type="text"
                  :value="producto.marca"
                  @input="producto.marca = $event.target.value"
                  placeholder="marca"
                  clear-button
                  required
                  validate
                  error-message="Debe ingresar una marca"
                  autocomplete
                  @keyup.native.enter="agregarProducto"
                ></f7-list-input>
              </b-col>
              <b-col md='6'>
                <f7-list-input
                  label="distribuidor"
                  type="text"
                  :value="producto.distribuidor"
                  @input="producto.distribuidor = $event.target.value"
                  placeholder="distribuidor"
                  clear-button
                  required
                  validate
                  error-message="Debe ingresar un distribuidor"
                  autocomplete
                  @keyup.native.enter="agregarProducto"
                ></f7-list-input>
              </b-col>
              <b-col md='6'>
                <f7-list-input
                  label="Presentacion"
                  type="text"
                  :value="producto.presentacion"
                  @input="producto.presentacion = $event.target.value"
                  placeholder="Presentacion"
                  clear-button
                  required
                  validate
                  error-message="Debe ingresar una presentacion"
                  autocomplete
                  @keyup.native.enter="agregarProducto"
                ></f7-list-input>
              </b-col>
              <b-col md='12'>
                <f7-list-input
                  label="Descripcion"
                  type="text"
                  :value="producto.descripcion"
                  @input="producto.descripcion = $event.target.value"
                  placeholder="Descripcion"
                  clear-button
                  required
                  validate
                  error-message="Debe ingresar una descripcion"
                  autocomplete
                  @keyup.native.enter="agregarProducto"
                ></f7-list-input>
              </b-col>
              <!-- Boton para agregar producto -->
              <b-col cols="12">
                <f7-list form>
                  <f7-button @click="agregarProducto" class="margin-horizontal margin-top" raised color="black">Agregar</f7-button>
                </f7-list>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </f7-list>
    </f7-block>
  </f7-page>
</template>
<script>

import Auth from '../../auth'

export default {
  data() {
    return {
      fotoValue: '',
      myfoto: '',
      foto: '',
      producto:{
        nombre: '',
        marca: '',
        distribuidor: '',
        presentacion: '',
        descripcion: '',
      }

    }
  },
  methods: {
    agregarProducto(){
      var fReader = new FileReader() 
      fReader.readAsDataURL(this.foto) 
      fReader.onloadend = function(event){ 
        var img = document.getElementById("yourImgTag")
        img.src = event.target.result 
        console.log(event.target.result)
        console.log(event.target)
      } 
      console.log(this.foto)
      console.log(this.fotoValue)
      console.log(this.foto.name)
      console.log(this.foto.value)
      console.log(this.foto.type)
      console.log(this.producto)
      


      this.axios.post(Auth.URL+'/api/productos', {producto: this.producto}).then(res => {
        console.log(res.data.data);
        this.$f7router.navigate('/inicio/')
      })
    }
    
  }
}
</script>

<style>
  .list li{
    list-style: none
  }
</style>