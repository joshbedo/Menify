Menify
======

Menify is a lightweight script I put together for converting web app menus into mobile friendly menus easily

example
=======
<a href="http://imstillreallybored.com/github/menify/">DEMO</a>

basic setup
------
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