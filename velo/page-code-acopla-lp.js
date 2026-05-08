// Page code example for the Wix page that contains the Custom Element.
// 1. Add the Custom Element to the page.
// 2. Set its ID to #acoplaLp in the Wix properties panel.
// 3. Set source to public/custom-elements/acopla-lp.js and tag name to acopla-lp.

$w.onReady(function () {
  $w('#acoplaLp').seoMarkup = `
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
        <h2>Perguntas frequentes</h2>
        <h3>A ACOPLA / ACP TECH é uma plataforma de TEM?</h3>
        <p>Não. A atuação combina análise, negociação, acompanhamento e execução com pessoas especializadas, usando dados como base para tomada de decisão.</p>
        <h3>Como funciona o diagnóstico?</h3>
        <p>São analisados contratos, faturas, inventário e cenário atual para identificar economia, correções e oportunidades de melhoria.</p>
        <h3>Existe modelo por economia gerada?</h3>
        <p>O modelo comercial é flexível e pode considerar remuneração vinculada à economia comprovada, conforme escopo e complexidade.</p>
      </section>
    </main>
  `;
});