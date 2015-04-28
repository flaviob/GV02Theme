<!DOCTYPE html>
<html prefix="og: http://ogp.me/ns#" <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="wilih=device-width, initial-scale=1.0, user-scalable=no">
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<?php wp_head(); ?>
<meta name="google-site-verification" content="zwMyKUagfcZLudGnmCd7U81a7r2HgwwvH7pfBKeLkTU" />
<link type="image/x-icon" href="http://104.131.102.18/wp/wp-content/uploads/2014/12/itinerium-icono1.png" rel="shortcut icon">
</head>
<body <?php body_class(); ?>>

<div id="page" class="hfeed site">

	<div class="container clearfix">
		<?php do_action( 'before' ); ?>
		
		<aside id="navigation" class="site-nav">
			<?php // dw_minion_logo(); ?>
			<div class="site-nav-inner">
				<div class="container">
					<?php get_sidebar(); ?>
				</div>
			</div>
		</aside>


        <?php do_action( 'after_navigation' ); ?>
		<div id="main" class="site-main">
			<header id="masthead" class="site-header" role="banner">
						<?php dw_minion_logo(); ?>
			<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
			<!-- Roma Main Banner -->
			<div id="googleadheader">
			<ins class="adsbygoogle"
			     data-ad-client="ca-pub-0064625008760983"
			     data-ad-slot="6488304126"></ins>
			<script>
			(adsbygoogle = window.adsbygoogle || []).push({});
			</script>
			</div>
			</header>
			<div class="tabs tabs-style-tzoid">
					<?php 
						wp_nav_menu( array(
						    'theme_location'    => 'header_menu',
						    'container'     	=> 'nav',
						    'container_id'      => '',
						    'conatiner_class'   => '',
						    'menu_class'        => 'menu main-menu menu-depth-0 menu-even', 
						    'echo'          	=> true,
						    'items_wrap'        => '<ul id="%1$s" class="%2$s">%3$s</ul>',
						    'depth'        		=> 10
						));
					?>
			</div>			
			<div class="site-main-inner">
			<?php the_breadcrumb(); ?>
				<div class="container clearfix">
					<?php 
						// if ( is_active_sidebar( 'top-sidebar' ) ) do_action( 'dw_minion_top_sidebar' );
					?>