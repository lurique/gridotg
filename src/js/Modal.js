var App = App || {};

;(function() {

	App.Modal = {

		init: function() {
			this.cacheSelectors();
			this.bindEvents();
		},

		cacheSelectors: function() {
			this.modal_open = document.querySelectorAll('.modal-open[data-modal]');
		},

		bindEvents: function() {
			for ( var i = 0; i < this.modal_open.length; i++ ) {
				this.modal_open[i].addEventListener('click', this.Events.openModal);
			}
		},

		Events: {
			openModal: function() {
				var self = App.Modal;

				// Get the attr of clicked button
				var btn_attr = this.getAttribute('data-modal');

				// Find modal based on data-modal (button) and close button inside it
				var modal = document.getElementById(btn_attr);
				var modal_close = modal.querySelectorAll('.modal-close');

				modal.classList.add('active');

				for ( var i = 0; i < modal_close.length; i++ ) {
					modal_close[i].addEventListener('click', function() {
						modal.classList.remove('active');
					});
				}
			}
		}

	}

})();