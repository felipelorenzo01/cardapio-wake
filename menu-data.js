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
      { nome: "Cuscuz de Carne do Sol",        preco: 32.90, desc: "Cuscuz com carne do sol e ovo",                      foto: "cuscuz-carne-sol",   badge: "" },
      { nome: "Cuscuz de Fumeiro",             preco: 32.90, desc: "carne de fumeiro artesanal com cuscuz e ovo",                 foto: "cuscuz-fumeiro",     badge: "" },
    ]
  },
  {
    categoria: "Croissant",
    itens: [
      { nome: "Croissant de Ovo e Bacon",      preco: 32.90, desc: "Croissant folhado recheado com ovo e bacon crocante",                     foto: "croissant-ovo-bacon", badge: "" },
      { nome: "Croissant Misto",               preco: 28.90, desc: "Croissant folhado recheado com queijo e presunto",                             foto: "croissant-misto",    badge: "" },
      { nome: "Croissant de Cogumelo",         preco: 34.90, desc: "Croissant folhado recheado com mix de cogumelos salteados, rúcula e requeijão",                     foto: "croissant-cogumelo", badge: "p" },
      { nome: "Croissant de Doce de Leite",         preco: 28.90, desc: "Croissant folhado recheado com doce de leite artesanalt",                     foto: "croissant-nutella", badge: "" },
      { nome: "Croissant de Nutella",         preco: 30.90, desc: "Croissant folhando recheado com nutella cremosa",                     foto: "", badge: "croissant-nutella" },
    ]
  },
  {
    categoria: "Omelete",
    itens: [
      { nome: "Omelete de Queijo",             preco: 24.90, desc: "Omelete clássico recheado com queijo derretido",                       foto: "omelete-queijo",     badge: "" },
      { nome: "Omelete de Queijo e Presunto",  preco: 25.90, desc: "Omelete clássico recheado com queijo e presunto",                                  foto: "omelete-presunto",   badge: "" },
      { nome: "Omelete Frango & Cream Cheese", preco: 28.90, desc: "Omelete clássico recheado com frango desfiado e cream cheese cremoso",                    foto: "omelete-frango",     badge: "" },
    ]
  },
  {
    categoria: "Sanduíches",
    itens: [
      { nome: "Misto com Ovo",                 preco: 24.90, desc: "Sanduíche misto quente com ovo na chapa",                     foto: "misto-ovo",          badge: "" },
      { nome: "Queijo Quente com Ovo",         preco: 20.90, desc: "Pão na chapa, queijo derretido e ovo",                        foto: "queijo-quente",      badge: "" },
    ]
  },
  {
    categoria: "Saladas",
    itens: [
      { nome: "Salada de Frango",              preco: 39.90, desc: "Mix de folhas frescas com frango grelhado e castanha",                   foto: "salada-frango",      badge: "" },
      { nome: "Salada de Filé",                preco: 49.90, desc: "Mix de folhas frescas com tiras de filé mignon, queijo gorgonzola e castanha",           foto: "salada-file",        badge: "p" },
      { nome: "Salada de Camarão",             preco: 57.90, desc: "Mix de folhas frescas com Camarões nobres, parmesão e castanhas",                    foto: "salada-camarao",     badge: "" },
    ]
  },
  {
    categoria: "Tapioca",
    itens: [
      { nome: "Tapioca Fumeiro",               preco: 29.90, desc: "Tapioca recheada com carne de fumeiro artesanal",                       foto: "tapioca-fumeiro",    badge: "p" },
      { nome: "Tapioca Filé & Cogumelo",       preco: 38.90, desc: "Tapioca recheada com filé mignon e cogumelos frescos",                           foto: "tapioca-file",                   badge: "" },
      { nome: "Tapioca Camarão",               preco: 42.90, desc: "Tapioca recheada com camarões salteados, pesto e tomate",                       foto: "tapioca-camarao",    badge: "" },
      { nome: "Tapioca Mista",                 preco: 24.90, desc: "Tapioca recheada com queijo derretido e presunto",                      foto: "tapioca-mista",      badge: "" },
      { nome: "Tapioca Veggie",                preco: 22.90, desc: "Tapioca recheada com queijo,tomate, manjericão e nosso tradicional molho pesto",                          foto: "tapioca-veggie",     badge: "" },
      { nome: "Tapioca Doce de Leite",         preco: 22.90, desc: "Tapioca recheada com Doce de leite artesanal",                          foto: "tapioca-doce-leite", badge: "" },
      { nome: "Tapioca Nutella",               preco: 24.90, desc: "Tapioca recheada com nutella cremosa",                         foto: "tapioca-nutella",    badge: "" },
    ]
     },
  {
    categoria: "Smoothies",
    itens: [
      { nome: "Smoothie Maracujá e Doce de Leite",          preco: 29.90, desc: "Maracujá, tâmaras, banana, leite e whey de doce de leite",                           foto: "maracuja-whey",                   badge: "p" },
      { nome: "Smoothie Morango Whey",         preco: 29.90, desc: "Morango, banana, leite e whey protein",                              foto: "morango-whey",   badge: "" },
      { nome: "Smoothie Frutas Vermelhas",             preco: 29.90, desc: "Morango, framboesa, chia, banana, leite e whey protein",                         foto: "smoothie-frutas-vermelhas",                   badge: "" },
      { nome: "Smoothie Bluefit",           preco: 29.90, desc: "Blueberry, acaí, água de coco e whey protein",                                   foto: "smoothie-bluetfit",                   badge: "" },
      { nome: "Smoothie Capelinha Amendoim",   preco: 29.90, desc: "Pasta de amendoim, banana, abacaxi, leite e whey protein",                           foto: "smoothie-capelinha",                   badge: "" },
    ]
  },
  {
    categoria: "Cafés",
    itens: [
      { nome: "Café Expresso",                 preco: 5.90,  desc: "Expresso curto e encorpado",                                  foto: "espresso",                   badge: "" },
      { nome: "Expresso Duplo",                preco: 9.90,  desc: "Dose dupla pra dar aquele boost",                             foto: "espresso-duplo",                   badge: "" },
      { nome: "Chocolate Quente",              preco: 14.90, desc: "Chocolate cremoso artesanal",                                 foto: "chocolate-quente",                   badge: "" },
      { nome: "Cappuccino",                    preco: 18.90, desc: "Cappuccino com espuma aveludada",                              foto: "capuccino",                   badge: "" },
       { nome: "Café com Leite",                    preco: 11.90, desc: "Cappuccino com leite clássico",                              foto: "",                   badge: "" },
    ]
  },
  {
    categoria: "Bebidas",
    itens: [
      { nome: "Coca Cola",                 preco: 7.90,  desc: "",                                  foto: "coca-cola",                   badge: "" },
      { nome: "Coca Cola Zero",                preco: 7.90,  desc: "",                             foto: "coca-zero",                   badge: "" },
      { nome: "Schweppes",              preco: 8.90, desc: "",                                 foto: "swcheppes",                   badge: "" },
      { nome: "Água sem Gás",                    preco: 5.90, desc: "",                              foto: "",                   badge: "" },
      { nome: "Água com Gás",                    preco: 6.90, desc: "",                              foto: "",                   badge: "" },
      { nome: "Água de Coco",                    preco: 8.90, desc: "",                              foto: "",                   badge: "" },
      { nome: "Suco de Laranja",                    preco: 12.90, desc: "",                              foto: "",                   badge: "" },
    ]
  },
];
var EXTRAS = {
  "Cuscuz": [
    { nome: "Carne do Sol",       preco: 12.90 },
    { nome: "Fumeiro",            preco: 13.90 },
    { nome: "Frango",             preco: 10.90 },
    { nome: "Camarão",            preco: 21.90 },
    { nome: "Queijo Coalho",      preco: 12.90 },
    { nome: "Ovo Extra",          preco: 4.90 },
    { nome: "Bacon Extra",        preco: 8.90 },
  ],
  "Croissant": [
    { nome: "Ovo Extra",          preco: 4.90 },
    { nome: "Bacon Extra",        preco: 8.90 },
  ],
  "Omelete": [
    { nome: "Frango",             preco: 10.90 },
    { nome: "Ovo Extra",          preco: 4.90 },
    { nome: "Bacon Extra",        preco: 8.90 },
  ],
  "Sanduíches": [
    { nome: "Ovo Extra",          preco: 4.90 },
  ],
  "Saladas": [
    { nome: "Frango",             preco: 10.90 },
    { nome: "Filé Mignon",        preco: 19.90 },
    { nome: "Camarão",            preco: 21.90 },
  ],
  "Smoothies": [
    { nome: "Whey Extra",         preco: 8.90 },
    { nome: "Leite sem lactose",  preco: 2.90 },
  ],
};

var COMBOS = [
  { nome: "Combo Cuscuz Queijo Coalho",  itens: "Cuscuz Queijo Coalho + Bebida",  bebida: "Suco de laranja ou Café longo",  preco: 34.90,  categoria: "Cuscuz" },
  { nome: "Combo Cuscuz Fumeiro",        itens: "Cuscuz Fumeiro + Bebida",         bebida: "Suco de laranja ou Café longo",  preco: 40.90,  categoria: "Cuscuz" },
  { nome: "Combo Cuscuz Carne do Sol",   itens: "Cuscuz Carne do Sol + Bebida",    bebida: "Suco de laranja ou Café longo",  preco: 40.90,  categoria: "Cuscuz" },
  { nome: "Combo Tapioca Fumeiro",       itens: "Tapioca Fumeiro + Bebida",         bebida: "Suco de laranja ou Café longo",  preco: 38.50,  categoria: "Tapioca" },
  { nome: "Combo Tapioca Mista",         itens: "Tapioca Mista + Bebida",           bebida: "Suco de laranja ou Café longo",  preco: 33.90,  categoria: "Tapioca" },
];
var CONFIG = {
  whatsapp: "5571981817884",
  instagram: "waketododia",
};
