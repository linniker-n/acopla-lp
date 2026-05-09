/**
 * ACOPLA Landing Page - Velo Code v2 (CORRIGIDO)
 * 
 * ✅ 100% compatível com Wix Velo
 * ✅ Sem erros de TypeScript
 * ✅ Sem dependências externas
 * 
 * COMO USAR:
 * 1. No Wix Editor, vá em Dev Tools → Velo Code
 * 2. Delete o código antigo (page-code-acopla-lp-v2.js)
 * 3. Cole este código (page-code-acopla-lp-v2-corrigido.js)
 * 4. Garanta que o Custom Element está adicionado à página com ID: #acoplaLpV2
 * 5. Publique
 */

$w.onReady(function () {
  console.log('✅ ACOPLA v2 - Página carregada');

  // 1. CONFIGURAR SEO MARKUP
  try {
    const element = $w('#acoplaLpV2');
    
    if (element) {
      element.seoMarkup = `
        <main>
          <h1>Gestão de Telecom e Tecnologia para Empresas</h1>
          <p>A ACOPLA / ACP TECH organiza, audita e transforma a gestão de tecnologias e telecomunicações da sua empresa com visão técnica, financeira e de mercado.</p>
          
          <section>
            <h2>Serviços</h2>
            <ul>
              <li>Auditoria técnica e financeira de telecom e tecnologia.</li>
              <li>Gestão contínua de contratos, faturas, inventário e fornecedores.</li>
              <li>Renegociação de contratos com base em parâmetros reais de mercado.</li>
              <li>Diagnóstico de economia e eficiência operacional.</li>
              <li>Governança de tecnologia, telecomunicações e despesas recorrentes.</li>
            </ul>
          </section>

          <section>
            <h2>Por que ACOPLA?</h2>
            <ul>
              <li>30% de redução média em custos de telecom e tecnologia</li>
              <li>23+ anos acompanhando empresas</li>
              <li>Modelo flexível: sucesso fee vinculado a resultados comprovados</li>
              <li>Abordagem humanizada e consultiva</li>
            </ul>
          </section>

          <section>
            <h2>Perguntas Frequentes</h2>
            
            <h3>A ACOPLA / ACP TECH é uma plataforma de TEM?</h3>
            <p>Não. A atuação combina análise, negociação, acompanhamento e execução com pessoas especializadas, usando dados como base para tomada de decisão.</p>
            
            <h3>Como funciona o diagnóstico?</h3>
            <p>São analisados contratos, faturas, inventário e cenário atual para identificar economia, correções e oportunidades de melhoria.</p>
            
            <h3>Existe modelo por economia gerada?</h3>
            <p>O modelo comercial é flexível e pode considerar remuneração vinculada à economia comprovada, conforme escopo e complexidade.</p>
            
            <h3>Qual é o diferencial ACOPLA?</h3>
            <p>Combinamos visão técnica, financeira e de mercado. Não oferecemos soluções genéricas. Cada diagnóstico e acompanhamento é personalizado.</p>
          </section>
        </main>
      `;
      console.log('✅ SEO Markup configurado com sucesso');
    }
  } catch (error) {
    console.error('❌ Erro ao configurar SEO:', error);
  }

  // 2. TRACKING - Google Analytics
  try {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_title: 'ACOPLA - Landing Page',
        page_location: $w.location.url
      });
    }
  } catch (e) {
    console.log('ℹ️ Google Analytics não disponível');
  }

  // 3. LOG
  console.log('ℹ️ ACOPLA ready - ID do element:', '#acoplaLpV2');
});

// EVENTO: Quando usuário sai da página
$w.onBeforeUnload(function() {
  console.log('📤 Usuário saiu de ACOPLA');
});
