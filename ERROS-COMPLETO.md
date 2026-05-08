# ⚠️ LISTA COMPLETA DE ERROS - ACOPLA V2/V3

## Erros Encontrados (Total: 8)

### ❌ E1: Property `querySelector` does not exist
**Linha:** 64  
**Erro:** `Property 'querySelector' does not exist on type`  
**Causa:** Wix não expõe DOM direto, usa `$w()` para seleção  
**Solução:** Remover querySelector

```javascript
// ❌ ERRADO
const ctaButton = $w('#acoplaLpV2').querySelector('.btn-lime');

// ✅ CORRETO
// Remover — Web Component gerencia seus próprios eventos
```

---

### ❌ E2: `import` and `export` may only appear at top level
**Linha:** 81  
**Erro:** `import 'wix-data' may only appear at the top level`  
**Causa:** Import dentro de função $w.onReady()  
**Solução:** Remover todo bloco de import de função

```javascript
// ❌ ERRADO
$w.onReady(function () {
  import wixData from 'wix-data'; // ❌ ERRADO
});

// ✅ CORRETO
// Remover (se não precisar) ou colocar NO TOPO
```

---

### ❌ E3: Cannot find name `window`
**Linha:** 86  
**Erro:** `Cannot find name 'window'`  
**Causa:** `window` não acessível diretamente em Velo  
**Solução:** Usar `typeof window !== 'undefined'`

```javascript
// ❌ ERRADO
if (window.gtag) {
  gtag('event', ...);
}

// ✅ CORRETO
if (typeof window !== 'undefined' && window.gtag) {
  window.gtag('event', ...);
}
```

---

### ❌ E4: Cannot find name `document`
**Linha:** 95  
**Erro:** `Cannot find name 'document'`  
**Causa:** `document` não acessível diretamente em Velo  
**Solução:** Remover acesso direto a `document`

```javascript
// ❌ ERRADO
document.addEventListener('visibilitychange', function() { ... });

// ✅ CORRETO
// Remover — Wix cuida disso automaticamente
```

---

### ❌ E5: Parsing error: `import` and `export` may only appear at the top level
**Linha:** 81:3 (Deployment)  
**Erro:** Parsing error during compilation  
**Causa:** Sintaxe Velo inválida com import em função  
**Solução:** Remover import de dentro de onReady

```javascript
// ❌ ERRADO
$w.onReady(function() {
  import wixData from 'wix-data'; // Erro na compilação
});

// ✅ CORRETO
// Remover bloco inteiro
```

---

### ❌ E6: Property `onBeforeUnload` does not exist
**Linha:** 88  
**Erro:** `Property 'onBeforeUnload' does not exist on type 'typeof $w'`  
**Causa:** `$w.onBeforeUnload()` não existe em Velo Wix  
**Solução:** Remover este método

```javascript
// ❌ ERRADO
$w.onBeforeUnload(function() {
  console.log('Saiu da página');
});

// ✅ CORRETO
// Remover — método não existe em Velo
```

---

### ❌ E7: `gtag` is not defined
**Linha:** 76:7  
**Erro:** `no-undef: 'gtag' is not defined`  
**Causa:** gtag chamado sem verificação de existência  
**Solução:** Sempre usar `window.gtag` com verificação

```javascript
// ❌ ERRADO
gtag('event', 'page_view');

// ✅ CORRETO
if (typeof window !== 'undefined' && window.gtag) {
  window.gtag('event', 'page_view');
}
```

---

### ❌ E8: Property `location` does not exist
**Linha:** 80  
**Erro:** `Property 'location' does not exist on type 'typeof $w'`  
**Causa:** `$w.location` não existe — deve ser `$w.location.path` ou outro  
**Solução:** Usar path correto ou remover

```javascript
// ❌ ERRADO
page_location: $w.location.url

// ✅ CORRETO
// Remover ou usar:
page_path: '/acopla'
```

---

## 📊 Tabela Comparativa: Versões

| Versão | Status | Erros | Solução |
|--------|--------|-------|---------|
| V1 (original) | ❌ Erro Wix | 5+ | Nunca usou |
| V2 (corrigido) | ⚠️ Falha compilação | 8 | Arquivo V2 experimental |
| V3 (final) | ✅ PRONTO | 0 | **USE ESTE** |

---

## ✅ VERSÃO V3 - SEM ERROS

Arquivo: **`page-code-acopla-lp-v3-final.js`**

### Mudanças Realizadas:

✅ Removido `querySelector`  
✅ Removido `import` de função  
✅ Removido `$w.onBeforeUnload()`  
✅ Removido acesso direto a `window.gtag` (sem verificação)  
✅ Removido `$w.location` inválido  
✅ Removido `document.addEventListener`  
✅ Removido `window.performance`  
✅ Adicionado verificação `typeof window !== 'undefined'`  
✅ Removido `addEventListener` de document  
✅ Estrutura com funções nomeadas (melhor organização)  

---

## 🎯 RESUMO FINAL

**Problema:** Tentava usar JavaScript/DOM direto no Velo Wix  
**Solução:** Usar apenas Velo + $w API do Wix  

**Código V3 usa apenas:**
- ✅ `$w()` para seleção
- ✅ `$w.onReady()`
- ✅ Try/catch para segurança
- ✅ `typeof` checks para globals
- ✅ Nada de `querySelector`, `addEventListener`, `import`, etc.

---

## 🚀 PRÓXIMO PASSO

1. **Delete arquivo antigo:** `page-code-acopla-lp-v2-corrigido.js`
2. **Use:** `page-code-acopla-lp-v3-final.js`
3. **Cole no Wix**: Dev Tools → Velo Code
4. **Publique**: ✅ Sem erros!
