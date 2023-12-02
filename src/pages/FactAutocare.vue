<template>
  <div class="q-pt-sm q-pr-xl q-pl-xl absolute-center" style="width: 1000px">
    <div class="text-h4 title q-pb-md">Nueva Venta</div>
    <div class="q-gutter-sm row items-start">
      <q-input
        filled
        v-model="cliente"
        label="Cliente*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor escribe algo']"
        style="width: 400px"
      />
      <q-input
        v-model="fechaemision"
        filled
        type="date"
        hint="Fecha de emision*"
        style="width: 200px"
      />
      <q-input
        v-model="fechavencimiento"
        filled
        type="date"
        hint="Fecha de vencimiento*"
        style="width: 200px"
      />
      <q-select
        filled
        v-model="tipocomprobante"
        :options="opcionescomprobante"
        label="Tipo comprobante*"
        style="width: 245px"
      />
      <q-select
        filled
        v-model="serie"
        :options="opcionesserie"
        label="Serie*"
        style="width: 150px"
      />

      <q-select
        filled
        v-model="tipooperacion"
        :options="opcionestipooperacion"
        label="Tipo operación*"
        style="width: 200px"
      />
      <q-input
        filled
        v-model="cliente"
        label="Dscto. global (%)*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor escribe algo']"
        style="width: 200px"
      />
    </div>
    <div class="q-gutter-sm row items-start" style="width: 900px">
      <q-btn color="primary" label="PLACA" />
      <q-btn color="primary" label="G. COMPRA" />
      <q-btn color="primary" label="G. REMISIÓN" />
      <q-btn color="primary" label="OBSERVACIONES" />
      <q-btn color="primary" label="COND. PAGO" />
      <q-btn color="primary" label="OTROS (*)" />
    </div>
    <div class="sub-title1 q-pt-lg" style="height: 200px">
      Agregar lista de productos *
    </div>

    <div style="max-width: 840px">
      <div class="q-gutter-md">
        <q-input
          v-model="search"
          debounce="500"
          filled
          placeholder="BUSCAR PRODUCTOS"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </div>
    <div class="q-pt-lg row items-start q-gutter-lg">
      <q-card
        class="my-card bg-primary text-white"
        style="width: 350px; height: 55px"
      >
        <q-card-section horizontal>
          <q-card-section>
            <div class="text-h6 title">TOTAL</div>
          </q-card-section>
          <q-card-actions vertical class="q-pt-md absolute-right">
            <div class="text-h6 title">S/. 0.00</div>
          </q-card-actions>
        </q-card-section>
      </q-card>
      <q-btn
        outline
        size="22px"
        class="q-px-xl q-py-xs"
        color="grey-6"
        label="VISTA PREVIA"
      />
      <q-btn
        size="22px"
        class="q-px-xl q-py-xs"
        color="grey-5"
        label="PROCESAR"
        glossy
        unelevated
      />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  name: "FactAutocare",
  setup() {
    return {
      password: ref(""),
      isPwd: ref(true),
      cliente: ref(""),
      fechaemision: ref(""),
      fechavencimiento: ref(""),
      serie: ref(""),
      tipocomprobante: ref(null),
      tipooperacion: ref(null),
      opcionescomprobante: ["Boleta Electronica", "Factura Electronica"],
      opcionesserie: ["B001", "T001", "F001"],
      opcionestipooperacion: ["Venta Interna", "Venta Externa"],
      search: ref(""),

      email: ref(""),
      tel: ref(""),
      url: ref(""),
      time: ref(""),
    };
  },
};
</script>
