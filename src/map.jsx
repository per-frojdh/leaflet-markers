import React, { PropTypes, Component } from 'react';
import { Map, TileLayer, FeatureGroup, LayerGroup } from 'react-leaflet';
import Leaflet from 'leaflet';
import proj4leaflet from 'proj4leaflet'; // eslint-disable-line no-unused-vars
import { DEFAULT_MAP_POSITION, INITIAL_ZOOM_VALUE } from './constants/constants';
import { ApiHelper } from './helpers/apiHelper';
import MapMarkers from './markers';


require('leaflet_css');
require('leaflet_draw_css');

class KartenaMap extends Component {
    constructor(props) {
        super(props);
        this.setState({
            items: [],
        });
    }

    componentDidMount() {
        ApiHelper.get('http://localhost:2396/api/store').then((data) => {
            this.setState({
                items: data.stores,
            });
        });
    }

    render() {
        console.log('rendering KartenaMap', this.state);
        const mapItems = [];
        if (this.state && this.state.items) {
            mapItems.push(
                <FeatureGroup>
                    <MapMarkers markers={this.state.items}
                        />
                </FeatureGroup>
            );
        }
        return (
            <div>
                <Map className="kartena-map" center={DEFAULT_MAP_POSITION} zoom={INITIAL_ZOOM_VALUE} crs={new Leaflet.Proj.CRS('EPSG:3006',
                    '+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs', {
                        resolutions: [
                            8192, 4096, 2048, 1024, 512, 256, 128,
                            64, 32, 16, 8, 4, 2, 1, 0.5,
                        ],
                        origin: [0, 0],
                    })}
                    ref="leafletMap">
                    <TileLayer
                        attribution="Kartdata &#169; 2015 Lantmäteriet, bilder &#169; Kartena 2015"
                        url="http://api.geosition.com/tile/lm/{z}/{x}/{y}.png"
                        continuousWorld
                    />
                <LayerGroup>
                    {
                        mapItems
                    }
                </LayerGroup>
                </Map>
            </div>
        );
    }
}

KartenaMap.propTypes = {
    activeMarker: PropTypes.object,
    toggleOrders: PropTypes.func,
    expandMap: PropTypes.func,
    map: PropTypes.object,
    status: PropTypes.object,
    mapId: PropTypes.string,
    mapType: PropTypes.string,
    mapList: PropTypes.array,
    zoomControl: PropTypes.bool,
    name: PropTypes.string.isRequired,
    setSelectedMarker: PropTypes.func.isRequired,
    setMapPosition: PropTypes.func.isRequired,
    onCreatedDrawing: PropTypes.func.isRequired,
};

KartenaMap.defaultProps = {
    mapId: 'rg-map',
    zoomControl: true,
};

export default KartenaMap;
