# acopla-lp

Landing page ACOPLA / ACP TECH separada em arquivos estáticos e em bundle para Wix Custom Element.

## Estrutura

- `index.html`: versão local enxuta, usando CSS, JS e imagens separados.
- `assets/acopla-lp.css`: estilos extraídos do antigo `index.html`.
- `assets/acopla-lp.js`: interações da versão local da LP.
- `assets/images/`: imagens extraídas dos `data:image/png;base64`.
- `partials/acopla-lp.body.html`: HTML do corpo da LP, sem `<head>`, `<style>` e `<script>`.
- `public/custom-elements/acopla-lp.js`: bundle único para usar no Wix como Custom Element.
- `velo/page-code-acopla-lp.js`: exemplo de código Velo para configurar `seoMarkup`.

## Uso local

Abra `index.html` no navegador. Ele já referencia:

```html
<link rel="stylesheet" href="assets/acopla-lp.css">
<script src="assets/acopla-lp.js" defer></script>
```

## Uso no Wix

No Wix/Velo:

1. Crie o arquivo `public/custom-elements/acopla-lp.js`.
2. Cole nele o conteúdo deste repositório em `public/custom-elements/acopla-lp.js`.
3. Adicione um Custom Element na página.
4. Escolha como fonte o Velo file `acopla-lp.js`.
5. Use o tag name `acopla-lp`.
6. Defina o ID do elemento como `#acoplaLp`.
7. Use o exemplo de `velo/page-code-acopla-lp.js` no código da página para preencher `seoMarkup`.
