"use strict";
$(document).ready(function(){

	var timer =90;
	var intervalID=null;
	window.app = {


		init: function(){
			var self = this ;
			this.lisnteners();
		},
		lisnteners: function(){
			$('#setTime').on('click', this.getTime.bind(this));
			$('.btnStart').on('click', this.start.bind(this));
			$('.btnStop').on('click', this.stop.bind(this));
			$('.btnReset').on('click',this.reset.bind(this));
			$('.btnClear').on('click',this.clear.bind(this));
		},

		start: function(){
			clearInterval(this.intervalID);
			this.intervalID = setInterval(this.decrement, 1000);
			app.progressBar();
		},

		stop: function(){
			clearInterval(this.intervalID);
		},
		clear: function(){
			this.stop();
			$('#putTime').text("1:30");
			$('.setSecondes').val("");
			timer = 90;
		},

		reset: function(){
			this.stop();
			$('#putTime').text($('.setSecondes').val() + ' ' + 'secondes');
			timer = $('.setSecondes').val();
		},

		decrement: function(){
			var minutes= parseInt(timer/60, 10); 
			var secondes= parseInt(timer-minutes*60, 10);
			$('#putTime').text(minutes+ ':'+ secondes );
			timer--;
			app.progressBar();
			if (timer=== -1){
				this.stop(); 
			}
		},

		getTime: function(){
			var minutes = 0;
			var secondes= $('.setSecondes').val();
			timer = parseInt(minutes*60 + secondes ); 
			$('#putTime').text($('.setSecondes').val() + ' ' + 'secondes');
		},

		progressBar: function(){
			var progress = parseInt(app.timer*100 / app.secondes, 10);
			$('#loading').css('width', progress + '%');
			$('#border').text(progress + '%');
		}
	};
	app.init();
});