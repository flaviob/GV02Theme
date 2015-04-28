<?php
/**
 * Template Name: iframes
 */
?>
<?php get_header(); ?>
<div id="primary" class="content-area">
	<div class="primary-inner_">
		<div id="content" class="site-content content-list" role="main">
		<?php 
		if ( have_posts() ) : 
			while ( have_posts() ) : the_post(); 
				?>
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<header class="page-header">
						<h1 class="page-title"><?php the_title(); ?></h1>
					</header>
					<div class="page-content">
						<iframe id="elframe" src="<?php echo get_post_meta($post->ID, 'gui_iframe', true); ?>" frameborder="0" style="width:1020px; min-height:7935px; margin: 0 auto;display:block"></iframe>
						<?php the_content(); ?>
					</div>
				</article>
				<?php 
			endwhile;
			//dw_minion_content_nav( 'nav-below' ); 
		else : 
			get_template_part( 'no-results', 'index' ); 
		endif; 
		?>
		</div>
	</div>
</div>
<?php //get_sidebar('secondary'); ?>
<?php get_footer(); ?>