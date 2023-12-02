<template style="background: white">
  <div class="text-h4 title q-pa-md">Registro de Empleados</div>
  <div class="column" style="height: 150px">
    <div class="col-9 col-sm-9">
      <div class="q-pa-md" style="max-width: 350px">
        <q-form @submit.prevent="Metodo_registrar_empleados" @reset="onReset">
          <q-input
            filled
            v-model="name"
            label="Nombres *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="lastname"
            label="Apellidos *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            type="number"
            v-model="numident"
            label="DNI"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Por favor escribe algo',
              (val) =>
                (val.length > 7 && val.length < 9) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="employee"
            label="Cargo *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="state"
            label="Estado (A) Activo (I) Inactivo*"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0 && val.length < 2) || 'Marcar A o I',
            ]"
          />
          <!--
          <q-input
            filled
            type="number"
            v-model="codtaller"
            label="Codigo taller"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Por favor escribe algo',
              (val) =>
                (val > 0 && val < 1000000000) || 'Por favor escribe algo',
            ]"
          />
          -->
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
          v-for="empleado of lista_empleados"
          :key="empleado.codEmpleado"
        >
          <q-card-section class="bg-positive text-white">
            <div class="text-h6">{{ empleado.nombres }}</div>
            <div class="text-subtitle2">
              {{ empleado.apellidos }}
            </div>
            <div class="text-subtitle2">
              Num. Ident: {{ empleado.numIdent }}
            </div>
            <div class="text-subtitle2">Cargo: {{ empleado.cargo }}</div>
            <div class="text-subtitle2">Estado: {{ empleado.estado }}</div>
            <div class="text-subtitle2">
              Cod. Empleado: {{ empleado.codEmpleado }}
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <q-btn
              flat
              @click="
                Metodo_detalle_empleado(empleado.codEmpleado),
                  (dialogedit = true)
              "
              >Editar</q-btn
            >
            <q-btn flat @click="Metodo_eliminar_empleado(empleado.codEmpleado)"
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
            type="number"
            v-model="detailemployee.codEmpleado"
            label="Codigo de empleado"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Por favor escribe algo',
              (val) =>
                (val > 0 && val < 1000000000) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="detailemployee.nombres"
            label="Nombres *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="detailemployee.apellidos"
            label="Apellidos *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            type="number"
            v-model="detailemployee.numIdent"
            label="DNI"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Por favor escribe algo',
              (val) =>
                (val.length > 7 && val.length > 9) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="detailemployee.cargo"
            label="Cargo *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor escribe algo',
            ]"
          />
          <q-input
            filled
            v-model="detailemployee.estado"
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
        <q-btn flat label="Actualizar" @click="Metodo_actualizar_datos()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import axios from "axios";
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  name: "EmployeesGroup",
  data() {
    return {
      $q: useQuasar(),
      name: "",
      lastname: "",
      numident: "",
      employee: "",
      state: "",
      codtaller: "",
      usercode: "",
      lista_empleados: {},
      detailemployee: {},

      dialogedit: ref(false),
      codupdate: "",
    };
  },
  mounted() {
    this.Metodo_listar_empleados();
  },
  methods: {
    //Se realiza la petición con axios por POST
    Metodo_registrar_empleados() {
      if (
        !this.name ||
        !this.lastname ||
        !this.numident ||
        !this.employee ||
        !this.state
      ) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Datos incompletos",
        });
      } else {
        let url = "http://localhost:5175/api/Empleado/Registrar empleado";
        var data = {
          userCode: "1",
          nombres: this.name,
          apellidos: this.lastname,
          numIdent: this.numident,
          cargo: this.employee,
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
            this.Metodo_listar_empleados();
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
      this.name = null;
      this.lastname = null;
      this.numident = null;
      this.employee = null;
      this.state = null;
      this.codtaller = null;
    },
    Metodo_listar_empleados() {
      axios
        .get("http://localhost:5175/api/Empleado/Listar empleados")
        .then((res) => {
          this.lista_empleados = res.data;
        });
    },

    Metodo_eliminar_empleado(id) {
      // Inicio de Metodo eliminar producto
      axios
        .delete(
          "http://localhost:5175/api/Empleado/Eliminar empleado por id/" + id
        )
        .then((res) => {
          this.Metodo_listar_empleados();
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "Empleado Eliminado",
          });
        });
    },
    Metodo_detalle_empleado(id) {
      axios
        .get("http://localhost:5175/api/Empleado/Obtener empleado por id/" + id)
        .then((res) => {
          this.detailemployee = res.data;
          this.codupdate = this.detailemployee.codEmpleado;
        });
    },
    Metodo_actualizar_datos() {
      //console.log(this.detailemployee);
      if (
        !this.detailemployee.codEmpleado ||
        !this.detailemployee.nombres ||
        !this.detailemployee.apellidos ||
        !this.detailemployee.numIdent ||
        !this.detailemployee.cargo ||
        !this.detailemployee.estado
      ) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Datos incompletos",
        });
        let url =
          "http://localhost:5175/api/Empleado/Registrar empleado" +
          this.codupdate;
        var dataupdate = this.detailemployee;
        /*
        var data = {
          userCode: "1",
          nombres: this.name,
          apellidos: this.lastname,
          numIdent: this.numident,
          cargo: this.employee,
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
            this.Metodo_listar_empleados();
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
