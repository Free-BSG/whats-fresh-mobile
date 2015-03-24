Ext.define('WhatsFresh.store.Vendor', {
    extend: 'Ext.data.Store',
    config: {
		model: 'WhatsFresh.model.Vendors',
		autoLoad: true,
		proxy: {
		    type: 'ajax',
		    url: 'http://whats-fresh-api.osuosl.org/1/vendors',
		    noCache: false,
	        pageParam: false,
	        limitParam: false,
	        startParam: false,
		    reader: {
				type: 'json',
				rootProperty: 'vendors'
		    }
		}
    }
});
