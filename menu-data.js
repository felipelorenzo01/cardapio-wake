// ============================================================
//  WAKE — DADOS DO CARDÁPIO
//  Este é o ÚNICO arquivo que você precisa editar.
//  Depois de editar, clique em "Commit changes" no GitHub.
//  O site atualiza sozinho em 30 segundos.
//
//  REGRAS:
//  - Use PONTO no preço: 29.90 (não 29,90)
//  - Textos entre aspas: "texto aqui"
//  - Toda linha termina com vírgula
//  - Para foto: coloque o JPG na pasta /photos e
//    escreva o nome sem .jpg no campo img
//  - badge: "p"=Mais pedido, "n"=Novidade, "f"=Fitness, ""=nenhum
// ============================================================

var MENU = [
  {
    categoria: "Cuscuz",
    itens: [
      { nome: "Cuscuz de Queijo Coalho",      preco: 26.90, desc: "Cuscuz nordestino com queijo coalho gratinado e ovo",          foto: "cuscuz-coalho",      badge: "" },
      { nome: "Cuscuz de Camarão",             preco: 36.90, desc: "Camarões salteados na manteiga com cuscuz e coalho",          foto: "cuscuz-camarao",     badge: "p" },
      { nome: "Cuscuz de Carne do Sol",        preco: 32.90, desc: "Cuscuz com carne do sol desfiada e ovo",                      foto: "cuscuz-carne-sol",   badge: "" },
      { nome: "Cuscuz de Fumeiro",             preco: 32.90, desc: "Linguiça fumeiro artesanal com cuscuz e ovo",                 foto: "cuscuz-fumeiro",     badge: "" },
    ]
  },
  {
    categoria: "Croissant",
    itens: [
      { nome: "Croissant de Ovo e Bacon",      preco: 32.90, desc: "Croissant folhado, ovo e bacon crocante",                     foto: "croissant-ovo-bacon", badge: "" },
      { nome: "Croissant Misto",               preco: 28.90, desc: "Croissant com queijo e presunto",                             foto: "croissant-misto",    badge: "" },
      { nome: "Croissant de Cogumelo",         preco: 39.90, desc: "Mix de cogumelos salteados no croissant",                     foto: "croissant-cogumelo", badge: "n" },
    ]
  },
  {
    categoria: "Omelete",
    itens: [
      { nome: "Omelete de Queijo",             preco: 24.90, desc: "Omelete clássico com queijo derretido",                       foto: "omelete-queijo",     badge: "" },
      { nome: "Omelete de Queijo e Presunto",  preco: 25.90, desc: "Queijo e presunto no ponto",                                  foto: "omelete-presunto",   badge: "" },
      { nome: "Omelete Frango & Cream Cheese", preco: 28.90, desc: "Frango desfiado com cream cheese cremoso",                    foto: "omelete-frango",     badge: "" },
    ]
  },
  {
    categoria: "Sanduíches",
    itens: [
      { nome: "Misto com Ovo",                 preco: 26.90, desc: "Sanduíche misto quente com ovo na chapa",                     foto: "misto-ovo",          badge: "" },
      { nome: "Queijo Quente com Ovo",         preco: 20.90, desc: "Pão na chapa, queijo derretido e ovo",                        foto: "queijo-quente",      badge: "" },
    ]
  },
  {
    categoria: "Saladas",
    itens: [
      { nome: "Salada de Frango",              preco: 39.90, desc: "Mix de folhas frescas com frango grelhado",                   foto: "salada-frango",      badge: "" },
      { nome: "Salada de Filé",                preco: 49.90, desc: "Tiras de filé mignon sobre mix de folhas e queijo",           foto: "salada-file",        badge: "p" },
      { nome: "Salada de Camarão",             preco: 54.90, desc: "Camarões nobres com parmesão e castanhas",                    foto: "salada-camarao",     badge: "" },
    ]
  },
  {
    categoria: "Tapioca",
    itens: [
      { nome: "Tapioca Fumeiro",               preco: 29.90, desc: "Tapioca recheada com linguiça fumeiro",                       foto: "tapioca-fumeiro",    badge: "" },
      { nome: "Tapioca Filé & Cogumelo",       preco: 35.90, desc: "Filé mignon com cogumelos frescos",                           foto: "",                   badge: "n" },
      { nome: "Tapioca Camarão",               preco: 42.90, desc: "Camarões salteados com pesto e tomate",                       foto: "tapioca-camarao",    badge: "" },
      { nome: "Tapioca Mista",                 preco: 24.90, desc: "Queijo derretido e presunto na tapioca",                      foto: "tapioca-mista",      badge: "" },
      { nome: "Tapioca Veggie",                preco: 22.90, desc: "Legumes grelhados, queijo e tomate",                          foto: "tapioca-veggie",     badge: "" },
      { nome: "Tapioca Doce de Leite",         preco: 22.90, desc: "Doce de leite artesanal na tapioca",                          foto: "tapioca-doce-leite", badge: "" },
      { nome: "Tapioca Nutella",               preco: 23.90, desc: "Nutella cremosa na tapioca crocante",                         foto: "tapioca-nutella",    badge: "" },
    ]
  },
  {
    categoria: "Cafés",
    itens: [
      { nome: "Café Expresso",                 preco: 5.90,  desc: "Expresso curto e encorpado",                                  foto: "",                   badge: "" },
      { nome: "Expresso Duplo",                preco: 9.90,  desc: "Dose dupla pra dar aquele boost",                             foto: "",                   badge: "" },
      { nome: "Chocolate Quente",              preco: 14.90, desc: "Chocolate cremoso artesanal",                                 foto: "",                   badge: "" },
      { nome: "Cappuccino",                    preco: 15.90, desc: "Cappuccino com espuma aveludada",                              foto: "",                   badge: "" },
    ]
  },
  {
    categoria: "Smoothies",
    itens: [
      { nome: "Smoothie Mango Fresh",          preco: 24.90, desc: "Manga, iogurte e toque de hortelã",                           foto: "",                   badge: "" },
      { nome: "Smoothie Morango Whey",         preco: 29.90, desc: "Morango, banana e whey protein",                              foto: "smoothie-morango",   badge: "f" },
      { nome: "Smoothie Tropical",             preco: 29.90, desc: "Mix de frutas tropicais refrescante",                         foto: "",                   badge: "" },
      { nome: "Smoothie Red Velvet",           preco: 32.90, desc: "Red velvet cremoso gelado",                                   foto: "",                   badge: "p" },
      { nome: "Smoothie Capelinha Amendoim",   preco: 25.90, desc: "Amendoim, banana e toque de cacau",                           foto: "",                   badge: "" },
    ]
  },
];

var CONFIG = {
  whatsapp: "5571999999999",
  instagram: "waketododia",
};
