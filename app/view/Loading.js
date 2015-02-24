Ext.define('WhatsFresh.view.Loading', {
    extend: 'Ext.Panel',
    require: ['Ext.field.Toggle', 'Ext.form.FieldSet', 'Ext.field.Select', 'WhatsFresh.view.Map'],
    // fullscreen: true,
    xtype: 'Loading',
    alias: 'widget.loading',
    config: {
		items: [
		    {
				xtype: 'toolbar',
				title: 'Oregon\'s Catch',
				itemId: 'loadingPageToolbar',
				docked: 'top'
		    },
		    {	
		        xtype: 'fieldset',
		        itemId: 'Loadingtext',
		        tpl: '</pre><div class="Loadingtext">Trying to send valid location to server</div><pre>'
		    },     
		    {
				xtype: 'button',
				ui: 'action',
				text: 'Stop',
				itemId: 'stopButton'
		    }
		],
		listeners: [
		    {
				delegate: '#stopButton',
				event: 'tap',
				fn: 'onStopButtonTap'
		    }
		],
	},
    onStopButtonTap: function(list, record, target, index, evt, options){
		this.fireEvent('viewStopCommand');
    }
});