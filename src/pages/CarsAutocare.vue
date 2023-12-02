<template style="background: white">
  <div class="text-h4 title q-pa-md">Registro de Vehiculos</div>
  <div class="column" style="height: 150px">
    <div class="col-9 col-sm-9">
      <div class="q-pa-md" style="max-width: 350px">
        <q-form @submit.prevent="Metodo_registrar_vehiculo" @reset="onReset">
          <q-input
            filled
            v-model="placavehiculo"
            label="Placa *"
            lazy-rules
            :rules="[
              (val) => (val && val.length < 8) || 'Escribe una placa verdadera',
            ]"
          />
          <q-input
            filled
            v-model="marcavehiculo"
            label="Marca *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />

          <q-input
            filled
            v-model="modelovehiculo"
            label="Modelo *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            type="number"
            v-model="anovehiculo"
            label="Año *"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Por favor escribe algo',
              (val) =>
                (val.length > 3 && val.length < 5) || 'Por favor escribe algo',
            ]"
          />

          <q-input
            filled
            v-model="fechamantenimiento"
            label="Fecha de mantenimiento"
          >
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="fechamantenimiento" mask="YYYY-MM-DD">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <br />
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
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card
          class="my-card"
          v-for="vehiculo of lista_vehiculos"
          :key="vehiculo.codVehiculo"
        >
          <q-card-section class="bg-warning text-white">
            <div class="text-h6">{{ vehiculo.placa }}</div>
            <div class="text-subtitle2">
              {{ vehiculo.marca }}
            </div>
            <div class="text-subtitle2">Modelo: {{ vehiculo.modelo }}</div>
            <div class="text-subtitle2">Año: {{ vehiculo.año }}</div>
            <div class="text-subtitle2">
              Fech. Mant: {{ vehiculo.fecUltMant }}
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <q-btn
              flat
              @click="
                Metodo_detalle_vehiculo(vehiculo.codVehiculo),
                  (dialogedit = true)
              "
              >Editar</q-btn
            >
            <q-btn flat @click="Metodo_eliminar_vehiculo(vehiculo.codVehiculo)"
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
        <q-form @submit.prevent="Metodo_actualizar_vehiculo" @reset="onReset">
          <q-input
            filled
            v-model="detallevehiculo.placa"
            label="Placa *"
            lazy-rules
            :rules="[
              (val) =>
                (val.length > 0 && val.length < 8) ||
                'Escribe una placa verdadera',
            ]"
          />
          <q-input
            filled
            v-model="detallevehiculo.marca"
            label="Marca *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />

          <q-input
            filled
            v-model="detallevehiculo.modelo"
            label="Modelo *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            type="number"
            v-model="detallevehiculo.año"
            label="Año *"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Por favor escribe algo',
              (val) =>
                (val.length > 3 && val.length < 5) || 'Por favor escribe algo',
            ]"
          />

          <q-input
            filled
            v-model="detallevehiculo.fecUltMant"
            label="Fecha de mantenimiento"
          >
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date
                    v-model="detallevehiculo.fecUltMant"
                    mask="YYYY-MM-DD"
                  >
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <br />
          <div class="text-center">
            <q-btn flat label="Cancelar" v-close-popup />
            <q-btn label="Actualizar" type="submit" color="primary" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import axios from "axios";
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  name: "CarsAutocare",
  data() {
    return {
      $q: useQuasar(),

      dialogedit: ref(false),
      //Datos vehiculos
      lista_vehiculos: {},
      placavehiculo: "",
      marcavehiculo: "",
      modelovehiculo: "",
      anovehiculo: "",
      fechamantenimiento: "",
      detallevehiculo: {},
      codigoactualizar: "",
    };
  },
  mounted() {
    this.Metodo_listar_vehiculos();
  },
  methods: {
    //Se realiza la petición con axios por POST
    Metodo_registrar_vehiculo() {
      if (
        !this.placavehiculo ||
        !this.marcavehiculo ||
        !this.modelovehiculo ||
        !this.anovehiculo ||
        !this.fechamantenimiento
      ) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Datos incompletos",
        });
      } else {
        let url = "http://localhost:5175/api/Vehiculo/Registrar vehiculo";
        var datavehiculo = {
          placa: this.placavehiculo,
          marca: this.marcavehiculo,
          modelo: this.modelovehiculo,
          año: this.anovehiculo,
          fecUltMant: this.fechamantenimiento,
          codSN: 1,
        };
        axios
          .post(url, datavehiculo)
          .then((response) => {
            this.$q.notify({
              message: "Registro exitoso",
              color: "green",
              position: "top",
              timeout: 5000,
            });
            this.Metodo_listar_vehiculos();
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
    onReset() {
      this.placavehiculo = null;
      this.marcavehiculo = null;
      this.modelovehiculo = null;
      this.anovehiculo = null;
      this.fechamantenimiento = null;
    },
    Metodo_listar_vehiculos() {
      axios
        .get("http://localhost:5175/api/Vehiculo/Listar vehiculos")
        .then((res) => {
          this.lista_vehiculos = res.data;
        });
    },

    Metodo_eliminar_vehiculo(id) {
      // Inicio de Metodo eliminar producto
      axios
        .delete("http://localhost:5175/api/Vehiculo/Eliminar vehiculo/" + id)
        .then((res) => {
          this.Metodo_listar_vehiculos();
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "Vehiculo Eliminado",
          });
        });
    },
    Metodo_detalle_vehiculo(id) {
      axios.get("http://localhost:5175/api/Vehiculo/" + id).then((res) => {
        this.detallevehiculo = res.data;
        this.codigoactualizar = this.detallevehiculo.codVehiculo;
      });
    },
    Metodo_actualizar_vehiculo() {
      if (
        !this.detallevehiculo.codVehiculo ||
        !this.detallevehiculo.placa ||
        !this.detallevehiculo.marca ||
        !this.detallevehiculo.modelo ||
        !this.detallevehiculo.año ||
        !this.detallevehiculo.fecUltMant
      ) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Datos incompletos",
        });
      } else {
        let url =
          "http://localhost:5175/api/Vehiculo/Actualizar vehiculo/" +
          this.codigoactualizar;

        var datavehiculo = {
          codVehiculo: this.detallevehiculo.codVehiculo,
          placa: this.detallevehiculo.placa,
          marca: this.detallevehiculo.marca,
          modelo: this.detallevehiculo.modelo,
          año: this.detallevehiculo.año,
          fecUltMant: this.detallevehiculo.fecUltMant,
          codSN: 1,
        };
        axios
          .put(url, datavehiculo)
          .then((response) => {
            this.$q.notify({
              message: "Actualizacion exitosa",
              color: "green",
              position: "top",
              timeout: 5000,
            });
            this.Metodo_listar_vehiculos();
            this.dialogedit = ref(false);
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
  },
};
</script>
