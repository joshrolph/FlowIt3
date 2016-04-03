<?php
session_start();
?><!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!-- Consider adding a manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">

  <!-- Use the .htaccess and remove these lines to avoid edge case issues.
       More info: h5bp.com/i/378 -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title>flowit | super-social</title>
  <meta name="Super-Social Media" content="share your bumper sticker on facebook and twitter">

  <!-- Mobile viewport optimized: h5bp.com/viewport -->
  <meta name="viewport" content="width=device-width">

  <!-- Place favicon.ico and apple-touch-icon.png in the root directory: mathiasbynens.be/notes/touch-icons -->
  <link rel="stylesheet" href="css/style.css">

  <!-- More ideas for your <head> here: h5bp.com/d/head-Tips -->

  <!-- All JavaScript at the bottom, except this Modernizr build.
       Modernizr enables HTML5 elements & feature detects for optimal performance.
       Create your own custom Modernizr build: www.modernizr.com/download/ -->
    <script src="js/libs/modernizr-2.5.0.min.js"></script>
	<!--<script>
	  	function loadedGoogleApi() {
		  	gapi.client.setApiKey('AIzaSyCcolChAyZxFlhqCVldR_u8JzBSkcLj2kw');
	        window.setTimeout(checkAuth,1);
    	}
	    
	   /* gapi.client.load('plus', 'v1', function() {
	    	gapi.auth.init(checkAuth);	
			function checkAuth() {
			  gapi.auth.authorize({client_id: '832902699763.apps.googleusercontent.com', scope: 'https://www.googleapis.com/auth/plus.me', immediate: true}, 
					function handleAuthResult(authResult) {
					});
			}	
	    });
	  }*/
	    function checkAuth() {
	        gapi.auth.authorize({client_id: '832902699763.apps.googleusercontent.com', scope: 'https://www.googleapis.com/auth/plus.me', immediate: true}, handleAuthResult);
	    }
		function handleAuthResult(authResult) {
			//console.log(authResult);
	        /*var authorizeButton = document.getElementById('authorize-button');
	        if (authResult) {
	          authorizeButton.style.visibility = 'hidden';
	          makeApiCall();
	        } else {
	          authorizeButton.style.visibility = '';
	          authorizeButton.onclick = handleAuthClick;
	        }*/
	    }

	</script>
	<script src="https://apis.google.com/js/client.js?onload=loadedGoogleApi"></script>-->
	<script src="http://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js"></script>
</head>
<body>
  <!-- Prompt IE 6 users to install Chrome Frame. Remove this if you support IE 6.
       chromium.org/developers/how-tos/chrome-frame-getting-started -->
  <!--[if lt IE 7]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->

  <div id="fb-root"></div>
  <script>
	  window.fbAsyncInit = function() {
		  FB.init({
			  appId      : '334404759934517', // App ID
			  channelUrl : 'http://beta.paleoflow.com/index.php', // Channel File
			  status     : true, // check login status
			  cookie     : true, // enable cookies to allow the server to access the session
			  xfbml      : true  // parse XFBML
		  });

		  // Additional initialization code here
	  };

	  // Load the SDK Asynchronously
	  (function(d){
		  var js, id = 'facebook-jssdk'; 
		  // Added the following line as part of update
		  ref = d.getElementsByTagName('script')[0]; 

		  if (d.getElementById(id)) {return;}
		  js = d.createElement('script'); js.id = id; js.async = true;
		  js.src = "//connect.facebook.net/en_US/all.js";
		  //d.getElementsByTagName('head')[0].appendChild(js);
		  ref.parentNode.insertBefore(js,ref);
	  }(document));
  </script>

  <header>
	  <h1>flowit</h1>
	  <div></div>
  </header>
  <div class="main" role="main">
	  	<div class="main-submit clearfix">
			<?php if (!empty($_SESSION['access_token']['screen_name'])): ?>
				<?php if (!empty($_SESSION['access_token']['name'])): ?>
				<a href="#" class="green-link"><?php echo $_SESSION['access_token']['name']; ?></a>
				<?php else: ?>
				<a href="#" class="green-link"><?php echo $_SESSION['access_token']['screen_name']; ?></a>
				<?php endif ?>
			<?php else: ?>
			<a href="#" class="green-link">you are?</a>
			<?php endif ?>
			<ul class="social-list">
				<li>
					<a href="#facebook" class="facebook">Facebook</a>
				</li>
				<li>
					<a href="#twitter" class="twitter">Twitter</a>
				</li>
				<li>
					<a href="#google" class="google">Google</a>
				</li>
			</ul>
			<form id="submit-form">
			  <input type="text" data-inivalue="FlowIt in 30 characters or less" value="FlowIt in 30 characters or less" class="submit-text" maxlength="30"/>
			  <input type="submit" value="make" class="submit-btn" />
			</form>
		</div>
		<div class="big-border"></div>
	  	<div class="thumbs clearfix">
	  		<div class="thumb"><canvas id="canvas0" width="180" height="70">Your browser does not support HTML5 Canvas.</canvas></div>
	  		<div class="thumb"><canvas id="canvas1" width="180" height="70">Your browser does not support HTML5 Canvas.</canvas></div>
	  		<div class="thumb"><canvas id="canvas2" width="180" height="70">Your browser does not support HTML5 Canvas.</canvas></div>
	  		<div class="thumb"><canvas id="canvas3" width="180" height="70">Your browser does not support HTML5 Canvas.</canvas></div>
	  		<div class="thumb"><canvas id="canvas4" width="180" height="70">Your browser does not support HTML5 Canvas.</canvas></div>
	  		<div class="thumb"><canvas id="canvas5" width="180" height="70">Your browser does not support HTML5 Canvas.</canvas></div>
	  		<div class="thumb"><canvas id="canvas6" width="180" height="70">Your browser does not support HTML5 Canvas.</canvas></div>
	  		<div class="thumb"><canvas id="canvas7" width="180" height="70">Your browser does not support HTML5 Canvas.</canvas></div>
	  		<div class="thumb"><canvas id="canvas8" width="180" height="70">Your browser does not support HTML5 Canvas.</canvas></div>
		</div>
  </div>
  <footer>
  	<div class="big-border"></div>
	<ul class="social-list">
		<li>
			<p>Nice work! Now login to share with the world.</p>
		</li>
		<li>
			<a href="#facebook" class="facebook" id="facebook-btn">Facebook</a>
		</li>
		<li>
			<a href="#twitter" class="twitter" id="twitter-btn">Twitter</a>
		</li>
		<li>
			<a href="#google" class="google" id="google-btn">Google</a>
		</li>
	</ul>
	<?php if (!empty($_SESSION['access_token']['screen_name'])): ?>
		<script type="text/javascript">
				document.getElementById('facebook-btn').style.display = "none";
				document.getElementById('twitter-btn').style.display = "inline-block";
				document.getElementById('google-btn').style.display = "none";
				var logged=true;
		</script>
	<?php else: ?>
		<script type="text/javascript">
			var logged=false;
		</script>
	<?php endif ?>
	<div class='alert'>Your image posted successfully.</div>
  </footer>


  <!-- JavaScript at the bottom for fast page loading -->

  <!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.1.min.js"><\/script>')</script>

  <!-- scripts concatenated and minified via build script -->
  <script src="js/plugins.js"></script>
  <script src="js/script.js"></script>
  <!-- end scripts -->

  <!-- Analytics -->
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-30056735-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</body>
</html>