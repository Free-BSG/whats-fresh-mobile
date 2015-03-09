Ext.define('WhatsFresh.store.Location', {
    extend: 'Ext.data.Store',
    config: {
    	model: 'WhatsFresh.model.Locations',
        autoLoad: true,
    	
    	proxy: {
    	    type: 'ajax',
    	    url: 'http://seagrant-staging-api.osuosl.org/1/locations',
    	    noCache: false,
            pageParam: false,
            limitParam: false,
            startParam: false,
    	    reader: {
        		type: 'json',
        		rootProperty: 'locations'
    	    }
    	}
    }
    // placeholderInjection: function() {
    //     var locationStore = Ext.getStore('Location');
    //     var locationIndex = locationStore.data.length;
    //     locationStore.insert( 0, 
    //         {
    //             name: "Please choose a location",
    //             location: locationIndex,
    //             is_not_filterable: true
    //         }
    //     );
    //     locationStore.fireEvent('refresh');
    // }
});
