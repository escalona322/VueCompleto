import Global from "../Global";
import axios from "axios";

export default class ServicioChampions {

    getEquipos() {
        return new Promise(function(resolve ){
            var request = "/api/Equipos";
            var url = Global.urlchampions + request;

            var equipos = {};

            axios.get(url).then(res => {
                equipos = res.data;

                resolve(equipos);
            })
        })
    }

    getEquipoId(idEquipo) {
        return new Promise(function(resolve ){
            var request = "/api/Equipos/"+idEquipo;
            var url = Global.urlchampions + request;
            var equipo = {};
            axios.get(url).then(res => {
                equipo = res.data;
                resolve(equipo);
            })
        })
    }

    getApuestas() {
        return new Promise(function(resolve ){
            var request = "/api/Apuestas";
            var url = Global.urlchampions + request;

            var apuestas = {};

            axios.get(url).then(res => {
                apuestas = res.data;

                resolve(apuestas);
            })
        })
    }

    deleteApuestas(idapuesta) {
        return new Promise(function(resolve ){
            var request = "/api/Apuestas/"+idapuesta;
            var url = Global.urlchampions + request;
            axios.delete(url).then(res => {
                resolve(res);
            })
        })
    }

    insertarApuesta(apuesta) {
        return new Promise(function(resolve) {
          var request = "/api/Apuestas/";
          var url = Global.urlchampions + request;   
          axios.post(url, apuesta).then(res => {
              console.log("Insertado!");
             resolve("Insertado"+res.data);
          });    
        });
    }

    getJugadoresEquipo(idEquipo) {
        return new Promise(function(resolve ){
            var request = "/api/Jugadores/JugadoresEquipos/"+idEquipo;
            var url = Global.urlchampions + request;
            var jugadores = {};
            axios.get(url).then(res => {
                jugadores = res.data;
                resolve(jugadores);
            })
        })
    }

    getJugadorId(idjugador) {
        return new Promise(function(resolve ){
            var request = "/api/Jugadores/"+idjugador;
            var url = Global.urlchampions + request;
            var jugador = {};
            axios.get(url).then(res => {
                jugador = res.data;
                resolve(jugador);
            })
        })
    }
}