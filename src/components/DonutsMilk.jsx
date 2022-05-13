import { Doughnut } from 'react-chartjs-2';
import {useEffect, useState} from 'react';

function DonutsMilk({Database}) {

    const [userData, setUserData] = useState({
        labels:  Database.map((data) => data.type),
        datasets: [{
          label: "Users Gained",
          data: Database.map((data) => data.impactLait),
          backgroundColor: ["#BF7960","#F2B694"],}]
        })

      useEffect(() => { setUserData({
        labels: Database.map((data) => data.type),
        datasets: [{
          label: "Users Gained",
          data: Database.map((data) => data.impactLait),
          backgroundColor: ["#BF7960","#F2B694"],}]
        })}, [Database])
      

        const [plugins, setPlugins] = useState([{
          
            beforeDraw: function(chart) {
             var width = chart.width,
                 height = chart.height,
                 ctx = chart.ctx;
                 ctx.restore();
                 var fontSize = (height / 160).toFixed(2);
                 ctx.font = fontSize + "em sans-serif";
                 ctx.textBaseline = "top";
                 var text = Database.map((data) => data.impactLaitText),
                 textX = Math.round((width - ctx.measureText(text).width) / 2),
                 textY = height / 2;
                 ctx.fillText(text, textX, textY);
                 ctx.save();
            }}])

        useEffect(() => { setPlugins([{
            beforeDraw: function(chart) {
              var width = chart.width,
                  height = chart.height,
                  ctx = chart.ctx;
                  ctx.restore();
                  var fontSize = (height / 160).toFixed(2);
                  ctx.font = fontSize + "em sans-serif";
                  ctx.textBaseline = "top";
                  var text = Database.map((data) => data.impactLaitText),
                  textX = Math.round((width - ctx.measureText(text).width) / 2),
                  textY = height / 2;
                  ctx.fillText(text, textX, textY);
                  ctx.save();}
            }])},[Database])
        

        


    return (
     <Doughnut type="doughnut" data={userData} plugins={plugins}/>
    );
        
}

export default DonutsMilk