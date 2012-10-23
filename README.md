Menify
======

Menify is a lightweight 1.6kb jQuery script I put together for converting web app menus into mobile friendly menus easily

example
=======
<a href="http://imstillreallybored.com/github/menify/">DEMO</a>

basic setup
------
HTML:
	<header>
			<h1><a href="#">Site Title</a></h1>
			<nav id="mainmenu">
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</nav>
	</header>
		
		
	<section id="footer">
		<footer>
			<nav id="footermenu">
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">Portfolio<t/a></li>
					<li class="hasChildren"><a href="#">About</a>
						<ul class="level2">
								<li><a href="#">Submenu</a></li>
								<li><a href="#">Submenu</a></li>
						</ul>
					</li>
					<li><a href="#">Contact</a></li>
				</ul>
			</nav>
			&copy; Copyright Year by Author. All Rights Reserved.
		</footer>
	</section>
	
JavaScript:
 	<script type="text/javascript" src="menify.js"></script>
 	<script type="text/javascript">
 		$(function(){
 				$('#mainmenu').Menify();

				//if you want the mobile menu to be attached to a different container you can change the option here
				//you can also change the class added to the mobile menu for styling purposes
 				$('#footermenu').Menify({
 					container: '#footer',
					menuClass: 'menified'
 				});
 		})
 	</script>

And now you have your mobile menu, huzzah!


license
=======

WTFPL