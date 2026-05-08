# ACOPLA Landing Page - Guia de Uso V2

## 📌 Resumo das Versões

| Aspecto | V1 (Original) | V2 (Corrigido) |
|---------|---------------|---------------|
| Tipo | Bundle misto | Web Component puro |
| Estrutura | Constantes + HTML | Class extends HTMLElement |
| shadowDOM | ❌ Não | ✅ Sim (encapsulado) |
| Velo | ❌ Não funciona | ✅ Compatível |
| Validação Wix | ❌ Erro | ✅ OK |
| Compatibilidade | ❌ Limitada | ✅ 100% |

---

## 🚀 COMO USAR V2 NO WIX

### PASSO 1 - Criar o Custom Element

1. **Wix Editor → Dev Tools → Velo Code**
2. **Create → Velo File**
3. Nomeie: `acopla-lp-v2.js`
4. Escolha pasta: `public/custom-elements/`
5. Cole o conteúdo de [public/custom-elements/acopla-lp-v2.js](./acopla-lp-v2.js)
6. **Salve** (Ctrl+S)

✅ Web Component registrado no Wix

---

### PASSO 2 - Adicionar à Página

1. No **Editor de página**, clique **+ → Custom Element**
2. Configure na aba **Settings**:
   - **Source**: `public/custom-elements/acopla-lp-v2.js`
   - **Tag name**: `acopla-lp-v2`
   - **ID**: `acoplaLpV2` (importante!)

3. **Publique** a página

✅ Component rendizado na página

---

### PASSO 3 - Adicionar Código Velo (Opcional)

1. No **Editor de página**, clique **Code** (topo)
2. Cole este código:

```javascript
$w.onReady(function () {
  // SEO Markup
  $w('#acoplaLpV2').seoMarkup = `
    <main>
      <h1>Gestão de Telecom e Tecnologia para Empresas</h1>
      <p>A ACOPLA / ACP TECH organiza, audita e transforma...</p>
    </main>
  `;
  
  console.log('✅ ACOPLA V2 carregado');
});
```

3. **Salve**

✅ SEO e eventos configurados

---

## 🎯 DIFERENÇAS TÉCNICAS V1 vs V2

### V1 (Antigo - ❌ Errado para Wix)
```javascript
const ACOPLA_LP_STYLES = String.raw`...`; // Constante
const ACOPLA_LP_MARKUP = String.raw`...`;  // Constante

// Não há encapsulamento — CSS vaza
// Validação Wix rejeita
```

### V2 (Novo - ✅ Correto)
```javascript
class AcoplaLpV2 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // ✅ shadowDOM
  }
  
  connectedCallback() {
    this.render();    // ✅ Renderiza ao conectar
    this.setupEvents(); // ✅ Event listeners isolados
  }
}

customElements.define('acopla-lp-v2', AcoplaLpV2); // ✅ Registra
```

**Vantagens da V2:**
- ✅ CSS **encapsulado** (não afeta resto da página)
- ✅ HTML **isolado** (seguro)
- ✅ Lifecycle **controlado** (connectedCallback, disconnectedCallback)
- ✅ **Reutilizável** (pode colocar múltiplas vezes)
- ✅ **Velo-compatible** (métodos públicos acessíveis)

---

## 📂 ESTRUTURA DE ARQUIVOS

```
public/custom-elements/
├── acopla-lp.js       ← V1 (original, deixe para referência)
└── acopla-lp-v2.js    ← V2 (NOVO - use este)

velo/
├── page-code-acopla-lp.js     ← V1 (original)
└── page-code-acopla-lp-v2.js  ← V2 (NOVO - use este)
```

---

## 🔧 CONFIGURAÇÃO AVANÇADA

### Passar dados para o Component

```javascript
// No Velo code:
const element = $w('#acoplaLpV2');
element.setAttribute('data-company', 'Acme Corp');
element.setAttribute('data-contact-email', 'contato@acme.com');
```

### Acessar métodos do Component

```javascript
// No Velo code:
const element = $w('#acoplaLpV2');

// Chamar método setSeoMarkup
if (element.setSeoMarkup) {
  element.setSeoMarkup('<main><h1>Custom Title</h1></main>');
}
```

### Escutar eventos customizados

```javascript
// No JS do component (pode adicionar no render()):
const event = new CustomEvent('acopla-loaded', { detail: { version: '2.0' } });
this.dispatchEvent(event);

// No Velo code:
$w('#acoplaLpV2').on('acopla-loaded', (e) => {
  console.log('Component carregado:', e.detail);
});
```

---

## ✅ CHECKLIST PARA PUBLICAR

- [ ] Arquivo `public/custom-elements/acopla-lp-v2.js` criado no Wix
- [ ] Custom Element adicionado à página
- [ ] ID configurado como `acoplaLpV2`
- [ ] Código Velo adicionado (opcional mas recomendado)
- [ ] SEO Markup configurado
- [ ] Imagens em `public/images/` (se usar)
- [ ] Publicada a página
- [ ] Teste em device mobile

---

## 🐛 TROUBLESHOOTING

| Problema | Solução |
|----------|---------|
| "Component não aparece" | Verifique ID da página (`#acoplaLpV2`) e source do Velo |
| "CSS não funciona" | V2 usa shadowDOM isolado — CSS externo não funciona (correto!) |
| "Imagens 404" | Upload para `public/images/` do Wix e atualize paths |
| "Velo code não executa" | Garantir que ID do element é `acoplaLpV2` exato |
| "console.log não mostra" | Abra Dev Tools (F12) na página publicada |

---

## 🎓 RECURSOS

- [MDN - Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Wix - Custom Elements](https://www.wix.com/velo/reference/wix-code-for-custom-elements)
- [shadowDOM Explicado](https://developer.chrome.com/docs/devtools/dom/shadow-dom/)

---

**Versão**: 2.0  
**Data**: Maio 2026  
**Status**: ✅ Pronto para produção
