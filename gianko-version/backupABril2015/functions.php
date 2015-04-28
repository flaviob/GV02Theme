<?php

// agrega los estilos y scripts para el tema

add_action('wp_enqueue_scripts', 'guiajando_styles',999 );
function guiajando_styles() {
   wp_enqueue_style( 'font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css');   
   wp_enqueue_style( 'guiajando-styles', get_stylesheet_directory_uri() . '/guiajando.css');

}

// Breadcrumb

function the_breadcrumb() {
    global $post;
    echo '<nav class="breadcrumb" itemscope itemtype="http://data-vocabulary.org/Breadcrumb"><ol>';
    if (!is_home()) {
        echo '<li itemscope itemtype="http://data-vocabulary.org/Breadcrumb"><a href="';
        echo get_option('home');
        echo '" itemprop="url"><span itemprop="title">';
        echo '<span class="icon icon-home"></span>';
        echo '</span></a></li>';
        if (is_category() || is_single()) {
            echo '<li itemprop="child" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">';
            the_category(' </li><li itemprop="child" itemscope itemtype="http://data-vocabulary.org/Breadcrumb"> ');
            if (is_single()) {
                echo '</li><li itemprop="child" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">';
                the_title();
                echo '</li>';
            }
        } elseif (is_page()) {
            if($post->post_parent){
                $anc = get_post_ancestors( $post->ID );
                $title = get_the_title();
                foreach ( $anc as $ancestor ) {
                    $output = '<li itemprop="child" itemscope itemtype="http://data-vocabulary.org/Breadcrumb"><a href="'.get_permalink($ancestor).'" title="'.get_the_title($ancestor).'" itemprop="url"><span itemprop="title">'.get_the_title($ancestor).'</span></a></li>';
                }
                echo $output;
                echo '<li class="pag_actual" itemprop="child" itemscope itemtype="http://data-vocabulary.org/Breadcrumb"><span itemprop="title"> '.$title.'</span></li>';
            } else {
                echo '<li class="pag_actual" itemprop="child" itemscope itemtype="http://data-vocabulary.org/Breadcrumb"><span itemprop="title"><strong> '.get_the_title().'</strong></span></li>';
            }
        }
    }
    elseif (is_tag()) {single_tag_title();}
    elseif (is_day()) {echo"<li>Archivo de "; the_time('F jS, Y'); echo'</li>';}
    elseif (is_month()) {echo"<li>Archivo de "; the_time('F, Y'); echo'</li>';}
    elseif (is_year()) {echo"<li>Archivo de "; the_time('Y'); echo'</li>';}
    elseif (is_author()) {echo"<li>Archivo de Autor"; echo'</li>';}
    elseif (isset($_GET['paged']) && !empty($_GET['paged'])) {echo "<li>Archivos de Blog"; echo'</li>';}
    elseif (is_search()) {echo"<li>Resultados de búsqueda"; echo'</li>';}
    echo '</ol></nav>';
}

// Registrar los menú del tema

function register_my_menus() {
  register_nav_menus(
    array(
      'header_menu' => __( 'Header Menu' ),
      'navigation_menu_primary' => __( 'Nav Menu Primary' )
    )
  );
}
add_action( 'init', 'register_my_menus' );

// año actual

function auto_copyright($year = 'auto'){
   if(intval($year) == 'auto'){ $year = date('Y'); }
   if(intval($year) == date('Y')){ echo intval($year); }
   if(intval($year) < date('Y')){ echo intval($year) . ' - ' . date('Y'); }
   if(intval($year) > date('Y')){ echo date('Y'); }
}