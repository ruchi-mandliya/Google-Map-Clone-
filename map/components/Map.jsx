import React, { useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";

const Map = ({ coordinates, setCoordinates }) => {
  return (
    <Box width={"full"} height={"full"}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        }}
      ></GoogleMapReact>
      onChildClick={() => {}}
    </Box>
  );
};

export default Map;
