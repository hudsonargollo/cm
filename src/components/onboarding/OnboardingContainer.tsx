'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './OnboardingContainer.module.css';

const OnboardingContainer: React.FC = () => {
  const router = useRouter();
  // State to track the current step
  const [currentStep, setCurrentStep] = useState(1);
  
  // State to track user selections
  const [selections, setSelections] = useState({
    obstacle: false,
    area: false
  });
  
  // State for slider value
  const [sliderValue, setSliderValue] = useState(15);

  // Mascot dialogs for each step
  const mascotDialogs: Record<number, string> = {
    1: "FALA, GUERREIRO! Eu sou o Capitão Caverna, e eu estava te esperando. Você não chegou aqui por acaso. Algo dentro de você estava gritando por mudança, não é mesmo? Vamos despertar o lobo que existe em você!",
    2: "A Caverna representa sua jornada interior. No início, é escura e desconhecida. Mas a cada desafio superado, você acende uma tocha e enxerga mais claramente quem você realmente é.",
    3: "Antes de avançarmos, preciso conhecer você. Sem papas na língua. Sem mentir para si mesmo. Só verdades cruas. Responda com honestidade brutal:",
    4: "Este é o coração da Caverna: 40 dias para reprogramar sua mente. Cada dia, uma nova batalha. Cada batalha, uma nova força. Nada é por acaso aqui.",
    5: "Esta é sua Central de Comando. Daqui você controlará sua evolução. É onde sua jornada diária começa e termina."
  };
  
  // Mascot images for each step
  const mascotImages: Record<number, string> = {
    1: "https://msgs.sideral.digital/caveman/capitaocaverna1.png",
    2: "https://msgs.sideral.digital/caveman/capitaocaverna2.png",
    3: "https://msgs.sideral.digital/caveman/capitaocaverna5.png",
    4: "https://msgs.sideral.digital/caveman/capitaocaverna6.png",
    5: "https://msgs.sideral.digital/caveman/capitaocaverna1.png"
  };
  
  // Function to go to a specific step
  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  // Function to navigate to dashboard after completing onboarding
  const goToDashboard = () => {
    router.push('/dashboard');
  };

  // Function to select an option
  const selectOption = (button: HTMLButtonElement, category: 'obstacle' | 'area') => {
    // Deselect all buttons in the same category
    const parent = button.parentNode as HTMLElement;
    parent.querySelectorAll(`.${styles.optionBtn}`).forEach(btn => {
      btn.classList.remove(styles.selected);
    });
    
    // Select the clicked button
    button.classList.add(styles.selected);
    
    // Update selections
    setSelections({
      ...selections,
      [category]: true
    });
  };

  // Function to handle slider change
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  // Tooltip state
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  const showTooltip = (id: number) => {
    setActiveTooltip(id);
  };

  const hideTooltip = () => {
    setActiveTooltip(null);
  };

  return (
    <div className={styles.container}>
      {/* Progress Indicator */}
      <div className={styles.progressIndicator}>
        {[1, 2, 3, 4, 5].map((step) => (
          <div 
            key={step}
            className={`${styles.progressDot} ${currentStep === step ? styles.active : ''} ${currentStep > step ? styles.completed : ''}`}
          />
        ))}
      </div>
      
      {/* Step 1: Welcome */}
      {currentStep === 1 && (
        <div className={`${styles.stepContent} ${styles.active}`}>
          <div className={styles.starIcon}>
            <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
              <path d="M50 0L63 38H100L69 61L82 100L50 76L18 100L31 61L0 38H37L50 0Z" fill="#ff3333"/>
            </svg>
          </div>
          <h1>MODO CAVERNA</h1>
          <p>Sua jornada de transformação começa aqui. Os próximos 40 dias podem mudar completamente sua vida.</p>
          <button className={styles.btn} onClick={() => goToStep(2)}>
            INICIAR JORNADA
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </button>
        </div>
      )}
      
      {/* Step 2: Philosophy */}
      {currentStep === 2 && (
        <div className={`${styles.stepContent} ${styles.active}`}>
          <h2>A FILOSOFIA DA CAVERNA</h2>
          <div className={styles.card}>
            <p className={styles.italic}>"A caverna representa sua mente. No início, é escura e cheia de sombras — suas limitações, seus medos, suas dúvidas. A cada desafio superado, você acende uma tocha e enxerga mais claramente quem você realmente é."</p>
            
            <div className={styles.sliderContainer}>
              <div 
                className={styles.sliderFill}
                style={{ width: `${sliderValue}%` }}
              />
              <div 
                className={styles.sliderHandle}
                style={{ left: `${sliderValue}%` }}
              />
              <div className={styles.sliderPlus}>
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
              className={styles.rangeInput} 
              onChange={handleSliderChange}
            />
            
            <div className={styles.labels}>
              <span>ESCURIDÃO</span>
              <span>CLAREZA</span>
            </div>
            
            <div 
              className={styles.insightBox}
              style={{ opacity: sliderValue > 50 ? 1 : 0.4 }}
            >
              {getInsightText()}
            </div>
          </div>
          
          <button className={styles.btn} onClick={() => goToStep(3)}>
            CONTINUAR
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </button>
        </div>
      )}
      
      {/* Step 3: Assessment */}
      {currentStep === 3 && (
        <div className={`${styles.stepContent} ${styles.active}`}>
          <h2>CONHEÇA-TE A TI MESMO</h2>
          <div className={styles.card}>
            <div className={styles.sectionTitle}>
              <div className={styles.number}>1</div>
              O que mais te atrapalha hoje?
            </div>
            <div className={styles.optionGrid}>
              {['Procrastinação', 'Falta de foco', 'Indisciplina', 'Ansiedade'].map((option) => (
                <button 
                  key={option}
                  className={styles.optionBtn} 
                  onClick={(e) => selectOption(e.currentTarget, 'obstacle')}
                >
                  <div className={styles.optionRadio}></div>
                  <span>{option}</span>
                </button>
              ))}
            </div>
            
            <div className={styles.sectionTitle}>
              <div className={styles.number}>2</div>
              Qual área da sua vida precisa de mais evolução?
            </div>
            <div className={styles.optionGrid}>
              {['Carreira', 'Saúde', 'Relacionamentos', 'Finanças'].map((option) => (
                <button 
                  key={option}
                  className={styles.optionBtn} 
                  onClick={(e) => selectOption(e.currentTarget, 'area')}
                >
                  <div className={styles.optionRadio}></div>
                  <span>{option}</span>
                </button>
              ))}
            </div>
          </div>
          
          <button 
            className={styles.btn}
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
        <div className={`${styles.stepContent} ${styles.active}`}>
          <h2>DESAFIO DE 40 DIAS</h2>
          <div className={styles.card}>
            <p className={styles.textCenter}>
              O <strong style={{ color: '#f59e0b' }}>Desafio de 40 Dias</strong> é o coração do Modo Caverna.
              Um período de transformação intensa para construir novos hábitos e mentalidades.
            </p>
            
            <div className={styles.timeline}>
              {[
                { num: 1, label: 'DESPERTAR', active: true },
                { num: 2, label: 'RUPTURA', active: false },
                { num: 3, label: 'CHAMADO', active: false },
                { num: 4, label: 'DESCOBERTA', active: false },
                { num: 5, label: 'DISCERNIMENTO', active: false }
              ].map((point) => (
                <div key={point.num} className={styles.timelinePoint}>
                  <div className={`${styles.timelineDot} ${point.active ? styles.active : ''}`}>
                    {point.num}
                  </div>
                  <div className={styles.timelineLabel}>{point.label}</div>
                </div>
              ))}
            </div>
            
            <div className={styles.phaseBox}>
              <div className={styles.phaseHeader}>
                <div className={styles.phaseNum}>1</div>
                <h3 className={styles.phaseTitle}>O DESPERTAR</h3>
              </div>
              <p className={styles.phaseDescription}>
                No início, você questiona seus velhos padrões. Começa a perceber o que não funciona mais na sua vida. Esse despertar inicial é fundamental para os próximos passos.
              </p>
            </div>
            
            <div className={styles.challengeGrid}>
              <div className={styles.challengeCard}>
                <div className={styles.challengeIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#f59e0b">
                    <path d="M11 5h2v14h-2V5zm-6 7a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2H5z"/>
                  </svg>
                </div>
                <h4>RENÚNCIAS</h4>
                <p>O que você vai abandonar para evoluir</p>
              </div>
              <div className={styles.challengeCard}>
                <div className={styles.challengeIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#f59e0b">
                    <path d="M11 19h2v-14h-2v14zm-6-7a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2h-12z"/>
                  </svg>
                </div>
                <h4>HÁBITOS</h4>
                <p>O que você vai adicionar à sua vida</p>
              </div>
            </div>
          </div>
          
          <button className={styles.btn} onClick={() => goToStep(5)}>
            ENTENDI
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </button>
        </div>
      )}
      
      {/* Step 5: Dashboard */}
      {currentStep === 5 && (
        <div className={`${styles.stepContent} ${styles.active}`}>
          <h2>CENTRAL DE COMANDO</h2>
          <div className={styles.card}>
            <p className={styles.textCenter}>
              Este é o seu quartel-general. De onde você acompanha, planeja e executa sua evolução diária.
            </p>
            
            <div className={styles.dashboardGrid}>
              <div 
                className={styles.dashboardCard}
                onMouseOver={() => showTooltip(1)}
                onMouseOut={hideTooltip}
              >
                <div className={styles.highlightEffect}></div>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v6m0 0L8 5m4 3l4-3m-8 8l-2-2m0 0H2m4 0v4m12-4l2-2m0 0h4m-4 0v4M4 20l2-2m0 0v-4m12 4l2-2m0 0v-4"></path>
                </svg>
                <h3>Desafio</h3>
                <p>Acompanhe seu progresso nos 40 dias. A batalha diária pela sua evolução.</p>
                <div className={`${styles.tooltip} ${activeTooltip === 1 ? styles.active : ''}`}>
                  <div className={styles.tooltipTitle}>Capitão Caverna diz:</div>
                  <p>Aqui é onde a verdadeira batalha acontece. Não perca um dia sequer! Sua evolução depende disso.</p>
                </div>
              </div>
              
              <div className={styles.dashboardCard}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <h3>Flow</h3>
                <p>Entre em modo de foco extremo. Bloqueie distrações e maximize resultados.</p>
              </div>
              
              <div className={styles.dashboardCard}>
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
          
          <button className={styles.btn} onClick={goToDashboard}>
            COMEÇAR AGORA
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </button>
        </div>
      )}
      
      {/* Mascot */}
      <div className={`${styles.mascot} ${styles[`mascotStep${currentStep}`]}`}>
        <div className={styles.mascotContainer}>
          <img 
            src={mascotImages[currentStep] || mascotImages[1]} 
            alt="Capitão Caverna" 
            width="160"
          />
          <div className={styles.mascotTag}>GUIA</div>
          <div className={styles.mascotDialog}>
            <p>{mascotDialogs[currentStep] || mascotDialogs[1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingContainer;
