ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([12535331.958703, -888509.802395, 12536748.634806, -887529.543102]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_1, 
                style: style_building_1,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_building_2 = new ol.format.GeoJSON();
var features_building_2 = format_building_2.readFeatures(json_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_2.addFeatures(features_building_2);
var lyr_building_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_2, 
                style: style_building_2,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_2.png" /> building'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);lyr_building_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1,lyr_building_2];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'entrance': 'entrance', 'parking': 'parking', 'amenity': 'amenity', });
lyr_building_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'sharia': 'sharia', 'beauty': 'beauty', 'community_centre': 'community_centre', 'service_times': 'service_times', 'operator:wikidata': 'operator:wikidata', 'operator:short': 'operator:short', 'operator:id': 'operator:id', 'operator:en': 'operator:en', 'wikidata': 'wikidata', 'museum': 'museum', 'atm': 'atm', 'opening_hours:covid19': 'opening_hours:covid19', 'loc_name': 'loc_name', 'email': 'email', 'school:type_idn': 'school:type_idn', 'contact:instagram': 'contact:instagram', 'bpjs': 'bpjs', 'addr:province': 'addr:province', 'operator:type': 'operator:type', 'tourism': 'tourism', 'name:ja': 'name:ja', 'name:id': 'name:id', 'name:en': 'name:en', 'brand:wikipedia': 'brand:wikipedia', 'air_conditioning': 'air_conditioning', 'layer': 'layer', 'fast_food': 'fast_food', 'toilets:unisex': 'toilets:unisex', 'toilets:access': 'toilets:access', 'payment:debit_cards': 'payment:debit_cards', 'healthcare:speciality': 'healthcare:speciality', 'healthcare': 'healthcare', 'addr:subdistrict': 'addr:subdistrict', 'addr:district': 'addr:district', 'building_kdb': 'building_kdb', 'government': 'government', 'admin_level': 'admin_level', 'office': 'office', 'old_name': 'old_name', 'toilets': 'toilets', 'takeaway': 'takeaway', 'payment:visa': 'payment:visa', 'payment:qris': 'payment:qris', 'payment:mastercard': 'payment:mastercard', 'payment:cash': 'payment:cash', 'opening_hours': 'opening_hours', 'drive_through': 'drive_through', 'cuisine': 'cuisine', 'capacity': 'capacity', 'addr:full': 'addr:full', 'capacity:persons': 'capacity:persons', 'building:roof': 'building:roof', 'building:condition': 'building:condition', 'M:flood_prone': 'M:flood_prone', 'wikipedia': 'wikipedia', 'official_name': 'official_name', 'brand:wikidata': 'brand:wikidata', 'brand': 'brand', 'branch': 'branch', 'alt_name': 'alt_name', 'denomination': 'denomination', 'place_of_worship': 'place_of_worship', 'sport': 'sport', 'operator': 'operator', 'building:walls': 'building:walls', 'building:use': 'building:use', 'building:structure': 'building:structure', 'access:roof': 'access:roof', 'leisure': 'leisure', 'addr:city': 'addr:city', 'internet_access': 'internet_access', 'height': 'height', 'religion': 'religion', 'wheelchair': 'wheelchair', 'website': 'website', 'toilets:wheelchair': 'toilets:wheelchair', 'short_name': 'short_name', 'shop': 'shop', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:housename': 'addr:housename', 'description': 'description', 'amenity': 'amenity', 'name': 'name', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'type': 'type', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'entrance': '', 'parking': '', 'amenity': '', });
lyr_building_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'sharia': '', 'beauty': '', 'community_centre': '', 'service_times': '', 'operator:wikidata': '', 'operator:short': '', 'operator:id': '', 'operator:en': '', 'wikidata': '', 'museum': '', 'atm': '', 'opening_hours:covid19': '', 'loc_name': '', 'email': '', 'school:type_idn': '', 'contact:instagram': '', 'bpjs': '', 'addr:province': '', 'operator:type': '', 'tourism': '', 'name:ja': '', 'name:id': '', 'name:en': '', 'brand:wikipedia': '', 'air_conditioning': '', 'layer': '', 'fast_food': '', 'toilets:unisex': '', 'toilets:access': '', 'payment:debit_cards': '', 'healthcare:speciality': '', 'healthcare': '', 'addr:subdistrict': '', 'addr:district': '', 'building_kdb': '', 'government': '', 'admin_level': '', 'office': '', 'old_name': '', 'toilets': '', 'takeaway': '', 'payment:visa': '', 'payment:qris': '', 'payment:mastercard': '', 'payment:cash': '', 'opening_hours': '', 'drive_through': '', 'cuisine': '', 'capacity': '', 'addr:full': '', 'capacity:persons': '', 'building:roof': '', 'building:condition': '', 'M:flood_prone': '', 'wikipedia': '', 'official_name': '', 'brand:wikidata': '', 'brand': '', 'branch': '', 'alt_name': '', 'denomination': '', 'place_of_worship': '', 'sport': '', 'operator': '', 'building:walls': '', 'building:use': '', 'building:structure': '', 'access:roof': '', 'leisure': '', 'addr:city': '', 'internet_access': '', 'height': '', 'religion': '', 'wheelchair': '', 'website': '', 'toilets:wheelchair': '', 'short_name': '', 'shop': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:housename': '', 'description': '', 'amenity': '', 'name': '', 'building:levels': '', 'addr:street': '', 'type': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'entrance': 'no label', 'parking': 'no label', 'amenity': 'no label', });
lyr_building_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'sharia': 'no label', 'beauty': 'no label', 'community_centre': 'no label', 'service_times': 'no label', 'operator:wikidata': 'no label', 'operator:short': 'no label', 'operator:id': 'no label', 'operator:en': 'no label', 'wikidata': 'no label', 'museum': 'no label', 'atm': 'no label', 'opening_hours:covid19': 'no label', 'loc_name': 'no label', 'email': 'no label', 'school:type_idn': 'no label', 'contact:instagram': 'no label', 'bpjs': 'no label', 'addr:province': 'no label', 'operator:type': 'no label', 'tourism': 'no label', 'name:ja': 'no label', 'name:id': 'no label', 'name:en': 'no label', 'brand:wikipedia': 'no label', 'air_conditioning': 'no label', 'layer': 'no label', 'fast_food': 'no label', 'toilets:unisex': 'no label', 'toilets:access': 'no label', 'payment:debit_cards': 'no label', 'healthcare:speciality': 'no label', 'healthcare': 'no label', 'addr:subdistrict': 'no label', 'addr:district': 'no label', 'building_kdb': 'no label', 'government': 'no label', 'admin_level': 'no label', 'office': 'no label', 'old_name': 'no label', 'toilets': 'no label', 'takeaway': 'no label', 'payment:visa': 'no label', 'payment:qris': 'no label', 'payment:mastercard': 'no label', 'payment:cash': 'no label', 'opening_hours': 'no label', 'drive_through': 'no label', 'cuisine': 'no label', 'capacity': 'no label', 'addr:full': 'no label', 'capacity:persons': 'no label', 'building:roof': 'no label', 'building:condition': 'no label', 'M:flood_prone': 'no label', 'wikipedia': 'no label', 'official_name': 'no label', 'brand:wikidata': 'no label', 'brand': 'no label', 'branch': 'no label', 'alt_name': 'no label', 'denomination': 'no label', 'place_of_worship': 'no label', 'sport': 'no label', 'operator': 'no label', 'building:walls': 'no label', 'building:use': 'no label', 'building:structure': 'no label', 'access:roof': 'no label', 'leisure': 'no label', 'addr:city': 'no label', 'internet_access': 'no label', 'height': 'no label', 'religion': 'no label', 'wheelchair': 'no label', 'website': 'no label', 'toilets:wheelchair': 'no label', 'short_name': 'no label', 'shop': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:housename': 'no label', 'description': 'no label', 'amenity': 'no label', 'name': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'type': 'no label', });
lyr_building_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});