import { IData, IWeather } from 'views/Dashboard/types';
import { IGData } from 'views/Dashboard/Graph/types';

let cnt : number = 0;

type ISim = {
  heartrate: number[],
  power: number[],
  cadence: number[],
  distance: number[];
  speed: number[];
  time: number[];
  gear: number[];
}


const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  }
  
  const genData = (sim : ISim) => {
    const simData = {
      time: sim.time[cnt],
      distance: sim.distance[cnt],
      gear: sim.gear[cnt],
      altitude: 1375,
      cpuTemp: 50,
      accX: getRandomInt(60),
      accXMax: getRandomInt(60),
      accY: getRandomInt(60),
      accYMax: getRandomInt(60),
      accZ: getRandomInt(60),
      accZMax: getRandomInt(60),
      timestamp: 0,
      connected: true,
      cadence: sim.cadence[cnt],
      heartrate: sim.heartrate[cnt],
      power: sim.power[cnt],
      speed: sim.speed[cnt],
    }
    cnt++;
    return simData;
  }
     
  const genWeather = () =>{
    const fakeData : IWeather = {
      humidity: 40,
      pressure: 1,
      temperature: 15,
      timestamp: 0,
      wind_direction: 0,
      wind_speed: 3,
    };
    return fakeData;
  }
  
  const genChart = () =>{
    let chart : IGData[] = [];
    for (let i:number=0 ; i < 150/*numElement*/; i++){
      chart.push({ heartrate : 0,
        cadence : 0,
        power : 0,
        speed : 0,
      })
    }
    
    return chart;
  }
  
  const genPosition = (cnt : number) =>{
    const pos = {
      latitude : '40.433212',
      longitude :  '-117.053714',
    }
    return pos;
  }
  
export { genPosition, genChart, genData, genWeather}