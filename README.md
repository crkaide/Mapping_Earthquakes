# Mapping Earthquakes

## Overview
As part of my new position as a data visualization specialist for the Disaster Reporting Network (a non-profit corporation taht provides data-centered coverage on worldwide natural disasters), I was assigned the task of building visualizations using real-time earthquake data for use by reporters and data specialists on desktop and mobile devices.

## Purpose
Pulling real-time earthquake data for the prior seven days, this map visualizes the location and magnitude of earthquakes worldwide, including their geographic relationship to tectonic fault lines.  The DNR hopes that this will become a go-to resource and raise its public and professional profile.

## How it works
1. User interaction triggers an API call to the USGS website for GeoJSON data (e.g., coordinates/magnitudes of earthqukes in the past seven days), using JS and the D3 library
2. Leaflet plots the data
3. Mapbox uses specifications made by Leaflet to generate an interactive world map

## User interactivity/features
1. Map styles: streets, satellight, night navigation
2. Overlays: Earthquakes, Tectonic, Major Earthquakes
