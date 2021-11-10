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
}