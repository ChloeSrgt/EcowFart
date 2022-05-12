import { Doughnut } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto";
import { Ble } from '../BDD/DataBle';
import {useState} from 'react';

function Donuts({Database}) {

    const [userData, setUserData] = useState({
        labels:  Database.map((data) => data.typeDeGaz),
        datasets: [{
          label: "Users Gained",
          data: Database.map((data) => data.ProductionMethane),
          backgroundColor: ["red","green"],}]
        })

        const plugins = [{
            beforeDraw: function(chart) {
             var width = chart.width,
                 height = chart.height,
                 ctx = chart.ctx;
                 ctx.restore();
                 var fontSize = (height / 160).toFixed(2);
                 ctx.font = fontSize + "em sans-serif";
                 ctx.textBaseline = "top";
                 var text = Database.map((data) => data.ProductionMethaneText),
                 textX = Math.round((width - ctx.measureText(text).width) / 2),
                 textY = height / 2;
                 ctx.fillText(text, textX, textY);
                 ctx.save();
            } 
          }]


    return (
     <Doughnut type="doughnut" data={userData} plugins={plugins}/>
    );
        
}

export default Donuts