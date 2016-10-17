"use strict";
$(document).ready(function(){

	var timer =90;
	var intervalID=null;

	window.app = {

		init: function(){
			app.lisnteners();
		},
		lisnteners: function(){
			$('#setTime').on('click', app.getTime);
			$('.btnStart').on('click', app.start);
			$('.btnStop').on('click', app.stop);
			$('.btnReset').on('click',app.reset);
			$('.btnClear').on('click',app.clear);
		},

		start: function(){
			app.intervalID = setInterval(app.decrement, 1000);
			app.progressBar();
		},

		stop: function(){
			clearInterval(app.intervalID);
		},
		clear: function(){
			app.stop();
			$('#putTime').text("1:30");
			$('.setSecondes').val("");
			timer = 90;
		},

		reset: function(){
			app.stop();
			$('#putTime').text($('.setSecondes').val() + ' ' + 'secondes');
			timer = $('.setSecondes').val();
		},

		decrement: function(){
			var minutes= parseInt(timer/60, 10); 
			var secondes= parseInt(timer-minutes*60, 10);
			$('#putTime').text(minutes+ ':'+ secondes );
			timer--;
			if (timer=== -1){
				app.stop(); 
			}
		},

		getTime: function(){
			var minutes = 0;
			var secondes= $('.setSecondes').val();
			timer = parseInt(minutes*60 + secondes ); 
			$('#putTime').text($('.setSecondes').val() + ' ' + 'secondes');
		},

		progressBar: function(){
			

		}
	};
	app.init();
});