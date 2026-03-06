<?php
/**
 * The header for Astra Theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Astra
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

?><!DOCTYPE html>
<?php astra_html_before(); ?>
<html <?php language_attributes(); ?>>
<head>
<?php astra_head_top(); ?>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php
if ( apply_filters( 'astra_header_profile_gmpg_link', true ) ) {
	?>
	<link rel="profile" href="https://gmpg.org/xfn/11"> 
	<?php
}
?>
<?php wp_head(); ?>
<?php astra_head_bottom(); ?>
</head>

<body <?php astra_schema_body(); ?> <?php body_class(); ?>>
<?php astra_body_top(); ?>
<?php wp_body_open(); ?>

<!-- SPLASH SCREEN START -->
<div id="splash-screen" style="position:fixed;top:0;left:0;width:100%;height:100%;background-color:#004A99;z-index:999999;display:flex;flex-direction:column;justify-content:center;align-items:center;transition:opacity 0.5s ease-out;">
    <style>
        .loader { border: 8px solid rgba(255,204,0,0.3); border-top: 8px solid #FFCC00; border-radius: 50%; width: 60px; height: 60px; animation: spin 1s linear infinite; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .splash-text { color: #fff; font-family: sans-serif; margin-top: 20px; font-weight: bold; letter-spacing: 2px; }
        
        /* PETZ INSPIRED CUSTOM CSS */
        .main-header-bar { border-bottom: 4px solid #FFCC00 !class; }
        .ast-button, .woocommerce-button, .single_add_to_cart_button { background-color: #FFCC00 !important; color: #004A99 !important; font-weight: bold !important; border-radius: 50px !important; }
        .ast-button:hover, .woocommerce-button:hover, .single_add_to_cart_button:hover { background-color: #ffd633 !important; }
        .ast-site-identity .site-title a { color: #fff !important; }
        .main-navigation a { color: #fff !important; font-weight: 600 !important; }
        .ast-primary-header-bar { background-color: #004A99 !important; }
        
        .premium-hero { background: linear-gradient(135deg, #004A99 0%, #002D5E 100%); color: #fff; padding: 60px 20px; text-align: center; border-bottom: 5px solid #FFCC00; border-radius: 0 0 50px 50px; margin-bottom: 40px; }
        .premium-hero h1 { font-size: 3rem; margin-bottom: 10px; color: #FFCC00; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
        .premium-hero p { font-size: 1.25rem; opacity: 0.9; }
        
        [data-wp-dark-mode-active] .premium-hero { background: #111; border-color: #444; }
        [data-wp-dark-mode-active] .ast-primary-header-bar { background-color: #1a1a1a !important; }
    </style>
    <div class="loader"></div>
    <div class="splash-text">DIGIFOOD STORE</div>
</div>
<script>
    window.addEventListener('load', function() {
        const splash = document.getElementById('splash-screen');
        if(splash) {
            setTimeout(function() {
                splash.style.opacity = '0';
                setTimeout(function() { splash.style.display = 'none'; }, 500);
            }, 800);
        }
    });
</script>
<!-- SPLASH SCREEN END -->

<!-- DARK MODE TOGGLE -->
<div style="position:fixed; bottom:20px; right:20px; z-index:99999;">
    <?php echo do_shortcode('[wp_dark_mode]'); ?>
</div>
<a
	class="skip-link screen-reader-text"
	href="#content">
		<?php echo esc_html( astra_default_strings( 'string-header-skip-link', false ) ); ?>
</a>

<div
<?php
	echo wp_kses_post(
		astra_attr(
			'site',
			array(
				'id'    => 'page',
				'class' => 'hfeed site',
			)
		)
	);
	?>
>
	<?php
	astra_header_before();

	astra_header();

	astra_header_after();

	// HERO SECTION FOR HOME (SHOP)
	if ( is_shop() || is_front_page() ) {
		?>
		<section class="premium-hero">
			<div class="ast-container">
				<h1>Tudo o que seu pet precisa!</h1>
				<p>Produtos selecionados com carinho para o seu melhor amigo.</p>
				<a href="#main" class="ast-button" style="margin-top:20px;">Ver Ofertas</a>
			</div>
		</section>
		<?php
	}

	astra_content_before();
	?>
	<div id="content" class="site-content">
		<div id="main" class="ast-container">
		<?php astra_content_top(); ?>
