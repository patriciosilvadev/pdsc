<template>
  <f7-page :page-content="false">
  <f7-navbar :title="producto.nombre" back-link="Back"></f7-navbar>
  <f7-toolbar tabbar top>
    <f7-link tab-link="#tab-1" tab-link-active>Comercial</f7-link>
    <f7-link tab-link="#tab-2" >Financiera</f7-link>
  </f7-toolbar>
  <f7-tabs>
    <f7-tab id="tab-1" class="page-content" tab-active>
      <f7-block>
        <b-row>
          <b-col>
            <f7-block>
              <!-- Grafico lineal -->
              <line-chart :chart-data="datacollection" :options="options"></line-chart>
              <!-- Formulario de precio del producto -->
              <f7-list>
                <b-row>
                  <!-- fecha -->
                  <b-col>
                    <f7-list-input
                      label="Fecha"
                      type="date"
                      placeholder="Producto"
                      :defaultValue="actualFecha()"
                      :value="fecha = actualFecha()"
                      @input="fecha = $event.target.value"
                      required
                      validate
                    >
                    </f7-list-input>
                  </b-col>
                  <!-- precio -->
                  <b-col>
                    <f7-list-input
                      label="Precio"
                      type="number"
                      placeholder="Precio"
                      :value="precio"
                      @input="precio = $event.target.value"
                      required
                      validate
                      clear-button
                    ></f7-list-input>
                  </b-col>
                  <!-- boton -->
                  <b-col>
                    <f7-button @click="guardarPrecioProducto" class="margin-horizontal margin-top" raised color="black" bg-color="orange">Guardar</f7-button>
                  </b-col>
                </b-row>
              </f7-list>
              <!-- Tabla de datos del Producto -->
              <div class="data-table">
                <table>
                  <thead>
                    <tr>
                      <th class="id">Nro</th>
                      <th class="producto">Producto ID</th>
                      <th class="fecha" style="min-width:100%">Fecha</th>
                      <th class="precio">Precio</th>
                      <th class=""></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="id">1</td>
                      <td class="producto">4</td>
                      <td class="fecha" style="min-width:135px">2019-10-23</td>
                      <td class="precio">10000</td>
                      <td class="">
                        <f7-button outline color="red">Eliminar</f7-button>
                      </td>
                    </tr>
                    <tr>
                      <td class="id">2</td>
                      <td class="producto">4</td>
                      <td class="fecha" style="min-width:135px">2019-10-24</td>
                      <td class="precio">13200</td>
                      <td class="">
                        <f7-button outline color="red">Eliminar</f7-button>
                      </td>
                    </tr>
                    <tr>
                      <td class="id">3</td>
                      <td class="producto">4</td>
                      <td class="fecha" style="min-width:135px">2019-10-25</td>
                      <td class="precio">11500</td>
                      <td class="">
                        <f7-button outline color="red">Eliminar</f7-button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </f7-block>
          </b-col>
        </b-row>
      </f7-block>
    </f7-tab>
    <f7-tab id="tab-2" class="page-content">
      <f7-block>
        <b-row>
          <b-col>
            <f7-block>
              <!-- Grafico de barras -->
              <bar-chart :chart-data="barData" :options="options"></bar-chart>
              <!-- Tabla de datos  -->
              <div class="data-table">
                <table>
                  <thead>
                    <tr>
                      <th class="tasas"><b>Tasas</b></th>
                      <td class="tasa20">+20%</td>
                      <td class="tasa25">+25%</td>
                      <td class="tasa30">+30%</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th class="Dolar">Dolar</th>
                      <td class="">19.253</td>
                      <td class="">20.741</td>
                      <td class="">21.193</td>
                    </tr>
                    <tr>
                      <th class="Euro">Euro</th>
                      <td class="">22.043</td>
                      <td class="">23.410</td>
                      <td class="">24.231</td>
                    </tr>
                    <tr>
                      <th class="Bitcoin">Bitcoin</th>
                      <td class="">24.752</td>
                      <td class="">25.912</td>
                      <td class="">27.253</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </f7-block>
          </b-col>
        </b-row>
      </f7-block>
    </f7-tab>
  </f7-tabs>
</f7-page>
</template>

<script>
import Auth from './../../auth'
import LineChart from './LineChart.js'
import BarChart from './BarChart.js'

export default {
    props:['id'],
    components:{
        LineChart,
        BarChart
    },
    data () {
      return {
        dataP: [],
        producto: [],
        datacollection: null,
        barData: null,
        options: {
          responsive: true,
          maintainAspectRatio: false
        },
        fecha: '',
        precio: ''
      }
    },
    mounted () {
      this.fillData(),
      this.cargarDatosProducto(this.id),
      this.cargarPrecioProducto()
    },
    methods: {
      camposValidos(){
        return this.fecha != '' && this.precio != '' ? true : false
      },
      cargarDatosProducto: function(id){
        this.axios.get(Auth.URL+'/api/productos/'+id).then(res => {
          console.log(res.data.data);
          this.producto = res.data.data
        })
      },
      guardarPrecioProducto(){
        if(this.camposValidos()) {
          var datosProducto = {
            idproducto: parseInt(this.id),
            fecha: this.fecha,
            precio: parseInt(this.precio)
          }
          this.axios.post(Auth.URL+'/api/precioproducto/', {precio_producto: datosProducto}).then(res => {
            this.dataP.push(res.data.data)
          }).catch(error => {
            this.$f7.dialog.alert(error)
          })
        }else{
          this.$f7.dialog.alert('Campos Vacios')
        }
      },
      cargarPrecioProducto(){
        this.axios.post(Auth.URL+'/api/precioproductoforid/', {idproducto: 1}).then(res => {
          console.log(res.data.data);
        })
      },
      actualFecha(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        return today;
      },
      fillData () {
        this.datacollection = {
          type:'line',
          labels: ["Tiempo",this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor:'rgba(0,0,0,0)',
              borderColor: 'black',
              data: [this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt()]
            }
          ]
        },
        this.barData = {
          type:'Bar',
          labels: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt()],
          datasets: [
            {
              label: 'Data 1',
              backgroundColor:'blue',
              borderColor: 'blue',
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
            }, 
            {
              label: 'Data 2',
              backgroundColor:'green',
              borderColor: 'green',
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
            },
            {
              label: 'Data 3',
              backgroundColor:'red',
              borderColor: 'red',
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    },
    watch: {
      chartData () {
        this.$data._chart.update()
      }
    }
  }
</script>

<style scoped>
  
</style>