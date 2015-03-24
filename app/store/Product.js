Ext.define('WhatsFresh.store.Product', {
    extend: 'Ext.data.Store',
    config: {
    	model: 'WhatsFresh.model.Products',
    	proxy: {
    	    type: 'ajax',
    	    url: 'http://whats-fresh-api.osuosl.org/1/products',
    	    noCache: false,
            pageParam: false,
            limitParam: false,
            startParam: false,
    	    reader: {
        		type: 'json',
        		rootProperty: 'products'
    	    }
    	}
    }
});
