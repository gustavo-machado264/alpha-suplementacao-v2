from pathlib import Path

root = Path('/home/ubuntu/alpha-suplementacao-v2/client')
html_path = root / 'index.html'
js_path = root / 'script.js'
css_path = root / 'style.css'

html = html_path.read_text()
js = js_path.read_text()
css = css_path.read_text()

# Remove a campanha Compre 1, Leve 2 do hero, mantendo o slide como destaque da camiseta.
html = html.replace('''<span class="hero-tag">OFERTA ESPECIAL</span>
          <h1 class="hero-titulo">COMPRE 1, <span>LEVE 2</span></h1>
          <p class="hero-subtitulo">Promoções especiais em produtos selecionados.</p>
          <button class="btn-primario" onclick="rolarParaSecao('ofertas-secao')">
            Ver promoção''', '''<span class="hero-tag">NOVIDADE ALPHA</span>
          <h1 class="hero-titulo">CAMISETA <span>ALPHA</span></h1>
          <p class="hero-subtitulo">Nossa primeira peça oficial: preta, branca e feita para quem busca mais do que o básico.</p>
          <button class="btn-primario" onclick="rolarParaSecao('camisetas-secao')">
            Ver camiseta''')
html = html.replace('aria-label="Ir para banner 1"', 'aria-label="Ir para novidade Alpha"')
html = html.replace('''<p class="secao-desc">Produtos com promoções ativas: Leve 2 Pague 1, Leve 3 Pague 2 e Brindes</p>''', '''<p class="secao-desc">Produtos com descontos especiais, combos selecionados e brindes Alpha</p>''')

# Add the dedicated clothing section before brands.
marker = '''  <!-- PRINCIPAIS MARCAS -->'''
section = '''  <!-- CAMISETAS ALPHA: catálogo dedicado com duas abas -->
  <section class="secao-camisetas" id="camisetas-secao">
    <div class="container">
      <div class="secao-titulo-box">
        <span class="subtitulo-tag">Alpha Wear</span>
        <h2 class="secao-titulo">Camiseta Alpha</h2>
        <p class="secao-desc">A peça oficial em preto e branco, com visual forte para treino e rotina.</p>
      </div>

      <div class="camiseta-tabs" role="tablist" aria-label="Informações da camiseta">
        <button class="camiseta-tab ativo" role="tab" aria-selected="true" data-tab="produto" onclick="alternarAbaCamiseta('produto', this)">Produto</button>
        <button class="camiseta-tab" role="tab" aria-selected="false" data-tab="tamanhos" onclick="alternarAbaCamiseta('tamanhos', this)">Tamanhos</button>
      </div>

      <div class="camiseta-tab-panel ativo" id="camiseta-tab-produto" role="tabpanel">
        <div class="camiseta-showcase">
          <div class="camiseta-imagem-wrap">
            <img src="images/alpha-camiseta-preta-branca.jpeg" alt="Camiseta Alpha preta e branca, frente e costas" class="camiseta-imagem" />
            <span class="camiseta-selo">EDIÇÃO OFICIAL</span>
          </div>
          <div class="camiseta-copy">
            <span class="card-marca">ALPHA SUPLEMENTAÇÃO</span>
            <h3>Camiseta Alpha — Preta &amp; Branca</h3>
            <p>Modelo oficial com identidade Alpha, tecido confortável e estampa frente e costas. A foto poderá ser substituída quando você enviar a versão final.</p>
            <div class="camiseta-price">R$ 89,90</div>
            <div class="camiseta-size-hint">Escolha o tamanho na aba ao lado antes de finalizar.</div>
            <button class="btn-primario" onclick="filtrarPorCategoria('Camisetas')">Ver no catálogo</button>
          </div>
        </div>
      </div>

      <div class="camiseta-tab-panel" id="camiseta-tab-tamanhos" role="tabpanel" hidden>
        <div class="tamanhos-panel">
          <div>
            <span class="subtitulo-tag">Grade disponível</span>
            <h3>Tamanhos da camiseta</h3>
            <p>Use esta tabela como base para a primeira versão da loja. As medidas podem ser ajustadas depois conforme a modelagem final.</p>
          </div>
          <div class="tamanhos-grid">
            <div class="tamanho-card"><strong>P</strong><span>Peito 52 cm</span><span>Comprimento 70 cm</span></div>
            <div class="tamanho-card"><strong>M</strong><span>Peito 55 cm</span><span>Comprimento 72 cm</span></div>
            <div class="tamanho-card"><strong>G</strong><span>Peito 58 cm</span><span>Comprimento 74 cm</span></div>
            <div class="tamanho-card"><strong>GG</strong><span>Peito 61 cm</span><span>Comprimento 76 cm</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

'''
if marker in html and 'id="camisetas-secao"' not in html:
    html = html.replace(marker, section + marker, 1)

# Add footer entry and organogram panel.
html = html.replace('''            <li><a href="#ofertas-secao" class="footer-link">Promoções</a></li>''', '''            <li><a href="#ofertas-secao" class="footer-link">Promoções</a></li>
            <li><button class="footer-link footer-organograma-trigger" type="button" onclick="alternarOrganograma()" aria-expanded="false" aria-controls="organograma-painel">Organograma <span>+</span></button></li>''')

footer_marker = '''      <div class="footer-copyright">'''
org = '''      <section class="organograma-painel" id="organograma-painel" hidden aria-label="Organograma da Alpha Suplementação">
        <div class="organograma-heading">
          <div>
            <span class="subtitulo-tag">Estrutura Alpha</span>
            <h3>Organograma</h3>
            <p>Divisão inicial de responsabilidades para orientar o desenvolvimento da operação.</p>
          </div>
          <button class="btn-secundario" type="button" onclick="alternarOrganograma()">Fechar</button>
        </div>

        <div class="organograma-vertical">
          <div class="organograma-topo">
            <article class="org-card org-direcao"><span class="org-avatar">RY</span><strong>Ryan</strong><small>Direção &amp; coordenação geral</small></article>
            <article class="org-card org-tecnico"><span class="org-avatar">FE</span><strong>Felipe</strong><small>Técnico — plataforma e site</small></article>
            <article class="org-card org-tecnico"><span class="org-avatar">PE</span><strong>Pedro</strong><small>Técnico — dados e suporte</small></article>
            <article class="org-card org-promocao"><span class="org-avatar">JO</span><strong>João</strong><small>Promoção e campanhas</small></article>
            <article class="org-card org-publico"><span class="org-avatar">GU</span><strong>Gustavo</strong><small>Comunicação com o público</small></article>
          </div>
          <div class="org-connector"></div>
          <div class="org-ramificacoes">
            <article class="org-branch"><div class="org-branch-head">Operação &amp; logística</div><div class="org-team"><span>Marina — estoque</span><span>Lucas — depósito</span><span>Caio — separação e expedição</span></div></article>
            <article class="org-branch"><div class="org-branch-head">Comercial &amp; relacionamento</div><div class="org-team"><span>Ana — atendimento</span><span>Bruna — pós-venda</span><span>Diego — parcerias</span></div></article>
            <article class="org-branch"><div class="org-branch-head">Conteúdo &amp; crescimento</div><div class="org-team"><span>Bianca — redes sociais</span><span>Rafael — design</span><span>Clara — calendário promocional</span></div></article>
          </div>
        </div>
      </section>

'''
if footer_marker in html and 'id="organograma-painel"' not in html:
    html = html.replace(footer_marker, org + footer_marker, 1)

# Remove all visible references to the discontinued offer from product data.
js = js.replace('badgePromo: "LEVE 2 PAGANDO 1",\n    emOferta: true', 'badgePromo: null,\n    emOferta: false')

# Add tab and organogram interactions before initialization.
insert_marker = '''// ==========================================\n// INICIALIZAÇÃO GERAL DO DOCUMENTO'''
functions = '''// ==========================================
// CAMISETAS E ORGANOGRAMA
// ==========================================
function alternarAbaCamiseta(aba, botao) {
  document.querySelectorAll('.camiseta-tab').forEach((tab) => {
    const ativo = tab === botao;
    tab.classList.toggle('ativo', ativo);
    tab.setAttribute('aria-selected', ativo ? 'true' : 'false');
  });
  document.querySelectorAll('.camiseta-tab-panel').forEach((panel) => {
    const ativo = panel.id === `camiseta-tab-${aba}`;
    panel.classList.toggle('ativo', ativo);
    panel.hidden = !ativo;
  });
}

function alternarOrganograma() {
  const painel = document.getElementById('organograma-painel');
  const gatilhos = document.querySelectorAll('.footer-organograma-trigger');
  if (!painel) return;
  const vaiAbrir = painel.hidden;
  painel.hidden = !vaiAbrir;
  gatilhos.forEach((gatilho) => {
    gatilho.setAttribute('aria-expanded', vaiAbrir ? 'true' : 'false');
    const indicador = gatilho.querySelector('span');
    if (indicador) indicador.textContent = vaiAbrir ? '−' : '+';
  });
  if (vaiAbrir) painel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

'''
if insert_marker in js and 'function alternarOrganograma()' not in js:
    js = js.replace(insert_marker, functions + insert_marker, 1)

# Export inline handlers.
js = js.replace('window.fecharMenuMobile = fecharMenuMobile;', 'window.fecharMenuMobile = fecharMenuMobile;\nwindow.alternarAbaCamiseta = alternarAbaCamiseta;\nwindow.alternarOrganograma = alternarOrganograma;')

# Styles for clothing tabs/showcase and vertical org chart.
css += '''

/* =====================================================================
   CAMISETAS ALPHA
   ===================================================================== */
.secao-camisetas { padding: 40px 0 60px; background: linear-gradient(180deg, #0a0a0c 0%, #111116 100%); border-top: 1px solid var(--cor-borda); border-bottom: 1px solid var(--cor-borda); }
.camiseta-tabs { display: inline-flex; gap: 6px; padding: 5px; margin-bottom: 18px; border: 1px solid var(--cor-borda); border-radius: 999px; background: #0b0b0e; }
.camiseta-tab { color: var(--cor-texto-mutado); padding: 10px 20px; border-radius: 999px; font-weight: 800; font-size: .82rem; text-transform: uppercase; letter-spacing: .6px; }
.camiseta-tab.ativo, .camiseta-tab:hover { color: #fff; background: var(--cor-vermelho); }
.camiseta-tab-panel[hidden] { display: none; }
.camiseta-showcase { display: grid; grid-template-columns: minmax(320px, 1.1fr) minmax(300px, .9fr); gap: 34px; align-items: center; padding: 22px; border: 1px solid var(--cor-borda); border-radius: 16px; background: radial-gradient(circle at 20% 0%, rgba(225,29,72,.12), transparent 45%), var(--cor-fundo-card); box-shadow: var(--sombra-card); }
.camiseta-imagem-wrap { position: relative; min-height: 360px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 12px; background: #202020; }
.camiseta-imagem { width: 100%; height: 100%; max-height: 520px; object-fit: cover; }
.camiseta-selo { position: absolute; left: 16px; top: 16px; padding: 7px 10px; border-radius: 5px; background: var(--cor-vermelho); color: #fff; font-weight: 800; font-size: .7rem; letter-spacing: 1px; }
.camiseta-copy { max-width: 500px; }
.camiseta-copy h3 { margin: 8px 0 12px; font-size: clamp(1.5rem, 3vw, 2.3rem); line-height: 1.1; }
.camiseta-copy p, .tamanhos-panel p { color: var(--cor-texto-mutado); line-height: 1.7; }
.camiseta-price { margin: 20px 0 4px; color: var(--cor-vermelho); font-size: 1.7rem; font-weight: 900; }
.camiseta-size-hint { margin-bottom: 20px; color: #d4d4d8; font-size: .86rem; }
.tamanhos-panel { padding: 28px; border: 1px solid var(--cor-borda); border-radius: 16px; background: var(--cor-fundo-card); }
.tamanhos-panel h3 { margin: 8px 0 10px; font-size: 1.6rem; }
.tamanhos-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 24px; }
.tamanho-card { display: flex; flex-direction: column; gap: 5px; padding: 18px 14px; border: 1px solid var(--cor-borda-suave); border-radius: 10px; background: #0e0e11; color: var(--cor-texto-mutado); font-size: .76rem; }
.tamanho-card strong { color: #fff; font-size: 1.25rem; }

/* =====================================================================
   ORGANOGRAMA VERTICAL
   ===================================================================== */
.organograma-painel { margin: 34px 0 32px; padding: 28px; border: 1px solid var(--cor-borda); border-radius: 16px; background: linear-gradient(135deg, rgba(225,29,72,.08), rgba(15,15,18,.95) 40%); scroll-margin-top: 90px; }
.organograma-heading { display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; margin-bottom: 26px; }
.organograma-heading h3 { margin: 6px 0; font-size: 1.8rem; }
.organograma-heading p { color: var(--cor-texto-mutado); font-size: .9rem; }
.organograma-vertical { overflow-x: auto; padding: 4px 0 8px; }
.organograma-topo { display: grid; grid-template-columns: repeat(5, minmax(150px, 1fr)); gap: 10px; min-width: 800px; }
.org-card, .org-branch { border: 1px solid var(--cor-borda-suave); border-radius: 10px; background: rgba(19,19,22,.96); }
.org-card { min-height: 128px; padding: 14px 10px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 5px; border-top: 3px solid var(--cor-vermelho); }
.org-card.org-tecnico { border-top-color: #60a5fa; }
.org-card.org-promocao { border-top-color: #f59e0b; }
.org-card.org-publico { border-top-color: #a78bfa; }
.org-avatar { width: 35px; height: 35px; display: grid; place-items: center; margin-bottom: 4px; border-radius: 50%; background: var(--cor-vermelho); color: #fff; font-size: .7rem; font-weight: 900; }
.org-tecnico .org-avatar { background: #2563eb; }
.org-promocao .org-avatar { background: #d97706; }
.org-publico .org-avatar { background: #7c3aed; }
.org-card strong { color: #fff; font-size: .9rem; }
.org-card small { color: var(--cor-texto-mutado); font-size: .68rem; line-height: 1.35; }
.org-connector { width: 2px; height: 30px; margin: 0 auto; background: var(--cor-vermelho); }
.org-ramificacoes { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; min-width: 800px; position: relative; }
.org-ramificacoes::before { content: ''; position: absolute; top: -15px; left: 16%; right: 16%; height: 2px; background: var(--cor-vermelho); }
.org-branch { position: relative; padding: 0 0 12px; overflow: hidden; }
.org-branch::before { content: ''; position: absolute; top: -16px; left: 50%; width: 2px; height: 16px; background: var(--cor-vermelho); }
.org-branch-head { padding: 12px 14px; color: #fff; background: rgba(225,29,72,.18); font-size: .82rem; font-weight: 800; }
.org-team { display: grid; gap: 8px; padding: 14px; }
.org-team span { color: var(--cor-texto-mutado); font-size: .74rem; }
.footer-organograma-trigger { display: inline-flex; gap: 7px; align-items: center; text-align: left; }
.footer-organograma-trigger span { color: var(--cor-vermelho); font-size: 1.1rem; font-weight: 800; }

@media (max-width: 768px) {
  .camiseta-showcase { grid-template-columns: 1fr; padding: 14px; }
  .camiseta-imagem-wrap { min-height: 250px; }
  .tamanhos-grid { grid-template-columns: repeat(2, 1fr); }
  .organograma-painel { padding: 18px 14px; }
  .organograma-heading { flex-direction: column; }
}
'''

html_path.write_text(html)
js_path.write_text(js)
css_path.write_text(css)
print('Atualização aplicada com sucesso.')
print('Camiseta seção:', 'id="camisetas-secao"' in html)
print('Organograma:', 'id="organograma-painel"' in html)
print('Oferta removida:', 'COMPRE 1, <span>LEVE 2</span>' not in html)
print('Imagem:', (root / 'images/alpha-camiseta-preta-branca.jpeg').exists())
