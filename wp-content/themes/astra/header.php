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
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
<style>
    body, h1, h2, h3, h4, h5, h6, .site-title, .main-navigation a { font-family: 'Outfit', sans-serif !important; }
    .custom-logo { max-height: 60px !important; width: auto !important; }
    .ast-site-identity { flex: 1; display: flex; align-items: center; }
    .main-header-bar { padding: 10px 0 !important; }
    .ast-container { max-width: 1200px !important; }
</style>

<body <?php astra_schema_body(); ?> <?php body_class(); ?>>
<?php astra_body_top(); ?>
<?php wp_body_open(); ?>

<!-- SPLASH SCREEN START -->
<div id="splash-screen" style="position:fixed;top:0;left:0;width:100%;height:100%;background-color:#004A99;z-index:999999;display:flex;flex-direction:column;justify-content:center;align-items:center;transition:opacity 0.5s ease-out;">
    <style>
        .loader { border: 8px solid rgba(255,204,0,0.3); border-top: 8px solid #FFCC00; border-radius: 50%; width: 60px; height: 60px; animation: spin 1s linear infinite; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .splash-text { color: #fff; font-family: sans-serif; margin-top: 20px; font-weight: bold; letter-spacing: 2px; }
        
        /* FORCE UI OVERHAUL */
        img.custom-logo, .site-logo-img img { max-height: 60px !important; width: auto !important; }
        .main-header-bar { border-bottom: 4px solid #FFCC00 !important; padding: 10px 0 !important; }
        .ast-button, .woocommerce-button, .single_add_to_cart_button, .woocommerce-mini-cart__buttons a { background-color: #FFCC00 !important; color: #004A99 !important; font-weight: bold !important; border-radius: 50px !important; text-transform: uppercase !important; letter-spacing: 1px !important; border: none !important; transition: all 0.3s ease !important; }
        .ast-button:hover, .woocommerce-button:hover, .single_add_to_cart_button:hover, .woocommerce-mini-cart__buttons a:hover { background-color: #ffd633 !important; transform: translateY(-2px); box-shadow: 0 5px 15px rgba(255, 204, 0, 0.4) !important; }
        .ast-site-identity .site-title a { color: #fff !important; font-size: 1.5rem !important; margin-left: 10px !important; font-family: 'Outfit', sans-serif !important; }
        .main-navigation a { color: #fff !important; font-weight: 600 !important; font-size: 1rem !important; font-family: 'Outfit', sans-serif !important; }
        .ast-primary-header-bar { background-color: #004A99 !important; }
        
        .premium-hero { background: linear-gradient(135deg, #004A99 0%, #002D5E 100%); color: #fff; padding: 100px 20px; text-align: center; border-bottom: 5px solid #FFCC00; border-radius: 0 0 50px 50px; margin-bottom: 60px; font-family: 'Outfit', sans-serif !important; }
        .premium-hero h1 { font-size: 4rem !important; margin-bottom: 20px !important; color: #FFCC00 !important; text-shadow: 3px 3px 6px rgba(0,0,0,0.4) !important; font-weight: 800 !important; }
        .premium-hero p { font-size: 1.5rem !important; opacity: 0.95; max-width: 800px; margin: 0 auto !important; }
        
        /* WooCommerce Grid Overhaul */
        .woocommerce ul.products li.product { background: #fff !important; border-radius: 20px !important; padding: 20px !important; box-shadow: 0 10px 30px rgba(0,0,0,0.05) !important; transition: all 0.3s ease !important; border: 1px solid #eee !important; margin-bottom: 30px !important; }
        .woocommerce ul.products li.product:hover { transform: translateY(-10px) !important; box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important; }
        .woocommerce ul.products li.product img { border-radius: 15px !important; margin-bottom: 15px !important; }
        .woocommerce ul.products li.product .woocommerce-loop-product__title { font-size: 1.2rem !important; color: #004A99 !important; font-weight: 700 !important; height: 3em; overflow: hidden; font-family: 'Outfit', sans-serif !important; }
        .woocommerce ul.products li.product .price { color: #ff0000 !important; font-weight: 800 !important; font-size: 1.3rem !important; }
        
        /* FOOTER BRANDING FIX */
        .ast-footer-copyright { display: none !important; }
        .custom-digifood-footer { text-align: center; padding: 20px; background: #f9f9f9; color: #666; font-size: 0.9rem; font-family: 'Outfit', sans-serif !important; border-top: 1px solid #eee; }
        
        /* DARK MODE REMAP - KILL THE RED MESS */
        [data-wp-dark-mode-active] body, 
        [data-wp-dark-mode-active] .site,
        [data-wp-dark-mode-active] #page { 
            background-color: #121212 !important; 
            color: #e0e0e0 !important; 
            filter: none !important; 
        }
        [data-wp-dark-mode-active] .premium-hero { background: #1a1a1a !important; border-color: #333 !important; }
        [data-wp-dark-mode-active] .ast-primary-header-bar { background-color: #000000 !important; }
        [data-wp-dark-mode-active] .woocommerce ul.products li.product { background: #1e1e1e !important; border-color: #333 !important; }
        [data-wp-dark-mode-active] .woocommerce ul.products li.product .woocommerce-loop-product__title { color: #fff !important; }
        [data-wp-dark-mode-active] .custom-digifood-footer { background: #000 !important; color: #888 !important; border-color: #222 !important; }
        [data-wp-dark-mode-active] .premium-hero h1 { color: #FFCC00 !important; }
        
        /* Ensure the red overlay from the plugin is nuked */
        .wp-dark-mode-active { filter: none !important; }
        div[class*="wp-dark-mode-"] { filter: none !important; }
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

    // CUSTOM FOOTER OVERRIDE - Hard-coded in body to ensure visibility
    add_action('wp_footer', function() {
        ?>
        <div class="custom-digifood-footer">
            Copyright © 2026 Digifood Store | Digifood By Digifood Developers
        </div>
        <?php
    }, 999);

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
