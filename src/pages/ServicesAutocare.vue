<template>
  <div class="q-pt-sm q-pr-xl q-pl-xl absolute-center" style="width: 1000px">
    <div class="text-h4 title q-pb-md">
      Registro de Reparación y Mantenimiento
    </div>
    <div style="max-width: 840px">
      <div class="q-gutter-md">
        <q-input
          v-model="search"
          debounce="500"
          filled
          placeholder="INGRESAR PLACA"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </div>
    <br />
    <div class="q-gutter-sm q-pb-xl">
      <q-radio v-model="shape" val="line" label="Mantenimiento" />
      <q-radio v-model="shape" val="rectangle" label="Reparación" />
    </div>
    <div style="max-width: 840px">
      <q-input
        v-model="textareaModel"
        filled
        clearable
        type="textarea"
        color="red-12"
        label="Incidente"
      />
    </div>

    <div class="q-pt-lg row items-start q-gutter-lg">
      <q-btn
        size="18px"
        class="q-px-xl q-py-xs"
        color="primary"
        label="GUARDAR"
      />
      <q-btn
        size="18px"
        class="q-px-xl q-py-xs"
        color="secondary"
        label="EDITAR"
      />
      <q-btn
        size="18px"
        class="q-px-xl q-py-xs"
        color="red"
        label="ELIMINAR"
        glossy
        unelevated
      />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  name: "ServicesAutocare",
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
      shape: ref("line"),
    };
  },
};
</script>
