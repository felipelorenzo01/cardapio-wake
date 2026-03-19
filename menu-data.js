// ============================================================
//  WAKE — CARDÁPIO DIGITAL
//  Arquivo de dados do cardápio
//
//  COMO EDITAR:
//  - Para alterar preço: mude o número após "p:"
//  - Para alterar nome: mude o texto após "n:"
//  - Para alterar descrição: mude o texto após "d:"
//  - Para adicionar foto: coloque a imagem na pasta /photos
//    e escreva o nome do arquivo (sem .jpg) após "img:"
//  - Para remover um item: delete o bloco inteiro { } do item
//  - Para adicionar um item: copie um bloco { } e edite
//  - badge "p" = Mais pedido, "n" = Novidade, "f" = Fitness
//    deixe "" para sem badge
// ============================================================

const MENU_DATA = {

  // ---- INFORMAÇÕES DO RESTAURANTE ----
  restaurante: {
    nome: "Wake",
    tagline: "Real Food · Real Energy",
    frase: "Comida real para o seu dia a dia.",
    instagram: "@wake.realfood",
    whatsapp: "5571999999999",  // número sem + e sem espaços
    cidade: "Salvador, BA",
    horario: "Seg-Dom",
  },

  // ---- CATEGORIAS E PRODUTOS ----
  // Para REMOVER uma categoria inteira: delete o bloco { cat:..., items:[...] }
  // Para ADICIONAR uma categoria: copie um bloco e edite
  // A ORDEM aqui é a ordem que aparece no cardápio

  categorias: [
    {
      cat: "Cuscuz",
      items: [
        { n: "Cuscuz de Queijo Coalho",    p: 26.90, d: "Cuscuz nordestino com queijo coalho gratinado e ovo",       img: "cuscuz-coalho",    b: "" },
        { n: "Cuscuz de Camarão",          p: 36.90, d: "Camarões salteados na manteiga com cuscuz e coalho",       img: "cuscuz-camarao",   b: "p" },
        { n: "Cuscuz de Carne do Sol",     p: 32.90, d: "Cuscuz com carne do sol desfiada e ovo",                   img: "cuscuz-carne-sol", b: "" },
        { n: "Cuscuz de Fumeiro",          p: 32.90, d: "Linguiça fumeiro artesanal com cuscuz e ovo",              img: "cuscuz-fumeiro",   b: "" },
      ]
    },
    {
      cat: "Croissant",
      items: [
        { n: "Croissant de Ovo e Bacon",   p: 32.90, d: "Croissant folhado, ovo e bacon crocante",                  img: "",                  b: "" },
        { n: "Croissant Misto",            p: 28.90, d: "Croissant com queijo e presunto",                          img: "",                  b: "" },
        { n: "Croissant de Cogumelo",      p: 39.90, d: "Mix de cogumelos salteados no croissant",                  img: "croissant-cogumelo",b: "n" },
      ]
    },
    {
      cat: "Omelete",
      items: [
        { n: "Omelete de Queijo",          p: 24.90, d: "Omelete clássico com queijo derretido",                    img: "omelete-queijo",   b: "" },
        { n: "Omelete de Queijo e Presunto",p: 25.90, d: "Queijo e presunto no ponto",                              img: "",                  b: "" },
        { n: "Omelete Frango & Cream Cheese",p: 28.90, d: "Frango desfiado com cream cheese cremoso",               img: "",                  b: "" },
      ]
    },
    {
      cat: "Sanduíches",
      items: [
        { n: "Misto com Ovo",             p: 26.90, d: "Sanduíche misto quente com ovo na chapa",                   img: "",                  b: "" },
        { n: "Queijo Quente com Ovo",      p: 20.90, d: "Pão na chapa, queijo derretido e ovo",                     img: "",                  b: "" },
      ]
    },
    {
      cat: "Saladas",
      items: [
        { n: "Salada de Frango",           p: 39.90, d: "Mix de folhas frescas com frango grelhado",                img: "",                  b: "" },
        { n: "Salada de Filé",             p: 49.90, d: "Tiras de filé mignon sobre mix de folhas e queijo",        img: "salada-file",      b: "p" },
        { n: "Salada de Camarão",          p: 54.90, d: "Camarões nobres com parmesão e castanhas",                 img: "salada-camarao",   b: "" },
      ]
    },
    {
      cat: "Tapioca",
      items: [
        { n: "Tapioca Fumeiro",            p: 29.90, d: "Tapioca recheada com linguiça fumeiro",                    img: "tapioca-fumeiro",  b: "" },
        { n: "Tapioca Filé & Cogumelo",    p: 35.90, d: "Filé mignon com cogumelos frescos",                       img: "",                  b: "n" },
        { n: "Tapioca Camarão",            p: 42.90, d: "Camarões salteados com pesto e tomate",                   img: "tapioca-camarao",  b: "" },
        { n: "Tapioca Mista",             p: 24.90, d: "Queijo derretido e presunto na tapioca",                   img: "tapioca-mista",    b: "" },
        { n: "Tapioca Veggie",            p: 22.90, d: "Legumes grelhados, queijo e tomate",                       img: "tapioca-veggie",   b: "" },
        { n: "Tapioca Doce de Leite",     p: 22.90, d: "Doce de leite artesanal na tapioca",                       img: "tapioca-doce-leite",b: "" },
        { n: "Tapioca Nutella",           p: 23.90, d: "Nutella cremosa na tapioca crocante",                      img: "tapioca-nutella",  b: "" },
      ]
    },
    {
      cat: "Cafés",
      items: [
        { n: "Café Expresso",             p: 5.90,  d: "Expresso curto e encorpado",                               img: "",                  b: "" },
        { n: "Expresso Duplo",            p: 9.90,  d: "Dose dupla pra dar aquele boost",                          img: "",                  b: "" },
        { n: "Chocolate Quente",          p: 14.90, d: "Chocolate cremoso artesanal",                              img: "",                  b: "" },
        { n: "Cappuccino",               p: 15.90, d: "Cappuccino com espuma aveludada",                           img: "",                  b: "" },
      ]
    },
    {
      cat: "Smoothies",
      items: [
        { n: "Smoothie Mango Fresh",      p: 24.90, d: "Manga, banana, leite vegetal e água de coco",                       img: "",                  b: "" },
        { n: "Smoothie Morango Whey",     p: 29.90, d: "Morango, banana e whey protein",                           img: "",                  b: "f" },
        { n: "Smoothie Tropical",         p: 29.90, d: "Maracujá, tâmaras, banana, leite e whey de doce de leite ",                      img: "",                  b: "" },
        { n: "Smoothie Red Velvet",       p: 32.90, d: "Framboesa, Morango, Chia, Banana, Leite e Whey Protein",                                img: "",                  b: "p" },
        { n: "Smoothie Capelinha Amendoim",p: 25.90, d: "Pasta de amendoim, abacaxi, banana e leite",                       img: "",                  b: "" },
      ]
    },

  ],
};
