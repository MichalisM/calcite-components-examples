import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-date-picker";
import "@esri/calcite-components/dist/calcite/calcite.css";
import {
  setAssetPath
} from "@esri/calcite-components/dist/components";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import CoordinateConversion from "@arcgis/core/widgets/CoordinateConversion";
import "@arcgis/core/assets/esri/themes/light/main.css";
import "./custom.css";
import esriConfig from "@arcgis/core/config";
import Print from "@arcgis/core/widgets/Print";

esriConfig.assetsPath = "./core/assets";
setAssetPath(`${location.origin}/calcite/assets`);


document.getElementById("test").innerHTML = "<div><calcite-date-picker></calcite-date-picker></div>";

const map = new Map({
  basemap: "topo-vector"
});

const view = new MapView({
  container: "mapContainer",
  map: map,
  center: [-117.049, 34.485],
  zoom: 12
});

const ccWidget = new CoordinateConversion({
  view: view
});

view.ui.add(ccWidget, "bottom-left");

const print = new Print({
  view: view,
  // specify your own print service
  printServiceUrl:
     "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
});

// Adds widget below other elements in the top left corner of the view
view.ui.add(print, {
  position: "top-left"
});