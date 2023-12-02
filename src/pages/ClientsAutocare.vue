<template style="background: white">
  <div class="text-h4 title q-pa-md">Registro de Clientes</div>
  <div class="column" style="height: 150px">
    <div class="col-9 col-sm-9">
      <div class="q-pa-md" style="max-width: 350px">
        <q-form @submit.prevent="Metodo_registrar_clientes" @reset="onReset">
          <q-input
            filled
            v-model="Razonsocial"
            label="Razón social o Nombre*"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            type="number"
            v-model="NumIdent"
            label="RUC o DNI *"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Por favor escribe algo',
              (val) =>
                (val > 0 && val < 1000000000) || 'Por favor escribe algo',
            ]"
          />

          <q-input
            filled
            type="number"
            v-model="Telefono"
            label="Telefono o celular*"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Por favor escribe algo',
              (val) =>
                (val > 0 && val < 1000000000) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="Email"
            label="Email *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="Direccion"
            label="Direccion *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="Estado"
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
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card
          class="my-card"
          v-for="cliente of lista_clientes"
          :key="cliente.codSN"
        >
          <q-card-section class="bg-positive text-white">
            <div class="text-h6">{{ cliente.Razonsocial }}</div>
            <div class="text-subtitle2">
              {{ cliente.NumIdent }}
            </div>
            <div class="text-subtitle2">
              Persona Contacto: {{ cliente.PersonaContacto }}
            </div>
            <div class="text-subtitle2">Telefono: {{ cliente.Telefono }}</div>
            <div class="text-subtitle2">Email: {{ cliente.Email }}</div>
            <div class="text-subtitle2">Direccion: {{ cliente.Direccion }}</div>
            <div class="text-subtitle2">Estado: {{ cliente.Estado }}</div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <q-btn
              flat
              @click="
                Metodo_detalle_cliente(cliente.codSN), (dialogedit = true)
              "
              >Editar</q-btn
            >
            <q-btn flat @click="Metodo_eliminar_cliente(cliente.codSN)"
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
        <q-form @submit.prevent="Metodo_actualizar_datos" @reset="onReset">
          <q-input
            filled
            type="number"
            v-model="detallecliente.codSN"
            label="Codigo de socio de negocio"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Por favor escribe algo',
              (val) =>
                (val > 0 && val < 1000000000) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="detallecliente.Razonsocial"
            label="Razon Social *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            type="number"
            v-model="detallecliente.NumIdent"
            label="Numero Identificacion"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Por favor escribe algo',
              (val) =>
                (val > 0 && val < 1000000000) || 'Por favor escribe algo',
            ]"
          />

          <q-input
            filled
            v-model="detallecliente.PersonaContacto"
            label="Persona Contacto *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            type="number"
            v-model="detallecliente.Telefono"
            label="Telefono"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Por favor escribe algo',
              (val) =>
                (val > 0 && val < 1000000000) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="detallecliente.Email"
            label="Email *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="detallecliente.Direccion"
            label="Direccion *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="detallecliente.Estado"
            label="Estado (A) Activo (I) Inactivo*"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0 && val.length < 2) || 'Marcar A o I',
            ]"
          />
          <div class="text-center">
            <q-btn label="Actualizar" type="submit" color="primary" />
            <q-btn flat label="Cancelar" v-close-popup />
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
  name: "ClientsAutocare",
  data() {
    return {
      $q: useQuasar(),
      codSN: "",
      Razonsocial: "",
      NumIdent: "",
      PersonaContacto: "",
      Telefono: "",
      Email: "",
      Direccion: "",
      Estado: "",
      lista_clientes: {},
      detallecliente: {},

      dialogedit: ref(false),
      codupdate: "",
    };
  },
  mounted() {
    //this.Metodo_listar_clientes();
  },
  methods: {
    //Se realiza la petición con axios por POST
    Metodo_registrar_clientes() {
      if (
        !this.codcliente ||
        !this.name ||
        !this.lastname ||
        !this.numident ||
        !this.cliente ||
        !this.state
      ) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Datos incompletos",
        });
      } else {
        let url = "http://localhost:5175/api/cliente/Registrar cliente";
        var data = {
          codcliente: this.codcliente,
          userCode: "1",
          nombres: this.name,
          apellidos: this.lastname,
          numIdent: this.numident,
          cargo: this.cliente,
          estado: this.state,
          codTaller: "1",
        };
        axios
          .post(url, data)
          .then((response) => {
            this.$q.notify({
              message: "Registro exitoso",
              color: "green",
              position: "top",
              timeout: 5000,
            });
            this.Metodo_listar_clientes();
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
      this.codcliente = null;
      this.name = null;
      this.lastname = null;
      this.numident = null;
      this.cliente = null;
      this.state = null;
      this.codtaller = null;
    },
    Metodo_listar_clientes() {
      axios
        .get("http://localhost:5175/api/cliente/Listar clientes")
        .then((res) => {
          this.lista_clientes = res.data;
        });
    },

    Metodo_eliminar_cliente(id) {
      // Inicio de Metodo eliminar producto
      axios
        .delete(
          "http://localhost:5175/api/cliente/Eliminar cliente por id/" + id
        )
        .then((res) => {
          this.Metodo_listar_clientes();
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "cliente Eliminado",
          });
        });
    },
    Metodo_detalle_cliente(id) {
      axios
        .get("http://localhost:5175/api/cliente/Obtener cliente por id/" + id)
        .then((res) => {
          this.detallecliente = res.data;
          this.codupdate = this.detallecliente.codcliente;
        });
    },
    Metodo_actualizar_datos() {
      //console.log(this.detallecliente);
      if (
        !this.detallecliente.codcliente ||
        !this.detallecliente.nombres ||
        !this.detallecliente.apellidos ||
        !this.detallecliente.numIdent ||
        !this.detallecliente.cargo ||
        !this.detallecliente.estado
      ) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Datos incompletos",
        });
        let url =
          "http://localhost:5175/api/cliente/Registrar cliente" +
          this.codupdate;
        var dataupdate = this.detallecliente;
        /*
        var data = {
          codcliente: this.codcliente,
          userCode: "1",
          nombres: this.name,
          apellidos: this.lastname,
          numIdent: this.numident,
          cargo: this.cliente,
          estado: this.state,
          codTaller: "1",
        };*/
        axios
          .put(url, dataupdate)
          .then((response) => {
            this.$q.notify({
              message: "Actualizacion exitosa",
              color: "green",
              position: "top",
              timeout: 5000,
            });
            this.Metodo_listar_clientes();
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
