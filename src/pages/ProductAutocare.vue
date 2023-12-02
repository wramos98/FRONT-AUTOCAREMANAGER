<template style="background: white">
  <div class="text-h4 title q-pa-md">Registro de Articulos</div>
  <div class="column" style="height: 150px">
    <div class="col-9 col-sm-9">
      <div class="q-pa-md" style="max-width: 350px">
        <q-form @submit.prevent="Metodo_registrar_articulo" @reset="onReset">
          <q-input
            filled
            v-model="desArticulo"
            label="Descripcion *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="artInventario"
            label="Inventariado (A)Art (S)Ser *"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0 && val.length < 2) ||
                'Por favor escribe algo',
            ]"
          />

          <q-input
            filled
            v-model="tipoServicio"
            label="Servicio (N)Ning (R)Rep (M)Mant *"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0 && val.length < 2) ||
                'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="unidadMedida"
            label="Unidad de medida *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="fabricante"
            label="Fabricante *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="impVenta"
            label="Impuesto a la venta*"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="estado"
            label="Estado (A) Activo (I) Inactivo*"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0 && val.length < 2) || 'Marcar A o I',
            ]"
          />
          <div class="text-center">
            <q-btn label="Registrar" type="submit" color="primary" />
            <q-btn
              label="Resetear"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </div>
    </div>
    <div class="col-5 col-sm-5">
      <div class="col-9 q-pa-md row items-start q-gutter-md">
        <q-card
          class="my-card"
          v-for="articulo of lista_articulos"
          :key="articulo.codArticulo"
        >
          <img
            style="max-width: 280px"
            src="https://falabella.scene7.com/is/image/FalabellaPE/gsc_121859201_3207192_1?wid=1500&hei=1500&qlt=70"
          />
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">{{ articulo.desArticulo }}t</div>
            <div class="text-subtitle2">
              {{ articulo.fabricante }}
            </div>
            <div class="text-subtitle2">
              Cod. Articulo: {{ articulo.codArticulo }}
            </div>
            <div class="text-subtitle2">
              Unid. Medida: {{ articulo.unidadMedida }}
            </div>
            <div class="text-subtitle2">
              Tipo Servicio: {{ articulo.tipoServicio }}
            </div>
            <div class="text-subtitle2">
              Inventariable: {{ articulo.artInventariable }}
            </div>
            <div class="text-subtitle2">
              Imp. Venta: {{ articulo.impVenta }}
            </div>
            <div class="text-subtitle2">Estado: {{ articulo.estado }}</div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <q-btn
              flat
              @click="
                Metodo_detalle_articulo(articulo.codArticulo),
                  (dialogedit = true)
              "
              >Editar</q-btn
            >
            <q-btn flat @click="Metodo_eliminar_articulo(articulo.codArticulo)"
              >Eliminar</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
  <q-dialog v-model="dialogedit" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <q-form>
          <q-input
            filled
            v-model="detallearticulo.desArticulo"
            label="Descripcion *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="detallearticulo.artInventariable"
            label="Inventariado (A)Art (S)Ser *"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0 && val.length < 2) ||
                'Por favor escribe algo',
            ]"
          />

          <q-input
            filled
            v-model="detallearticulo.tipoServicio"
            label="Servicio (N)Ning (R)Rep (M)Mant *"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0 && val.length < 2) ||
                'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="detallearticulo.unidadMedida"
            label="Unidad de medida *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="detallearticulo.fabricante"
            label="Fabricante *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="detallearticulo.impVenta"
            label="Impuesto a la venta*"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="detallearticulo.estado"
            label="Estado (A) Activo (I) Inactivo*"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0 && val.length < 2) || 'Marcar A o I',
            ]"
          />
        </q-form>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancelar" v-close-popup />
        <q-btn flat label="Actualizar" @click="Metodo_actualizar_articulo()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import axios from "axios";
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  name: "ProductAutocare",
  data() {
    return {
      $q: useQuasar(),
      //Datos de Articulos
      lista_articulos: {},
      codArticulo: "",
      desArticulo: "",
      artInventario: "",
      tipoServicio: "",
      unidadMedida: "",
      fabricante: "",
      impVenta: "",
      estado: "",
      detallearticulo: {},
      codigoarticulo: "",
    };
  },
  mounted() {
    this.Metodo_listar_articulos();
  },
  methods: {
    onReset() {
      this.desArticulo = null;
      this.artInventario = null;
      this.tipoServicio = null;
      this.unidadMedida = null;
      this.fabricante = null;
      this.impVenta = null;
      this.estado = null;
    },

    Metodo_listar_articulos() {
      axios
        .get("http://localhost:5175/api/Articulo/Listar articulos")
        .then((res) => {
          this.lista_articulos = res.data;
        });
    },
    Metodo_registrar_articulo() {
      if (
        !this.desArticulo ||
        !this.artInventario ||
        !this.tipoServicio ||
        !this.unidadMedida ||
        !this.fabricante ||
        !this.impVenta ||
        !this.estado
      ) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Datos incompletos",
        });
      } else {
        let url = "http://localhost:5175/api/Articulo/Registrar articulo";
        var data_articulo = {
          desArticulo: this.desArticulo,
          ArtInventariable: this.ArtInventario,
          tipoServicio: this.tipoServicio,
          unidadMedida: this.unidadMedida,
          fabricante: this.fabricante,
          impVenta: this.impVenta,
          estado: this.estado,
        };
        axios
          .post(url, data_articulo)
          .then((response) => {
            this.$q.notify({
              message: "Registro exitoso",
              color: "green",
              position: "top",
              timeout: 5000,
            });
            this.Metodo_listar_articulos();
          })
          .catch((error) => {
            this.$q.notify({
              message: error.response.data,
              color: "red",
              position: "top",
              timeout: 5000,
            });
          });
      }
    },
    Metodo_detalle_articulo(id) {
      axios
        .get("http://localhost:5175/api/Articulo/Obtener articulo por id/" + id)
        .then((res) => {
          this.detallearticulo = res.data;
          this.codigoarticulo = this.detallearticulo.codArticulo;
        });
    },
    Metodo_actualizar_articulo() {
      if (
        !this.detallearticulo.desArticulo ||
        !this.detallearticulo.artInventariable ||
        !this.detallearticulo.tipoServicio ||
        !this.detallearticulo.unidadMedida ||
        !this.detallearticulo.fabricante ||
        !this.detallearticulo.impVenta ||
        !this.detallearticulo.estado
      ) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Datos incompletos",
        });
        let url =
          "http://localhost:5175/api/Articulo/Actualizar por id" +
          this.codigoarticulo;
        var dataactualizar = this.detallearticulo;
        axios
          .put(url, dataactualizar)
          .then((response) => {
            this.$q.notify({
              message: "Actualizacion exitosa",
              color: "green",
              position: "top",
              timeout: 5000,
            });
            this.Metodo_listar_articulos();
          })
          .catch((error) => {
            this.$q.notify({
              message: error.response.data,
              color: "red",
              position: "top",
              timeout: 5000,
            });
          });
      }
    },
    Metodo_eliminar_articulo(id) {
      axios
        .delete(
          "http://localhost:5175/api/Empleado/Eliminar articulo por id/" + id
        )
        .then((res) => {
          this.Metodo_listar_articulos();
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "Articulo Eliminado",
          });
        });
    },
  },
};
</script>
