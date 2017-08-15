var App = App || {};

;(function() {

	App.Main = {

		init: function() {
			this.cacheSelectors();
			this.bindScripts();
		},

		cacheSelectors: function() {
			this.dataScript = document.querySelectorAll('[data-script]');
		},

		bindScripts: function() {
			// Converting nodeList in Array
			var arrayScripts = Array.prototype.slice.call(this.dataScript);

			// Mapping a new Array
			var mapScripts = arrayScripts.map(function(script) {
				return script.getAttribute('data-script');
			});

			// Filter equal values in array
			var filteredScripts = mapScripts.filter(function(item, pos) {
			  return mapScripts.indexOf(item) == pos;
			});

			// Getting all scripts in page
			for ( var i = 0; i < filteredScripts.length; i++ ) {
				App[filteredScripts[i]].init();
			}
		}

	}

	document.addEventListener('DOMContentLoaded', function() {
		App.Main.init();
	});

})();