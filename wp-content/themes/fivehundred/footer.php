</div>
</div>
<footer>
	<ul class="footer_widgets">
		<?php if (dynamic_sidebar('footer-widget-area')) : ?><?php endif; ?>
	</ul>
	<div class="footerright">
		<nav id="menu-footer">
		
			<?php
			if ( has_nav_menu( 'footer-menu' ) ) {
			// Using wp_nav_menu() to display menu
			wp_nav_menu( array( 
				'menu' => 'footer-menu', // Select the menu to show by Name
				'container' => false, // Remove the navigation container div
				'theme_location' => 'footer-menu' 
				)
			);
			}
			?>
		</nav>
	</div>
	<div id="copyright">
		<span class="themelink">Esta ferramenta para recadar achegas está baseada nos compoñentes de <a href="https://github.com/wp-plugins/ignitiondeck">IgnitionDeck para Wordpress</a> e foi posible grazas ao traballo de adaptación feito pola Marea Atlántica, a quen agracedemos todo o seu traballo e a axuda prestada. Podes obter, baixo <b>licenza libre</b> a versión empregada en Ourense en Común no noso github: <a href="https://github.com/OurenseEnComun/Crowdfunding">https://github.com/OurenseEnComun/Crowdfunding</a></span>
	</div>
	<div class="clear"></div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
