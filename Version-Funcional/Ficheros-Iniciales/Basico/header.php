<!DOCTYPE html>
<html prefix="og: http://ogp.me/ns#" <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<?php wp_head(); ?>
<meta name="google-site-verification" content="zwMyKUagfcZLudGnmCd7U81a7r2HgwwvH7pfBKeLkTU" />
<link type="image/x-icon" href="http://104.131.102.18/wp/wp-content/uploads/2014/12/itinerium-icono1.png" rel="shortcut icon">
<script type='text/javascript'>
  var googletag = googletag || {};
  googletag.cmd = googletag.cmd || [];
  (function() {
    var gads = document.createElement('script');
    gads.async = true;
    gads.type = 'text/javascript';
    var useSSL = 'https:' == document.location.protocol;
    gads.src = (useSSL ? 'https:' : 'http:') +
      '//www.googletagservices.com/tag/js/gpt.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(gads, node);
  })();
</script>

<script type='text/javascript'>
  googletag.cmd.push(function() {
    googletag.defineSlot('/166396852/Contenidos_Viajes_Oporto_336x280', [336, 280], 'div-gpt-ad-1429140447937-0').addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
</script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-13166272-1', 'auto');
  ga('send', 'pageview');

</script>
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