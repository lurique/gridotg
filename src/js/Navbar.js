var App = App || {};

;(function() {

	App.Navbar = {

		init: function() {
			this.cacheSelectors();
			this.bindEvents();
		},

		cacheSelectors: function() {
			this.navbar_open = document.querySelector('.navbar-open');
		},

		bindEvents: function() {
			this.navbar_open.addEventListener('click', this.Events.openNavbar);
		},

		Events: {
			openNavbar: function() {
				var self = App.Navbar;

				var navbar = document.getElementById(this.getAttribute('data-navbar'));

				navbar.classList.toggle('active');
			}
		}

	}

})();