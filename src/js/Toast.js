var App = App || {};

;(function() {

	App.Toast = {

		init: function() {
			this.cacheSelectors();
			this.bindEvents();
		},

		cacheSelectors: function() {
			this.toast_close = document.querySelectorAll('.toast-close');
		},

		bindEvents: function() {
			for ( var i = 0; i < this.toast_close.length; i++ ) {
				this.toast_close[i].addEventListener('click', this.Events.closeToast);
			}
		},

		Events: {
			openToast: function() {
				/*
				*	Here comes your code
				* To show the toast, add the class "active" on .toast.
				*/
			},

			closeToast: function() {
				var toast = this.parentNode;

				toast.classList.remove('active');
			}
		}

	}

})();