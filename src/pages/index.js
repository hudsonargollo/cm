import { useState, useEffect } from 'react';
import Head from 'next/head';
import '../app/globals.css';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [sliderValue, setSliderValue] = useState(15);
  const [selections, setSelections] = useState({
    obstacle: false,
    area: false
  });
  const [activeTooltip, setActiveTooltip] = useState(null);

  // Mascot dialogs for each step
  const mascotDialogs = {
    1: "FALA, GUERREIRO! Eu sou o Capitão Caverna, e eu estava te esperando. Você não chegou aqui por acaso. Algo dentro de você estava gritando por mudança, não é mesmo? Vamos despertar o lobo que existe em você!",
    2: "A Caverna representa sua jornada interior. No início, é escura e desconhecida. Mas a cada desafio superado, você acende uma tocha e enxerga mais claramente quem você realmente é.",
    3: "Antes de avançarmos, preciso conhecer você. Sem papas na língua. Sem mentir para si mesmo. Só verdades cruas. Responda com honestidade brutal:",
    4: "Este é o coração da Caverna: 40 dias para reprogramar sua mente. Cada dia, uma nova batalha. Cada batalha, uma nova força. Nada é por acaso aqui.",
    5: "Esta é sua Central de Comando. Daqui você controlará sua evolução. É onde sua jornada diária começa e termina."
  };
  
  // Mascot images for each step
  const mascotImages = {
    1: "https://msgs.sideral.digital/caveman/capitaocaverna1.png",
    2: "https://msgs.sideral.digital/caveman/capitaocaverna2.png",
    3: "https://msgs.sideral.digital/caveman/capitaocaverna5.png",
    4: "https://msgs.sideral.digital/caveman/capitaocaverna6.png",
    5: "https://msgs.sideral.digital/caveman/capitaocaverna1.png"
  };

  // Function to go to a specific step
  const goToStep = (step) => {
    setCurrentStep(step);
  };

  // Function to select an option
  const selectOption = (category, button) => {
    // Deselect all buttons in the same category
    const buttons = document.querySelectorAll(`[data-category="${category}"]`);
    buttons.forEach(btn => {
      btn.classList.remove('selected');
    });
    
    // Select the clicked button
    button.classList.add('selected');
    
    // Update selections
    setSelections({
      ...selections,
      [category]: true
    });
  };

  // Function to handle slider change
  const handleSliderChange = (e) => {
    setSliderValue(parseInt(e.target.value));
  };

  // Function to get the insight text based on slider value
  const getInsightText = () => {
    if (sliderValue > 50) {
      return "Quando iluminamos nossa mente, começamos a enxergar padrões, possibilidades e caminhos que antes estavam ocultos. O Modo Caverna é esse processo: uma jornada intencional de autoconhecimento e evolução.";
    } else {
      return "No início da jornada, você só sente que algo precisa mudar. Há um desconforto, um chamado para algo maior. Essa escuridão é o ponto de partida - você sabe que precisa avançar, mesmo sem ver o caminho claramente.";
    }
  };

  const showTooltip = (id) => {
    setActiveTooltip(id);
  };

  const hideTooltip = () => {
    setActiveTooltip(null);
  };

  return (
    <div>
      <Head>
        <title>Modo Caverna - Desperte a sua melhor versão</title>
        <meta name="description" content="Ative o MODO CAVERNA, desperte a sua melhor versão e acelere a conquista dos seus sonhos" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <style jsx global>{`
          :root {
            --background: #000000;
            --foreground: #ffffff;
            --primary: #ff3333;
            --primary-hover: #e02020;
            --secondary: #27272A;
            --muted: #A0A0A9;
            --border: #3f3f46;
          }
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Rubik', sans-serif;
            background-color: var(--background);
            color: var(--foreground);
            min-height: 100vh;
          }
          
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px 20px 100px;
            position: relative;
            min-height: 100vh;
          }
          
          .stepContent {
            max-width: 800px;
            margin: 80px auto 0;
            text-align: center;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
          }
          
          .stepContent.active {
            opacity: 1;
            transform: translateY(0);
          }
          
          h1 {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 1rem;
            letter-spacing: 0.05em;
          }
          
          h2 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            letter-spacing: 0.03em;
          }
          
          p {
            font-size: 1.1rem;
            line-height: 1.6;
            color: var(--muted);
            margin-bottom: 2rem;
          }
          
          .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: var(--primary);
            color: white;
            font-weight: 700;
            font-size: 1rem;
            padding: 0.75rem 2rem;
            border-radius: 0.375rem;
            border: none;
            cursor: pointer;
            transition: all 0.2s ease;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            box-shadow: 0 4px 6px -1px rgba(255, 51, 51, 0.2), 0 2px 4px -1px rgba(255, 51, 51, 0.1);
          }
          
          .btn:hover {
            background-color: var(--primary-hover);
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(255, 51, 51, 0.2), 0 4px 6px -2px rgba(255, 51, 51, 0.1);
          }
          
          .progressIndicator {
            position: fixed;
            top: 2rem;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(39, 39, 42, 0.7);
            backdrop-filter: blur(8px);
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            display: flex;
            gap: 0.5rem;
            border: 1px solid var(--border);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            z-index: 50;
          }
          
          .progressDot {
            width: 0.75rem;
            height: 0.75rem;
            border-radius: 50%;
            background-color: var(--border);
            transition: all 0.3s ease;
          }
          
          .progressDot.active {
            background-color: var(--primary);
            transform: scale(1.25);
          }
          
          .progressDot.completed {
            background-color: #f59e0b;
          }
          
          .mascot {
            position: fixed;
            width: 160px;
            transition: all 0.5s ease;
            z-index: 40;
          }
          
          .mascotStep1 {
            bottom: 2rem;
            right: 2rem;
          }
          
          .mascotStep2 {
            bottom: 2rem;
            left: 2rem;
          }
          
          .mascotStep3 {
            top: 5rem;
            right: 2rem;
          }
          
          .mascotStep4 {
            bottom: 2rem;
            left: 2rem;
          }
          
          .mascotStep5 {
            top: 5rem;
            right: 2rem;
          }
          
          .mascotContainer {
            position: relative;
          }
          
          .mascotTag {
            position: absolute;
            top: -0.5rem;
            right: -0.5rem;
            background-color: var(--primary);
            color: white;
            font-weight: 700;
            font-size: 0.75rem;
            padding: 0.25rem 0.5rem;
            border-radius: 9999px;
            z-index: 2;
          }
          
          .mascotDialog {
            background-color: var(--secondary);
            border: 1px solid var(--border);
            padding: 1rem;
            border-radius: 0.5rem;
            margin-top: 0.5rem;
            max-width: 250px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          
          .mascotDialog p {
            font-size: 0.875rem;
            margin-bottom: 0;
            color: var(--muted);
          }
          
          .card {
            background-color: rgba(39, 39, 42, 0.5);
            border: 1px solid var(--border);
            border-radius: 0.75rem;
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }

          .sliderContainer {
            height: 12rem;
            background: linear-gradient(90deg, #000000 0%, #27272A 100%);
            border-radius: 0.5rem;
            position: relative;
            overflow: hidden;
            border: 1px solid var(--border);
            margin-bottom: 1rem;
          }
          
          .sliderFill {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 15%;
            background: linear-gradient(90deg, var(--primary) 0%, #f59e0b 100%);
            transition: width 0.3s ease;
          }
          
          .sliderHandle {
            position: absolute;
            top: 50%;
            left: 15%;
            transform: translate(-50%, -50%);
            width: 1.5rem;
            height: 1.5rem;
            background-color: white;
            border-radius: 50%;
            box-shadow: 0 0 15px rgba(255, 51, 51, 0.5);
            z-index: 2;
            transition: left 0.3s ease;
          }
          
          .sliderPlus {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 6rem;
            height: 6rem;
            opacity: 0.6;
          }
          
          .rangeInput {
            width: 100%;
            margin: 1rem 0;
          }
          
          .labels {
            display: flex;
            justify-content: space-between;
            font-size: 0.875rem;
            color: var(--muted);
            margin-bottom: 2rem;
          }
          
          .optionGrid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-bottom: 2rem;
          }
          
          .optionBtn {
            display: flex;
            align-items: center;
            text-align: left;
            padding: 1rem;
            border: 1px solid var(--border);
            border-radius: 0.5rem;
            background-color: transparent;
            color: var(--muted);
            cursor: pointer;
            transition: all 0.2s ease;
          }
          
          .optionBtn:hover {
            border-color: var(--muted);
          }
          
          .optionBtn.selected {
            border-color: var(--primary);
            background-color: rgba(255, 51, 51, 0.1);
          }
          
          .optionRadio {
            width: 1.5rem;
            height: 1.5rem;
            border: 2px solid var(--border);
            border-radius: 50%;
            margin-right: 0.75rem;
            position: relative;
          }
          
          .selected .optionRadio {
            border-color: var(--primary);
          }
          
          .selected .optionRadio::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 0.75rem;
            height: 0.75rem;
            background-color: var(--primary);
            border-radius: 50%;
          }
          
          .sectionTitle {
            display: flex;
            align-items: center;
            font-size: 1.25rem;
            color: #f59e0b;
            margin-bottom: 1rem;
            text-align: left;
          }
          
          .number {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 2rem;
            background-color: rgba(245, 158, 11, 0.2);
            border-radius: 50%;
            margin-right: 0.75rem;
            color: #f59e0b;
          }
          
          .timeline {
            position: relative;
            width: 100%;
            height: 0.25rem;
            background-color: var(--border);
            margin: 2rem 0;
            display: flex;
            justify-content: space-between;
          }
          
          .timelinePoint {
            position: relative;
            width: 3rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .timelineDot {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background-color: var(--border);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            margin-top: -1.375rem;
            color: var(--muted);
          }
          
          .timelineDot.active {
            background-color: var(--primary);
            color: white;
          }
          
          .timelineLabel {
            margin-top: 0.5rem;
            font-size: 0.75rem;
            font-weight: 600;
            color: var(--muted);
            width: 5rem;
            text-align: center;
          }
          
          .dashboardGrid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            margin-bottom: 2rem;
          }
          
          .dashboardCard {
            background: linear-gradient(135deg, var(--primary) 0%, #cc2222 100%);
            border-radius: 0.5rem;
            padding: 1.5rem;
            color: white;
            cursor: pointer;
            transition: transform 0.2s ease;
            position: relative;
            overflow: hidden;
            border: 1px solid var(--primary);
          }
          
          .dashboardCard:hover {
            transform: scale(1.05);
          }
          
          .dashboardCard h3 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
          }
          
          .dashboardCard p {
            font-size: 0.875rem;
            color: #f3f4f6;
            margin-bottom: 0;
          }
          
          .dashboardCard svg {
            margin-bottom: 1rem;
          }
          
          .dashboardCard:nth-child(2),
          .dashboardCard:nth-child(3) {
            background: linear-gradient(135deg, var(--secondary) 0%, #18181b 100%);
            border-color: var(--border);
          }
          
          .tooltip {
            position: absolute;
            bottom: 0;
            right: 0;
            background-color: #18181b;
            border: 1px solid var(--border);
            border-top-left-radius: 0.5rem;
            padding: 0.75rem;
            width: 16rem;
            font-size: 0.875rem;
            transform: translateY(100%);
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 20;
          }
          
          .tooltip.active {
            transform: translateY(0);
            opacity: 1;
          }
          
          .tooltipTitle {
            color: #f59e0b;
            font-weight: 600;
            margin-bottom: 0.25rem;
          }
          
          @keyframes ping {
            75%, 100% {
              transform: scale(2);
              opacity: 0;
            }
          }
          
          .highlightEffect {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 0.5rem;
            box-shadow: 0 0 0 3px var(--primary);
            opacity: 0;
            animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
          
          .textCenter {
            text-align: center;
          }
          
          .italic {
            font-style: italic;
          }
          
          .insightBox {
            transition: opacity 0.3s ease;
          }
          
          .phaseBox {
            padding: 1.5rem;
            background-color: rgba(39, 39, 42, 0.5);
            border-radius: 0.5rem;
            margin-bottom: 1.5rem;
          }
          
          .phaseHeader {
            display: flex;
            align-items: center;
            margin-bottom: 0.75rem;
          }
          
          .phaseNum {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 9999px;
            background-color: rgba(245, 158, 11, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 0.75rem;
            color: #f59e0b;
            font-weight: 700;
          }
          
          .phaseTitle {
            color: #f59e0b;
            font-weight: 700;
            font-size: 1.25rem;
          }
          
          .phaseDescription {
            padding-left: 3.25rem;
            font-size: 0.875rem;
            margin-bottom: 0;
          }
          
          .challengeGrid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            margin-bottom: 1.5rem;
          }
          
          .challengeCard {
            background-color: rgba(39, 39, 42, 0.3);
            border-radius: 0.5rem;
            padding: 1.25rem;
            text-align: center;
            border: 1px solid var(--border);
          }
          
          .challengeIcon {
            width: 4rem;
            height: 4rem;
            background-color: var(--secondary);
            border-radius: 9999px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto 0.75rem;
          }
          
          .challengeCard h4 {
            font-weight: 700;
            font-size: 1.25rem;
            margin-bottom: 0.25rem;
          }
          
          .challengeCard p {
            font-size: 0.875rem;
            opacity: 0.7;
            margin-bottom: 0;
          }
          
          .starIcon {
            margin-bottom: 2rem;
          }
          
          @media (max-width: 768px) {
            .mascot {
              width: 120px;
            }
            
            .dashboardGrid {
              grid-template-columns: 1fr;
            }
            
            h1 {
              font-size: 2rem;
            }
            
            h2 {
              font-size: 1.5rem;
            }
          
            .challengeGrid {
              grid-template-columns: 1fr;
            }
            
            .optionGrid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </Head>

      <div className="container">
        {/* Progress Indicator */}
        <div className="progressIndicator">
          {[1, 2, 3, 4, 5].map((step) => (
            <div 
              key={step}
              className={`progressDot ${currentStep === step ? 'active' : ''} ${currentStep > step ? 'completed' : ''}`}
            />
          ))}
        </div>
        
        {/* Step 1: Welcome */}
        {currentStep === 1 && (
          <div className="stepContent active">
            <div className="starIcon">
              <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
                <path d="M50 0L63 38H100L69 61L82 100L50 76L18 100L31 61L0 38H37L50 0Z" fill="#ff3333"/>
              </svg>
            </div>
            <h1>MODO CAVERNA</h1>
            <p>Sua jornada de transformação começa aqui. Os próximos 40 dias podem mudar completamente sua vida.</p>
            <button className="btn" onClick={() => goToStep(2)}>
              INICIAR JORNADA
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
          </div>
        )}
        
        {/* Step 2: Philosophy */}
        {currentStep === 2 && (
          <div className="stepContent active">
            <h2>A FILOSOFIA DA CAVERNA</h2>
            <div className="card">
              <p className="italic">"A caverna representa sua mente. No início, é escura e cheia de sombras — suas limitações, seus medos, suas dúvidas. A cada desafio superado, você acende uma tocha e enxerga mais claramente quem você realmente é."</p>
              
              <div className="sliderContainer">
                <div 
                  className="sliderFill"
                  style={{ width: `${sliderValue}%` }}
                />
                <div 
                  className="sliderHandle"
                  style={{ left: `${sliderValue}%` }}
                />
                <div className="sliderPlus">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12h14"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                </div>
              </div>
              
              <input 
                type="range" 
                min="1" 
                max="100" 
                value={sliderValue} 
                className="rangeInput" 
                onChange={handleSliderChange}
              />
              
              <div className="labels">
                <span>ESCURIDÃO</span>
                <span>CLAREZA</span>
              </div>
              
              <div 
                className="insightBox"
                style={{ opacity: sliderValue > 50 ? 1 : 0.4 }}
              >
                {getInsightText()}
              </div>
            </div>
            
            <button className="btn" onClick={() => goToStep(3)}>
              CONTINUAR
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
          </div>
        )}
        
        {/* Step 3: Assessment */}
        {currentStep === 3 && (
          <div className="stepContent active">
            <h2>CONHEÇA-TE A TI MESMO</h2>
            <div className="card">
              <div className="sectionTitle">
                <div className="number">1</div>
                O que mais te atrapalha hoje?
              </div>
              <div className="optionGrid">
                {['Procrastinação', 'Falta de foco', 'Indisciplina', 'Ansiedade'].map((option) => (
                  <button 
                    key={option}
                    className="optionBtn"
                    data-category="obstacle"
                    onClick={(e) => selectOption('obstacle', e.target.closest('.optionBtn'))}
                  >
                    <div className="optionRadio"></div>
                    <span>{option}</span>
                  </button>
                ))}
              </div>
              
              <div className="sectionTitle">
                <div className="number">2</div>
                Qual área da sua vida precisa de mais evolução?
              </div>
              <div className="optionGrid">
                {['Carreira', 'Saúde', 'Relacionamentos', 'Finanças'].map((option) => (
                  <button 
                    key={option}
                    className="optionBtn"
                    data-category="area"
                    onClick={(e) => selectOption('area', e.target.closest('.optionBtn'))}
                  >
                    <div className="optionRadio"></div>
                    <span>{option}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <button 
              className="btn"
              disabled={!selections.obstacle || !selections.area}
              style={{ 
                opacity: (selections.obstacle && selections.area) ? 1 : 0.5,
                cursor: (selections.obstacle && selections.area) ? 'pointer' : 'not-allowed'
              }}
              onClick={() => goToStep(4)}
            >
              ANALISAR PERFIL
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
          </div>
        )}
        
        {/* Step 4: 40-Day Challenge */}
        {currentStep === 4 && (
          <div className="stepContent active">
            <h2>DESAFIO DE 40 DIAS</h2>
            <div className="card">
              <p className="textCenter">
                O <strong style={{ color: '#f59e0b' }}>Desafio de 40 Dias</strong> é o coração do Modo Caverna.
                Um período de transformação intensa para construir novos hábitos e mentalidades.
              </p>
              
              <div className="timeline">
                {[
                  { num: 1, label: 'DESPERTAR', active: true },
                  { num: 2, label: 'RUPTURA', active: false },
                  { num: 3, label: 'CHAMADO', active: false },
                  { num: 4, label: 'DESCOBERTA', active: false },
                  { num: 5, label: 'DISCERNIMENTO', active: false }
                ].map((point) => (
                  <div key={point.num} className="timelinePoint">
                    <div className={`timelineDot ${point.active ? 'active' : ''}`}>
                      {point.num}
                    </div>
                    <div className="timelineLabel">{point.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="phaseBox">
                <div className="phaseHeader">
                  <div className="phaseNum">1</div>
                  <h3 className="phaseTitle">O DESPERTAR</h3>
                </div>
                <p className="phaseDescription">
                  No início, você questiona seus velhos padrões. Começa a perceber o que não funciona mais na sua vida. Esse despertar inicial é fundamental para os próximos passos.
                </p>
              </div>
              
              <div className="challengeGrid">
                <div className="challengeCard">
                  <div className="challengeIcon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#f59e0b">
                      <path d="M11 5h2v14h-2V5zm-6 7a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2H5z"/>
                    </svg>
                  </div>
                  <h4>RENÚNCIAS</h4>
                  <p>O que você vai abandonar para evoluir</p>
                </div>
                <div className="challengeCard">
                  <div className="challengeIcon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#f59e0b">
                      <path d="M11 19h2v-14h-2v14zm-6-7a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2h-12z"/>
                    </svg>
                  </div>
                  <h4>HÁBITOS</h4>
                  <p>O que você vai adicionar à sua vida</p>
                </div>
              </div>
            </div>
            
            <button className="btn" onClick={() => goToStep(5)}>
              ENTENDI
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
          </div>
        )}
        
        {/* Step 5: Dashboard */}
        {currentStep === 5 && (
          <div className="stepContent active">
            <h2>CENTRAL DE COMANDO</h2>
            <div className="card">
              <p className="textCenter">
                Este é o seu quartel-general. De onde você acompanha, planeja e executa sua evolução diária.
              </p>
              
              <div className="dashboardGrid">
                <div 
                  className="dashboardCard"
                  onMouseOver={() => showTooltip(1)}
                  onMouseOut={hideTooltip}
                >
                  <div className="highlightEffect"></div>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v6m0 0L8 5m4 3l4-3m-8 8l-2-2m0 0H2m4 0v4m12-4l2-2m0 0h4m-4 0v4M4 20l2-2m0 0v-4m12 4l2-2m0 0v-4"></path>
                  </svg>
                  <h3>Desafio</h3>
                  <p>Acompanhe seu progresso nos 40 dias. A batalha diária pela sua evolução.</p>
                  <div className={`tooltip ${activeTooltip === 1 ? 'active' : ''}`}>
                    <div className="tooltipTitle">Capitão Caverna diz:</div>
                    <p>Aqui é onde a verdadeira batalha acontece. Não perca um dia sequer! Sua evolução depende disso.</p>
                  </div>
                </div>
                
                <div className="dashboardCard">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <h3>Flow</h3>
                  <p>Entre em modo de foco extremo. Bloqueie distrações e maximize resultados.</p>
                </div>
                
                <div className="dashboardCard">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <h3>Agenda</h3>
                  <p>Organize seu dia com estratégia. Defina prioridades claras.</p>
                </div>
              </div>
            </div>
            
            <button className="btn" onClick={() => window.location.href = '/dashboard'}>
              COMEÇAR AGORA
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
          </div>
        )}
        
        {/* Mascot */}
        <div className={`mascot mascotStep${currentStep}`}>
          <div className="mascotContainer">
            <img 
              src={mascotImages[currentStep] || mascotImages[1]} 
              alt="Capitão Caverna" 
              width="160"
            />
            <div className="mascotTag">GUIA</div>
            <div className="mascotDialog">
              <p>{mascotDialogs[currentStep] || mascotDialogs[1]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
