<?php
$config = file_get_contents('wp-config.php');
if (!str_contains($config, 'HTTP_X_FORWARDED_PROTO')) {
    $line = "\nif (isset(\$_SERVER['HTTP_X_FORWARDED_PROTO']) && \$_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {\n    \$_SERVER['HTTPS'] = 'on';\n}\n";
    file_put_contents('wp-config.php', $line . $config);
}
