/* Author:

*/


$(document).ready(function() {

	var allFonts=["Open Sans", "Droid Sans", "Oswald", "Droid Serif", "Lora", "PT Sans", "Yanone Kaffeesatz", "Lobster", "Ubuntu", "Arvo", "Coming Soon", "PT Sans Narrow", "Lato", "Mate SC", "Cabin", "Dancing Script", "Marck Script", "The Girl Next Door", "Francois One", "Crafty Girls", "Josefin Sans", "Calligraffitti", "Shadows Into Light", "Nobile", "Chewy", "Rock Salt", "Reenie Beanie", "Bitter", "Cuprum", "Tangerine", "Molengo", "Cherry Cream Soda", "Arimo", "Syncopate", "Play", "Pacifico", "Cantarell", "PT Serif", "Terminal Dosis", "Anton", "Vollkorn", "Luckiest Guy", "Nunito", "Walter Turncoat", "Homemade Apple", "Permanent Marker", "Maven Pro", "Kreon", "Copse", "Josefin Slab", "Crimson Text", "Lobster Two", "News Cycle", "Slackey", "Ubuntu Condensed", "Abel", "Droid Sans Mono", "Philosopher", "Rokkitt", "Varela Round", "Allerta", "Amaranth", "Paytone One", "Merriweather", "Fontdiner Swanky", "Marvel", "Covered By Your Grace", "Carter One", "Bevan", "Architects Daughter", "Cardo", "Old Standard TT", "Neucha", "Indie Flower", "Muli", "PT Sans Caption", "Schoolbell", "Questrial", "Leckerli One", "Salsa", "Istok Web", "Waiting for the Sunrise", "Cabin Sketch", "Crushed", "Neuton", "Allerta Stencil", "Puritan", "Didact Gothic", "Signika", "Inconsolata", "Gloria Hallelujah", "Tinos", "Orbitron", "MedievalSharp", "Damion", "Jura", "Maiden Orange", "Just Another Hand", "Pinyon Script", "Miltonian Tattoo", "Unkempt", "Merienda One", "Gruppo", "Quicksand", "Kristi", "Mountains of Christmas", "Kranky", "Quattrocento Sans", "Bentham", "Sunshiney", "Bangers", "Volkhov", "Rancho", "Asap", "EB Garamond", "PT Serif Caption", "Podkova", "Six Caps", "Rosario", "IM Fell English", "Chivo", "Changa One", "Metrophobic", "Cousine", "Kameron", "Delius", "Satisfy", "Passion One", "Carme", "Michroma", "Nixie One", "Shanti", "Special Elite", "Yellowtail", "IM Fell DW Pica", "Comfortaa", "Actor", "Sansita One", "Stardos Stencil", "Amatic SC", "Sorts Mill Goudy", "Varela", "Rochester", "Mako", "Bowlby One SC", "Coustard", "Annie Use Your Telescope", "Love Ya Like A Sister", "Quattrocento", "Sue Ellen Francisco", "Playfair Display", "Alice", "Hammersmith One", "Andika", "Corben", "Geo", "Jockey One", "Coda", "Patrick Hand", "Lekton", "Brawler", "Almendra SC", "Spinnaker", "UnifrakturMaguntia", "VT323", "Short Stack", "Nothing You Could Do", "Sancreek", "Anonymous Pro", "IM Fell DW Pica SC", "Aclonica", "Cabin Condensed", "IM Fell French Canon SC", "Ultra", "Viga", "Redressed", "Antic", "Pompiere", "Limelight", "Inder", "IM Fell English SC", "Artifika", "Poly", "Delius Unicase", "Cedarville Cursive", "La Belle Aurore", "Delius Swash Caps", "Days One", "Wire One", "Just Me Again Down Here", "Mate", "Voltaire", "Aldrich", "Ubuntu Mono", "Over the Rainbow", "Gentium Book Basic", "Gentium Basic", "Cookie", "Aladin", "Smythe", "Hanuman", "Candal", "Signika Negative", "Snippet", "Dawning of a New Day", "Adamina", "Expletus Sans", "Federo", "Black Ops One", "Miltonian", "IM Fell Great Primer SC", "Forum","Tenor Sans", "Nova Round", "Caudex", "Loved by the King", "IM Fell Great Primer", "Telex", "Rationale", "Julee", "Alfa Slab One", "Contrail One", "Gochi Hand", "Abril Fatface", "IM Fell Double Pica SC", "Nova Slim", "Vidaloka", "Kenia", "Meddon", "IM Fell French Canon", "Nova Oval", "Prata", "Montez", "Handlee", "League Script", "Swanky and Moo Moo", "Ovo", "Vibur", "Nova Script", "Arapey", "Convergence", "Zeyada", "Unna", "Holtwood One SC", "Yeseva One", "Kelly Slab", "Tulpen One", "Lemon", "Petrona", "Quantico", "Gravitas One", "IM Fell Double Pica", "Astloch", "Lusitana", "Numans", "Judson", "Cambo", "Alike", "Radley", "Give You Glory", "Gudea", "Monoton", "Asset", "Nova Flat", "Condiment", "Rammetto One", "Prociono", "Electrolize", "Bad Script", "Modern Antiqua", "GFS Didot", "Irish Grover", "GFS Neohellenic", "Montserrat", "Patua One", "Megrim", "Geostar", "Andada", "Acme", "Esteban", "Tienne", "Fanwood Text", "Squada One", "Wallpoet", "Fjord One", "Nova Mono", "Nova Cut", "Bowlby One", "Lancelot", "Sigmar One", "Ruslan Display", "Baumans"]

	var user={};//{name,}
	//var allFonts=[];
	var indx=0;
	var TOTAL_THUMBS=9;
	var isPreloaderLoaded=false;
	var cCanvasId=-1;
	var responseFacebook;
	var facebookToken;
	//var loginWith="";

	var preloader = new Image();
	//preloader.addEventListener('load', function(){isPreloaderLoaded=true} , false);
	if ( $.browser.msie ) {
		preloader.attachEvent('load', function(){isPreloaderLoaded=true} , false);
	}else{
		preloader.addEventListener('load', function(){isPreloaderLoaded=true} , false);
	}
	preloader.src = "images/preloader.png";


	
	/*twttr.anywhere(function (T) {
		T.hovercards();
  	});*/

	updateFooterLinks();
	$('.submit-btn').removeAttr("disabled");

  	$('.submit-text').focusin(function(e){
  		if ($(this).val()==$(this).attr('data-inivalue')) 
			$(this).val('');
  	});
  	$('.submit-text').focusout(function(e){
  		if ($(this).val()=='') 
			$(this).val($(this).attr('data-inivalue'));
  	}); 

  	//$('.submit-btn').attr("disabled", true);
	$('.main-submit').submit(onClickSubmit);

	$('.green-link').click(function(e){
		e.preventDefault();
		$('.main-submit .social-list').toggle();
	});
	$('.thumb').click(onClickThumb);
	$('footer .social-list').click(function(e){
		e.preventDefault();
		if (e.target.getAttribute('href')=="#facebook"){
			//alert("Clicked on FaceBook");
			postOnFacebook();
		}else if (e.target.getAttribute('href')=="#twitter"){
			postOnTwitter();
		}else if (e.target.getAttribute('href')=="#google"){
			postOnGoogle();
		}else if (e.target.getAttribute('href')=="#device"){
			postOnDevice();
		}
	});


	$('.main .social-list').click(function(e){
		e.preventDefault();
		if (e.target.getAttribute('href')=="#facebook"){
			loginFacebook();
		}else if (e.target.getAttribute('href')=="#twitter"){
			loginTwitter();
		}else if (e.target.getAttribute('href')=="#google"){
			loginGoogle();
		}
		//console.log(e,e.currentTarget,e.target)
	});
	

	function loginFacebook(){
		FB.login(function(response) {
			if (response.authResponse) {
				facebookToken=response.authResponse.accessToken;
				//console.log(facebookToken);
				//console.log('Welcome!  Fetching your information.... ');
				FB.api('/me', function(response) {
					//console.log(response);
					logged=true;
					responseFacebook=response;
					$('footer a.facebook').show();
					$('footer a').not('.facebook').hide();
					loggedIn(response.name);
				});
			} else {
				alert('You must give access for posting generated images!');
			}
		}, {scope: 'publish_stream'});
	}	
	function loginTwitter(){
		window.location.href='/php/twitter/auth.php?authenticate=1';
		/*twttr.anywhere(function (T){
			T.bind("authComplete", function (e, user) {
				loggedIn(user.name);
			});
			T.signIn();
		});*/
	}
	function loginGoogle(){
		 gapi.auth.authorize({client_id: '832902699763.apps.googleusercontent.com', scope: 'https://www.googleapis.com/auth/plus.me', immediate: false}, handleGoogleResult);
	}
		
	function handleGoogleResult(authResult){
        gapi.client.load('plus', 'v1', function() {
          var request = gapi.client.plus.people.get({
            'userId': 'me'
          });
          request.execute(function(resp) {
          	loggedIn(resp.displayName);
          });
        });
	}

	function loggedIn(userName){
		user={name:userName};
		$('.main .social-list').hide();
		$('.main .green-link').html(userName);
	}
	function onClickSubmit(e){
		e.preventDefault();
		//allFonts=[];
		indx=0;
		ieindx=0;
		cCanvasId=-1;
		$('.submit-btn').attr("disabled", true);
		$('.thumb').removeClass('active');
		$('footer').hide();

		var l=$('.thumb').length;
		for (var i=0;i<l;i++){
			var canvas = document.getElementById('canvas'+i);
			if (canvas.getContext) {
				var ctx = canvas.getContext("2d");
				ctx.clearRect ( 0 , 0 , canvas.width , canvas.height );	
				if (isPreloaderLoaded) {
					ctx.drawImage(preloader, canvas.width/2-preloader.width/2,canvas.height/2-preloader.height/2,preloader.width, preloader.height)
				}
			}
		}
		/*
		
		$.ajax({
			url: "https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity",
			dataType: "jsonp",
			data: {key: "AIzaSyCcolChAyZxFlhqCVldR_u8JzBSkcLj2kw"},
			success: function( data ) {
				var l=data.items.length;
				for (var i=0;i<l;i++){
					allFonts.push(data.items[i].family);
				}
				console.log(allFonts);
				var a=[]
				for (var i=0;i<TOTAL_THUMBS;i++){
					a.push(data.items[Math.floor(Math.random()*l)].family);
				}
				loadFonts(a);
			}
		});*/
		var a=[]
		for (var i=0;i<TOTAL_THUMBS;i++){
			a.push(allFonts[Math.floor(Math.random()*allFonts.length)]);
		}
		loadFonts(a);
	}
	function loadFonts(fonts){
		WebFontConfig = {
		    google: {
		      families: fonts
		    },

		  loading: function() {
		    // do something
		  },
		  fontloading: function(fontFamily, fontDescription) {
		    // do something
			//addBg('canvas'+ieindx);
		  	//addText('canvas'+ieindx, fontFamily);
			//ieindx++;
		  },
		  fontactive: function(fontFamily, fontDescription) {
		  	//console.log('fontFamily:',fontFamily)
		  	addBg('canvas'+indx);
		  	addText('canvas'+indx, fontFamily);
		    /*$('.thumb')
		    	.eq(indx)
		    	.css('background','none')
		    	.css({'background-color': getRadomColor('rgb')})
		    	.css('fontFamily',fontFamily)
		    	.addClass('loaded');*/
		    indx++;
		  },
		  fontinactive: function(fontFamily, fontDescription) {
		    //console.log('fontinactive', fontFamily);
		  },
		  active: function() {
		    //console.log('active')
		    //console.log("all active:",indx);
		  	var fonts=[];
		  	for (var i=0;i<TOTAL_THUMBS-indx;i++){
		  		fonts.push(allFonts[Math.floor(Math.random()*allFonts.length)]);
		  	}		   
		  	if (fonts.length>0){
		  		loadFonts(fonts)
		  	}else{
		  		$('.submit-btn').removeAttr("disabled");
		  	}
		  },
		  inactive: function() {
		  	//console.log("all inactive:",(indx+1));
		  	var fonts=[];
		  	for (var i=0;i<TOTAL_THUMBS-indx;i++){
		  		fonts.push(allFonts[Math.floor(Math.random()*allFonts.length)]);
		  	}

			(fonts.length>0) && loadFonts(fonts);
			/*
		  	if(ieindx<TOTAL_THUMBS){
		  	  if(fonts.length>0)
				loadFonts(fonts);
			}
			*/
		  }
		};		
		WebFont.load(WebFontConfig);
		//$('.submit-btn').removeAttr("disabled");
	}
	function addBg(canvasId){
		var canvas = document.getElementById(canvasId);
		if (canvas.getContext) {
			var ctx = canvas.getContext("2d");
			ctx.clearRect ( 0 , 0 , canvas.width , canvas.height );
			ctx.fillStyle=getRadomColor('hex');
			ctx.fillRect (0,0,180,70);
			ctx.strokeStyle="#a5abaf";
			ctx.lineWidth = 1;
			ctx.strokeRect (1,1,178,68);

		}  		
	}
	function addText(canvasId, fontFamily){
		var txt=$('.submit-text').val();
		var canvas = document.getElementById(canvasId);
		if (canvas.getContext) {
			var ctx = canvas.getContext("2d");
			ctx.fillStyle = "#000000";
			var initFontSize=5;
			ctx.font = initFontSize+"px "+ fontFamily;
			var extra=0;
			if (txt.length==1) extra=100;
			if (txt.length==2) extra=70;
			if (txt.length==3) extra=50;
			while (ctx.measureText(txt).width<canvas.width-50-extra && initFontSize<100){
				ctx.font = initFontSize+"px "+ fontFamily;
				initFontSize++;
			}
			var x = (canvas.width/2) - (ctx.measureText(txt).width/2);
			var y = (canvas.height/2);
			ctx.textBaseline = "middle";
			ctx.fillText (txt, x, y);
		}
	}
	function getRadomColor(format)
	{
	 var rint = Math.round(0xffffff * Math.random());
	 switch(format)
	 {
	  case 'hex':
	   return ('#0' + rint.toString(16)).replace(/^#0([0-9a-f]{6})$/i, '#$1');
	  break;

	  case 'rgb':
	   return 'rgb(' + (rint >> 16) + ',' + (rint >> 8 & 255) + ',' + (rint & 255) + ')';
	  break;

	  default:
	   return rint;
	  break;
	 }
	}

	function onClickThumb(e){
		e.preventDefault();
		var $thumb=$(this);
		$('.thumb').removeClass('active');
		$thumb.addClass('active');
		var canvasId='canvas'+$thumb.index();
		cCanvasId=canvasId;
		/*if (loginWith=='facebook'){
			$('footer a').not('.facebook').hide();	
		}else if (loginWith=='twitter'){
			$('footer a').not('.twitter').hide();	
		}else if (loginWith=='google'){
			$('footer a').not('.google').hide();	
		}*/
		updateFooterLinks();
		$('footer').show();
	}

	function postOnFacebook(){
		var canvas = document.getElementById(cCanvasId);
		var canvasData = canvas.toDataURL("image/png");
		var txt=$('.submit-text').val();
		var imgdata = "canvasData="+ canvasData + "&text=" + txt;
		var saveurl;
		//console.log(responseFacebook);

		// Handle undefined location variable
		if (typeof responseFacebook.location !== "undefined"){
			saveurl = "php/save.php?name="+responseFacebook.name+"&account="+responseFacebook.id+"&location="+responseFacebook.location.name;
		}else {
			saveurl = "php/save.php?name="+responseFacebook.name+"&account="+responseFacebook.id+"&location="+" ";
		}
		
		$.ajax({
			url: saveurl,
			contentType: 'application/upload',
			//data: canvasData,
			data: imgdata,
			dataType: 'json',
			type: "POST",
			success: function(data){
				//console.log(window.location.host+"/"+data.path);
							
				var wallPost = {
					message: "via FlowIt - "+ "http://"+window.location.host,
					display: 'iframe',
					caption: "PaleoFlow",
					name: "Name",
					picture: 'http://'+window.location.host+"/"+data.path,    
					link: 'http://'+window.location.host+"/"+data.path,  // Go here if user click the picture
					//description: "Description field",
					access_token: facebookToken,
					actions: [{ name: 'action_links text!', link: 'http://'+window.location.host }],			
				}
		
				//FB.api('/photos', 'post', wallPost , function(response) {
				FB.api('/me/feed', 'post', wallPost , function(response) {
					if ($('.alert').hasClass('red')) 
						$('.alert').removeClass('red');
					if (!response || response.error) {
						$('.alert').stop().addClass('red').html('Error occured, please try again.').show().delay(5000).hide(100);
						//alert('Error occured, please try again.');
					} else {
						$('.alert').stop().html('Image successfully posted.').show().delay(5000).hide(100);
						//alert('Your bumper sticker was posted on Facebook.');
					}
				});
			}
		});
	}

	function postOnTwitter(){
		var canvas = document.getElementById(cCanvasId);
		var canvasData = canvas.toDataURL("image/png");
		var txt=$('.submit-text').val();
		var imgdata = "canvasData="+ canvasData + "&text=" + txt;
		
		$.ajax({
			url: "php/save.php",
			contentType: 'application/upload',
			//data: canvasData,
			data: imgdata,
			dataType: 'json',
			type: "POST",
			success: function(data){
				//console.log(data.path);
				postOnTwitter1(data);
			}
		});
				
	}
	function postOnTwitter1(data){
		$.ajax({
			url: "php/twitter/photo_tweet.php",
			data: {'image': data.path},
			dataType: 'json',
			type: "POST",
			success: function(data){
				if ($('.alert').hasClass('red')) $('.alert').removeClass('red');
				if (!data || data.message!='ok') {
					$('.alert').stop().addClass('red').html('Error occured, please try again.').show().delay(5000).hide(100);
				} else {

					$('.alert').stop().html('Image successfully posted.').show().delay(5000).hide(100);
				}				
			}
		});
	}
	
	function updateFooterLinks(){
		if (!logged){
			$('footer .social-list li').hide();
			$('footer .social-list li').eq(0).show();
		}else{
			$('footer .social-list li').show();
			$('footer .social-list li').eq(0).hide();			
		}	
	}
});