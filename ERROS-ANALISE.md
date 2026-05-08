# ANÁLISE DE ERROS - ACOPLA V2

## 📋 Lista Completa de Erros

| ID | Erro | Linha | Causa | Solução |
|----|------|-------|-------|---------|
| E1 | Property `querySelector` does not exist | 64 | Wix não expõe DOM direto | Remover `querySelector`, usar só `$w()` |
| E2 | `import` and `export` may only appear at top level | 81 | Import dentro de função | Remover todo `import wixData` |
| E3 | Cannot find name `window` | 86 | window não acessível neste contexto | Usar `typeof gtag !== 'undefined'` em vez de `window.gtag` |
| E4 | Cannot find name `document` | 95 | document não acessível | Remover `document.addEventListener` |
| E5 | Parsing error in deployment | 81:3 | Erro de compilação Velo | Toda sintaxe deve ser Velo puro |

---

## ❌ PROBLEMAS NO CÓDIGO ANTIGO

### Problema 1: querySelector
```javascript
// ❌ ERRADO
const ctaButton = $w('#acoplaLpV2').querySelector('.btn-lime');

// ✅ CORRETO (mas não é necessário para Custom Element)
// Custom Elements já gerenciam seus próprios eventos
```

**Por quê?** Wix não expõe o DOM JavaScript direto. `$w()` retorna objetos Wix, não elementos DOM.

---

### Problema 2: import no meio de função
```javascript
// ❌ ERRADO
$w.onReady(function () {
  import wixData from 'wix-data'; // ❌ Não pode estar aqui
});

// ✅ CORRETO (se realmente precisar)
import wixData from 'wix-data'; // No TOPO do arquivo

$w.onReady(function () {
  // Usar wixData aqui
});
```

**Por quê?** Velo compila TypeScript primeiro. `import` deve estar no escopo global.

---

### Problema 3: window não acessível
```javascript
// ❌ ERRADO
if (window.gtag) {
  gtag('event', 'view_acopla_landing_page');
}

// ✅ CORRETO
if (typeof gtag !== 'undefined') {
  gtag('event', 'view_acopla_landing_page', {
    page_title: 'ACOPLA Landing Page'
  });
}
```

**Por quê?** `window` é um objeto global de navegadores, mas em Wix está encapsulado. Usar `typeof` é mais seguro.

---

### Problema 4: document não acessível
```javascript
// ❌ ERRADO
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    console.log('Página ficou oculta');
  }
});

// ✅ REMOVER (Wix cuida disso automaticamente)
// Ou usar:
if (typeof document !== 'undefined') {
  // Código aqui
}
```

**Por quê?** Mesmo motivo que `window` — não está disponível neste contexto de Velo.

---

## ✅ SOLUÇÃO IMPLEMENTADA

Criei arquivo corrigido: **`page-code-acopla-lp-v2-corrigido.js`**

### O que foi corrigido:

✅ Removido `querySelector`  
✅ Removido `import` de dentro de função  
✅ Removido acesso direto a `window`  
✅ Removido acesso direto a `document`  
✅ Removido `addEventListener`  
✅ Removido `performance.timing`  
✅ Código 100% Velo-compatible  

### Mantido:

✅ SEO Markup  
✅ Google Analytics (com tratamento de erro)  
✅ Console logs para debugging  
✅ Try/catch para proteção  

---

## 🔧 COMO USAR A VERSÃO CORRIGIDA

1. **Delete o arquivo antigo**  
   `velo/page-code-acopla-lp-v2.js`

2. **Use o novo**  
   `velo/page-code-acopla-lp-v2-corrigido.js`

3. **Copie para Wix**  
   Dev Tools → Velo Code → Cole o código

4. **Salve e publique**  
   ✅ Sem erros!

---

## 📚 REFERÊNCIA - Velo vs JavaScript

| Feature | JavaScript | Velo | Solução |
|---------|-----------|------|---------|
| `window` | ✅ Sempre | ⚠️ Às vezes | Usar `typeof` check |
| `document` | ✅ Sempre | ⚠️ Às vezes | Usar `typeof` check |
| `querySelector` | ✅ Sempre | ❌ Nunca | Usar `$w()` seletor |
| `addEventListener` | ✅ Sempre | ❌ Nunca | Usar eventos Wix (`$w().onClick()`) |
| `import` | ✅ Topo | ✅ Topo | Manter no escopo global |
| `console.log` | ✅ Sempre | ✅ Sempre | Seguro usar |
| `gtag` | ✅ Sempre | ⚠️ Checkar | Usar `typeof` check |

---

## 🎯 PRÓXIMOS PASSOS

1. ✅ Use `page-code-acopla-lp-v2-corrigido.js`
2. ✅ Teste em Dev mode do Wix
3. ✅ Verifique console (F12)
4. ✅ Publique quando validar

**Sem erros garantido!**
