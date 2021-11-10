import Global from "../Global";
import axios from "axios";

export default class ServicioSeries {

    getSeries() {
        return new Promise(function(resolve) {
            var request = "/api/Series";
            var url = Global.urlseries + request;
            var series = {};
            axios.get(url).then(res => {
                series = res.data;
              
               resolve(series);
        });
        
      });
    }

    getPersonajes() {
      return new Promise(function(resolve) {
          var request = "/api/Personajes";
          var url = Global.urlseries + request;
          var personajes = {};
          axios.get(url).then(res => {
              personajes = res.data;
            
             resolve(personajes);
      });
      
    });
  }

    getSerieById(idSerie) {
        return new Promise(function(resolve) {
            var request = "/api/Series/"+idSerie;
            var url = Global.urlseries + request;
            var serie = {};
            axios.get(url).then(res => {
                serie = res.data;
               resolve(serie);
        });
        
      });
    }

    getPersonajesSerie(idSerie) {
      return new Promise(function(resolve) {
          var request = "/api/Series/PersonajesSerie/"+idSerie;
          var url = Global.urlseries + request;
          var serie = {};
          axios.get(url).then(res => {
              serie = res.data;
             resolve(serie);
      });
      
    });
  }

  modificarPersonajes(idSerie, idPersonaje) {
    return new Promise(function(resolve) {
      var request = "/api/Personajes/"+idPersonaje+"/"+idSerie;
      var url = Global.urlseries + request;   
      axios.put(url).then(res => {
          console.log("Modificado!");
         resolve("modificado"+res.data);
  });
  
});
  }

  insertarPersonaje(personaje) {
    return new Promise(function(resolve) {
      var request = "/api/Personajes/";
      var url = Global.urlseries + request;   
      axios.post(url, personaje).then(res => {
          console.log("Insertado!");
         resolve("Insertado"+res.data);
  });
  
});
  }
}