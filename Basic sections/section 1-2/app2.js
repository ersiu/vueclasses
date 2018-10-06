new Vue({
	el: '#app',
	data: {
		counter: 0,
		secondCounter: 0,
		x: 0,
		y: 0
	
	},
	computed: {
		output: function() {
			console.log('Computed');
			return this.counter > 10 ? 'Greater than 10': 'Smaller than 10';
		}

	},
	watch: {
		counter: function(value) {
			var vm = this;
			setTimeout(function() {
				console.log('setTimeout')
				vm.counter = 0;
			}, 3000);
			
		}
	},
	methods: {
		// increase: function(step) {
		// 	this.counter += step;
		// 	// this.result = this.counter > 10 ? 'Greater than 10': 'Less than 10';
		// },
		// decrease: function(step) {
		// 	this.counter -= step;
		// 	// this.result = this.counter > 10 ? 'Greater than 10': 'Less than 10';
		// },
		// updateCoordinates: function(event) {
		// 	this.x = event.clientX;
		// 	this.y = event.clientY;
		// },
		// dummy: function(event) {
		// 	event.stopPropagation();
		// },
		// alertMe: function() {
		// 	alert('Alert!');
		// },
		result() {
			console.log('Method');
			return this.counter > 10 ? 'Greater than 10': 'Smaller than 10';
		}
	}
});