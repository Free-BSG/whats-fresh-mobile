Ext.define('WhatsFresh.view.Loading', {
    extend: 'Ext.Panel',
    fullscreen: true,
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
				id: 'LoadingField',
				scrollable: true,
				items: [
					{
						xtype: 'panel',
						id: 'errBlock',
						itemId: 'baderror',
						tpl: '</pre><div class="loc-error"> Unable to get location!<br><br>Check your device\'s privacy settings to see if location services are enabled.</div>',
						data:{} // needed for text to show: http://www.sencha.com/forum/showthread.php?244305-Tpl-not-working 
					}
				]
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