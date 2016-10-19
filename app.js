"use strict";
$(document).ready(function(){
	var percent = 100;
	var timer =90;
	var timermax =null;
	var intervalID=null;
	window.app = {


		init: function(){
			var progress = parseInt(app.timer*100 / app.secondes, 10);
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
			timer;
			

		},

		reset: function(){
			this.stop();
			$('#putTime').text($('.setSecondes').val());
			timer = $('.setSecondes').val();
			percent;
		},

		decrement: function(){
			var minutes= parseInt(timer/60, 10); 
			var secondes= parseInt(timer-minutes*60, 10);
			$('#putTime').text(minutes+ ':'+ secondes );
			app.progressBar();
			timer--;
			if (timer=== 0){
				this.stop(); 
			}
		},

		getTime: function(){
			var minutes = 0;
			var secondes= parseInt($('.setSecondes').val(),10);
			timer = parseInt(minutes*60 + secondes ); 
			$('#putTime').text($('.setSecondes').val());
			timermax = timer;
		},

		progressBar: function(){
			var progress = parseInt(timer*100 / timermax, 10);
			$('#percent').text(progress + '%');
			$('#loading').css('width', progress + '%');
			if (timer=== 0){
				this.stop();
				$('#putTime').text("").append('<video autobuffer controls autoplay><source id="mp4" src="http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4" type="video/mp4"></video>');
			}
			
		}
	};
	app.init();
});



