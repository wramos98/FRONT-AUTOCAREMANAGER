<template>
  <div class="q-pa-xl">
    <q-table
      title="Historial de Facturas"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
const columns = [
  {
    name: "name",
    required: true,
    label: "Nombre cliente",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "descripcioncompra",
    align: "left",
    label: "Descripción compra",
    field: "descripcioncompra",
    sortable: true,
  },

  {
    name: "tipocomprobante",
    align: "left",
    label: "Tipo de comprobante",
    field: "tipocomprobante",
  },
  { name: "fechaemision", label: "Fecha emisión", field: "fechaemision" },
  {
    name: "total",
    label: "Total",
    field: "total",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

const rows = [
  {
    name: "Deyvis Orosco",
    descripcioncompra: "1/4 de Aceite castrol",
    fechaemision: "28/11/2023",
    tipocomprobante: "BOLETA ELECTRONICA",
    total: "S/.18.00",
  },
  {
    name: "Cielo Torres",
    descripcioncompra: "1 galon de Refrigerante Vistony",
    fechaemision: "28/11/2023",
    tipocomprobante: "BOLETA ELECTRONICA",
    total: "S/.14.00",
  },
  {
    name: "Marco Romero",
    descripcioncompra: "2 Liquidos de freno",
    fechaemision: "28/11/2023",
    tipocomprobante: "FACTURA ELECTRONICA",
    total: "S/.24.00",
  },
  {
    name: "Natalia Salas",
    descripcioncompra: "3 Sachets de acido de bateria",
    fechaemision: "28/11/2023",
    tipocomprobante: "BOLETA ELECTRONICA",
    total: "S/.16.00",
  },
  {
    name: "Mimy Succar",
    descripcioncompra: "Filtro de aceite de 5'",
    fechaemision: "28/11/2023",
    tipocomprobante: "BOLETA ELECTRONICA",
    total: "S/.35.00",
  },
  {
    name: "Roxana Maldonado",
    descripcioncompra: "1 grasa negra",
    fechaemision: "28/11/2023",
    tipocomprobante: "FACTURA ELECTRONICA",
    total: "S/.14.00",
  },
  {
    name: "María Grazia Polanco",
    descripcioncompra: "1 aditivo espezante",
    fechaemision: "28/11/2023",
    tipocomprobante: "BOLETA ELECTRONICA",
    total: "S/.28.00",
  },
  {
    name: "Ruby Palomino",
    descripcioncompra: "1 servicio de carga de bateria",
    fechaemision: "28/11/2023",
    tipocomprobante: "BOLETA ELECTRONICA",
    total: "S/.12.00",
  },
  {
    name: "William Luna",
    descripcioncompra: "1 llanta de vehiculo",
    fechaemision: "28/11/2023",
    tipocomprobante: "BOLETA ELECTRONICA",
    total: "S/.180.00",
  },
  {
    name: "Sergio d'Ambrosio Robles",
    descripcioncompra: "1 Servicio de cambio de anillos de motor.",
    fechaemision: "28/11/2023",
    tipocomprobante: "BOLETA ELECTRONICA",
    total: "S/.318.00",
  },
];

export default {
  name: "HistoryAutocare",
  setup() {
    return {
      columns,
      rows,
    };
  },
};
</script>
