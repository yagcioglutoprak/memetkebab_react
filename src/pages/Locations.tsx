import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Search, Navigation, Clock, Phone, MapPin } from 'lucide-react';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import "@reach/combobox/styles.css";
import { ZoomControl } from 'react-leaflet';

interface Location {
  id: number;
  name: string;
  address: string;
  position: [number, number];
  hours: string;
  phone: string;
  status: 'active' | 'coming-soon';
}

interface SearchResult {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: 'Memet Kebab Kraków',
    address: 'ul. Starowiślna 16, 31-038 Kraków',
    position: [50.0573, 19.9441],
    hours: 'Mon-Sun: 11:00-23:00',
    phone: '+48 123 456 789',
    status: 'active'
  },
  {
    id: 2,
    name: 'Memet Kebab Warszawa',
    address: 'ul. Nowy Świat 15, 00-029 Warszawa',
    position: [52.2297, 21.0122],
    hours: 'Mon-Sun: 11:00-23:00',
    phone: '+48 123 456 790',
    status: 'active'
  },
  {
    id: 3,
    name: 'Memet Kebab Wrocław',
    address: 'ul. Rynek 13, 50-101 Wrocław',
    position: [51.1079, 17.0385],
    hours: 'Mon-Sun: 11:00-23:00',
    phone: '+48 123 456 791',
    status: 'coming-soon'
  }
];

const customIcon = new Icon({
  iconUrl: '/memet-kebab-white-bcg-rgb.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
  className: 'custom-marker-icon'
});

function MapUpdater({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, zoom, { animate: true });
  }, [center, zoom, map]);
  
  return null;
}

export default function Locations() {
  const [mapCenter, setMapCenter] = useState<[number, number]>([52.0693, 19.4803]); // Center of Poland
  const [zoom, setZoom] = useState(6);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const mapRef = useRef<L.Map | null>(null);
  const searchTimeout = useRef<NodeJS.Timeout>();

  const handleMapInstance = (map: L.Map) => {
    mapRef.current = map;
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          
          // Find nearest location and center map immediately
          let nearestLocation = locations[0];
          let shortestDistance = calculateDistance(
            latitude,
            longitude,
            locations[0].position[0],
            locations[0].position[1]
          );

          locations.forEach((location) => {
            const distance = calculateDistance(
              latitude,
              longitude,
              location.position[0],
              location.position[1]
            );
            if (distance < shortestDistance) {
              shortestDistance = distance;
              nearestLocation = location;
            }
          });

          // Center the map on the nearest restaurant
          setMapCenter(nearestLocation.position);
          
          // Set zoom level based on distance
          const zoomLevel = 14; // Fixed zoom level for restaurant view
          setZoom(zoomLevel);
        },
        (error) => {
          console.error('Error getting user location:', error);
          // Don't set a default location, let the user choose
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    }
  }, []);

  const findNearestLocation = () => {
    setIsSearching(true);

    if (!navigator.geolocation) {
      setIsSearching(false);
      alert('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        
        // Find nearest location
        let nearestLocation = locations[0];
        let shortestDistance = calculateDistance(
          latitude,
          longitude,
          locations[0].position[0],
          locations[0].position[1]
        );

        locations.forEach((location) => {
          const distance = calculateDistance(
            latitude,
            longitude,
            location.position[0],
            location.position[1]
          );
          if (distance < shortestDistance) {
            shortestDistance = distance;
            nearestLocation = location;
          }
        });

        // Update map view
        if (mapRef.current) {
          mapRef.current.setView(nearestLocation.position, 14, { animate: true });
        }
        setMapCenter(nearestLocation.position);
        setZoom(14);
        setIsSearching(false);
      },
      (error) => {
        console.error('Error getting user location:', error);
        setIsSearching(false);
        
        if (error.code === 1) {
          alert('Please enable location services in your browser settings and try again.');
        } else if (error.code === 2) {
          alert('Could not get your location. Please check if your device\'s location services are enabled and try again.');
        } else if (error.code === 3) {
          alert('Location request timed out. Please try again.');
        } else {
          alert('Could not get your location. Please try again.');
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Earth's radius in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  };

  const handleSearchInput = async (value: string) => {
    setSearchQuery(value);
    
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    if (!value.trim()) {
      setSearchResults([]);
      return;
    }

    searchTimeout.current = setTimeout(async () => {
      try {
        setIsSearching(true);
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(value)}&accept-language=en,fr,pl,de,es`,
          {
            headers: {
              'Accept-Language': 'en,fr,pl,de,es'
            }
          }
        );
        const data = await response.json();
        setSearchResults(data);
        setIsSearching(false);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setIsSearching(false);
      }
    }, 300);
  };

  const handleSearchSelect = async (address: string) => {
    try {
      setIsSearching(true);
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&accept-language=en,fr,pl,de,es`,
        {
          headers: {
            'Accept-Language': 'en,fr,pl,de,es'
          }
        }
      );
      const data = await response.json();

      if (data && data.length > 0) {
        const searchLocation: [number, number] = [
          parseFloat(data[0].lat),
          parseFloat(data[0].lon)
        ];

        // Find nearest location
        let nearestLocation = locations[0];
        let shortestDistance = calculateDistance(
          searchLocation[0],
          searchLocation[1],
          locations[0].position[0],
          locations[0].position[1]
        );

        locations.forEach((location) => {
          const distance = calculateDistance(
            searchLocation[0],
            searchLocation[1],
            location.position[0],
            location.position[1]
          );
          if (distance < shortestDistance) {
            shortestDistance = distance;
            nearestLocation = location;
          }
        });

        // Update map view
        if (mapRef.current) {
          mapRef.current.setView(nearestLocation.position, 14, { animate: true });
        }
        setMapCenter(nearestLocation.position);
        setZoom(14);
      }
      setIsSearching(false);
      setSearchResults([]);
      setSearchQuery(address);
    } catch (error) {
      console.error('Error handling search selection:', error);
      setIsSearching(false);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    try {
      setIsSearching(true);
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&accept-language=en,fr,pl,de,es`,
        {
          headers: {
            'Accept-Language': 'en,fr,pl,de,es'
          }
        }
      );
      const data = await response.json();

      if (data && data.length > 0) {
        const searchLocation: [number, number] = [
          parseFloat(data[0].lat),
          parseFloat(data[0].lon)
        ];

        // Find nearest location
        let nearestLocation = locations[0];
        let shortestDistance = calculateDistance(
          searchLocation[0],
          searchLocation[1],
          locations[0].position[0],
          locations[0].position[1]
        );

        locations.forEach((location) => {
          const distance = calculateDistance(
            searchLocation[0],
            searchLocation[1],
            location.position[0],
            location.position[1]
          );
          if (distance < shortestDistance) {
            shortestDistance = distance;
            nearestLocation = location;
          }
        });

        // Update map view
        if (mapRef.current) {
          mapRef.current.setView(nearestLocation.position, 14, { animate: true });
        }
        setMapCenter(nearestLocation.position);
        setZoom(14);
      }
      setIsSearching(false);
      setSearchResults([]);
    } catch (error) {
      console.error('Error handling search:', error);
      setIsSearching(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <style>
        {`
          .custom-marker-icon {
            background-color: white;
            border-radius: 50%;
            padding: 4px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }
          .custom-popup .leaflet-popup-content-wrapper {
            background: white;
            border-radius: 10px;
            padding: 0;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          }
          .custom-popup .leaflet-popup-content {
            margin: 0;
            min-width: 260px;
            max-width: 260px;
          }
          .custom-popup .leaflet-popup-tip {
            background: white;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          }
          .location-status {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 3px 8px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.2px;
            text-transform: uppercase;
          }
          .location-status.active {
            background-color: #ecfdf5;
            color: #059669;
          }
          .location-status.coming-soon {
            background-color: #fef2f2;
            color: #dc2626;
          }
        `}
      </style>
      <div className="relative" style={{ position: 'relative', zIndex: 40 }}>
        <div className="container mx-auto px-4 pt-32 pb-16 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-[rgba(32,12,0,1)] mb-4">Our Locations</h1>
              <p className="text-xl text-gray-600">Find the nearest Memet Kebab restaurant to satisfy your cravings</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative">
                <div className="relative flex-1 w-full max-w-md">
                  <div className="relative">
                    <Combobox onSelect={handleSearchSelect}>
                      <div className="relative">
                        <ComboboxInput
                          value={searchQuery}
                          onChange={(e) => handleSearchInput(e.target.value)}
                          placeholder="Search by address, city, or street name..."
                          className="w-full px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[rgba(213,17,42,255)] shadow-sm"
                          autoComplete="off"
                        />
                        <button
                          onClick={() => handleSearch()}
                          disabled={isSearching || !searchQuery.trim()}
                          className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-600 hover:text-gray-900 transition-colors ${
                            isSearching || !searchQuery.trim() ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        >
                          <Search className="w-5 h-5" />
                        </button>
                      </div>
                      {searchResults.length > 0 && (
                        <div className="relative">
                          <ComboboxPopover className="absolute z-[45] w-full bg-white rounded-xl shadow-xl mt-2" style={{ minWidth: '100%' }}>
                            <ComboboxList className="max-h-60 overflow-auto py-2">
                              {searchResults.map((result) => (
                                <ComboboxOption
                                  key={result.place_id}
                                  value={result.display_name}
                                  className="px-6 py-3 text-gray-900 hover:bg-gray-50 cursor-pointer text-left block w-full transition-colors"
                                >
                                  {result.display_name}
                                </ComboboxOption>
                              ))}
                            </ComboboxList>
                          </ComboboxPopover>
                        </div>
                      )}
                    </Combobox>
                  </div>
                </div>
                
                <button
                  onClick={findNearestLocation}
                  disabled={isSearching}
                  className={`whitespace-nowrap px-6 py-4 bg-[rgba(213,17,42,255)] text-white rounded-xl hover:bg-[rgba(213,17,42,0.9)] transition-all transform hover:scale-105 flex items-center gap-3 font-medium shadow-lg ${
                    isSearching ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSearching ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      Finding Location...
                    </>
                  ) : (
                    <>
                      <Navigation className="w-5 h-5" />
                      Find Nearest Location
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4 -mt-8 pb-24 relative" style={{ zIndex: 30 }}>
        <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ height: '600px' }}>
          <MapContainer
            center={mapCenter}
            zoom={zoom}
            style={{ height: '100%', width: '100%' }}
            zoomControl={false}
            ref={handleMapInstance}
          >
            <MapUpdater center={mapCenter} zoom={zoom} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ZoomControl position="bottomright" />
            
            {locations.map((location) => (
              <Marker
                key={location.id}
                position={location.position}
                icon={customIcon}
                eventHandlers={{
                  click: () => {
                    if (mapRef.current) {
                      mapRef.current.setView(location.position, 14, { animate: true });
                    }
                  }
                }}
              >
                <Popup className="custom-popup">
                  <div className="relative">
                    <div 
                      className={`location-status ${location.status === 'active' ? 'active' : 'coming-soon'}`}
                    >
                      {location.status === 'active' ? 'Open' : 'Coming Soon'}
                    </div>
                    <div className="px-4 py-3.5">
                      <h3 className="text-base font-bold text-gray-900 pr-16 leading-snug mb-3">{location.name}</h3>
                      <div className="space-y-3">
                        <div className="flex gap-2.5">
                          <MapPin className="w-4 h-4 text-[rgba(213,17,42,255)] mt-0.5 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-[13px] text-gray-700 leading-relaxed break-words">{location.address}</p>
                            <a 
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                `${location.name} ${location.address}`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[13px] font-medium text-[rgba(213,17,42,255)] hover:underline mt-1 inline-block"
                            >
                              Get Directions
                            </a>
                          </div>
                        </div>
                        
                        {location.status === 'active' && (
                          <>
                            <div className="flex items-center gap-2.5">
                              <Clock className="w-4 h-4 text-[rgba(213,17,42,255)] flex-shrink-0" />
                              <p className="text-[13px] text-gray-700 leading-normal">{location.hours}</p>
                            </div>

                            <div className="flex items-center gap-2.5">
                              <Phone className="w-4 h-4 text-[rgba(213,17,42,255)] flex-shrink-0" />
                              <a 
                                href={`tel:${location.phone}`}
                                className="text-[13px] font-medium text-[rgba(213,17,42,255)] hover:underline"
                              >
                                {location.phone}
                              </a>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
