import L from 'leaflet'
import { Map, Marker, Circle, Popup, TileLayer } from 'react-leaflet'
import React, { Component } from 'react'

export const bikeIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/stelosca96/marta_map_component/master/public/taurus_icon.png?token=AKTACIBKBKQFUSV2NVBXF7S6LPU24',
  // shadowUrl: 'leaf-shadow.png',
  iconSize:     [60, 19], // size of the icon
  // shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [30, 10], // point of the icon which will correspond to marker's location
  // shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [0, -7] // point from which the popup should open relative to the iconAnchor
});

function name_pos(name){
  let v = {};
  switch (name) {
    case "bm":
      v[0] = [40.433212, -117.053714];
      v[1] = 12;
      return v;
    case "orbassano":
      v[0] = [45.009978, 7.560453];
      v[1] = 16;
      return v;
    case "balocco":
      v[0] = [45.478673, 8.300212];
      v[1] = 14;
      return v;
    default:
      v[0] = [40.433212, -117.053714];
      v[1] = 12;
      return v;
  }
}
//
//


// updateMarker = ({new_pos}) => {
//     //update
//     this.setState(prevState => {
//         const markerData = [...prevState.markerData];
//         markerData[markerIndex] = new_pos;
//         return { markerData: markerData };
//     });
// };



class MyMap extends Component {
  _isMounted = false

  constructor(props) {
    super(props)

    this.state = {
      position_name: 'bm',
      bike_position: [40.433212, -117.053714],
      visible: false,
      visible_video: false,
      visible_rasp: false,
    }
    setTimeout(this.new_pos(), 1000)
  }

  new_pos() {
    console.log("QUAAA")

      let pos = this.state.bike_position
      pos[0] += 0.00001
      pos[1] += 0.00001
      let newState = {
        ...this.state,
        bike_position: [pos[0], pos[1]],
      }
      this.setState(newState)
  }

  componentDidMount() {
    this._isMounted = true
    // this.reloadStatus()
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  reloadStatus() {
    // SocketIoHelper.getSettings(settings => {
    //   if (JSON.stringify(this.state.settings) !== JSON.stringify(settings)) {
    //     this.setState({ settings })
    //   }
    // })
    // SocketIoHelper.getState(state => {
    //   this.setState({ state })
    // })
  }

  // updateView = () => {
  //   this.reloadStatus()
  // }

  render() {
    let v = name_pos(this.state.position_name);
    let position = v[0];
    let zoom_level = v[1];
    return (
      <Map center={position} zoom={zoom_level}>
        <TileLayer
          url="https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=5adf6850b4034fb3a71eff6eeab5d818"
          attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          apikey="5adf6850b4034fb3a71eff6eeab5d818"
          minZoom={4}
          maxNativeZoom={17}
          maxZoom={17}
        />
        <Circle center={[40.393431, -117.043385]} radius={200} color={"yellow"}>
          <Popup><b>Start zone</b></Popup>
        </Circle>
        <Circle center={[40.466338, -117.062507]} radius={200} color={"red"}>
          <Popup><b>Timing zone</b></Popup>
        </Circle>
        <Circle center={[40.476676, -117.065328]} radius={200} color={"blue"}>
          <Popup><b>Catching zone</b></Popup>
        </Circle>
        <Marker key="taurusX" position={this.state.bike_position} icon={bikeIcon}>
          <Popup><b>TaurusX</b></Popup>
        </Marker>
      </Map>
    )
  }
}

export default MyMap
