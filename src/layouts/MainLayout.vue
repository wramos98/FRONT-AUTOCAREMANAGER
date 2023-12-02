<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Autocaremanager </q-toolbar-title>

        <div>
          <q-btn
            @click="logout()"
            icon-right="logout"
            style="background: #ff0080; color: white"
            label="Cerrar Sesión"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> </q-item-label>
        <q-item clickable v-ripple @click="redirectprofile()">
          <q-item-section avatar>
            <q-icon left name="account_circle" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Mi perfil</q-item-label>
            <q-item-label caption lines="2"
              >Información del taller.</q-item-label
            >
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="redirectemployees()">
          <q-item-section avatar>
            <q-icon left name="engineering" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Empleados</q-item-label>
            <q-item-label caption lines="2"
              >Registro de Empleados.</q-item-label
            >
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="redirectclients()">
          <q-item-section avatar>
            <q-icon left name="groups" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Clientes</q-item-label>
            <q-item-label caption lines="2">Socio de negocio.</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="redirectcars()">
          <q-item-section avatar>
            <q-icon left name="drive_eta" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Vehiculos</q-item-label>
            <q-item-label caption lines="2"
              >Registro de vehiculos.</q-item-label
            >
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="redirectservices()">
          <q-item-section avatar>
            <q-icon left name="home_repair_service" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Reparacion y mantenimiento</q-item-label>
            <q-item-label caption lines="2">Registros.</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="redirectfact()">
          <q-item-section avatar>
            <q-icon left name="request_quote" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Facturacion</q-item-label>
            <q-item-label caption lines="2">Registro de Facturas.</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="redirecthistory()">
          <q-item-section avatar>
            <q-icon left name="history" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Historial Facturas</q-item-label>
            <q-item-label caption lines="2">Historial.</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="redirectproducts()">
          <q-item-section avatar>
            <q-icon left name="shopping_cart" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Articulos</q-item-label>
            <q-item-label caption lines="2"
              >Registro de Articulos.</q-item-label
            >
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },

  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    },
    redirectprofile() {
      this.$router.push("/dash");
    },
    redirectemployees() {
      this.$router.push("/employees");
    },
    redirectclients() {
      this.$router.push("/clients");
    },
    redirectcars() {
      this.$router.push("/cars");
    },
    redirectservices() {
      this.$router.push("/services");
    },
    redirectfact() {
      this.$router.push("/fact");
    },
    redirecthistory() {
      this.$router.push("/history");
    },
    redirectproducts() {
      this.$router.push("/products");
    },
  },
});
</script>
