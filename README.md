# Wake — Cardápio Digital

## Estrutura do Projeto

```
wake-cardapio/
├── index.html          ← Página principal (NÃO editar)
├── menu-data.js        ← EDITE AQUI: produtos, preços, descrições, combos
├── README.md           ← Este arquivo
├── assets/
│   └── logo.png        ← Logo da Wake
└── photos/             ← Fotos dos produtos (JPG)
    ├── cuscuz-coalho.jpg
    ├── cuscuz-camarao.jpg
    └── ...
```

## Como Editar o Cardápio

Tudo que você precisa editar está no arquivo **`menu-data.js`**. Abra com qualquer editor de texto.

### Alterar preço
Encontre o produto e mude o número após `p:`:
```
{ n: "Cuscuz de Camarão", p: 36.90, ...  ←  mude 36.90 pro novo preço
```

### Alterar nome ou descrição
```
{ n: "Nome do Prato", p: 26.90, d: "Descrição do prato aqui", ...
```

### Adicionar foto a um produto
1. Coloque a foto JPG na pasta `/photos/` (ex: `cafe-expresso.jpg`)
2. No `menu-data.js`, encontre o produto e preencha o campo `img:` com o nome SEM extensão:
```
{ n: "Café Expresso", p: 5.90, d: "...", img: "cafe-expresso", ...
                                               ^^^^^^^^^^^^^^^^
```

### Remover um produto
Delete o bloco inteiro `{ }` do produto (incluindo a vírgula depois):
```
// DELETE TUDO ISSO:
{ n: "Queijo Quente com Ovo", p: 20.90, d: "...", img: "", b: "" },
```

### Adicionar um produto novo
Copie um bloco `{ }` existente da mesma categoria e edite:
```
{ n: "Novo Produto", p: 29.90, d: "Descrição aqui", img: "", b: "" },
```

### Badges (etiquetas)
- `b: "p"` → Mais pedido (marrom)
- `b: "n"` → Novidade (cinza)
- `b: "f"` → Fitness (verde)
- `b: ""`  → Sem badge

### Editar combos
Mesma lógica. Os campos são:
- `n:` nome do combo
- `i:` o que inclui (texto descritivo)
- `p:` preço do combo
- `o:` preço original somado
- `s:` economia pro cliente (o - p)

### Editar informações do restaurante
No topo do arquivo tem a seção `restaurante:` — mude nome, WhatsApp, Instagram, etc.

## Como Adicionar Fotos

1. Tire a foto do prato
2. Envie pelo WhatsApp pra si mesmo (converte automaticamente pra JPG)
3. Salve na pasta `/photos/` com um nome descritivo (ex: `smoothie-mango.jpg`)
4. No `menu-data.js`, preencha o campo `img:` com o nome sem extensão

**Tamanho recomendado:** fotos quadradas ou próximas de quadrado, mínimo 400x400px.

## Hospedagem

### Vercel (recomendado)
1. Crie uma conta em vercel.com
2. Conecte com GitHub
3. Faça push do projeto pro GitHub
4. A Vercel detecta e faz deploy automaticamente
5. Aponte o domínio `cardapiodawake.com.br` nas configurações

### Netlify (alternativa)
1. Crie uma conta em netlify.com
2. Arraste a pasta inteira do projeto pro dashboard
3. Pronto, já está no ar
4. Configure o domínio customizado
