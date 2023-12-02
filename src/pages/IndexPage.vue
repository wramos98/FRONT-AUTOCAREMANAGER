<template>
  <div class="q-pa-lg row items-start q-gutter-lg">
    <q-card class="my-card bg-primary text-white">
      <q-card-section horizontal>
        <q-card-section>
          <div class="text-h6 title">S/. 20.000</div>
          <div class="text-subtitle2">Ganancias del mes</div>
        </q-card-section>
        <q-card-actions vertical class="justify-around q-px-md">
          <q-btn flat size="xl" icon="attach_money" />
        </q-card-actions>
      </q-card-section>
    </q-card>
    <q-card class="my-card bg-secondary text-white">
      <q-card-section horizontal>
        <q-card-section>
          <div class="text-h6 title">+ 300</div>
          <div class="text-subtitle2">Facturas del mes</div>
        </q-card-section>
        <q-card-actions vertical class="justify-around q-px-md">
          <q-btn flat size="xl" icon="insights" />
        </q-card-actions>
      </q-card-section>
    </q-card>
    <q-card class="my-card bg-deep-orange text-white">
      <q-card-section horizontal>
        <q-card-section>
          <div class="text-h6 title">+ 500</div>
          <div class="text-subtitle2">Total de clientes</div>
        </q-card-section>
        <q-card-actions vertical class="justify-around q-px-md">
          <q-btn flat size="xl" icon="groups" />
        </q-card-actions>
      </q-card-section>
    </q-card>
    <q-card class="my-card bg-purple text-white">
      <q-card-section horizontal>
        <q-card-section>
          <div class="text-h6 title">+ {{ cantidad_articulos }}</div>
          <div class="text-subtitle2">Total de productos</div>
        </q-card-section>
        <q-card-actions vertical class="justify-around q-px-md">
          <q-btn flat size="xl" icon="sell" />
        </q-card-actions>
      </q-card-section>
    </q-card>
    <q-card class="my-card bg-amber text-white">
      <q-card-section horizontal>
        <q-card-section>
          <div class="text-h6 title">+ {{ cantidad_empleados }}</div>
          <div class="text-subtitle2">Total de empleados</div>
        </q-card-section>
        <q-card-actions vertical class="justify-around q-px-md">
          <q-btn flat size="xl" icon="badge" />
        </q-card-actions>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import axios from "axios";
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  name: "IndexPage",
  data() {
    return {
      $q: useQuasar(),
      cantidad_empleados: "",
      cantidad_articulos: "",
    };
  },
  mounted() {
    this.Metodo_listar_empleados();
    this.Metodo_listar_articulos();
  },
  methods: {
    Metodo_listar_empleados() {
      axios
        .get("http://localhost:5175/api/Empleado/Listar empleados")
        .then((res) => {
          this.cantidad_empleados = res.data.length;
          console.log(this.cantidad_empleados);
        });
    },
    Metodo_listar_articulos() {
      axios
        .get("http://localhost:5175/api/Articulo/Listar articulos")
        .then((res) => {
          this.cantidad_articulos = res.data.length;
        });
    },
  },
};
</script>
