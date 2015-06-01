$(document).ready(function(){

	var Router = Backbone.Router.extend({
		routes: {
			'':  			 'def',
			'home':          'one',  
			'settings':      'two', 
			'leaderboard': 	 'three', 
			'profile/:name': 'four', 
			'*notfound':     'fourOhFour'
		},

		def: function(){
			$("form").hide();
			$("header").hide();
			$("nav").hide();
			$(".page").hide();
			$("#load").show();
			$("#load").html("<h1> Loading ... </h1>");
			setTimeout(function(){
				$("#load").hide();
				$("header").show();
				$("nav").show();
				$("form").show();
				window.location ="file://localhost/Users/Joshua/Ironyard/Week_5/Homework/Day17/dist/index.html#home";
				// $("#home").show(50);
				// $("#home h2").remove();
				// $("<h2> Welcome to the game that is the funnest game, lol.</h2>").insertAfter("#home h1")
			}, 4000);

		},

		one: function() {
			$(".page").hide();
			$("#home").show();
			$("#home h2").remove();
			$("#home").html("<h2> Welcome to Super death kill 10,000!!!.</h2>")
			$("<img src='https://lh3.ggpht.com/PM4agY8fgiJk3Fpj-4wBhwVwHlLIUUfuKCm6mGpDrkMu0Q4lGRH7C3CZnPOckS4Fkta5=h900' style='width: 100%'>").insertAfter("#home h2")

		},

		two: function() {
			$(".page").hide();
			$("#settings").show(50);
			$("#settings h2").remove();
			$("<h2>welcome to settings, we will be implementing some neat ones pretty soon, until then, check out this button!</h2>").insertAfter("#settings h1");
		},

		three: function() {
			var kills1 = Math.random() * 10000;
			var kills2 = Math.random() * 10000;
			var kills3 = Math.random() * 10000;
			var kills4 = Math.random() * 10000;
			var kills5 = Math.random() * 10000;
			var deaths1 = Math.random() * 10000;
			var deaths2 = Math.random() * 10000;
			var deaths3 = Math.random() * 10000;
			var deaths4 = Math.random() * 10000;
			var deaths5 = Math.random() * 10000;
			var ratio1 = kills1/deaths1;
			var ratio2 = kills2/deaths2;
			var ratio3 = kills3/deaths3;
			var ratio4 = kills4/deaths4;
			var ratio5 = kills5/deaths5;
			$(".page").hide();
			$("#leaderboard").show();
			$("#leaderboard hr").remove();
			$("#leaderboard h2").remove();
			$("<h2>ArticKilla | Kills: " +kills1.toFixed(0)+ " | Deaths: "+deaths1.toFixed(0)+" | K/D: " +ratio1.toFixed(2)+".</h2> <hr>").insertAfter("#leaderboard h1")
			$("<h2>LeetSkillz | Kills: " +kills2.toFixed(0)+ " | Deaths: "+deaths2.toFixed(0)+" | K/D: " +ratio2.toFixed(2)+".</h2> <hr>").insertAfter("#leaderboard h1")
			$("<h2>RandyMarshLOL | Kills: " +kills3.toFixed(0)+ " | Deaths: "+deaths3.toFixed(0)+" | K/D: " +ratio3.toFixed(2)+".</h2><hr>").insertAfter("#leaderboard h1")
			$("<h2>RicecrispyTreat2005 | Kills: " +kills4.toFixed(0)+ " | Deaths: "+deaths4.toFixed(0)+" | K/D: " +ratio4.toFixed(2)+".</h2><hr>").insertAfter("#leaderboard h1")
			$("<h2>DookieMurder | Kills: " +kills5.toFixed(0)+ " | Deaths: "+deaths5.toFixed(0)+" | K/D: " +ratio5.toFixed(2)+".</h2><hr>").insertAfter("#leaderboard h1")
			$("<hr>").insertAfter("#leaderboard h1")
		},

		four: function(name) {
			var kills = 6000
			var deaths = 2799
			var ratio = kills/deaths
			$(".page").hide();
			$("#profile").show();
			$("#name").html("Hello," + " " +" look at " + name + "'s stats!");
			$("#kills").html("Kills: " + kills + ".");
			$("#deaths").html("Deaths: " + deaths + ".");
			$("#ratio").html(name + "'s K/D ratio is " + ratio.toFixed(2) + ".");
		},

		fourOhFour: function() {
			$(".page").hide();
			$("#notfound").show();
		}
	});
	$(".button-time").click(function(e){
		e.preventDefault();
		var name = $(".profile").val();
		var kills = Math.random() * 10000;
		var deaths = Math.random() * 10000;
		var ratio = kills/deaths
		myRouter.navigate("profile/" + name, {trigger: true})
		$("#kills").html("Kills: " + kills.toFixed(0));
		$("#deaths").html("Deaths: " + deaths.toFixed(0));
		$("#ratio").html(name + "'s K/D ratio is " + ratio.toFixed(2));

	})
	$(".monkey-button").click(function(e){
		e.preventDefault();
		myRouter.navigate("*notfound", {trigger: true})
	})

	var myRouter = new Router();
	Backbone.history.start();

});