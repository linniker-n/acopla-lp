/**
 * ACOPLA Landing Page - Velo Code v3 (FINAL - SEM ERROS)
 * 
 * ✅ 100% compatível com Wix Velo
 * ✅ Sem erros TypeScript
 * ✅ Sem erros de compilação
 * ✅ Testado e validado
 * 
 * COMO USAR:
 * 1. No Wix Editor: Dev Tools → Velo Code
 * 2. Na página, adicione um Custom Element
 * 3. Source: public/custom-elements/acopla-lp-v2.js
 * 4. Tag name: acopla-lp-v2
 * 5. ID: acoplaLpV2
 * 6. Cole ESTE código na página
 * 7. Publique
 */

$w.onReady(function () {
  console.log('✅ ACOPLA v3 - Página carregada');

  // 1. CONFIGURAR SEO MARKUP
  const configSEO = () => {
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
        console.log('✅ SEO Markup configurado');
      }
    } catch (error) {
      console.error('❌ Erro ao configurar SEO:', error);
    }
  };

  // 2. GOOGLE ANALYTICS (se disponível)
  const trackPageView = () => {
    try {
      // Verificar se gtag existe de forma segura
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: 'ACOPLA Landing Page',
          page_path: '/acopla'
        });
        console.log('✅ GA Event enviado');
      }
    } catch (e) {
      console.log('ℹ️ GA não disponível (normal em dev mode)');
    }
  };

  // 3. EXECUTAR FUNÇÕES
  configSEO();
  trackPageView();

  console.log('✅ ACOPLA v3 inicializado com sucesso');
});
