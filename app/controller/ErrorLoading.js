Ext.define('WhatsFresh.controller.ErrorLoading', {
	extend: 'Ext.app.Controller',
	requires: [],
	config: {
		refs: {
			homeView			: 'home',
			errorView			: 'ErrorLoadingView'
		}
	},

	/* ------------------------------------------------------------------------
		UI Callback (Event) Functions
	------------------------------------------------------------------------ */

	loader: null,

	placeholderInjection: function(store, msg) {
        store.add( 
            {
                name: msg,
                is_not_filterable: true
            }
        );
        // store.fireEvent('load');
    },

	onError: function () {
		var ctrl = this;
		var transition;

		if (Ext.Viewport.getActiveItem() !== ctrl.getErrorView()) {

			transition = ctrl.getErrorView().transitions.back;
			Ext.Viewport.animateActiveItem(ctrl.getErrorView(), transition);
			var locationStore = Ext.getStore('Location');
			var productStore = Ext.getStore('Product');
			var vendorStore = Ext.getStore('Vendor');

			ctrl.loader = setInterval(function () {

				console.log('Loading stores again...');
				locationStore.load(ctrl.placeholderInjection(locationStore, "Please choose a location"));
				productStore.load(ctrl.placeholderInjection(productStore, "Please choose a product"));	
				
				
				vendorStore.load();

			}, 3000); // 3 second intervals
		}

	},

	onSuccess: function () {
		var ctrl = this;
		var transition;

		clearInterval(ctrl.loader);

		if (Ext.Viewport.getActiveItem() !== ctrl.getHomeView()) {

			transition = ctrl.getErrorView().transitions.home;
			Ext.Viewport.animateActiveItem(ctrl.getHomeView(), transition);

		}

	}

});
