Ext.define('WhatsFresh.model.Locations', {
    extend: 'Ext.data.Model',
    config: {
        fields:[
            'locations',
            'name',
            'title',
            'text',
            'value',
            'products',
            'Latlng',
            'id',
            'address',
            'desc',
            'name',
            'is_not_filterable'
        ]
    }
});
