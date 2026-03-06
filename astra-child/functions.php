<?php
add_action( 'wp_enqueue_scripts', 'astra_child_enqueue_styles' );
function astra_child_enqueue_styles() {
    wp_enqueue_style( 'astra-child-style', get_stylesheet_uri() );
}

// Injetar o Splash e o Header
add_action('wp_body_open', 'petz_custom_header');
function petz_custom_header() {
    ?>
    <!-- SPLASH OBRIGATORIO -->
    <div id="nexus-splash">
        <div class="splash-spinner"></div>
        <h1 style="font-size: 3rem; font-weight: 900; letter-spacing: -2px;">Petz <span style="font-weight: 300; font-size: 1rem; vertical-align: middle;">Clone</span></h1>
        <p>Preparando a melhor experiência...</p>
    </div>
    <script>
      window.addEventListener('load', function() {
          setTimeout(function() {
              document.getElementById('nexus-splash').classList.add('fade-out');
              setTimeout(()=>document.getElementById('nexus-splash').remove(), 800);
          }, 1500); // 1.5s delay visual
      });
    </script>
    
    <!-- HEADER -->
    <header class="petz-header">
      <div class="petz-header-inner">
        <a href="/" class="petz-logo">Petz<span style="color:#fcd34d">.</span></a>
        
        <div class="petz-search">
          <input type="text" placeholder="🔍 O que o seu pet precisa?">
        </div>
        
        <div class="petz-actions">
           <a href="/minha-conta" style="display:flex; align-items:center; gap:8px; font-weight:700">
             <span style="font-size:1.5rem">👤</span> Entrar
           </a>
           <a href="/carrinho" style="font-size:1.5rem">🛒</a>
        </div>
      </div>
    </header>
    
    <nav class="petz-nav-cats">
       <a href="/shop">Cachorro</a>
       <a href="/shop">Gato</a>
       <a href="/shop">Pássaro</a>
       <a href="/shop">Peixe</a>
       <a href="/shop">Outros Pets</a>
       <a href="/shop">Casa e Jardim</a>
       <a href="/shop" style="color:var(--petz-blue)">Promoções</a>
    </nav>
    
    <div class="petz-signature-banner">
       🔄 Assinatura Petz <a href="#" style="text-decoration:underline">10% OFF agora</a>
    </div>
    <?php
}

// Criar página inicial Petz fake
add_action('init', 'create_petz_home');
function create_petz_home() {
    if(!get_page_by_title('Home Petz')) {
        $content = '
        <div class="petz-cat-grid">
           <div class="petz-cat-item">Cachorro <span style="font-size:2rem">🐶</span></div>
           <div class="petz-cat-item">Gato <span style="font-size:2rem">🐱</span></div>
           <div class="petz-cat-item">Pássaro <span style="font-size:2rem">🦜</span></div>
           <div class="petz-cat-item">Peixe <span style="font-size:2rem">🐠</span></div>
           <div class="petz-cat-item">Outros <span style="font-size:2rem">🐢</span></div>
           <div class="petz-cat-item">Jardim <span style="font-size:2rem">🏡</span></div>
        </div>
        
        <div class="petz-hero">
           <div>
               <h1>10% de CashPetz</h1>
               <p style="font-size:1.2rem; margin-bottom: 25px">para compras acima de R$299.</p>
               <a href="/shop" style="background:var(--petz-blue); color:white; padding: 15px 40px; border-radius:8px; font-weight:bold; font-size:1.1rem; text-decoration:none">Confira</a>
           </div>
           <div style="font-size:6rem">🛒🐾</div>
        </div>
        
        <h2 style="text-align:center; margin: 50px 0 30px; font-weight:900; font-size:2rem">Produtos recomendados</h2>
        [products limit="8" columns="4"]
        ';
        
        $page_id = wp_insert_post(array(
            'post_title' => 'Home Petz',
            'post_content' => $content,
            'post_status' => 'publish',
            'post_type' => 'page'
        ));
        
        update_option('show_on_front', 'page');
        update_option('page_on_front', $page_id);
    }
}
