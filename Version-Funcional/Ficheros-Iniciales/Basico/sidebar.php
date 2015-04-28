<div id="main-sidebar" class="widget-area" role="complementary">
	<?php do_action( 'before_sidebar' ); ?>

	<aside id="nav_principal" class="main_nav">
	<h3><i class="fa fa-plane"></i> Guía Oporto</h3>
		<?php 
			wp_nav_menu( array(
			    'theme_location'    => 'navigation_menu_primary',
			    'container'     	=> 'nav',
			    'container_id'      => 'side-navigation-primary',
			    'conatiner_class'   => 'side-navigation',
			    'menu_class'        => 'menu main-menu menu-depth-0 menu-even', 
			    'echo'          	=> true,
			    'items_wrap'        => '<ul id="%1$s" class="%2$s">%3$s</ul>',
			    'depth'        		=> 10
			) ); // thanks nick
		?>
	
</aside>