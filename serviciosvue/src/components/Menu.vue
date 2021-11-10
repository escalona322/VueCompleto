<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
     <div class="container-fluid">
         <span class="navbar-brand" href="#">ServiciosVue</span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
    </button>

     <div class="collapse navbar-collapse" id="navbarsExample03">
         <ul class="navbar-nav me-auto mb-2 mb-sm-0">
         <li class="nav-item">
         <router-link class="nav-link active" aria-current="page" 
         to="/coches">Coche</router-link>
      </li>
   <li class="nav-item">
        <router-link class="nav-link" 
        to="/empleadosdetalle">Empleados</router-link>
    </li>
     <li class="nav-item">
        <router-link class="nav-link" 
        to="/empleadosoficio">Oficios</router-link>
    </li>
    <li class="nav-item">
        <router-link class="nav-link" 
        to="/ejemploservicios">Ej.Servicios</router-link>
    </li>
    <li class="nav-item">
        <router-link class="nav-link" 
        to="/servicioempleados">Serv.Empleados</router-link>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" to="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Equipos</a>
         <ul id="dropdown" class="dropdown-menu" aria-labelledby="dropdown03">
            <li><router-link class="dropdown-item" 
             to="/departamentos">Departamentos</router-link></li>
            <li><a class="dropdown-item" href="#">Link</a></li>
            <li><a class="dropdown-item" href="#">Link</a></li>  
         </ul>
    </li>
    </ul>

    </div>
    </div>
    </nav>
</template>

<script>


export default {
    name: "Menu",
}
</script>
