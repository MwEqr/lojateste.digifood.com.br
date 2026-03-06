<?php
if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
    $_SERVER['HTTPS'] = 'on';
}

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'digifood' );

/** Database username */
define( 'DB_USER', 'digifood' );

/** Database password */
define( 'DB_PASSWORD', 'RA7xAz74tyjAeBH2' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '*i)XfWMt?~vo, wuiAtYyx6doRu;ML~MzG3>mq&z?W~LH>d;OZ@CMacd<wf^@(2M' );
define( 'SECURE_AUTH_KEY',   '7l4Me4Ke6+#_TIwZ:Qgi}tw(Y})C.^c|YIp||#L.y;a8E][?e ES;6=F^aUZ?kFJ' );
define( 'LOGGED_IN_KEY',     'mDs>#7W%m[D/WS,Br@7x~pqo?_FQ+XM9q;uaJQygKUJA%cuBC]S$C^D4@M?|x2Y^' );
define( 'NONCE_KEY',         'm*n~<~hJ#rxWwzTEV=8aj[ Lv]W)CZT%o,ZHOkq[e(4]fHnm@)G`|tFPpMwYQ%xY' );
define( 'AUTH_SALT',         'lHc6Z3,2Y>PeB0@7cxS{H5)@HCFdAvs9a:;ohdk=89}6$6qb[R0Rn$X3dpr_An}3' );
define( 'SECURE_AUTH_SALT',  '5?(TeR3Y]52IqAZ:r,kC|`cSpj#Xu<Z,%Gq~+LDo6/ml:n_N-_I^{YHxH{y_$c2K' );
define( 'LOGGED_IN_SALT',    'ibI#s.sq*d@?]cQ@hUL qUqTU%{1=At?|3]5:&WeMonYG6kFUhp6QoYN_< wpApU' );
define( 'NONCE_SALT',        'cY>nq]3U&xWega {Z(~>?7=Yr*hj=< ~o#X0!:0tcsrQxxvV]UyKo8<lV$(W;Weg' );
define( 'WP_CACHE_KEY_SALT', 'NpJGrapbooJHh0$GZa<Kio#sr|[[ODN0lqF0[Yzc,BfkR#oQT^_h;*7f-L,g%G6<' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'lt_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
