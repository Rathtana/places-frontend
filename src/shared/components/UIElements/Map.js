import React, { useRef, useEffect } from 'react'

import './Map.css'
const Map = (props) => {

    const mapRef = useRef();
    console.log(props.center);

    //only get call once after the component was mount 
    useEffect(() => {
        //create a google map object and add it to the global window object 
        const map = new window.google.maps.Map(mapRef.current, {
            center: props.center,
            zoom: props.zoom
        });

        new window.google.maps.Marker({
            position: props.center, map: map
        })
    }, [])

    return (
        <div ref={mapRef} className={`map ${props.className}`} style={props.style}>

        </div>
    )
}

export default Map
