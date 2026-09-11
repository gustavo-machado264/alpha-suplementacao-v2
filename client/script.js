// ==========================================
// ALPHA SUPLEMENTAÇÃO - CATÁLOGO E LÓGICA DO SITE
// Tecnologias: HTML5, CSS3 e JavaScript Puro (Vanilla JS)
// ==========================================

const PRODUTOS = [
  // INTEGRALMEDICA
  {
    id: 1,
    nome: "Whey 100% Pure Pote 900g",
    marca: "Integralmedica",
    categoria: "Whey",
    preco: 119.90,
    precoAntigo: 149.90,
    desconto: 20,
    avaliacao: 5,
    imagem: "images/integralmedica-whey-100-pure.jpg",
    descricao: "O Whey 100% Pure da Integralmédica fornece 20g de proteína de alto valor biológico por dose, rico em BCAA e aminoácidos essenciais.",
    sabor: "Chocolate Maltado",
    saboresDisponiveis: ["Chocolate Maltado", "Baunilha", "Morango"],
    destaque: true,
    maisVendido: 1,
    badgePromo: null,
    emOferta: false
  },
  {
    id: 2,
    nome: "Whey Protein Concentrado Pouch 900g",
    marca: "Integralmedica",
    categoria: "Whey",
    preco: 104.90,
    precoAntigo: 129.90,
    desconto: 19,
    avaliacao: 5,
    imagem: "images/integralmedica-whey-concentrado.png",
    descricao: "Formulação em refil econômico para quem busca manter a ingestão proteica com alto rendimento e pureza garantida.",
    sabor: "Chocolate Suíço",
    saboresDisponiveis: ["Chocolate Suíço", "Baunilha Tradicional"],
    destaque: false,
    maisVendido: null,
    badgePromo: null,
    emOferta: false
  },
  {
    id: 3,
    nome: "Creatina Hardcore 100% Pura 300g",
    marca: "Integralmedica",
    categoria: "Creatina",
    preco: 89.90,
    precoAntigo: 119.90,
    desconto: 25,
    avaliacao: 5,
    imagem: "images/integralmedica-creatina-hardcore.jpg",
    descricao: "Creatina monohidratada micronizada de alta pureza. Aumenta a força muscular, explosão física e volume celular.",
    sabor: "Sem sabor (Natural)",
    saboresDisponiveis: ["Sem sabor (Natural)"],
    destaque: true,
    maisVendido: 2,
    badgePromo: "LEVE 3 PAGANDO 2",
    emOferta: true
  },
  {
    id: 4,
    nome: "Barra de Proteína Dark Bar 90g (Darkness)",
    marca: "Integralmedica",
    categoria: "Barras",
    preco: 14.90,
    precoAntigo: 18.90,
    desconto: 21,
    avaliacao: 4,
    imagem: "images/integralmedica-darkbar.jpg",
    descricao: "Barra hiperproteica com até 30g de proteína de altíssima absorção, recheio cremoso e zero açúcar adicionado.",
    sabor: "Peanut Butter & Chocolate",
    saboresDisponiveis: ["Peanut Butter", "Cookies & Cream", "Chocolate Trufado"],
    destaque: false,
    maisVendido: null,
    badgePromo: null,
    emOferta: false
  },
  {
    id: 5,
    nome: "Termogênico Therma Pro Hardcore 60 Cápsulas",
    marca: "Integralmedica",
    categoria: "Termogênicos",
    preco: 69.90,
    precoAntigo: 89.90,
    desconto: 22,
    avaliacao: 4,
    imagem: "images/integralmedica-therma-pro.png",
    descricao: "Potente termogênico com 285mg de cafeína anidra por dose, acelerando o metabolismo e promovendo a queima calórica.",
    sabor: "Cápsulas",
    saboresDisponiveis: ["Cápsulas"],
    destaque: false,
    maisVendido: null,
    badgePromo: null,
    emOferta: false
  },
  {
    id: 6,
    nome: "Coqueteleira Shaker Darkness 600ml Preta",
    marca: "Integralmedica",
    categoria: "Acessórios",
    preco: 29.90,
    precoAntigo: 39.90,
    desconto: 25,
    avaliacao: 5,
    imagem: "images/integralmedica-coqueteleira.webp",
    descricao: "Coqueteleira robusta com grade de dissolução rápida, tampa antivazamento e design Darkness exclusivo.",
    sabor: "Acessório",
    saboresDisponiveis: ["Preto Fosco"],
    destaque: false,
    maisVendido: null,
    badgePromo: "GANHE BRINDE",
    emOferta: true
  },
  {
    id: 7,
    nome: "Galão de Água Darkness 2.2 Litros Preto",
    marca: "Integralmedica",
    categoria: "Acessórios",
    preco: 49.90,
    precoAntigo: 64.90,
    desconto: 23,
    avaliacao: 5,
    imagem: "images/integralmedica-galao-garrafa.webp",
    descricao: "Capacidade ideal para bater a meta diária de hidratação nos treinos intensos com alça ergonômica e trava segura.",
    sabor: "Acessório",
    saboresDisponiveis: ["Preto Smoke"],
    destaque: false,
    maisVendido: null,
    badgePromo: null,
    emOferta: false
  },
  {
    id: 8,
    nome: "Multivitamínico Vitapure Super 60 Cápsulas",
    marca: "Integralmedica",
    categoria: "Vitaminas",
    preco: 45.90,
    precoAntigo: 59.90,
    desconto: 23,
    avaliacao: 5,
    imagem: "images/integralmedica-vitapure.jpg",
    descricao: "Complexo com 24 micronutrientes essenciais que blindam a imunidade e combatem o estresse oxidativo.",
    sabor: "Cápsulas",
    saboresDisponiveis: ["Cápsulas"],
    destaque: false,
    maisVendido: null,
    badgePromo: null,
    emOferta: false
  },

  // DARK LAB
  {
    id: 9,
    nome: "100% Whey Protein Dark Lab Refil 900g",
    marca: "Dark Lab",
    categoria: "Whey",
    preco: 89.90,
    precoAntigo: 119.90,
    desconto: 25,
    avaliacao: 5,
    imagem: "images/darklab-whey-100.png",
    descricao: "Proteína concentrada com 21g de proteína por porção e alta concentração de BCAA. Excelente custo-benefício.",
    sabor: "Chocolate Belga",
    saboresDisponiveis: ["Chocolate Belga", "Morango Silvestre", "Baunilha"],
    destaque: true,
    maisVendido: null,
    badgePromo: null,
    emOferta: false
  },
  {
    id: 10,
    nome: "Creatina Monohidratada 100% Pura 300g Dark Lab",
    marca: "Dark Lab",
    categoria: "Creatina",
    preco: 74.90,
    precoAntigo: 99.90,
    desconto: 25,
    avaliacao: 5,
    imagem: "images/darklab-creatina.webp",
    descricao: "Eleita entre as creatinas com maior laudo de pureza do mercado nacional. Força explosiva e rápida recuperação.",
    sabor: "Sem sabor (Natural)",
    saboresDisponiveis: ["Sem sabor (Natural)"],
    destaque: true,
    maisVendido: 3,
    badgePromo: null,
    emOferta: false
  },
  {
    id: 11,
    nome: "Pré-Treino Venom Underground 300g Dark Lab",
    marca: "Dark Lab",
    categoria: "Pré-treino",
    preco: 99.90,
    precoAntigo: 139.90,
    desconto: 28,
    avaliacao: 5,
    imagem: "images/darklab-venom-pretreino.webp",
    descricao: "Fórmula insana com 400mg de cafeína, 2g de beta alanina e 1000mg de arginina para pump vascular imediato.",
    sabor: "Frutas Vermelhas & Limão",
    saboresDisponiveis: ["Frutas Vermelhas", "Maçã Verde", "Uva Roxa"],
    destaque: true,
    maisVendido: null,
    badgePromo: "LEVE 3 PAGANDO 2",
    emOferta: true
  },
  {
    id: 12,
    nome: "Creatine Protein Bar Caixa com 12 Unidades",
    marca: "Dark Lab",
    categoria: "Barras",
    preco: 59.90,
    precoAntigo: 79.90,
    desconto: 25,
    avaliacao: 4,
    imagem: "images/darklab-protein-bar.jpg",
    descricao: "A única barra proteica com 12g de proteína e enriquecida com 3g de pura creatina para um snack anabólico.",
    sabor: "Dark Chocolate & Avelã",
    saboresDisponiveis: ["Dark Chocolate", "Amendoim Crocante"],
    destaque: false,
    maisVendido: null,
    badgePromo: null,
    emOferta: false
  },

  // MAX TITANIUM
  {
    id: 13,
    nome: "100% Whey Protein Pote 900g Max Titanium",
    marca: "Max Titanium",
    categoria: "Whey",
    preco: 124.90,
    precoAntigo: 159.90,
    desconto: 21,
    avaliacao: 5,
    imagem: "images/maxtitanium-100-whey.png",
    descricao: "Elaborado com proteína concentrada do soro do leite de alto valor biológico. Excelente sabor e solubilidade instantânea.",
    sabor: "Chocolate Maltado",
    saboresDisponiveis: ["Chocolate Maltado", "Baunilha", "Morango"],
    destaque: true,
    maisVendido: null,
    badgePromo: null,
    emOferta: false
  },
  {
    id: 14,
    nome: "Creatina Monohidratada 300g Max Titanium",
    marca: "Max Titanium",
    categoria: "Creatina",
    preco: 84.90,
    precoAntigo: 109.90,
    desconto: 22,
    avaliacao: 5,
    imagem: "images/maxtitanium-creatina.png",
    descricao: "Creatina pura sem glúten e sem sódio. Aumenta a capacidade do músculo em produzir energia de alta intensidade.",
    sabor: "Sem sabor (Natural)",
    saboresDisponiveis: ["Sem sabor (Natural)"],
    destaque: false,
    maisVendido: null,
    badgePromo: null,
    emOferta: false
  },
  {
    id: 15,
    nome: "Pré-Treino Hórus 300g Edição Especial Max Titanium",
    marca: "Max Titanium",
    categoria: "Pré-treino",
    preco: 94.90,
    precoAntigo: 129.90,
    desconto: 26,
    avaliacao: 5,
    imagem: "images/maxtitanium-horus-pretreino.jpg",
    descricao: "Pré-treino pioneiro no Brasil com cafeína, beta-alanina, taurina e arginina. Mais foco, energia e menos fadiga.",
    sabor: "Framboesa 7Belo",
    saboresDisponiveis: ["Framboesa 7Belo", "Frutas Vermelhas", "Citrus"],
    destaque: true,
    maisVendido: null,
    badgePromo: null,
    emOferta: false
  },
  {
    id: 16,
    nome: "Power Protein Bar 90g Max Titanium",
    marca: "Max Titanium",
    categoria: "Barras",
    preco: 15.90,
    precoAntigo: 19.90,
    desconto: 20,
    avaliacao: 5,
    imagem: "images/maxtitanium-power-bar.png",
    descricao: "Barra com recheio cremoso e 28g a 30g de proteína de alto valor biológico com BCAA e baixos carboidratos líquidos.",
    sabor: "Dark Chocolate Truffle",
    saboresDisponiveis: ["Dark Chocolate Truffle", "Cookies", "Caramelo"],
    destaque: false,
    maisVendido: null,
    badgePromo: null,
    emOferta: false
  },
  {
    id: 17,
    nome: "Termogênico 2Hot 200g Max Titanium",
    marca: "Max Titanium",
    categoria: "Termogênicos",
    preco: 69.90,
    precoAntigo: 89.90,
    desconto: 22,
    avaliacao: 4,
    imagem: "images/maxtitanium-2hot-termogenico.webp",
    descricao: "Mistura solúvel que associa taurina, cafeína, gengibre e chá verde para ação termogênica e controle de retenção hídrica.",
    sabor: "Tangerina",
    saboresDisponiveis: ["Tangerina", "Limão"],
    destaque: false,
    maisVendido: null,
    badgePromo: null,
    emOferta: false
  },

  // DR PEANUT
  {
    id: 18,
    nome: "Pasta de Amendoim Brigadeiro de Colher 600g Dr. Peanut",
    marca: "Dr. Peanut",
    categoria: "Pasta de amendoim",
    preco: 39.90,
    precoAntigo: 49.90,
    desconto: 20,
    avaliacao: 5,
    imagem: "images/drpeanut-pasta-brigadeiro.jpg",
    descricao: "Zero adição de açúcar, zero glúten, rica em whey protein e com pedacinhos crocantes de amendoim selecionado.",
    sabor: "Brigadeiro de Colher",
    saboresDisponiveis: ["Brigadeiro de Colher", "Avelã", "Leite em Pó", "Chocobueno"],
    destaque: true,
    maisVendido: null,
    badgePromo: "LEVE 3 PAGANDO 2",
    emOferta: true
  },
  {
    id: 19,
    nome: "Pasta de Amendoim Sabor Leite em Pó 600g Dr. Peanut",
    marca: "Dr. Peanut",
    categoria: "Pasta de amendoim",
    preco: 39.90,
    precoAntigo: 49.90,
    desconto: 20,
    avaliacao: 5,
    imagem: "images/drpeanut-pasta-leite-po.jpg",
    descricao: "Cremosa na medida certa com o sabor inconfundível do leite em pó, enriquecida com proteína e fibras naturais.",
    sabor: "Leite em Pó",
    saboresDisponiveis: ["Leite em Pó"],
    destaque: false,
    maisVendido: null,
    badgePromo: null,
    emOferta: false
  },
  {
    id: 20,
    nome: "Alfajor Proteico com Recheio de Pasta de Avelã 35g Dr. Peanut",
    marca: "Dr. Peanut",
    categoria: "Barras",
    preco: 9.90,
    precoAntigo: 13.90,
    desconto: 28,
    avaliacao: 5,
    imagem: "images/drpeanut-alfajor-proteico.png",
    descricao: "Bolacha crocante recheada com a famosa pasta de amendoim com avelã e coberta com chocolate nobre sem açúcar.",
    sabor: "Avelã com Chocolate",
    saboresDisponiveis: ["Avelã", "Leite em Pó", "Doce de Leite"],
    destaque: false,
    maisVendido: null,
    badgePromo: "GANHE BRINDE",
    emOferta: true
  },

  // GROWTH SUPPLEMENTS
  {
    id: 21,
    nome: "100% Whey Protein Concentrado 1kg Growth Supplements",
    marca: "Growth Supplements",
    categoria: "Whey",
    preco: 99.90,
    precoAntigo: 119.90,
    desconto: 16,
    avaliacao: 5,
    imagem: "images/growth-whey-concentrado.webp",
    descricao: "Proteína concentrada 80% líder absoluta de vendas, garantindo 24g de pura proteína por dosador e sabor delicioso.",
    sabor: "Chocolate",
    saboresDisponiveis: ["Chocolate", "Natural", "Morango", "Cookies"],
    destaque: true,
    maisVendido: null,
    badgePromo: null,
    emOferta: false
  },
  {
    id: 22,
    nome: "Creatina Monohidratada 100% Creapure 250g Growth",
    marca: "Growth Supplements",
    categoria: "Creatina",
    preco: 99.90,
    precoAntigo: 129.90,
    desconto: 23,
    avaliacao: 5,
    imagem: "images/growth-creatina-creapure.webp",
    descricao: "Creatina com selo de autenticidade alemã Creapure, o mais rigoroso padrão de controle e pureza do mundo.",
    sabor: "Sem sabor (Natural)",
    saboresDisponiveis: ["Sem sabor (Natural)"],
    destaque: true,
    maisVendido: null,
    badgePromo: null,
    emOferta: false
  },
  {
    id: 23,
    nome: "Pré-Treino Haze Hardcore 300g Growth Supplements",
    marca: "Growth Supplements",
    categoria: "Pré-treino",
    preco: 89.90,
    precoAntigo: 109.90,
    desconto: 18,
    avaliacao: 5,
    imagem: "images/growth-haze-pretreino.jpg",
    descricao: "Pré-treino completo com foco cirúrgico, resistência prolongada e máxima energia para treinos de altíssima intensidade.",
    sabor: "Laranja Cítrica",
    saboresDisponiveis: ["Laranja Cítrica", "Açaí com Guaraná", "Melancia"],
    destaque: false,
    maisVendido: null,
    badgePromo: null,
    emOferta: false
  },
  {
    id: 24,
    nome: "Multivitamínico Clinical Series 120 Cápsulas Growth",
    marca: "Growth Supplements",
    categoria: "Vitaminas",
    preco: 36.90,
    precoAntigo: 45.90,
    desconto: 19,
    avaliacao: 5,
    imagem: "images/growth-multivitaminico.webp",
    descricao: "Fornece 100% das recomendações diárias de todas as vitaminas e minerais essenciais para recuperação e bem-estar.",
    sabor: "Cápsulas",
    saboresDisponiveis: ["Cápsulas"],
    destaque: false,
    maisVendido: null,
    badgePromo: null,
    emOferta: false
  },
  {
    id: 25,
    nome: "Camiseta Oversized Growth College Preta 100% Algodão",
    marca: "Growth Supplements",
    categoria: "Camisetas",
    preco: 79.90,
    precoAntigo: 99.90,
    desconto: 20,
    avaliacao: 5,
    imagem: "images/growth-camiseta-oversized.webp",
    descricao: "Modelagem oversized moderna, gola canelada de 3cm, tecido pesado 100% algodão de alto toque para treino ou casual.",
    sabor: "Vestuário",
    saboresDisponiveis: ["Tamanho P", "Tamanho M", "Tamanho G", "Tamanho GG"],
    destaque: false,
    maisVendido: null,
    badgePromo: null,
    emOferta: false
  }
];

// Estado global do aplicativo
const estado = {
  filtroCategoria: "Todos",
  filtroMarca: "Todas",
  termoPesquisa: "",
  ordenacao: "padrao",
  carrinho: JSON.parse(localStorage.getItem("alpha_carrinho") || "[]"),
  produtoModal: null
};

// ==========================================
// RENDERIZAÇÃO DE PRODUTOS
// ==========================================

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function gerarEstrelas(nota) {
  let estrelas = "";
  for (let i = 0; i < 5; i++) {
    estrelas += i < nota ? "★" : "☆";
  }
  return estrelas;
}

function obterProdutosFiltrados() {
  return PRODUTOS.filter(produto => {
    // Filtro por Categoria
    if (estado.filtroCategoria !== "Todos") {
      const catNormal = estado.filtroCategoria.toLowerCase();
      const prodCatNormal = produto.categoria.toLowerCase();
      if (!prodCatNormal.includes(catNormal) && !catNormal.includes(prodCatNormal)) {
        return false;
      }
    }

    // Filtro por Marca
    if (estado.filtroMarca !== "Todas") {
      const marcaNormal = estado.filtroMarca.toLowerCase();
      const prodMarcaNormal = produto.marca.toLowerCase();
      if (!prodMarcaNormal.includes(marcaNormal) && !marcaNormal.includes(prodMarcaNormal)) {
        return false;
      }
    }

    // Pesquisa por nome, marca ou categoria
    if (estado.termoPesquisa.trim() !== "") {
      const q = estado.termoPesquisa.toLowerCase().trim();
      const matchNome = produto.nome.toLowerCase().includes(q);
      const matchMarca = produto.marca.toLowerCase().includes(q);
      const matchCat = produto.categoria.toLowerCase().includes(q);
      if (!matchNome && !matchMarca && !matchCat) {
        return false;
      }
    }

    return true;
  });
}

function ordenarProdutos(lista) {
  const copia = [...lista];
  switch (estado.ordenacao) {
    case "menor-preco":
      return copia.sort((a, b) => a.preco - b.preco);
    case "maior-preco":
      return copia.sort((a, b) => b.preco - a.preco);
    case "maior-desconto":
      return copia.sort((a, b) => b.desconto - a.desconto);
    case "mais-vendidos":
      return copia.sort((a, b) => (b.maisVendido ? 100 - b.maisVendido : 0) - (a.maisVendido ? 100 - a.maisVendido : 0));
    case "menos-vendidos":
      return copia.sort((a, b) => (a.maisVendido ? 100 - a.maisVendido : 0) - (b.maisVendido ? 100 - b.maisVendido : 0));
    default:
      return copia;
  }
}

function criarCardProduto(produto) {
  const card = document.createElement("div");
  card.className = "card-produto";
  card.onclick = (e) => {
    // Se não clicou no botão adicionar ao carrinho, abre o modal
    if (!e.target.closest(".btn-add-carrinho")) {
      abrirModalProduto(produto.id);
    }
  };

  card.innerHTML = `
    <div class="card-img-container">
      <img src="${produto.imagem}" alt="${produto.nome}" class="card-img" loading="lazy" />
      ${produto.desconto ? `<span class="badge-desconto">-${produto.desconto}%</span>` : ""}
      ${produto.maisVendido ? `<span class="badge-ranking">${produto.maisVendido}º MAIS VENDIDO</span>` : ""}
      ${produto.badgePromo ? `<span class="badge-promo-tag">${produto.badgePromo}</span>` : ""}
    </div>
    <div class="card-info">
      <span class="card-marca">${produto.marca}</span>
      <h3 class="card-nome">${produto.nome}</h3>
      <div class="card-precos">
        ${produto.precoAntigo ? `<span class="preco-antigo">${formatarPreco(produto.precoAntigo)}</span>` : ""}
        <span class="preco-atual">${formatarPreco(produto.preco)}</span>
      </div>
      <div class="card-avaliacao" title="Avaliação: ${produto.avaliacao} estrelas">
        <span class="estrelas">${gerarEstrelas(produto.avaliacao)}</span>
        <span class="nota">(${produto.avaliacao}.0)</span>
      </div>
      <button class="btn-add-carrinho" onclick="adicionarAoCarrinho(${produto.id}); event.stopPropagation();">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        Adicionar ao carrinho
      </button>
    </div>
  `;
  return card;
}

function renderizarGridPrincipal() {
  const container = document.getElementById("grid-produtos");
  if (!container) return;

  const produtosFiltrados = obterProdutosFiltrados();
  const produtosOrdenados = ordenarProdutos(produtosFiltrados);

  container.innerHTML = "";

  const contadorEl = document.getElementById("produtos-contador");
  if (contadorEl) {
    contadorEl.innerText = `${produtosOrdenados.length} produtos encontrados`;
  }

  if (produtosOrdenados.length === 0) {
    container.innerHTML = `
      <div class="alerta-sem-produtos">
        <p>Nenhum produto encontrado com os filtros atuais.</p>
        <button class="btn-secundario" onclick="limparFiltros()">Limpar todos os filtros</button>
      </div>
    `;
    return;
  }

  produtosOrdenados.forEach(produto => {
    container.appendChild(criarCardProduto(produto));
  });
}

function renderizarMaisVendidos() {
  const container = document.getElementById("grid-mais-vendidos");
  if (!container) return;

  const maisVendidos = PRODUTOS
    .filter(p => p.maisVendido !== null)
    .sort((a, b) => a.maisVendido - b.maisVendido);

  container.innerHTML = "";
  maisVendidos.forEach(produto => {
    container.appendChild(criarCardProduto(produto));
  });
}

function renderizarOfertasAlpha() {
  const container = document.getElementById("grid-ofertas-alpha");
  if (!container) return;

  const ofertas = PRODUTOS.filter(p => p.badgePromo !== null || p.emOferta);

  container.innerHTML = "";
  ofertas.forEach(produto => {
    container.appendChild(criarCardProduto(produto));
  });
}

// ==========================================
// FILTROS, PESQUISA E ORDENAÇÃO
// ==========================================

function filtrarPorCategoria(categoria) {
  estado.filtroCategoria = categoria;
  
  // Atualiza botões ativos na barra de categorias
  document.querySelectorAll(".pill-categoria, .card-categoria").forEach(el => {
    if (el.dataset.categoria === categoria) {
      el.classList.add("ativo");
    } else {
      el.classList.remove("ativo");
    }
  });

  const selectCat = document.getElementById("filtro-categoria-select");
  if (selectCat) selectCat.value = categoria;

  renderizarGridPrincipal();
  rolarParaSecao("produtos-secao");
}

function filtrarPorMarca(marca) {
  estado.filtroMarca = marca;

  // Atualiza botões de marcas
  document.querySelectorAll(".card-marca-btn").forEach(el => {
    if (el.dataset.marca === marca) {
      el.classList.add("ativo");
    } else {
      el.classList.remove("ativo");
    }
  });

  const selectMarca = document.getElementById("filtro-marca-select");
  if (selectMarca) selectMarca.value = marca;

  renderizarGridPrincipal();
  rolarParaSecao("produtos-secao");
}

function pesquisarProdutos(termo) {
  estado.termoPesquisa = termo;
  renderizarGridPrincipal();
  if (termo.trim().length > 0) {
    rolarParaSecao("produtos-secao");
  }
}

function ordenarPor(criterio) {
  estado.ordenacao = criterio;
  renderizarGridPrincipal();
}

function limparFiltros() {
  estado.filtroCategoria = "Todos";
  estado.filtroMarca = "Todas";
  estado.termoPesquisa = "";
  estado.ordenacao = "padrao";

  const inputPesquisa = document.getElementById("input-pesquisa");
  if (inputPesquisa) inputPesquisa.value = "";
  const inputPesquisaGrid = document.getElementById("input-pesquisa-grid");
  if (inputPesquisaGrid) inputPesquisaGrid.value = "";

  const selectCat = document.getElementById("filtro-categoria-select");
  if (selectCat) selectCat.value = "Todos";

  const selectMarca = document.getElementById("filtro-marca-select");
  if (selectMarca) selectMarca.value = "Todas";

  const selectOrd = document.getElementById("select-ordenacao");
  if (selectOrd) selectOrd.value = "padrao";

  document.querySelectorAll(".pill-categoria, .card-categoria, .card-marca-btn").forEach(el => {
    el.classList.remove("ativo");
  });

  renderizarGridPrincipal();
}

function rolarParaSecao(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ==========================================
// CARRINHO DE COMPRAS E BRINDE
// ==========================================

const META_BRINDE = 250.00;

function salvarCarrinho() {
  localStorage.setItem("alpha_carrinho", JSON.stringify(estado.carrinho));
}

function adicionarAoCarrinho(produtoId, saborEscolhido = null, quantidade = 1) {
  const produto = PRODUTOS.find(p => p.id === produtoId);
  if (!produto) return;

  const sabor = saborEscolhido || produto.sabor || "Padrão";

  const itemExistente = estado.carrinho.find(
    item => item.id === produtoId && item.sabor === sabor
  );

  if (itemExistente) {
    itemExistente.quantidade += quantidade;
  } else {
    estado.carrinho.push({
      id: produto.id,
      nome: produto.nome,
      marca: produto.marca,
      preco: produto.preco,
      imagem: produto.imagem,
      sabor: sabor,
      quantidade: quantidade
    });
  }

  salvarCarrinho();
  atualizarCarrinhoUI();
  mostrarNotificacao(`"${produto.nome}" adicionado ao carrinho!`);
  abrirCarrinhoDrawer();
}

function removerDoCarrinho(index) {
  estado.carrinho.splice(index, 1);
  salvarCarrinho();
  atualizarCarrinhoUI();
}

function alterarQuantidade(index, delta) {
  const item = estado.carrinho[index];
  if (!item) return;

  item.quantidade += delta;
  if (item.quantidade <= 0) {
    removerDoCarrinho(index);
    return;
  }

  salvarCarrinho();
  atualizarCarrinhoUI();
}

function calcularTotal() {
  return estado.carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
}

function calcularQuantidadeItens() {
  return estado.carrinho.reduce((acc, item) => acc + item.quantidade, 0);
}

function atualizarCarrinhoUI() {
  const total = calcularTotal();
  const qtdItens = calcularQuantidadeItens();

  // Atualizar contador no cabeçalho
  const badgeQtd = document.getElementById("badge-carrinho-qtd");
  if (badgeQtd) {
    badgeQtd.innerText = qtdItens;
    badgeQtd.style.display = qtdItens > 0 ? "inline-flex" : "none";
  }

  // Atualizar lista dentro do drawer
  const containerLista = document.getElementById("carrinho-itens-lista");
  const subtotalEl = document.getElementById("carrinho-subtotal");
  const totalEl = document.getElementById("carrinho-total");

  if (subtotalEl) subtotalEl.innerText = formatarPreco(total);
  if (totalEl) totalEl.innerText = formatarPreco(total);

  // Barra de Brinde (R$ 250)
  const brindeInfo = document.getElementById("carrinho-brinde-box");
  if (brindeInfo) {
    if (total >= META_BRINDE) {
      brindeInfo.className = "brinde-box brinde-ganho";
      brindeInfo.innerHTML = `
        <div class="brinde-icone">🎁</div>
        <div class="brinde-texto">
          <strong>Parabéns! Você ganhou um brinde exclusivo Alpha!</strong>
          <span>(1 Coqueteleira Darkness ou Shaker Oficial inclusa no pedido)</span>
        </div>
      `;
    } else {
      const falta = META_BRINDE - total;
      const percentual = Math.min(100, Math.round((total / META_BRINDE) * 100));
      brindeInfo.className = "brinde-box brinde-pendente";
      brindeInfo.innerHTML = `
        <div class="brinde-barra-container">
          <div class="brinde-barra-progresso" style="width: ${percentual}%"></div>
        </div>
        <div class="brinde-info-linha">
          <span>🎁 Faltam <strong>${formatarPreco(falta)}</strong> para você ganhar um brinde exclusivo!</span>
          <span class="brinde-porcentagem">${percentual}%</span>
        </div>
      `;
    }
  }

  if (!containerLista) return;

  if (estado.carrinho.length === 0) {
    containerLista.innerHTML = `
      <div class="carrinho-vazio">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <p>Seu carrinho está vazio.</p>
        <button class="btn-primario" onclick="fecharCarrinhoDrawer(); rolarParaSecao('produtos-secao')">Explorar Produtos</button>
      </div>
    `;
    return;
  }

  containerLista.innerHTML = "";
  estado.carrinho.forEach((item, index) => {
    const itemEl = document.createElement("div");
    itemEl.className = "carrinho-item";
    const subtotalItem = item.preco * item.quantidade;

    itemEl.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}" class="carrinho-item-img" />
      <div class="carrinho-item-detalhes">
        <h4 class="carrinho-item-nome">${item.nome}</h4>
        <span class="carrinho-item-sabor">Sabor / Opção: ${item.sabor}</span>
        <div class="carrinho-item-linha-preco">
          <span class="carrinho-item-unitario">${formatarPreco(item.preco)} cada</span>
          <strong class="carrinho-item-subtotal">${formatarPreco(subtotalItem)}</strong>
        </div>
        <div class="carrinho-item-acoes">
          <div class="qtd-controles">
            <button class="btn-qtd" onclick="alterarQuantidade(${index}, -1)" aria-label="Diminuir">-</button>
            <span class="qtd-numero">${item.quantidade}</span>
            <button class="btn-qtd" onclick="alterarQuantidade(${index}, 1)" aria-label="Aumentar">+</button>
          </div>
          <button class="btn-remover-item" onclick="removerDoCarrinho(${index})">Remover</button>
        </div>
      </div>
    `;
    containerLista.appendChild(itemEl);
  });
}

function abrirCarrinhoDrawer() {
  const drawer = document.getElementById("carrinho-drawer");
  const overlay = document.getElementById("carrinho-overlay");
  if (drawer) drawer.classList.add("aberto");
  if (overlay) overlay.classList.add("visivel");
  document.body.style.overflow = "hidden";
}

function fecharCarrinhoDrawer() {
  const drawer = document.getElementById("carrinho-drawer");
  const overlay = document.getElementById("carrinho-overlay");
  if (drawer) drawer.classList.remove("aberto");
  if (overlay) overlay.classList.remove("visivel");
  document.body.style.overflow = "";
}

function finalizarCompra() {
  alert("Esta é uma demonstração. O checkout será implementado posteriormente.");
}

// ==========================================
// MODAL DE DETALHES DO PRODUTO
// ==========================================

function abrirModalProduto(id) {
  const produto = PRODUTOS.find(p => p.id === id);
  if (!produto) return;

  estado.produtoModal = produto;

  const modal = document.getElementById("produto-modal");
  const overlay = document.getElementById("modal-overlay");
  const conteudo = document.getElementById("modal-conteudo");

  if (!modal || !conteudo) return;

  conteudo.innerHTML = `
    <div class="modal-produto-grid">
      <div class="modal-img-col">
        <img src="${produto.imagem}" alt="${produto.nome}" class="modal-produto-img" />
        ${produto.desconto ? `<span class="badge-desconto-lg">-${produto.desconto}% OFF</span>` : ""}
      </div>
      <div class="modal-info-col">
        <span class="modal-marca">${produto.marca}</span>
        <h2 class="modal-titulo">${produto.nome}</h2>
        
        <div class="modal-avaliacao">
          <span class="estrelas">${gerarEstrelas(produto.avaliacao)}</span>
          <span class="nota">(${produto.avaliacao}.0 de 5)</span>
          <span class="badge-categoria-pill">${produto.categoria}</span>
        </div>

        <div class="modal-precos">
          ${produto.precoAntigo ? `<span class="preco-antigo">${formatarPreco(produto.precoAntigo)}</span>` : ""}
          <span class="preco-atual-lg">${formatarPreco(produto.preco)}</span>
        </div>

        <p class="modal-descricao">${produto.descricao}</p>

        ${produto.saboresDisponiveis && produto.saboresDisponiveis.length > 0 ? `
          <div class="modal-seletor-grupo">
            <label for="modal-sabor-select"><strong>Escolha o sabor / variação:</strong></label>
            <select id="modal-sabor-select" class="select-padrao">
              ${produto.saboresDisponiveis.map(s => `<option value="${s}">${s}</option>`).join("")}
            </select>
          </div>
        ` : ""}

        <div class="modal-qtd-adicionar">
          <div class="modal-qtd-box">
            <label>Qtd:</label>
            <div class="qtd-controles">
              <button class="btn-qtd" onclick="alterarQtdModal(-1)">-</button>
              <span id="modal-qtd-val" class="qtd-numero">1</span>
              <button class="btn-qtd" onclick="alterarQtdModal(1)">+</button>
            </div>
          </div>
          <button class="btn-primario btn-adicionar-modal" onclick="confirmarAddModal()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("aberto");
  if (overlay) overlay.classList.add("visivel");
  document.body.style.overflow = "hidden";
}

let qtdModalAtual = 1;
function alterarQtdModal(delta) {
  qtdModalAtual += delta;
  if (qtdModalAtual < 1) qtdModalAtual = 1;
  const el = document.getElementById("modal-qtd-val");
  if (el) el.innerText = qtdModalAtual;
}

function confirmarAddModal() {
  if (!estado.produtoModal) return;
  const selectSabor = document.getElementById("modal-sabor-select");
  const sabor = selectSabor ? selectSabor.value : estado.produtoModal.sabor;
  adicionarAoCarrinho(estado.produtoModal.id, sabor, qtdModalAtual);
  fecharModalProduto();
  qtdModalAtual = 1;
}

function fecharModalProduto() {
  const modal = document.getElementById("produto-modal");
  const overlay = document.getElementById("modal-overlay");
  if (modal) modal.classList.remove("aberto");
  if (overlay) overlay.classList.remove("visivel");
  document.body.style.overflow = "";
  estado.produtoModal = null;
  qtdModalAtual = 1;
}

// ==========================================
// CARROSSEL HERO EM JAVASCRIPT PURO
// ==========================================

let slideIndex = 0;
let carrosselTimer = null;

function inicializarCarrossel() {
  mostrarSlide(slideIndex);
  iniciarAutoSlide();
}

function mostrarSlide(n) {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");

  if (!slides || slides.length === 0) return;

  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.classList.remove("ativo");
    if (i === slideIndex) {
      slide.classList.add("ativo");
    }
  });

  dots.forEach((dot, i) => {
    dot.classList.remove("ativo");
    if (i === slideIndex) {
      dot.classList.add("ativo");
    }
  });
}

function mudarSlide(delta) {
  pararAutoSlide();
  slideIndex += delta;
  mostrarSlide(slideIndex);
  iniciarAutoSlide();
}

function irParaSlide(index) {
  pararAutoSlide();
  slideIndex = index;
  mostrarSlide(slideIndex);
  iniciarAutoSlide();
}

function iniciarAutoSlide() {
  pararAutoSlide();
  carrosselTimer = setInterval(() => {
    slideIndex++;
    mostrarSlide(slideIndex);
  }, 5000);
}

function pararAutoSlide() {
  if (carrosselTimer) {
    clearInterval(carrosselTimer);
    carrosselTimer = null;
  }
}

// ==========================================
// TOAST NOTIFICAÇÃO
// ==========================================

function mostrarNotificacao(mensagem) {
  const toast = document.getElementById("toast-alpha");
  if (!toast) return;

  toast.innerText = mensagem;
  toast.classList.add("visivel");

  setTimeout(() => {
    toast.classList.remove("visivel");
  }, 2600);
}

// ==========================================
// MENU MOBILE HAMBURGER
// ==========================================

function alternarMenuMobile() {
  const menuNav = document.getElementById("menu-nav-links");
  const btnHamburger = document.getElementById("btn-hamburger");
  if (menuNav) {
    menuNav.classList.toggle("aberto");
  }
  if (btnHamburger) {
    btnHamburger.classList.toggle("ativo");
  }
}

function fecharMenuMobile() {
  const menuNav = document.getElementById("menu-nav-links");
  const btnHamburger = document.getElementById("btn-hamburger");
  if (menuNav) menuNav.classList.remove("aberto");
  if (btnHamburger) btnHamburger.classList.remove("ativo");
}

// ==========================================
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

// ==========================================
// INICIALIZAÇÃO GERAL DO DOCUMENTO
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  inicializarCarrossel();
  renderizarGridPrincipal();
  renderizarMaisVendidos();
  renderizarOfertasAlpha();
  atualizarCarrinhoUI();

  // Evento de pesquisa com debounce
  const inputPesquisa = document.getElementById("input-pesquisa");
  const inputPesquisaGrid = document.getElementById("input-pesquisa-grid");

  if (inputPesquisa) {
    inputPesquisa.addEventListener("input", (e) => {
      if (inputPesquisaGrid) inputPesquisaGrid.value = e.target.value;
      pesquisarProdutos(e.target.value);
    });
  }

  if (inputPesquisaGrid) {
    inputPesquisaGrid.addEventListener("input", (e) => {
      if (inputPesquisa) inputPesquisa.value = e.target.value;
      pesquisarProdutos(e.target.value);
    });
  }

  // Evento de seleção de filtros
  const selectCat = document.getElementById("filtro-categoria-select");
  if (selectCat) {
    selectCat.addEventListener("change", (e) => {
      filtrarPorCategoria(e.target.value);
    });
  }

  const selectMarca = document.getElementById("filtro-marca-select");
  if (selectMarca) {
    selectMarca.addEventListener("change", (e) => {
      filtrarPorMarca(e.target.value);
    });
  }

  const selectOrd = document.getElementById("select-ordenacao");
  if (selectOrd) {
    selectOrd.addEventListener("change", (e) => {
      ordenarPor(e.target.value);
    });
  }
});

// Exposição global para chamadas inline do HTML
window.filtrarPorCategoria = filtrarPorCategoria;
window.filtrarPorMarca = filtrarPorMarca;
window.pesquisarProdutos = pesquisarProdutos;
window.ordenarPor = ordenarPor;
window.limparFiltros = limparFiltros;
window.rolarParaSecao = rolarParaSecao;
window.adicionarAoCarrinho = adicionarAoCarrinho;
window.removerDoCarrinho = removerDoCarrinho;
window.alterarQuantidade = alterarQuantidade;
window.abrirCarrinhoDrawer = abrirCarrinhoDrawer;
window.fecharCarrinhoDrawer = fecharCarrinhoDrawer;
window.finalizarCompra = finalizarCompra;
window.abrirModalProduto = abrirModalProduto;
window.fecharModalProduto = fecharModalProduto;
window.alterarQtdModal = alterarQtdModal;
window.confirmarAddModal = confirmarAddModal;
window.mudarSlide = mudarSlide;
window.irParaSlide = irParaSlide;
window.alternarMenuMobile = alternarMenuMobile;
window.fecharMenuMobile = fecharMenuMobile;
window.alternarAbaCamiseta = alternarAbaCamiseta;
window.alternarOrganograma = alternarOrganograma;
