/**
 * ACOPLA Landing Page - Velo Code v2
 * 
 * ✅ Versão 2 do código de página Wix
 * 
 * COMO USAR:
 * 1. No Wix Editor, vá em Dev Tools → Velo Code
 * 2. Cole este código na página
 * 3. Garanta que o Custom Element está adicionado à página com ID: #acoplaLpV2
 */

$w.onReady(function () {
  console.log('✅ ACOPLA v2 - Código de página carregado');

  // 1. CONFIGURAR SEO MARKUP
  const seoElement = $w('#acoplaLpV2');
  if (seoElement) {
    seoElement.seoMarkup = `
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

  // 2. EVENT LISTENER PARA BOTÕES DE CTA
  const ctaButton = $w('#acoplaLpV2').querySelector && $w('#acoplaLpV2').querySelector('.btn-lime');
  if (ctaButton) {
    ctaButton.addEventListener('click', function() {
      // Rolar até formulário ou abrir modal
      console.log('CTA clicado');
    });
  }

  // 3. TRACKING (Google Analytics, Hotjar, etc)
  // Enviar evento quando usuário vê o component
  if (window.gtag) {
    gtag('event', 'view_acopla_landing_page');
  }

  // 4. INTEGRAÇÃO COM API (opcional)
  // Exemplo: Buscar dados de clientes
  import wixData from 'wix-data';
  
  // Se quiser integrar com banco de dados Wix:
  /*
  wixData.query('Clientes')
    .find()
    .then((results) => {
      console.log('Clientes carregados:', results.items.length);
    });
  */

  // 5. MONITORAMENTO DE PERFORMANCE
  if (window.performance && window.performance.timing) {
    const pageLoadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
    console.log('⏱️ Tempo de carregamento:', pageLoadTime + 'ms');
  }
});

// EVENTO: Quando usuário sai da página
$w.onBeforeUnload(function() {
  console.log('Usuário saiu da página ACOPLA');
});

// EVENTO: Quando página fica visível novamente (aba)
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    console.log('Página ficou oculta');
  } else {
    console.log('Página ficou visível');
  }
});
