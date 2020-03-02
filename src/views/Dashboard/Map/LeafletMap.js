import React, { useState, useEffect } from 'react'

import { Map, Marker, Circle, Popup, TileLayer } from 'react-leaflet'

const LeafletMap = ({ position, options }) => {
  // opzioni per la mappa
  const { start, end, catching, radius } = options.circle
  const { tile, style, view } = options

  // state hook `position` inizializzato alle prime
  // coordinate che vengono passate
  const [markerPosition, setMarkerPosition] = useState(position)

  // aggiorna la posizione dell'icona quando
  // vengono passate nuove coordinate
  useEffect(() => {
    setMarkerPosition(position)
  }, [position])

  return (
    <Map style={style} center={view.position} zoom={view.zoom}>
      <TileLayer
        url={tile.url}
        attribution={tile.attribution}
        apikey={tile.apiKey}
        minZoom={4}
        maxNativeZoom={17}
        maxZoom={17}
      />
      <Circle center={start} radius={radius} color={'yellow'}>
        <Popup>
          <b>Start zone</b>
        </Popup>
      </Circle>
      <Circle center={end} radius={radius} color={'red'}>
        <Popup>
          <b>End zone</b>
        </Popup>
      </Circle>
      <Circle center={catching} radius={radius} color={'blue'}>
        <Popup>
          <b>Catching zone</b>
        </Popup>
      </Circle>
      <Marker key="taurusX" position={markerPosition} icon={options.icon}>
        <Popup>
          <b>TaurusX</b>
        </Popup>
      </Marker>
    </Map>
  )
}

export default LeafletMap
