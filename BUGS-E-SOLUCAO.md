# 🐛 BUGS ENCONTRADOS + SOLUÇÕES

## Status da LP Publicada
🔗 https://www.acoplagestao.com.br/lp1

### Bugs Visuais Encontrados:

| # | Bug | Causa | Impacto |
|---|-----|-------|---------|
| B1 | Hero section sem background escuro | CSS não aplicado pelo shadowDOM | ❌ Fundo branco em vez de preto |
| B2 | Falta cores lime (verde-amarelo) | Estilos inline não funcionam | ❌ Sem destaques visuais |
| B3 | Layout muito pequeno/comprimido | Falta padding/sizing no root | ❌ Seção hero reduzida |
| B4 | Imagens não aparecem | Paths incorretos ou não carregados | ❌ Logo vazia |
| B5 | Stats sem estilo visual | CSS de stats não renderizado | ⚠️ Visível mas feio |

---

## ✅ SOLUÇÃO - Arquivo Corrigido

### 📄 **acopla-lp-v2-fixed.js**
- ✅ shadowDOM com ALL estilos inline
- ✅ Cores corretas (dark + lime)
- ✅ Layout hero 100vh
- ✅ Responsive mobile
- ✅ Animações de scroll funcionando
- ✅ Counters animados

---

## 🔧 COMO CORRIGIR A LP PUBLICADA

### Passo 1: Atualizar o Custom Element no Wix

1. **Wix Editor → Dev Tools → Velo Code**
2. Abra `public/custom-elements/acopla-lp-v2.js` (ou qual estiver usando)
3. **Delete TODO conteúdo**
4. Cole o código de **`acopla-lp-v2-fixed.js`**
5. **Salve** (Ctrl+S)
6. **Publique**

### Passo 2: Testar Localmente

```
1. Abra https://www.acoplagestao.com.br/lp1 em incógnito
2. F12 → Console
3. Verifique se há erros
4. Limpe cache (Ctrl+Shift+Delete)
5. Recarregue (F5)
```

---

## 📋 Checklist de Verificação

- [ ] Background do hero é escuro (#080f06)
- [ ] Cores lime (#bcdb05) aparecem nas seções
- [ ] Logo ACOPLA aparece no topo
- [ ] Título é legível e grande
- [ ] Botão CTA tem hover effect
- [ ] Stats aparecem com layout grid 3 colunas
- [ ] Mobile: Stats em 2 colunas em tablet
- [ ] Mobile: Stats em 1 coluna em mobile
- [ ] Scroll progress bar funciona
- [ ] Nav muda cor ao scroll

---

## 🎯 Alternativa: Versão Minimalista (se v2-fixed não funcionar)

Se ainda tiver problemas com shadowDOM, podemos:

1. **Usar template string simples** em vez de Web Component
2. **Injetar CSS global** na página (sem shadowDOM)
3. **Usar Wix Elements nativos** para partes da LP

Mas recomendo testar `acopla-lp-v2-fixed.js` primeiro.

---

## 📱 Responsividade

```css
Desktop: 3 stats em linha
Tablet (768px): 2 stats em linha
Mobile (480px): 1 stat por linha
```

---

## 🚀 Próximos Passos

1. ✅ Atualize o arquivo no Wix com `acopla-lp-v2-fixed.js`
2. ✅ Teste em dev mode
3. ✅ Publique quando validar
4. ✅ Verifique em mobile (F12 → Responsive)
5. ✅ Teste em diferentes navegadores

**Estimado:** 2-3 minutos para corrigir
