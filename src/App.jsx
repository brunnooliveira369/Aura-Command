import { useState, useRef } from "react";
import {
  LayoutDashboard, Calendar, MessageSquare, Calculator,
  Plus, X, Edit3, Check, ChevronRight, ChevronDown, Target,
  TrendingUp, Copy, Trash2, Save, Flame, Thermometer,
  Snowflake, ArrowRight, BarChart2, Zap, BookOpen,
  RefreshCw, Clock, Phone, Instagram, Linkedin, FileText,
  AlertCircle, Info, ChevronUp, CalendarDays
} from "lucide-react";

// ── PALETA ──────────────────────────────────────────────────────
const C = {
  blue:"#1800ad", blueHover:"#1400d0", blueLight:"#e8e6ff",
  orange:"#ff751f", orangeLight:"#fff0e8",
  bg:"#f2f3f9", card:"#ffffff",
  border:"#e2e4ef", borderFocus:"#1800ad",
  text:"#0c0d1a", muted:"#6b6f8a", placeholder:"#aab0c8",
  success:"#15803d", successLight:"#dcfce7",
  warning:"#c2550a", warningLight:"#fff7ed",
  danger:"#b91c1c", dangerLight:"#fee2e2",
  purple:"#6d28d9", purpleLight:"#ede9fe",
};

// ── CONTEÚDO DE AGOSTO ──────────────────────────────────────────
const CONTENT_AGOSTO = [
  {
    id:1, week:1, day:"Seg 04", pilar:"dor", format:"Reels",
    hook:"Você sabe exatamente quanto da sua verba em anúncios está sendo desperdiçada AGORA?",
    objetivo:"Gerar curiosidade e DMs de quem investe em tráfego pago",
    cta:"Comenta 'DIAGNÓSTICO' que eu te mostro com dados reais.",
    prompt_ia:`Você é um especialista em tráfego pago B2B. Gere o texto para aparecer na tela de um Reels de 30s sobre desperdício de verba em anúncios. Use linguagem direta, dados chocantes e termine com chamada para diagnóstico gratuito. Tom: urgente, especialista, sem enrolação.`,
    roteiro:`🎬 ROTEIRO COMPLETO — REELS 30s

⏱ 0–3s | GANCHO (texto na tela, fonte grande):
"73% da sua verba em anúncios está sendo jogada fora."
[corte seco, música impactante entra]

⏱ 3–12s | DESENVOLVIMENTO:
Tela 1: "Sabe o que é a maioria das campanhas B2B?"
Tela 2: "Verba indo pra público errado. Horário errado. Criativo errado."
Tela 3: Mostrar print de campanha com CTR baixo e CPC alto (real ou mockup)
Tela 4: "Sem dados = sem controle = sem resultado."

⏱ 12–25s | PROVA:
Tela 5: "A gente analisa sua campanha em 10 minutos"
Tela 6: "e mostra exatamente onde o dinheiro some."
Tela 7: Gráfico simples de antes/depois (ex: CPL R$180 → R$72)

⏱ 25–30s | CTA:
Tela final: "Comenta DIAGNÓSTICO 👇"
"É gratuito. Sem enrolação."

🎵 MÚSICA: Algo urgente/corporativo — buscar no CapCut "corporate tension"
🎨 VISUAL: Fundo escuro, texto branco, destaque em laranja #ff751f
📐 FORMATO: 9:16, fonte bold, sem rosto necessário`
  },
  {
    id:2, week:1, day:"Qua 06", pilar:"autoridade", format:"Carrossel",
    hook:"5 métricas que seu gestor de tráfego provavelmente não te mostra (e deveria)",
    objetivo:"Posicionar Aura BI como autoridade técnica, gerar salvamentos",
    cta:"Salva esse post. Você vai usar na próxima reunião com seu gestor.",
    prompt_ia:`Você é um especialista em marketing digital B2B. Crie o texto completo para um carrossel de 7 slides sobre as 5 métricas essenciais que gestores de tráfego omitem dos clientes. Cada slide deve ter: título impactante, explicação simples, e por que importa para o dono do negócio. Tom: didático mas assertivo.`,
    roteiro:`📱 ROTEIRO CARROSSEL — 7 SLIDES

SLIDE 1 — CAPA:
Título: "5 métricas que seu gestor não te mostra"
Subtítulo: "(e que provam se ele está fazendo o trabalho direito)"
Visual: Fundo azul #1800ad, ícone de gráfico, logo Aura BI

SLIDE 2 — Métrica 1: ROAS Real vs ROAS Relatado
"ROAS de 4x parece ótimo. Mas inclui vendas que já iam acontecer?"
Explicação: ROAS incremental vs total. O que realmente veio do anúncio.

SLIDE 3 — Métrica 2: Frequência de exibição
"Seu anúncio está aparecendo 8x pra mesma pessoa. Ela já te odeia."
Frequência acima de 3x = queima de audiência. Custo sobe, resultado cai.

SLIDE 4 — Métrica 3: Custo por Lead Qualificado (não total)
"CPL de R$15 com 90% de lixo vale mais do que CPL de R$80 qualificado?"
Não. Lead qualificado é o único número que importa.

SLIDE 5 — Métrica 4: Taxa de conversão pós-clique
"O anúncio trouxe o clique. A página perdeu a venda."
CTR alto + conversão baixa = problema na landing, não na campanha.

SLIDE 6 — Métrica 5: Janela de atribuição
"Aquela venda que o Google atribuiu ao anúncio? Ela veio de uma pesquisa orgânica."
Atribuição incorreta = decisões incorretas de budget.

SLIDE 7 — CTA:
"Seu gestor reporta essas métricas toda semana?"
"Se não, a gente conversa. Diagnóstico gratuito 👇"
[Link na bio / DM]

🎨 VISUAL: Slides alternando fundo branco e azul, destaque laranja
📐 FORMATO: 1:1 ou 4:5`
  },
  {
    id:3, week:1, day:"Sex 08", pilar:"prova", format:"Post texto",
    hook:"Como reduzimos o CPL de uma empresa B2B em 61% em 3 semanas — sem aumentar verba",
    objetivo:"Provar resultado real sem nomear cliente, gerar DMs de interesse",
    cta:"Se quiser ver como aplicamos isso, me manda uma DM agora.",
    prompt_ia:`Você é um copywriter especialista em marketing B2B. Escreva um post de texto para Instagram contando um caso de sucesso (anônimo) onde uma gestão de tráfego reduziu o CPL em 61% em 3 semanas. Use estrutura: contexto, problema, 3 mudanças feitas, resultado, CTA. Tom: direto, confiante, sem hype.`,
    roteiro:`📝 ROTEIRO POST TEXTO — Instagram/LinkedIn

ABERTURA (gancho):
"Em 3 semanas, o CPL de um dos nossos clientes caiu de R$148 para R$57.
Mesma verba. Mesma plataforma. Resultado completamente diferente."

CORPO — 3 MUDANÇAS:
"O que mudamos:

1. Segmentação
Estava rodando para público amplo demais. Criamos 3 públicos específicos por cargo e dor. Desperdício cortado em 40%.

2. Criativo
O vídeo tinha 45 segundos. Cortamos para 12s e colocamos a oferta no gancho, não no final. CTR dobrou.

3. Horário de veiculação
A campanha rodava 24h. Concentramos no horário de decisão do cliente (8h–10h e 18h–20h). CPC caiu 28%."

RESULTADO:
"CPL: R$148 → R$57
Leads qualificados: +3x
Custo total: idêntico."

CTA:
"Sua campanha tem margem pra isso também.
Me manda DM e a gente olha juntos — sem custo."

🎨 VISUAL: Post estático ou fundo gradiente azul, números em destaque laranja`
  },
  {
    id:4, week:2, day:"Seg 11", pilar:"objecao", format:"Reels",
    hook:"'Tráfego pago é muito caro' — essa frase custa mais do que qualquer campanha",
    objetivo:"Quebrar a objeção de custo, converter quem hesita em investir",
    cta:"Comenta 'CALCULAR' e eu faço a conta do custo de NÃO anunciar pra você.",
    prompt_ia:`Você é um especialista em vendas B2B e tráfego pago. Crie o roteiro de um Reels de 30s que quebra a objeção "tráfego pago é caro demais" mostrando o custo real de NÃO anunciar. Use lógica de oportunidade perdida, não argumento de venda. Tom: provocativo mas racional.`,
    roteiro:`🎬 ROTEIRO COMPLETO — REELS 30s

⏱ 0–3s | GANCHO:
"'Tráfego pago é caro.'"
[pausa de 1 segundo]
"Essa frase custou R$80.000 pra um cliente ano passado."

⏱ 3–15s | DESENVOLVIMENTO:
Tela 1: "Enquanto ele 'economizava' em anúncios..."
Tela 2: "O concorrente capturou 400 leads qualificados no mesmo mês."
Tela 3: "Com ticket médio de R$200/mês = R$80k de receita recorrente"
Tela 4: "Construída enquanto ele esperava o momento certo."

⏱ 15–25s | VIRADA:
Tela 5: "Tráfego pago não é custo."
Tela 6: "É a taxa de acesso ao cliente que já quer comprar."
Tela 7: "O caro é deixar esse cliente ir pro seu concorrente."

⏱ 25–30s | CTA:
"Comenta CALCULAR 👇"
"Faço a conta do custo de não anunciar no seu nicho."

🎵 MÚSICA: Trap corporativo leve / Lo-fi com tensão
🎨 VISUAL: Texto branco em fundo escuro, números em laranja`
  },
  {
    id:5, week:2, day:"Qua 13", pilar:"autoridade", format:"Carrossel",
    hook:"Google Ads ou Meta Ads para B2B? A resposta depende de uma coisa só",
    objetivo:"Educar a audiência, posicionar como consultor estratégico",
    cta:"Comenta o seu modelo de negócio e eu te indico qual plataforma faz mais sentido.",
    prompt_ia:`Você é especialista em tráfego pago B2B. Crie conteúdo para um carrossel de 8 slides comparando Google Ads e Meta Ads para negócios B2B, com critérios objetivos de decisão por tipo de empresa, ciclo de venda e ticket médio. Tom: educativo, imparcial, prático.`,
    roteiro:`📱 ROTEIRO CARROSSEL — 8 SLIDES

SLIDE 1 — CAPA:
"Google ou Meta para B2B?"
"A resposta que ninguém te dá de forma direta."

SLIDE 2 — A pergunta certa não é qual. É quando.
"Não existe plataforma melhor. Existe plataforma certa para o momento."

SLIDE 3 — Use Google Ads quando:
✓ Seu cliente já sabe que tem o problema
✓ Ticket acima de R$2.000
✓ Ciclo de venda > 30 dias
✓ Produto/serviço tem demanda ativa (pesquisa no Google)

SLIDE 4 — Use Meta Ads quando:
✓ Precisa criar consciência do problema
✓ Ticket entre R$300–R$2.000
✓ Público segmentável por cargo, interesse ou comportamento
✓ Seu diferencial é visual ou emocional

SLIDE 5 — Tabela simples (comparativo visual):
| Critério | Google | Meta |
| Intenção | Alta | Baixa-média |
| CPL médio B2B | R$60–180 | R$25–90 |
| Escalabilidade | Limitada | Alta |
| Tempo p/ resultado | 15–30d | 7–21d |

SLIDE 6 — O erro mais comum:
"Usar Meta para venda imediata de serviço B2B de ticket alto."
"Meta aquece. Google fecha. Os dois juntos: funil completo."

SLIDE 7 — Recomendação Aura BI:
"Comece com Meta para volume de lead e Google para capturar quem já procura."
"Invista 70% onde seu cliente está na jornada."

SLIDE 8 — CTA:
"Qual o seu modelo? Comenta aí que te indico o caminho."

🎨 VISUAL: Azul vs laranja nos comparativos, tabela limpa`
  },
  {
    id:6, week:2, day:"Sex 15", pilar:"dor", format:"Reels",
    hook:"3 sinais de que sua campanha vai morrer nos próximos 7 dias",
    objetivo:"Gerar urgência, fazer gestor/dono de empresa se reconhecer na dor",
    cta:"Comenta 'ALERTA' e a gente faz uma checagem gratuita da sua campanha.",
    prompt_ia:`Você é especialista em gestão de tráfego pago. Escreva o roteiro de um Reels de 25s sobre 3 sinais claros de que uma campanha está prestes a colapsar. Use linguagem de alarme, dados visuais e urgência real. Sem enrolação, sem introdução longa.`,
    roteiro:`🎬 ROTEIRO COMPLETO — REELS 25s

⏱ 0–3s | GANCHO (alerta visual):
🚨 "3 sinais de que sua campanha vai morrer essa semana."

⏱ 3–18s | OS 3 SINAIS:
Sinal 1: "Frequência acima de 4.0"
"Sua audiência já viu o anúncio 4x. Ela está ignorando ativamente."

Sinal 2: "CTR caindo semana a semana"
"Se o CTR cai sem mudança de criativo, o público está saturado."

Sinal 3: "Custo por resultado subindo sem explicação"
"O algoritmo perdeu o padrão. Precisa de reinicialização."

⏱ 18–25s | CTA:
"Sua campanha tem algum desses sinais?"
"Comenta ALERTA 👇 — checagem gratuita, sem compromisso."

🎵 MÚSICA: Som de alerta / urgência
🎨 VISUAL: Vermelho e laranja, ícones de alerta, texto impactante`
  },
  {
    id:7, week:3, day:"Seg 18", pilar:"prova", format:"Carrossel",
    hook:"Resultado real: 3x mais leads com a mesma verba. Aqui está o que fizemos.",
    objetivo:"Mostrar processo e resultado, converter quem está em cima do muro",
    cta:"Qual a sua maior dificuldade com tráfego hoje? Comenta que eu respondo.",
    prompt_ia:`Você é um especialista em tráfego pago B2B. Crie conteúdo para um carrossel de 7 slides mostrando o processo completo que triplicou leads de um cliente sem aumentar verba. Mostre o diagnóstico inicial, as 3 mudanças feitas, os resultados e a metodologia. Tom: técnico mas acessível, transparente.`,
    roteiro:`📱 ROTEIRO CARROSSEL — 7 SLIDES

SLIDE 1 — CAPA:
"3x mais leads. Mesma verba. 30 dias."
"Aqui está o que fizemos — passo a passo."

SLIDE 2 — O cenário inicial:
"Cliente B2B, segmento de serviços, verba de R$3.000/mês"
"Resultado: 18 leads/mês — 80% desqualificados"
"CPL real: R$167 por lead que valia a pena falar"

SLIDE 3 — Diagnóstico (o que encontramos):
"❌ Segmentação ampla demais (interesse genérico)"
"❌ Formulário de 8 campos afastando lead qualificado"
"❌ Criativo sem especificidade — falava pra todo mundo"

SLIDE 4 — Mudança 1: Segmentação cirúrgica
"Criamos 3 públicos por cargo + comportamento de compra"
"Excluímos 60% da audiência anterior"
"CPL caiu 34% na primeira semana"

SLIDE 5 — Mudança 2: Formulário enxuto
"8 campos → 3 campos + 1 pergunta qualificadora"
"Volume de leads subiu 2x. Qualidade mantida."

SLIDE 6 — Mudança 3: Criativo específico
"Paramos de falar para 'empresas'. Falamos para 'diretores de vendas com equipe acima de 5 pessoas'"
"CTR: 1,2% → 3,8%"

SLIDE 7 — CTA:
"Resultado final: 54 leads qualificados — mesma verba"
"Sua campanha tem essa margem também."
"Comenta sua maior dificuldade 👇"`
  },
  {
    id:8, week:3, day:"Qua 20", pilar:"objecao", format:"Reels",
    hook:"'Já tentei tráfego e não funcionou' — então o problema não foi o tráfego",
    objetivo:"Recuperar quem teve experiência negativa anterior, reposicionar Aura BI",
    cta:"Comenta 'AUDITORIA' e eu te digo o que deu errado na sua campanha anterior.",
    prompt_ia:`Você é especialista em tráfego pago e vendas. Escreva um Reels de 30s que reposiciona a experiência negativa de quem já tentou tráfego pago e não teve resultado. O argumento central: o problema não foi o canal, foi a execução. Tom: empático mas assertivo, sem atacar concorrentes.`,
    roteiro:`🎬 ROTEIRO COMPLETO — REELS 30s

⏱ 0–4s | GANCHO (provocação empática):
"'Já tentei tráfego e não funcionou.'"
"Já ouvi isso centenas de vezes."
"E em 100% dos casos... o problema não foi o tráfego."

⏱ 4–20s | DIAGNÓSTICO:
Tela 1: "Tráfego pago é como contratar um vendedor."
Tela 2: "Se você contratar sem processo, sem script e sem meta clara..."
Tela 3: "...o problema não é o vendedor. É a gestão."
Tela 4: "Campanha sem estratégia = verba queimada com currículo limpo."

⏱ 20–27s | REPOSICIONAMENTO:
"O canal funciona. O que não funcionou foi:"
"— Segmentação errada"
"— Criativo genérico"
"— Oferta fraca"
"Qualquer um desses mata a campanha."

⏱ 27–30s | CTA:
"Comenta AUDITORIA 👇"
"Eu olho o que deu errado. De graça."

🎵 MÚSICA: Lo-fi corporativo, tom de resolução
🎨 VISUAL: Tom mais sério, texto direto, sem exagero visual`
  },
  {
    id:9, week:3, day:"Sex 22", pilar:"autoridade", format:"Post texto",
    hook:"Por que 'impulsionar publicação' não é gestão de tráfego (e o que fazer no lugar)",
    objetivo:"Educar e filtrar leads — quem entende a diferença é lead qualificado",
    cta:"Salva esse post antes de apertar aquele botão azul de novo.",
    prompt_ia:`Você é especialista em tráfego pago. Escreva um post de texto explicando de forma clara e direta a diferença entre impulsionar publicação e gestão de tráfego real. Use analogia simples, liste o que gestão profissional inclui e termine com CTA de autoridade. Tom: educativo, direto, sem jargão desnecessário.`,
    roteiro:`📝 ROTEIRO POST TEXTO

ABERTURA:
"Impulsionar publicação não é gestão de tráfego.
É só pagar pro Instagram mostrar seu post pra mais gente.
A diferença é enorme."

CORPO:
"Analogia direta:
Impulsionar = jogar panfleto na rua e torcer.
Gestão de tráfego = vendedor treinado, abordando a pessoa certa, no momento certo, com o argumento certo.

O que gestão de tráfego real inclui:
✓ Estrutura de campanha por objetivo (não por 'alcance')
✓ Segmentação por comportamento e intenção de compra
✓ Criativo testado A/B com hipótese clara
✓ Funil de remarketing para quem já interagiu
✓ Otimização semanal baseada em dados
✓ Relatório com métricas que importam (não só curtidas)

O que impulsionamento entrega:
✗ Mais visualizações sem controle
✗ Público amplo sem filtro
✗ Nenhum dado acionável
✗ Sensação de movimento sem resultado

Resultado de quem gerencia com estratégia vs quem impulsiona:
Mesmo R$500/mês → diferença de 5x no retorno."

CTA:
"Salva esse post.
E se quiser ver como gestão real funciona na prática, me manda DM."`
  },
  {
    id:10, week:4, day:"Seg 25", pilar:"dor", format:"Reels",
    hook:"Sua concorrência fechou 3 contratos esse mês com tráfego. Você perdeu esses clientes.",
    objetivo:"Urgência competitiva, ativar FOMO de donos de médias empresas",
    cta:"DM 'AGOSTO' e calculamos o potencial de crescimento do seu negócio esse mês.",
    prompt_ia:`Você é especialista em tráfego pago B2B e psicologia de vendas. Crie um Reels de 30s usando urgência competitiva — o concorrente está ganhando mercado enquanto o lead hesita. Use dados de comportamento de mercado B2B e termine com oferta de tempo limitado. Tom: urgente, provocativo, sem ser alarmista.`,
    roteiro:`🎬 ROTEIRO COMPLETO — REELS 30s

⏱ 0–3s | GANCHO:
"Enquanto você lê esse post..."
"seu concorrente já fechou mais um cliente."

⏱ 3–18s | DESENVOLVIMENTO:
Tela 1: "Empresas B2B que investem em tráfego pago crescem 2.3x mais rápido que as que não investem."
[Fonte: relatório HubSpot 2024]

Tela 2: "No B2B, quem aparece primeiro na mente do comprador... fecha primeiro."

Tela 3: "Agosto tem 22 dias úteis."
"22 dias pra construir pipeline ou 22 dias deixando o mercado pra concorrência."

⏱ 18–27s | URGÊNCIA:
"Não é sobre anúncio. É sobre posicionamento."
"Quem não aparece... não existe."

⏱ 27–30s | CTA:
"DM 'AGOSTO' 👇"
"Calculamos o potencial do seu negócio esse mês — gratuito."

🎵 MÚSICA: Corporativo com ritmo acelerado
🎨 VISUAL: Clock visual, urgência, azul profundo`
  },
  {
    id:11, week:4, day:"Qua 27", pilar:"autoridade", format:"Carrossel",
    hook:"O dashboard de marketing que todo gestor B2B deveria olhar toda semana",
    objetivo:"Mostrar capacidade de BI da Aura BI, atrair leads que valorizam dados",
    cta:"Comenta 'DASHBOARD' e te mostro como montar o seu com os dados que você já tem.",
    prompt_ia:`Você é especialista em Business Intelligence e marketing analytics. Crie conteúdo para um carrossel de 8 slides mostrando os 6 KPIs essenciais que um dashboard de marketing B2B deve ter, com explicação prática de cada um, benchmark do mercado e como interpretar. Tom: técnico mas visual, educativo.`,
    roteiro:`📱 ROTEIRO CARROSSEL — 8 SLIDES

SLIDE 1 — CAPA:
"O dashboard que transforma dado em decisão"
"6 KPIs que todo gestor B2B deve ver toda semana"

SLIDE 2 — Por que dashboard importa:
"Sem dashboard: você descobre que a campanha falhou no relatório do mês."
"Com dashboard: você corrige na semana 1."
"A diferença: R$ economizados e oportunidade não perdida."

SLIDE 3 — KPI 1: CAC (Custo de Aquisição de Cliente)
Fórmula: Total investido / Nº clientes adquiridos
Benchmark B2B: R$200–800 por cliente (depende do ticket)
Alerta: CAC > 30% do LTV = modelo insustentável

SLIDE 4 — KPI 2: Taxa de Conversão por Etapa do Funil
Lead → Oportunidade → Proposta → Fechamento
"Onde o funil vaza define onde investir energia."

SLIDE 5 — KPI 3: LTV (Lifetime Value)
"Quanto um cliente vale durante todo o relacionamento."
LTV saudável B2B: 3–5x o CAC

SLIDE 6 — KPI 4: Tempo Médio de Fechamento
"Quantos dias do primeiro contato ao contrato assinado?"
"Esse número define sua capacidade de previsão de receita."

SLIDE 7 — KPIs 5 e 6: CPL Qualificado + ROAS Incremental
"CPL total mente. CPL qualificado decide."
"ROAS incremental mostra o que o anúncio realmente gerou."

SLIDE 8 — CTA:
"Você consegue ver esses 6 números hoje?"
"Comenta DASHBOARD 👇 — te mostro como montar com o que você já tem."

🎨 VISUAL: Estilo de BI/dashboard, cores da Aura BI`
  },
  {
    id:12, week:4, day:"Sex 29", pilar:"prova", format:"Reels",
    hook:"Fechando agosto: o que os dados dos nossos clientes mostraram esse mês",
    objetivo:"Consolidar autoridade, gerar interesse no início do próximo mês",
    cta:"Qual dessas métricas te surpreendeu? Comenta — e me conta se quer esse resultado também.",
    prompt_ia:`Você é especialista em marketing de performance. Escreva um Reels de 30s estilo 'wrap-up mensal' mostrando resultados agregados e anônimos de clientes de uma agência de tráfego pago. Use números reais (que podem ser hipotéticos mas críveis) e termine com abertura de agenda para setembro. Tom: confiante, transparente, celebrativo.`,
    roteiro:`🎬 ROTEIRO COMPLETO — REELS 30s

⏱ 0–3s | ABERTURA:
"Fechando agosto."
"Aqui está o que os dados dos nossos clientes mostraram:"

⏱ 3–20s | RESULTADOS (slides rápidos):
📊 "CPL médio dos clientes: R$67"
📊 "Redução média de custo vs início: -38%"
📊 "Taxa de conversão lead → reunião: 34%"
📊 "Diagnósticos realizados: 12"
📊 "Contratos fechados via tráfego: 3"
[cada número aparece com animação simples]

⏱ 20–27s | CONTEXTO:
"Esses números não são mágica."
"São resultado de gestão semanal, dados e decisão rápida."

⏱ 27–30s | CTA:
"Setembro abre agenda agora."
"Comenta qual número te surpreendeu 👇"

🎵 MÚSICA: Celebrativa, corporativa, positiva
🎨 VISUAL: Dashboard animado, números em destaque laranja`
  },
];

// ── SCRIPTS ──────────────────────────────────────────────────────
const SCRIPTS_DATA = [
  {
    id:1, category:"follow-up", icon:"RefreshCw", title:"Proposta Parada (3–7 dias)",
    subtitle:"Gatilho de novidade + escassez suave", tag:"Escassez + Novidade",
    text:`Oi [Nome], tudo bem?\n\nEstava revisando aqui e vi que a proposta ainda está em aberto. Queria aproveitar pra compartilhar uma novidade: aplicamos a mesma estratégia que propus pra vocês em outro cliente do mesmo segmento — o CPL caiu 48% no primeiro mês.\n\nFicou curioso em ver como fica especificamente pro negócio de vocês?\n\nPosso te mandar o case em 5 minutos. 🚀`
  },
  {
    id:2, category:"follow-up", icon:"Clock", title:"Última Chamada (10+ dias)",
    subtitle:"Urgência real com janela de tempo", tag:"Urgência Real",
    text:`[Nome], boa tarde!\n\nVou ser direto: estamos abrindo apenas 1 vaga nova essa semana pra gestão de tráfego — e você ainda está na lista de prioridade.\n\nSe fechar até quinta-feira, entramos em agosto com a estratégia já rodando. Depois disso, fila de espera pra setembro.\n\nVale 15 minutos essa semana pra fechar isso?`
  },
  {
    id:3, category:"follow-up", icon:"AlertCircle", title:"Reativação Fria (30+ dias)",
    subtitle:"Para leads que sumiram sem motivo claro", tag:"Reativação",
    text:`Oi [Nome]!\n\nFaz um tempo que não nos falamos — e tudo bem, sei que a rotina engole tudo.\n\nSó queria saber se a situação mudou por aí: aquele desafio com [mencionar o problema que o lead tinha] ainda é uma prioridade?\n\nSe sim, tenho uma proposta revisada que faz mais sentido pro momento atual. Se não, tudo certo também — só avisa pra eu atualizar minha agenda.\n\nAbraço!`
  },
  {
    id:4, category:"abordagem", icon:"Instagram", title:"Cold DM — Instagram",
    subtitle:"Para perfis de médias empresas B2B", tag:"Cold Inbound",
    text:`Oi [Nome]! Vi o perfil de vocês e fui dar uma olhada rápida nas campanhas que aparecem — percebi algumas coisas que provavelmente estão custando mais do que deveriam.\n\nNão é crítica, é oportunidade.\n\nFaço um diagnóstico rápido de graça (10 min) e mostro exatamente onde o orçamento pode trabalhar melhor. Topa?`
  },
  {
    id:5, category:"abordagem", icon:"Linkedin", title:"LinkedIn — Pós-conexão B2B",
    subtitle:"Mensagem enviada 24h após conexão aceita", tag:"LinkedIn B2B",
    text:`Olá [Nome], obrigado por aceitar a conexão!\n\nAcompanho a [Empresa] há algum tempo — parabéns pelo crescimento da presença digital.\n\nTrabalho com gestão de tráfego pago e BI de marketing para empresas do seu porte. Em menos de 10 minutos consigo mostrar como vocês podem reduzir o custo por lead sem aumentar o investimento.\n\nFaz sentido trocar uma ideia essa semana?`
  },
  {
    id:6, category:"abordagem", icon:"Phone", title:"WhatsApp — Indicação",
    subtitle:"Quando tem nome de quem indicou", tag:"Indicação Quente",
    text:`Oi [Nome]! Aqui é o Brunno da Aura BI. O [Nome] me passou seu contato — disse que vocês estão rodando anúncios e querendo escalar os resultados.\n\nTrabalho com gestão de tráfego pago focado em resultado real, não em métrica de vaidade.\n\nTenho um slot essa semana pra um diagnóstico gratuito de 10 minutos. Mosco exatamente onde a verba pode render mais.\n\nQuando ficaria melhor: terça ou quarta?`
  },
  {
    id:7, category:"diagnostico", icon:"BookOpen", title:"Roteiro Diagnóstico 10 Minutos",
    subtitle:"Script completo para reunião de vendas", tag:"Script Reunião",
    text:`DIAGNÓSTICO RÁPIDO — AURA BI (10 MIN)\n\n⏱ MIN 0–2 | CONTEXTO\n"Me conta: vocês já investem em anúncios pagos? Qual plataforma? E qual o objetivo principal agora — leads, vendas diretas ou reconhecimento de marca?"\n\n⏱ MIN 2–4 | DOR\n"Qual a maior frustração com as campanhas atuais? O que definitivamente não está funcionando?"\n\n⏱ MIN 4–6 | NÚMEROS\n"Vocês sabem o custo por lead hoje? E quantos leads viram clientes de fato? Pergunto porque é exatamente aqui que a maioria das empresas perde dinheiro sem perceber."\n\n⏱ MIN 6–8 | REVELAÇÃO\n[Compartilhar tela com benchmark do segmento]\n"Empresas do seu porte nesse segmento têm CPL entre R$X e R$Y. O que estou vendo aqui sugere que dá pra reduzir esse custo em [X]% com ajustes pontuais — sem aumentar verba."\n\n⏱ MIN 8–10 | FECHAMENTO\n"A gente consegue fazer isso com gestão estruturada. Tenho duas opções — uma pra começar rápido, uma mais completa. Posso mandar as duas ainda hoje. O que faz mais sentido pro momento de vocês?"`
  },
  {
    id:8, category:"diagnostico", icon:"FileText", title:"Proposta Rápida por Mensagem",
    subtitle:"Para enviar logo após diagnóstico por DM/WhatsApp", tag:"Pós-Diagnóstico",
    text:`[Nome], como combinei, aqui está o resumo:\n\n📋 O QUE IDENTIFICAMOS:\n[Preencher com 2-3 problemas específicos encontrados no diagnóstico]\n\n🎯 O QUE FAREMOS:\n• Reestruturação de campanha com segmentação cirúrgica\n• Criativo otimizado para o seu perfil de cliente\n• Relatório semanal com as métricas que importam\n• Reunião mensal de estratégia\n\n💰 INVESTIMENTO:\nGestão completa: R$[VALOR]/mês\n(Verba em plataforma: separado, direto pra Meta/Google)\n\n✅ PRÓXIMO PASSO:\nContrato digital, início em até 48h após assinatura.\n\nQualquer dúvida me fala — estou disponível agora.`
  },
];

// ── UTILIDADES ────────────────────────────────────────────────────
const uid = () => Math.random().toString(36).slice(2,9);

const pilarColor = p => ({dor:"#b91c1c",autoridade:C.blue,prova:C.success,objecao:C.warning}[p]||C.muted);
const pilarLabel = p => ({dor:"Dor/Urgência",autoridade:"Autoridade",prova:"Prova Social",objecao:"Quebra de Objeção"}[p]||p);
const pilarBg   = p => ({dor:C.dangerLight,autoridade:C.blueLight,prova:C.successLight,objecao:C.warningLight}[p]||"#f0f0f0");
const tempColor = t => ({hot:C.orange,warm:C.warning,cold:"#60a5fa"}[t]||C.muted);
const tempLabel = t => ({hot:"Quente",warm:"Morno",cold:"Frio"}[t]||t);

function Badge({children,color,bg}){
  return <span style={{background:bg||color+"18",color,fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:20,letterSpacing:"0.04em",whiteSpace:"nowrap"}}>{children}</span>;
}

function Btn({children,onClick,variant="primary",size="md",icon,style={}}){
  const styles={
    primary:{background:C.blue,color:"#fff",border:"none"},
    secondary:{background:C.bg,color:C.text,border:`1px solid ${C.border}`},
    danger:{background:C.dangerLight,color:C.danger,border:`1px solid #fca5a5`},
    ghost:{background:"transparent",color:C.muted,border:"none"},
    orange:{background:C.orange,color:"#fff",border:"none"},
  };
  const sizes={sm:{padding:"5px 12px",fontSize:12},md:{padding:"8px 16px",fontSize:13},lg:{padding:"11px 22px",fontSize:14}};
  return(
    <button onClick={onClick} style={{display:"inline-flex",alignItems:"center",gap:6,borderRadius:8,cursor:"pointer",fontWeight:700,transition:"opacity 0.15s",...sizes[size],...styles[variant],...style}}
      onMouseEnter={e=>e.currentTarget.style.opacity="0.85"}
      onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
      {icon&&icon}{children}
    </button>
  );
}

function Input({value,onChange,placeholder,multiline,rows=3,style={}}){
  const base={width:"100%",padding:"8px 12px",border:`1px solid ${C.border}`,borderRadius:8,fontSize:13,color:C.text,fontFamily:"inherit",background:C.card,outline:"none",boxSizing:"border-box",...style};
  return multiline
    ? <textarea value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} rows={rows} style={{...base,resize:"vertical"}}/>
    : <input value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} style={base}/>;
}

function Modal({open,onClose,title,children}){
  if(!open)return null;
  return(
    <div style={{position:"fixed",inset:0,background:"rgba(12,13,26,0.5)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:16}}>
      <div style={{background:C.card,borderRadius:16,padding:24,maxWidth:600,width:"100%",maxHeight:"90vh",overflowY:"auto",boxShadow:"0 20px 60px rgba(0,0,0,0.2)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
          <span style={{fontWeight:800,fontSize:16,color:C.text}}>{title}</span>
          <button onClick={onClose} style={{background:"none",border:"none",cursor:"pointer",color:C.muted}}><X size={18}/></button>
        </div>
        {children}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
// ABA 1 — KANBAN
// ────────────────────────────────────────────────────────────────
const COL_META={
  mapeados:{label:"Mapeados",color:C.muted},
  contato:{label:"1º Contato",color:C.purple},
  diagnostico:{label:"Diagnóstico",color:C.blue},
  proposta:{label:"Proposta Enviada",color:C.warning},
  negociacao:{label:"Em Negociação",color:C.orange},
  fechado:{label:"Fechado ✓",color:C.success},
};

const emptyLead=()=>({id:uid(),name:"",value:"",origin:"",temp:"warm",nextAction:"",segment:"",obs:""});

function KanbanTab(){
  const [cols,setCols]=useState({mapeados:[],contato:[],diagnostico:[],proposta:[],negociacao:[],fechado:[]});
  const [drag,setDrag]=useState(null);
  const [over,setOver]=useState(null);
  const [modal,setModal]=useState(null); // {mode:'new'|'edit', col, lead}

  const totalFechado=cols.fechado.reduce((s,l)=>s+(parseFloat(l.value)||0),0);
  const totalPipeline=Object.values(cols).flat().reduce((s,l)=>s+(parseFloat(l.value)||0),0);
  const pct=Math.min(cols.fechado.length/3,1);

  const saveLead=(lead,col)=>{
    if(modal.mode==="new"){
      setCols(p=>({...p,[col]:[...p[col],lead]}));
    } else {
      setCols(p=>{
        const n={...p};
        n[modal.col]=n[modal.col].map(l=>l.id===lead.id?lead:l);
        return n;
      });
    }
    setModal(null);
  };

  const deleteLead=(id,col)=>{
    setCols(p=>({...p,[col]:p[col].filter(l=>l.id!==id)}));
  };

  const moveLead=(lead,fromCol,toCol)=>{
    if(fromCol===toCol)return;
    setCols(p=>{
      const n={...p};
      n[fromCol]=n[fromCol].filter(l=>l.id!==lead.id);
      n[toCol]=[lead,...n[toCol]];
      return n;
    });
  };

  return(
    <div style={{display:"flex",flexDirection:"column",gap:20}}>
      {/* Painel de meta */}
      <div style={{background:C.card,borderRadius:14,padding:"20px 24px",border:`1px solid ${C.border}`,display:"flex",gap:24,alignItems:"center",flexWrap:"wrap"}}>
        <div style={{flex:1,minWidth:200}}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
            <span style={{fontWeight:700,fontSize:14,color:C.text}}>Meta — 3 contratos em agosto</span>
            <span style={{fontWeight:900,fontSize:15,color:cols.fechado.length>=3?C.success:C.blue}}>{cols.fechado.length}/3</span>
          </div>
          <div style={{height:10,background:C.bg,borderRadius:99,overflow:"hidden"}}>
            <div style={{height:"100%",width:`${pct*100}%`,background:`linear-gradient(90deg,${C.blue},${C.orange})`,borderRadius:99,transition:"width 0.4s"}}/>
          </div>
          <div style={{fontSize:11,color:C.muted,marginTop:5}}>
            {cols.fechado.length>=3?"🎉 Meta atingida!":cols.fechado.length===0?"Adicione seu primeiro lead para começar":`Faltam ${3-cols.fechado.length} contrato(s)`}
          </div>
        </div>
        <div style={{textAlign:"center"}}>
          <div style={{fontSize:22,fontWeight:900,color:C.blue}}>R$ {totalFechado.toLocaleString("pt-BR",{minimumFractionDigits:0})}</div>
          <div style={{fontSize:11,color:C.muted}}>receita fechada</div>
        </div>
        <div style={{textAlign:"center"}}>
          <div style={{fontSize:22,fontWeight:900,color:C.orange}}>{Object.values(cols).flat().length}</div>
          <div style={{fontSize:11,color:C.muted}}>leads no pipeline</div>
        </div>
        <div style={{textAlign:"center"}}>
          <div style={{fontSize:22,fontWeight:900,color:C.text}}>
            {totalPipeline>0?`R$ ${Math.round(totalPipeline/1000)}k`:"—"}
          </div>
          <div style={{fontSize:11,color:C.muted}}>potencial total</div>
        </div>
      </div>

      {/* Board */}
      <div style={{display:"flex",gap:12,overflowX:"auto",paddingBottom:8,alignItems:"flex-start"}}>
        {Object.entries(COL_META).map(([key,meta])=>(
          <div key={key}
            onDragOver={e=>{e.preventDefault();setOver(key);}}
            onDrop={()=>{if(drag)moveLead(drag.lead,drag.col,key);setDrag(null);setOver(null);}}
            style={{minWidth:220,flex:"0 0 220px",background:over===key?meta.color+"12":C.bg,border:`2px solid ${over===key?meta.color:"transparent"}`,borderRadius:12,padding:12,transition:"all 0.15s"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
              <div style={{width:10,height:10,borderRadius:"50%",background:meta.color}}/>
              <span style={{fontWeight:700,fontSize:12,color:C.text,flex:1}}>{meta.label}</span>
              <span style={{background:meta.color+"20",color:meta.color,fontWeight:700,fontSize:11,padding:"1px 8px",borderRadius:99}}>{cols[key].length}</span>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {cols[key].map(lead=>(
                <div key={lead.id} draggable
                  onDragStart={()=>setDrag({lead,col:key})}
                  style={{background:C.card,borderRadius:10,padding:"12px 14px",border:`1px solid ${C.border}`,cursor:"grab",boxShadow:"0 1px 4px rgba(0,0,0,0.05)"}}>
                  <div style={{fontWeight:700,fontSize:13,color:C.text,marginBottom:4}}>{lead.name||"(sem nome)"}</div>
                  <div style={{display:"flex",gap:6,marginBottom:6,flexWrap:"wrap",alignItems:"center"}}>
                    {lead.segment&&<Badge color={meta.color}>{lead.segment}</Badge>}
                    <span style={{fontSize:11,color:tempColor(lead.temp),fontWeight:600,display:"flex",alignItems:"center",gap:3}}>
                      {lead.temp==="hot"?<Flame size={11}/>:lead.temp==="warm"?<Thermometer size={11}/>:<Snowflake size={11}/>}
                      {tempLabel(lead.temp)}
                    </span>
                  </div>
                  {lead.value&&<div style={{fontWeight:900,fontSize:15,color:C.blue,marginBottom:6}}>R$ {parseFloat(lead.value).toLocaleString("pt-BR",{minimumFractionDigits:0})}/mês</div>}
                  {lead.nextAction&&<div style={{fontSize:11,color:C.orange,fontWeight:600,display:"flex",gap:4,alignItems:"flex-start",marginBottom:6}}><ArrowRight size={11} style={{marginTop:1,flexShrink:0}}/>{lead.nextAction}</div>}
                  <div style={{display:"flex",gap:6}}>
                    <Btn size="sm" variant="secondary" onClick={()=>setModal({mode:"edit",col:key,lead})} icon={<Edit3 size={11}/>}>Editar</Btn>
                    <Btn size="sm" variant="danger" onClick={()=>deleteLead(lead.id,key)} icon={<Trash2 size={11}/>}>Excluir</Btn>
                  </div>
                </div>
              ))}
              <button onClick={()=>setModal({mode:"new",col:key,lead:emptyLead()})}
                style={{display:"flex",alignItems:"center",gap:6,padding:"8px 12px",borderRadius:8,border:`1.5px dashed ${meta.color}60`,background:"transparent",cursor:"pointer",color:meta.color,fontWeight:600,fontSize:12,width:"100%",justifyContent:"center"}}>
                <Plus size={13}/> Adicionar lead
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal add/edit */}
      <Modal open={!!modal} onClose={()=>setModal(null)} title={modal?.mode==="new"?"Novo Lead":"Editar Lead"}>
        {modal&&<LeadForm initial={modal.lead} onSave={lead=>saveLead(lead,modal.col)} onCancel={()=>setModal(null)} col={modal.col}/>}
      </Modal>
    </div>
  );
}

function LeadForm({initial,onSave,onCancel}){
  const [lead,setLead]=useState({...initial});
  const set=(k,v)=>setLead(p=>({...p,[k]:v}));
  return(
    <div style={{display:"flex",flexDirection:"column",gap:12}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
        <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Nome da empresa *</div><Input value={lead.name} onChange={v=>set("name",v)} placeholder="Ex: Empresa ABC"/></div>
        <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Segmento</div><Input value={lead.segment} onChange={v=>set("segment",v)} placeholder="Ex: Tecnologia, Saúde..."/></div>
        <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Valor estimado (R$/mês)</div><Input value={lead.value} onChange={v=>set("value",v)} placeholder="Ex: 3500"/></div>
        <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Origem do lead</div><Input value={lead.origin} onChange={v=>set("origin",v)} placeholder="Instagram, LinkedIn, Indicação..."/></div>
      </div>
      <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Temperatura</div>
        <div style={{display:"flex",gap:8}}>
          {["hot","warm","cold"].map(t=>(
            <button key={t} onClick={()=>set("temp",t)} style={{flex:1,padding:"8px",borderRadius:8,border:`2px solid ${lead.temp===t?tempColor(t):C.border}`,background:lead.temp===t?tempColor(t)+"15":"transparent",cursor:"pointer",fontWeight:700,fontSize:12,color:lead.temp===t?tempColor(t):C.muted}}>
              {tempLabel(t)}
            </button>
          ))}
        </div>
      </div>
      <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Próxima ação</div><Input value={lead.nextAction} onChange={v=>set("nextAction",v)} placeholder="Ex: Enviar proposta até sexta"/></div>
      <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Observações</div><Input value={lead.obs} onChange={v=>set("obs",v)} placeholder="Informações extras sobre o lead..." multiline rows={2}/></div>
      <div style={{display:"flex",gap:8,justifyContent:"flex-end",marginTop:8}}>
        <Btn variant="secondary" onClick={onCancel}>Cancelar</Btn>
        <Btn variant="primary" onClick={()=>onSave(lead)} icon={<Save size={14}/>}>Salvar lead</Btn>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
// ABA 2 — CONTEÚDO
// ────────────────────────────────────────────────────────────────
function ContentTab(){
  const [posts,setPosts]=useState(CONTENT_AGOSTO.map(p=>({...p})));
  const [filter,setFilter]=useState("all");
  const [expanded,setExpanded]=useState(null);
  const [tab2,setTab2]=useState("roteiro"); // roteiro | prompt
  const [editing,setEditing]=useState(null);
  const [addModal,setAddModal]=useState(false);

  const filtered=filter==="all"?posts:posts.filter(p=>p.pilar===filter);
  const weeks=[1,2,3,4];

  const updatePost=(id,fields)=>setPosts(p=>p.map(x=>x.id===id?{...x,...fields}:x));
  const deletePost=(id)=>setPosts(p=>p.filter(x=>x.id!==id));
  const addPost=(post)=>{setPosts(p=>[...p,{...post,id:uid()}]);setAddModal(false);};

  return(
    <div style={{display:"flex",flexDirection:"column",gap:20}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
          {["all","dor","autoridade","prova","objecao"].map(f=>(
            <button key={f} onClick={()=>setFilter(f)} style={{padding:"7px 14px",borderRadius:99,border:"none",cursor:"pointer",fontWeight:700,fontSize:12,background:filter===f?(f==="all"?C.blue:pilarColor(f)):C.bg,color:filter===f?"#fff":C.muted,transition:"all 0.15s"}}>
              {f==="all"?"Todos":pilarLabel(f)}
            </button>
          ))}
        </div>
        <Btn variant="orange" onClick={()=>setAddModal(true)} icon={<Plus size={14}/>}>Novo post</Btn>
      </div>

      {weeks.map(w=>{
        const wPosts=filtered.filter(p=>p.week===w);
        if(!wPosts.length)return null;
        return(
          <div key={w}>
            <div style={{fontWeight:700,fontSize:11,color:C.muted,marginBottom:10,textTransform:"uppercase",letterSpacing:"0.08em"}}>Semana {w}</div>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {wPosts.map(post=>{
                const isOpen=expanded===post.id;
                return(
                  <div key={post.id} style={{background:C.card,borderRadius:12,border:`1px solid ${C.border}`,overflow:"hidden"}}>
                    <div onClick={()=>setExpanded(isOpen?null:post.id)} style={{padding:"14px 18px",cursor:"pointer",display:"flex",gap:12,alignItems:"center"}}>
                      <div style={{width:42,height:42,borderRadius:10,background:pilarBg(post.pilar),display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                        <span style={{fontSize:10,fontWeight:800,color:pilarColor(post.pilar)}}>{post.day.split(" ")[0]}</span>
                        <span style={{fontSize:11,fontWeight:900,color:pilarColor(post.pilar)}}>{post.day.split(" ")[1]}</span>
                      </div>
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{fontWeight:700,fontSize:13,color:C.text,marginBottom:5,lineHeight:1.3}}>{post.hook}</div>
                        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                          <Badge color={pilarColor(post.pilar)} bg={pilarBg(post.pilar)}>{pilarLabel(post.pilar)}</Badge>
                          <Badge color={C.blue} bg={C.blueLight}>{post.format}</Badge>
                        </div>
                      </div>
                      <div style={{display:"flex",gap:6,alignItems:"center",flexShrink:0}} onClick={e=>e.stopPropagation()}>
                        <Btn size="sm" variant="secondary" onClick={()=>setEditing(post)} icon={<Edit3 size={11}/>}>Editar</Btn>
                        <Btn size="sm" variant="danger" onClick={()=>deletePost(post.id)} icon={<Trash2 size={11}/>}></Btn>
                      </div>
                      <ChevronRight size={16} color={C.muted} style={{flexShrink:0,transform:isOpen?"rotate(90deg)":"none",transition:"transform 0.2s"}}/>
                    </div>
                    {isOpen&&(
                      <div style={{borderTop:`1px solid ${C.border}`,padding:"16px 18px",background:"#fafbff",display:"flex",flexDirection:"column",gap:14}}>
                        <div style={{display:"flex",gap:8}}>
                          {["roteiro","prompt"].map(t=>(
                            <button key={t} onClick={()=>setTab2(t)} style={{padding:"6px 14px",borderRadius:8,border:"none",cursor:"pointer",fontWeight:700,fontSize:12,background:tab2===t?C.blue:"transparent",color:tab2===t?"#fff":C.muted}}>
                              {t==="roteiro"?"📋 Roteiro completo":"🤖 Prompt para IA"}
                            </button>
                          ))}
                        </div>
                        {tab2==="roteiro"&&(
                          <>
                            <div>
                              <div style={{fontSize:11,fontWeight:700,color:C.muted,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.06em"}}>Objetivo do post</div>
                              <div style={{fontSize:13,color:C.text}}>{post.objetivo}</div>
                            </div>
                            <div>
                              <div style={{fontSize:11,fontWeight:700,color:C.muted,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.06em"}}>Roteiro</div>
                              <pre style={{fontFamily:"inherit",fontSize:13,color:C.text,lineHeight:1.8,whiteSpace:"pre-wrap",margin:0,background:C.bg,padding:14,borderRadius:8}}>{post.roteiro}</pre>
                            </div>
                            <div>
                              <div style={{fontSize:11,fontWeight:700,color:C.muted,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.06em"}}>CTA</div>
                              <div style={{fontSize:13,color:C.orange,fontWeight:600}}>{post.cta}</div>
                            </div>
                          </>
                        )}
                        {tab2==="prompt"&&(
                          <div>
                            <div style={{fontSize:11,fontWeight:700,color:C.muted,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.06em"}}>Prompt pronto para ChatGPT / Claude</div>
                            <pre style={{fontFamily:"inherit",fontSize:13,color:C.text,lineHeight:1.8,whiteSpace:"pre-wrap",margin:0,background:C.bg,padding:14,borderRadius:8}}>{post.prompt_ia}</pre>
                            <CopyBtn text={post.prompt_ia} label="Copiar prompt"/>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      <Modal open={addModal} onClose={()=>setAddModal(false)} title="Novo post">
        <PostForm onSave={addPost} onCancel={()=>setAddModal(false)}/>
      </Modal>
      <Modal open={!!editing} onClose={()=>setEditing(null)} title="Editar post">
        {editing&&<PostForm initial={editing} onSave={p=>{updatePost(p.id,p);setEditing(null);}} onCancel={()=>setEditing(null)}/>}
      </Modal>
    </div>
  );
}

function PostForm({initial,onSave,onCancel}){
  const [p,setP]=useState(initial||{week:1,day:"",pilar:"dor",format:"Reels",hook:"",objetivo:"",cta:"",roteiro:"",prompt_ia:""});
  const s=(k,v)=>setP(x=>({...x,[k]:v}));
  return(
    <div style={{display:"flex",flexDirection:"column",gap:12}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
        <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Semana</div>
          <select value={p.week} onChange={e=>s("week",Number(e.target.value))} style={{width:"100%",padding:"8px 10px",borderRadius:8,border:`1px solid ${C.border}`,fontSize:13,fontFamily:"inherit"}}>
            {[1,2,3,4].map(w=><option key={w} value={w}>Semana {w}</option>)}
          </select>
        </div>
        <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Dia</div><Input value={p.day} onChange={v=>s("day",v)} placeholder="Ex: Seg 04"/></div>
        <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Formato</div>
          <select value={p.format} onChange={e=>s("format",e.target.value)} style={{width:"100%",padding:"8px 10px",borderRadius:8,border:`1px solid ${C.border}`,fontSize:13,fontFamily:"inherit"}}>
            {["Reels","Carrossel","Post texto","Stories","LinkedIn"].map(f=><option key={f}>{f}</option>)}
          </select>
        </div>
      </div>
      <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Pilar</div>
        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
          {["dor","autoridade","prova","objecao"].map(pl=>(
            <button key={pl} onClick={()=>s("pilar",pl)} style={{flex:1,minWidth:80,padding:"7px",borderRadius:8,border:`2px solid ${p.pilar===pl?pilarColor(pl):C.border}`,background:p.pilar===pl?pilarBg(pl):"transparent",cursor:"pointer",fontWeight:700,fontSize:11,color:p.pilar===pl?pilarColor(pl):C.muted}}>
              {pilarLabel(pl)}
            </button>
          ))}
        </div>
      </div>
      <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Hook (título do post)</div><Input value={p.hook} onChange={v=>s("hook",v)} placeholder="A frase de abertura que vai parar o scroll"/></div>
      <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Objetivo</div><Input value={p.objetivo} onChange={v=>s("objetivo",v)} placeholder="O que esse post deve gerar?"/></div>
      <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>CTA</div><Input value={p.cta} onChange={v=>s("cta",v)} placeholder="Chamada para ação"/></div>
      <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Roteiro completo</div><Input value={p.roteiro} onChange={v=>s("roteiro",v)} placeholder="Escreva o roteiro aqui..." multiline rows={5}/></div>
      <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Prompt para IA</div><Input value={p.prompt_ia} onChange={v=>s("prompt_ia",v)} placeholder="Prompt para gerar o conteúdo com IA..." multiline rows={3}/></div>
      <div style={{display:"flex",gap:8,justifyContent:"flex-end",marginTop:8}}>
        <Btn variant="secondary" onClick={onCancel}>Cancelar</Btn>
        <Btn variant="primary" onClick={()=>onSave(p)} icon={<Save size={14}/>}>Salvar</Btn>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
// ABA 3 — SCRIPTS
// ────────────────────────────────────────────────────────────────
function CopyBtn({text,label="Copiar"}){
  const [c,setC]=useState(false);
  return(
    <button onClick={()=>{navigator.clipboard.writeText(text).then(()=>{setC(true);setTimeout(()=>setC(false),2000);});}}
      style={{display:"inline-flex",alignItems:"center",gap:6,marginTop:10,padding:"8px 16px",borderRadius:8,border:"none",cursor:"pointer",background:c?C.success:C.blue,color:"#fff",fontWeight:700,fontSize:12,transition:"all 0.2s"}}>
      {c?<Check size={13}/>:<Copy size={13}/>}{c?"Copiado!":label}
    </button>
  );
}

function ScriptsTab(){
  const [scripts,setScripts]=useState(SCRIPTS_DATA.map(s=>({...s})));
  const [active,setActive]=useState("follow-up");
  const [expanded,setExpanded]=useState(null);
  const [editing,setEditing]=useState(null);
  const [addModal,setAddModal]=useState(false);

  const icons={RefreshCw,Clock,AlertCircle,Instagram,Linkedin,Phone,BookOpen,FileText};
  const filtered=scripts.filter(s=>s.category===active);

  const updateScript=(id,fields)=>setScripts(p=>p.map(s=>s.id===id?{...s,...fields}:s));
  const deleteScript=(id)=>setScripts(p=>p.filter(s=>s.id!==id));
  const addScript=(s)=>{setScripts(p=>[...p,{...s,id:uid()}]);setAddModal(false);};

  const cats=[{key:"follow-up",label:"Follow-Up"},{key:"abordagem",label:"Abordagem Fria"},{key:"diagnostico",label:"Diagnóstico"}];

  return(
    <div style={{display:"flex",flexDirection:"column",gap:20}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
        <div style={{display:"flex",gap:8}}>
          {cats.map(c=>(
            <button key={c.key} onClick={()=>setActive(c.key)} style={{padding:"8px 18px",borderRadius:99,border:"none",cursor:"pointer",fontWeight:700,fontSize:13,background:active===c.key?C.blue:C.bg,color:active===c.key?"#fff":C.muted,transition:"all 0.15s"}}>
              {c.label}
            </button>
          ))}
        </div>
        <Btn variant="orange" onClick={()=>setAddModal(true)} icon={<Plus size={14}/>}>Novo script</Btn>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:12}}>
        {filtered.map(script=>{
          const Icon=icons[script.icon]||FileText;
          const isOpen=expanded===script.id;
          return(
            <div key={script.id} style={{background:C.card,borderRadius:14,border:`1px solid ${C.border}`,overflow:"hidden"}}>
              <div onClick={()=>setExpanded(isOpen?null:script.id)} style={{padding:"16px 20px",cursor:"pointer",display:"flex",gap:14,alignItems:"center"}}>
                <div style={{width:40,height:40,borderRadius:10,background:C.blueLight,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <Icon size={18} color={C.blue}/>
                </div>
                <div style={{flex:1}}>
                  <div style={{fontWeight:700,fontSize:14,color:C.text,marginBottom:3}}>{script.title}</div>
                  <div style={{fontSize:12,color:C.muted}}>{script.subtitle}</div>
                </div>
                <Badge color={C.orange} bg={C.orangeLight}>{script.tag}</Badge>
                <div style={{display:"flex",gap:6,flexShrink:0}} onClick={e=>e.stopPropagation()}>
                  <Btn size="sm" variant="secondary" onClick={()=>setEditing(script)} icon={<Edit3 size={11}/>}>Editar</Btn>
                  <Btn size="sm" variant="danger" onClick={()=>deleteScript(script.id)} icon={<Trash2 size={11}/>}></Btn>
                </div>
                <ChevronRight size={16} color={C.muted} style={{flexShrink:0,transform:isOpen?"rotate(90deg)":"none",transition:"transform 0.2s"}}/>
              </div>
              {isOpen&&(
                <div style={{borderTop:`1px solid ${C.border}`,padding:"16px 20px",background:"#fafbff"}}>
                  <pre style={{fontFamily:"inherit",fontSize:13,color:C.text,lineHeight:1.8,whiteSpace:"pre-wrap",margin:0}}>{script.text}</pre>
                  <CopyBtn text={script.text}/>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Modal open={addModal} onClose={()=>setAddModal(false)} title="Novo script">
        <ScriptForm onSave={addScript} onCancel={()=>setAddModal(false)}/>
      </Modal>
      <Modal open={!!editing} onClose={()=>setEditing(null)} title="Editar script">
        {editing&&<ScriptForm initial={editing} onSave={s=>{updateScript(s.id,s);setEditing(null);}} onCancel={()=>setEditing(null)}/>}
      </Modal>
    </div>
  );
}

function ScriptForm({initial,onSave,onCancel}){
  const [s,setS]=useState(initial||{category:"follow-up",title:"",subtitle:"",tag:"",text:"",icon:"FileText"});
  const upd=(k,v)=>setS(x=>({...x,[k]:v}));
  return(
    <div style={{display:"flex",flexDirection:"column",gap:12}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
        <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Categoria</div>
          <select value={s.category} onChange={e=>upd("category",e.target.value)} style={{width:"100%",padding:"8px 10px",borderRadius:8,border:`1px solid ${C.border}`,fontSize:13,fontFamily:"inherit"}}>
            <option value="follow-up">Follow-Up</option>
            <option value="abordagem">Abordagem Fria</option>
            <option value="diagnostico">Diagnóstico</option>
          </select>
        </div>
        <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Tag</div><Input value={s.tag} onChange={v=>upd("tag",v)} placeholder="Ex: Escassez, B2B..."/></div>
      </div>
      <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Título</div><Input value={s.title} onChange={v=>upd("title",v)} placeholder="Nome do script"/></div>
      <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Subtítulo</div><Input value={s.subtitle} onChange={v=>upd("subtitle",v)} placeholder="Quando usar?"/></div>
      <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Texto do script</div><Input value={s.text} onChange={v=>upd("text",v)} multiline rows={6} placeholder="Cole ou escreva o script aqui..."/></div>
      <div style={{display:"flex",gap:8,justifyContent:"flex-end",marginTop:8}}>
        <Btn variant="secondary" onClick={onCancel}>Cancelar</Btn>
        <Btn variant="primary" onClick={()=>onSave(s)} icon={<Save size={14}/>}>Salvar</Btn>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
// ABA 4 — CALCULADORA
// ────────────────────────────────────────────────────────────────
function NumInput({label,value,onChange,prefix,suffix,hint,min=0,max,step=1}){
  const [focused,setFocused]=useState(false);
  return(
    <div style={{marginBottom:20}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:6}}>
        <label style={{fontSize:13,fontWeight:600,color:C.text}}>{label}</label>
        {hint&&<span style={{fontSize:11,color:C.muted}}>{hint}</span>}
      </div>
      <div style={{display:"flex",alignItems:"center",border:`2px solid ${focused?C.blue:C.border}`,borderRadius:8,overflow:"hidden",background:C.card,transition:"border-color 0.15s"}}>
        {prefix&&<span style={{padding:"0 10px",fontSize:13,color:C.muted,fontWeight:600,whiteSpace:"nowrap"}}>{prefix}</span>}
        <input type="number" value={value} min={min} max={max} step={step}
          onChange={e=>onChange(e.target.value===""?0:parseFloat(e.target.value))}
          onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)}
          style={{flex:1,border:"none",outline:"none",padding:"10px 8px",fontSize:15,fontWeight:700,color:C.text,fontFamily:"inherit",background:"transparent",minWidth:0}}
        />
        {suffix&&<span style={{padding:"0 10px",fontSize:13,color:C.muted,fontWeight:600}}>{suffix}</span>}
      </div>
      <input type="range" min={min||0} max={max||100} step={step} value={value}
        onChange={e=>onChange(parseFloat(e.target.value))}
        style={{width:"100%",accentColor:C.blue,marginTop:8,cursor:"pointer"}}
      />
    </div>
  );
}

function CalcTab(){
  const [budget,setBudget]=useState(0);
  const [cpc,setCpc]=useState(0);
  const [convRate,setConvRate]=useState(0);
  const [diagRate,setDiagRate]=useState(0);
  const [closeRate,setCloseRate]=useState(0);
  const [ticket,setTicket]=useState(0);

  const clicks=cpc>0?Math.round(budget/cpc):0;
  const leads=Math.round(clicks*convRate/100);
  const diags=Math.round(leads*diagRate/100);
  const contracts=Math.round(diags*closeRate/100);
  const revenue=contracts*ticket;
  const cac=contracts>0?Math.round(budget/contracts):0;
  const roi=budget>0?((revenue-budget)/budget*100).toFixed(1):0;
  const needClose=diags>0?(3/diags*100).toFixed(0):"—";
  const ltv=ticket*12;
  const ltv_cac=cac>0?(ltv/cac).toFixed(1):"—";

  const funnel=[
    {label:"Investimento",val:`R$ ${budget.toLocaleString("pt-BR",{minimumFractionDigits:2})}`,color:C.blue,width:"100%"},
    {label:"Cliques",val:clicks.toLocaleString("pt-BR"),color:C.purple,width:`${clicks>0?85:0}%`},
    {label:"Leads",val:leads,color:C.warning,width:`${leads>0?70:0}%`},
    {label:"Diagnósticos",val:diags,color:C.orange,width:`${diags>0?55:0}%`},
    {label:"Contratos",val:contracts,color:contracts>=3?C.success:C.danger,width:`${contracts>0?40:0}%`},
    {label:"Receita",val:`R$ ${revenue.toLocaleString("pt-BR",{minimumFractionDigits:0})}`,color:C.success,width:`${revenue>0?30:0}%`},
  ];

  const benchmarks=[
    {label:"CPC B2B Meta Ads",val:"R$ 1,50 – R$ 5,00"},
    {label:"CPC B2B Google Ads",val:"R$ 3,00 – R$ 12,00"},
    {label:"Taxa conversão LP B2B",val:"5% – 15%"},
    {label:"Lead → Reunião",val:"20% – 50%"},
    {label:"Taxa fechamento",val:"20% – 40%"},
    {label:"LTV/CAC saudável",val:"3x – 5x"},
  ];

  return(
    <div style={{display:"flex",gap:20,flexWrap:"wrap",alignItems:"flex-start"}}>
      {/* Inputs */}
      <div style={{flex:1,minWidth:280,background:C.card,borderRadius:14,padding:24,border:`1px solid ${C.border}`}}>
        <div style={{fontWeight:800,fontSize:15,color:C.text,marginBottom:4,display:"flex",alignItems:"center",gap:8}}>
          <BarChart2 size={16} color={C.blue}/> Parâmetros de agosto
        </div>
        <div style={{fontSize:12,color:C.muted,marginBottom:20}}>Digite ou arraste os sliders — aceita números quebrados</div>

        <NumInput label="Investimento em tráfego" value={budget} onChange={setBudget} prefix="R$" hint="Meta Ads + Google Ads" min={0} max={20000} step={50}/>
        <NumInput label="CPC médio estimado" value={cpc} onChange={setCpc} prefix="R$" hint="Custo por clique" min={0.01} max={20} step={0.01}/>
        <NumInput label="Taxa de conversão (clique → lead)" value={convRate} onChange={setConvRate} suffix="%" hint="Benchmark: 5–15%" min={0} max={100} step={0.5}/>
        <NumInput label="% Leads que viram diagnóstico" value={diagRate} onChange={setDiagRate} suffix="%" hint="Benchmark: 20–50%" min={0} max={100} step={1}/>
        <NumInput label="Taxa de fechamento" value={closeRate} onChange={setCloseRate} suffix="%" hint="Benchmark: 20–40%" min={0} max={100} step={1}/>
        <NumInput label="Ticket médio mensal" value={ticket} onChange={setTicket} prefix="R$" hint="Valor do contrato/mês" min={0} max={30000} step={100}/>

        {/* Benchmarks */}
        <div style={{background:C.blueLight,borderRadius:10,padding:14,marginTop:4}}>
          <div style={{fontSize:11,fontWeight:700,color:C.blue,marginBottom:10,textTransform:"uppercase",letterSpacing:"0.06em"}}>Benchmarks B2B</div>
          {benchmarks.map((b,i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"4px 0",borderBottom:i<benchmarks.length-1?`1px solid ${C.border}60`:"none"}}>
              <span style={{fontSize:11,color:C.muted}}>{b.label}</span>
              <span style={{fontSize:11,fontWeight:700,color:C.blue}}>{b.val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Resultados */}
      <div style={{flex:1,minWidth:280,display:"flex",flexDirection:"column",gap:14}}>
        <div style={{fontWeight:800,fontSize:15,color:C.text,display:"flex",alignItems:"center",gap:8}}>
          <TrendingUp size={16} color={C.orange}/> Projeção do mês
        </div>

        {/* KPIs grid */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
          {[
            {label:"Cliques",val:clicks.toLocaleString("pt-BR"),color:C.purple,sub:"visitantes"},
            {label:"Leads",val:leads,color:C.warning,sub:"formulários/DMs"},
            {label:"Diagnósticos",val:diags,color:C.orange,sub:"reuniões"},
            {label:"Contratos",val:contracts,color:contracts>=3?C.success:C.danger,sub:contracts>=3?"✓ meta!":contracts===0?"—":`faltam ${3-contracts}`},
            {label:"CAC",val:cac>0?`R$ ${cac.toLocaleString("pt-BR")}`:"—",color:C.blue,sub:"custo p/ cliente"},
            {label:"ROI",val:`${roi}%`,color:Number(roi)>100?C.success:Number(roi)>0?C.warning:C.danger,sub:"retorno s/ verba"},
          ].map((k,i)=>(
            <div key={i} style={{background:C.card,borderRadius:12,padding:"14px 12px",border:`1px solid ${C.border}`,textAlign:"center"}}>
              <div style={{fontSize:20,fontWeight:900,color:k.color,lineHeight:1}}>{k.val}</div>
              <div style={{fontSize:11,fontWeight:700,color:C.text,marginTop:5}}>{k.label}</div>
              <div style={{fontSize:10,color:C.muted,marginTop:2}}>{k.sub}</div>
            </div>
          ))}
        </div>

        {/* LTV/CAC */}
        <div style={{background:C.card,borderRadius:12,padding:"14px 16px",border:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div>
            <div style={{fontSize:12,fontWeight:700,color:C.text}}>LTV / CAC</div>
            <div style={{fontSize:11,color:C.muted}}>Saúde do modelo de negócio</div>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{fontSize:22,fontWeight:900,color:parseFloat(ltv_cac)>=3?C.success:C.warning}}>{ltv_cac}x</div>
            <div style={{fontSize:10,color:C.muted}}>meta: acima de 3x</div>
          </div>
        </div>

        {/* Funil visual */}
        <div style={{background:C.card,borderRadius:12,padding:"16px 18px",border:`1px solid ${C.border}`}}>
          <div style={{fontSize:11,fontWeight:700,color:C.muted,marginBottom:12,textTransform:"uppercase",letterSpacing:"0.06em"}}>Funil visual</div>
          {funnel.map((f,i)=>(
            <div key={i} style={{marginBottom:8}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
                <span style={{fontSize:12,color:C.muted}}>{f.label}</span>
                <span style={{fontSize:13,fontWeight:700,color:f.color}}>{f.val}</span>
              </div>
              <div style={{height:6,background:C.bg,borderRadius:99,overflow:"hidden"}}>
                <div style={{height:"100%",width:f.width,background:f.color,borderRadius:99,transition:"width 0.4s"}}/>
              </div>
            </div>
          ))}
        </div>

        {/* Status da meta */}
        <div style={{background:contracts>=3?C.successLight:budget===0?"#f0f0f0":C.warningLight,borderRadius:12,padding:"14px 18px",border:`1px solid ${contracts>=3?"#86efac":budget===0?C.border:"#fed7aa"}`}}>
          <div style={{fontWeight:700,fontSize:13,color:contracts>=3?C.success:budget===0?C.muted:C.warning,marginBottom:4}}>
            {contracts>=3?"🎉 Meta atingível com esses parâmetros!":budget===0?"Configure os parâmetros para ver a projeção":contracts===0?"⚠️ Não há contratos projetados — revise as taxas":"📊 Ajuste necessário para chegar em 3 contratos"}
          </div>
          <div style={{fontSize:12,color:C.text,lineHeight:1.6}}>
            {contracts>=3
              ?`Com R$ ${budget.toLocaleString("pt-BR",{minimumFractionDigits:0})} você projeta ${contracts} contratos e R$ ${revenue.toLocaleString("pt-BR",{minimumFractionDigits:0})} de receita.`
              :budget===0
              ?"Comece preenchendo o investimento mensal em tráfego."
              :`Taxa de fechamento necessária: ${needClose}% dos ${diags} diagnósticos. Aumente o budget, melhore a oferta ou o fechamento.`}
          </div>
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
// APP PRINCIPAL
// ────────────────────────────────────────────────────────────────
const TABS=[
  {key:"kanban",label:"Pipeline",icon:LayoutDashboard},
  {key:"calendar",label:"Calendário",icon:CalendarDays},
  {key:"content",label:"Conteúdo",icon:Calendar},
  {key:"scripts",label:"Scripts",icon:MessageSquare},
  {key:"calc",label:"Calculadora",icon:Calculator},
];

export default function App(){
  const [tab,setTab]=useState("kanban");
  return(
    <div style={{minHeight:"100vh",background:C.bg,fontFamily:"'Inter',-apple-system,sans-serif"}}>
      <div style={{background:C.blue}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 20px"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 0 0",flexWrap:"wrap",gap:12}}>
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <div style={{width:36,height:36,borderRadius:10,background:C.orange,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:13,color:"#fff"}}>AB</div>
              <div>
                <div style={{fontWeight:900,fontSize:15,color:"#fff",letterSpacing:"-0.02em"}}>Aura BI</div>
                <div style={{fontSize:11,color:"rgba(255,255,255,0.5)"}}>Central Command · Agosto 2025</div>
              </div>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:8,background:"rgba(255,255,255,0.12)",borderRadius:99,padding:"7px 16px"}}>
              <Target size={13} color={C.orange}/>
              <span style={{fontSize:12,fontWeight:700,color:"#fff"}}>Meta: 3 contratos fechados em agosto</span>
            </div>
          </div>
          <div style={{display:"flex",gap:2,marginTop:14,flexWrap:"wrap"}}>
            {TABS.map(t=>{
              const Icon=t.icon;
              const active=tab===t.key;
              return(
                <button key={t.key} onClick={()=>setTab(t.key)} style={{display:"flex",alignItems:"center",gap:7,padding:"10px 20px",border:"none",cursor:"pointer",fontWeight:700,fontSize:13,borderRadius:"8px 8px 0 0",background:active?C.bg:"transparent",color:active?C.blue:"rgba(255,255,255,0.65)",transition:"all 0.15s"}}>
                  <Icon size={15}/>{t.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"24px 20px 60px"}}>
        {tab==="kanban"&&<KanbanTab/>}
        {tab==="calendar"&&<CalendarTab/>}
        {tab==="content"&&<ContentTab/>}
        {tab==="scripts"&&<ScriptsTab/>}
        {tab==="calc"&&<CalcTab/>}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
// DADOS INICIAIS DO CALENDÁRIO — AGOSTO 2025
// ────────────────────────────────────────────────────────────────
const AGOSTO_EVENTS_INIT = [
  // SEMANA 1
  { id:"e1",  day:4,  type:"post",    title:"Reels — Verba desperdiçada",       pilar:"dor",        status:"pendente", hora:"08:00", desc:"Gancho: 73% da sua verba está sendo jogada fora. Roteiro completo na aba Conteúdo." },
  { id:"e2",  day:5,  type:"tarefa",  title:"Montar lista de 20 leads B2B",     pilar:"",           status:"pendente", hora:"09:00", desc:"Pesquisar no LinkedIn empresas de médio porte: tecnologia, indústria, saúde." },
  { id:"e3",  day:6,  type:"post",    title:"Carrossel — 5 métricas ocultas",   pilar:"autoridade", status:"pendente", hora:"08:00", desc:"Salvar e distribuir. Meta: 15+ salvamentos." },
  { id:"e4",  day:7,  type:"tarefa",  title:"Enviar 10 cold DMs Instagram",     pilar:"",           status:"pendente", hora:"10:00", desc:"Usar script Cold DM da aba Scripts. Registrar respostas no Pipeline." },
  { id:"e5",  day:8,  type:"post",    title:"Post texto — Case CPL -61%",       pilar:"prova",      status:"pendente", hora:"08:00", desc:"Distribuir no Instagram + LinkedIn." },
  { id:"e6",  day:8,  type:"tarefa",  title:"Follow-up leads da semana",        pilar:"",           status:"pendente", hora:"15:00", desc:"Verificar respostas das DMs. Mover leads respondidos para '1º Contato' no Pipeline." },
  // SEMANA 2
  { id:"e7",  day:11, type:"post",    title:"Reels — Tráfego caro (objeção)",   pilar:"objecao",    status:"pendente", hora:"08:00", desc:"Quebrar objeção de custo. CTA: comenta CALCULAR." },
  { id:"e8",  day:11, type:"tarefa",  title:"Prospecção LinkedIn — 10 conexões",pilar:"",           status:"pendente", hora:"09:00", desc:"Conectar com diretores/gerentes. Usar script LinkedIn da aba Scripts." },
  { id:"e9",  day:12, type:"reuniao", title:"Diagnóstico — Lead #1",            pilar:"",           status:"pendente", hora:"10:00", desc:"Usar roteiro de diagnóstico 10min. Preparar benchmark do segmento do lead." },
  { id:"e10", day:13, type:"post",    title:"Carrossel — Google vs Meta Ads",   pilar:"autoridade", status:"pendente", hora:"08:00", desc:"Post educativo. Meta: gerar comentários sobre modelo de negócio." },
  { id:"e11", day:13, type:"tarefa",  title:"Enviar proposta — Lead #1",        pilar:"",           status:"pendente", hora:"14:00", desc:"Após diagnóstico de ter 12. Usar template 'Proposta Rápida' da aba Scripts." },
  { id:"e12", day:14, type:"followup",title:"Follow-up proposta — Lead #1",     pilar:"",           status:"pendente", hora:"11:00", desc:"Se não abriu em 24h: enviar case relacionado ao segmento." },
  { id:"e13", day:15, type:"post",    title:"Reels — 3 sinais de campanha morrendo", pilar:"dor",   status:"pendente", hora:"08:00", desc:"CTA: comenta ALERTA. Urgência alta." },
  { id:"e14", day:15, type:"tarefa",  title:"Revisão semanal do pipeline",      pilar:"",           status:"pendente", hora:"16:00", desc:"Atualizar status de todos os leads. Planejar ações da semana 3." },
  // SEMANA 3
  { id:"e15", day:18, type:"post",    title:"Carrossel — 3x mais leads mesmo orçamento", pilar:"prova", status:"pendente", hora:"08:00", desc:"Mostrar processo completo. Incentivar comentários com dúvidas." },
  { id:"e16", day:18, type:"reuniao", title:"Diagnóstico — Lead #2",            pilar:"",           status:"pendente", hora:"10:00", desc:"Segundo diagnóstico agendado. Preparar proposta personalizada." },
  { id:"e17", day:19, type:"tarefa",  title:"Enviar proposta — Lead #2",        pilar:"",           status:"pendente", hora:"09:00", desc:"Personalizar com dados do diagnóstico." },
  { id:"e18", day:20, type:"post",    title:"Reels — 'Já tentei tráfego' (objeção)", pilar:"objecao", status:"pendente", hora:"08:00", desc:"Reposicionar experiência negativa. CTA: comenta AUDITORIA." },
  { id:"e19", day:20, type:"followup",title:"Follow-up urgência — Lead #1",     pilar:"",           status:"pendente", hora:"15:00", desc:"Se proposta parada > 5 dias: script 'Urgência - Última Chamada'." },
  { id:"e20", day:21, type:"reuniao", title:"Negociação — Lead #1",             pilar:"",           status:"pendente", hora:"10:00", desc:"Reunião de fechamento. Ter contrato pronto para assinatura." },
  { id:"e21", day:22, type:"post",    title:"Post texto — Boostar ≠ Tráfego",  pilar:"autoridade", status:"pendente", hora:"08:00", desc:"Educativo. Meta: filtrar leads qualificados que entendem o valor." },
  { id:"e22", day:22, type:"tarefa",  title:"Prospecção — nova rodada 15 leads",pilar:"",           status:"pendente", hora:"11:00", desc:"Renovar pipeline. Mix: Instagram + LinkedIn + WhatsApp indicação." },
  // SEMANA 4
  { id:"e23", day:25, type:"post",    title:"Reels — Concorrente avançando (urgência)", pilar:"dor", status:"pendente", hora:"08:00", desc:"FOMO competitivo. CTA: DM AGOSTO." },
  { id:"e24", day:25, type:"reuniao", title:"Diagnóstico — Lead #3",            pilar:"",           status:"pendente", hora:"14:00", desc:"Terceiro diagnóstico. Objetivo: fechar o 3º contrato da meta." },
  { id:"e25", day:26, type:"tarefa",  title:"Enviar proposta — Lead #3",        pilar:"",           status:"pendente", hora:"09:00", desc:"Proposta clara, com duas opções de entrada." },
  { id:"e26", day:26, type:"followup",title:"Follow-up — Lead #2",             pilar:"",           status:"pendente", hora:"11:00", desc:"Verificar status da proposta enviada em 19/08." },
  { id:"e27", day:27, type:"post",    title:"Carrossel — Dashboard BI semanal", pilar:"autoridade", status:"pendente", hora:"08:00", desc:"Mostrar capacidade de BI. CTA: comenta DASHBOARD." },
  { id:"e28", day:28, type:"reuniao", title:"Fechamento — Lead #2 ou #3",       pilar:"",           status:"pendente", hora:"10:00", desc:"Reunião de fechamento. Meta: assinar contrato número 2 ou 3." },
  { id:"e29", day:29, type:"post",    title:"Reels — Wrap-up agosto (resultados)", pilar:"prova",   status:"pendente", hora:"08:00", desc:"Resultados do mês. Gerar expectativa para setembro." },
  { id:"e30", day:29, type:"tarefa",  title:"Retrospectiva mensal + planejamento set", pilar:"",   status:"pendente", hora:"15:00", desc:"Revisar o que funcionou, o que não funcionou. Planejar setembro." },
];

const TYPE_META = {
  post:    { label:"Post/Conteúdo", color:"#1800ad", bg:"#e8e6ff", icon:"📱" },
  reuniao: { label:"Reunião",       color:"#15803d", bg:"#dcfce7", icon:"🤝" },
  followup:{ label:"Follow-up",     color:"#ff751f", bg:"#fff0e8", icon:"🔁" },
  tarefa:  { label:"Tarefa",        color:"#6d28d9", bg:"#ede9fe", icon:"✅" },
};

const STATUS_META = {
  pendente:  { label:"Pendente",   color:"#6b6f8a", bg:"#f0f0f6" },
  fazendo:   { label:"Fazendo",    color:"#c2550a", bg:"#fff7ed" },
  concluido: { label:"Concluído",  color:"#15803d", bg:"#dcfce7" },
  cancelado: { label:"Cancelado",  color:"#b91c1c", bg:"#fee2e2" },
};

// dias úteis de agosto (seg a sex, sem feriados)
const AGOSTO_DAYS = Array.from({length:31},(_,i)=>i+1);
const DOW = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
// 1 de agosto de 2025 = sexta-feira (dow 5)
const AUG1_DOW = 5; // 0=Dom

function getDow(day){ return (AUG1_DOW + day - 1) % 7; }
function isWeekend(day){ const d=getDow(day); return d===0||d===6; }

// ────────────────────────────────────────────────────────────────
// CALENDÁRIO ESTRATÉGICO
// ────────────────────────────────────────────────────────────────
function CalendarTab(){
  const [events, setEvents] = useState(AGOSTO_EVENTS_INIT.map(e=>({...e})));
  const [filter, setFilter] = useState("all");
  const [selectedDay, setSelectedDay] = useState(null);
  const [panel, setPanel] = useState(null); // event being viewed/edited
  const [addModal, setAddModal] = useState(null); // day number
  const [drag, setDrag] = useState(null);
  const [over, setOver] = useState(null);
  const [view, setView] = useState("month"); // month | week | list

  const uid2 = ()=>Math.random().toString(36).slice(2,9);

  const filtered = filter==="all" ? events : events.filter(e=>e.type===filter);

  const eventsForDay = (day) => filtered.filter(e=>e.day===day);

  const updateEvent = (id, fields) => setEvents(p=>p.map(e=>e.id===id?{...e,...fields}:e));
  const deleteEvent = (id) => { setEvents(p=>p.filter(e=>e.id!==id)); setPanel(null); };
  const addEvent = (ev) => { setEvents(p=>[...p,{...ev,id:uid2()}]); setAddModal(null); };

  const moveEvent = (id, newDay) => {
    setEvents(p=>p.map(e=>e.id===id?{...e,day:newDay}:e));
  };

  // stats
  const total = events.length;
  const done = events.filter(e=>e.status==="concluido").length;
  const posts = events.filter(e=>e.type==="post").length;
  const reunioes = events.filter(e=>e.type==="reuniao").length;
  const pctDone = total>0?Math.round(done/total*100):0;

  // semanas do mês
  const weeks = [];
  let week = [];
  // preencher dias em branco antes do dia 1
  for(let i=0;i<AUG1_DOW;i++) week.push(null);
  for(let d=1;d<=31;d++){
    week.push(d);
    if(week.length===7){ weeks.push(week); week=[]; }
  }
  if(week.length>0){ while(week.length<7)week.push(null); weeks.push(week); }

  const COLS_DOW=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];

  return(
    <div style={{display:"flex",flexDirection:"column",gap:16}}>

      {/* Header com stats e controles */}
      <div style={{display:"flex",gap:12,flexWrap:"wrap",alignItems:"stretch"}}>
        {/* Stats */}
        <div style={{flex:1,minWidth:240,background:C.card,borderRadius:14,padding:"16px 20px",border:`1px solid ${C.border}`,display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"}}>
          <div style={{flex:1,minWidth:120}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
              <span style={{fontSize:13,fontWeight:700,color:C.text}}>Progresso de agosto</span>
              <span style={{fontSize:13,fontWeight:800,color:C.blue}}>{done}/{total}</span>
            </div>
            <div style={{height:8,background:C.bg,borderRadius:99,overflow:"hidden"}}>
              <div style={{height:"100%",width:`${pctDone}%`,background:`linear-gradient(90deg,${C.blue},${C.orange})`,borderRadius:99,transition:"width 0.4s"}}/>
            </div>
          </div>
          {[
            {label:"Posts",val:posts,color:TYPE_META.post.color},
            {label:"Reuniões",val:reunioes,color:TYPE_META.reuniao.color},
            {label:"Feitos",val:done,color:C.success},
          ].map((s,i)=>(
            <div key={i} style={{textAlign:"center"}}>
              <div style={{fontSize:20,fontWeight:900,color:s.color}}>{s.val}</div>
              <div style={{fontSize:11,color:C.muted}}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Controles */}
        <div style={{display:"flex",flexDirection:"column",gap:8,justifyContent:"space-between"}}>
          <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
            {["all","post","reuniao","followup","tarefa"].map(f=>(
              <button key={f} onClick={()=>setFilter(f)} style={{padding:"6px 12px",borderRadius:99,border:"none",cursor:"pointer",fontWeight:700,fontSize:11,background:filter===f?(f==="all"?C.blue:TYPE_META[f]?.color||C.blue):C.bg,color:filter===f?"#fff":C.muted,transition:"all 0.15s"}}>
                {f==="all"?"Tudo":TYPE_META[f]?.label}
              </button>
            ))}
          </div>
          <div style={{display:"flex",gap:6}}>
            {["month","list"].map(v=>(
              <button key={v} onClick={()=>setView(v)} style={{padding:"6px 14px",borderRadius:8,border:`1px solid ${C.border}`,cursor:"pointer",fontWeight:700,fontSize:12,background:view===v?C.blue:C.card,color:view===v?"#fff":C.muted}}>
                {v==="month"?"📅 Mensal":"📋 Lista"}
              </button>
            ))}
            <button onClick={()=>setAddModal("any")} style={{padding:"6px 14px",borderRadius:8,border:"none",cursor:"pointer",fontWeight:700,fontSize:12,background:C.orange,color:"#fff",display:"flex",alignItems:"center",gap:5}}>
              <Plus size={13}/> Novo evento
            </button>
          </div>
        </div>
      </div>

      {/* VISÃO MENSAL */}
      {view==="month"&&(
        <div style={{background:C.card,borderRadius:14,border:`1px solid ${C.border}`,overflow:"hidden"}}>
          {/* Header dias da semana */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",background:C.blue}}>
            {COLS_DOW.map(d=>(
              <div key={d} style={{padding:"10px 0",textAlign:"center",fontSize:11,fontWeight:700,color:d==="Dom"||d==="Sáb"?"rgba(255,255,255,0.4)":"rgba(255,255,255,0.85)",letterSpacing:"0.06em"}}>{d}</div>
            ))}
          </div>

          {/* Grid de semanas */}
          {weeks.map((week,wi)=>(
            <div key={wi} style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",borderBottom:wi<weeks.length-1?`1px solid ${C.border}`:"none"}}>
              {week.map((day,di)=>{
                const dayEvents = day ? eventsForDay(day) : [];
                const isWE = day && isWeekend(day);
                const isToday = false;
                const isSelected = selectedDay===day;
                const isDragOver = over===day;

                return(
                  <div key={di}
                    onDragOver={e=>{e.preventDefault();if(day)setOver(day);}}
                    onDrop={()=>{if(drag&&day){moveEvent(drag,day);setDrag(null);setOver(null);}}}
                    onDragLeave={()=>setOver(null)}
                    onClick={()=>{if(day){setSelectedDay(isSelected?null:day);}}}
                    style={{minHeight:100,padding:6,borderRight:di<6?`1px solid ${C.border}`:"none",background:isDragOver?C.blueLight:isSelected?C.bg:isWE?"#fafafa":C.card,cursor:day?"pointer":"default",transition:"background 0.15s",position:"relative"}}>
                    {day&&(
                      <>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                          <span style={{fontSize:12,fontWeight:isSelected?800:600,color:isWE?C.placeholder:C.text,width:24,height:24,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:isSelected?C.blue:"transparent",color:isSelected?"#fff":isWE?C.placeholder:C.text}}>
                            {day}
                          </span>
                          {dayEvents.length>0&&(
                            <button onClick={e=>{e.stopPropagation();setAddModal(day);}} style={{width:18,height:18,borderRadius:"50%",border:"none",background:C.orange+"20",color:C.orange,cursor:"pointer",fontSize:12,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,opacity:0}
                            } className="add-btn">+</button>
                          )}
                        </div>
                        <div style={{display:"flex",flexDirection:"column",gap:3}}>
                          {dayEvents.slice(0,3).map(ev=>(
                            <div key={ev.id}
                              draggable
                              onDragStart={e=>{e.stopPropagation();setDrag(ev.id);}}
                              onClick={e=>{e.stopPropagation();setPanel(ev);}}
                              style={{background:ev.status==="concluido"?C.successLight:TYPE_META[ev.type]?.bg,color:ev.status==="concluido"?C.success:TYPE_META[ev.type]?.color,fontSize:10,fontWeight:600,padding:"3px 6px",borderRadius:5,cursor:"pointer",display:"flex",alignItems:"center",gap:4,lineHeight:1.3,textDecoration:ev.status==="cancelado"?"line-through":"none",opacity:ev.status==="cancelado"?0.5:1,transition:"opacity 0.15s"}}>
                              <span style={{flexShrink:0}}>{TYPE_META[ev.type]?.icon}</span>
                              <span style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{ev.title}</span>
                            </div>
                          ))}
                          {dayEvents.length>3&&(
                            <div style={{fontSize:10,color:C.muted,fontWeight:600,padding:"2px 6px"}}>+{dayEvents.length-3} mais</div>
                          )}
                        </div>
                        {day&&dayEvents.length===0&&!isWE&&(
                          <button onClick={e=>{e.stopPropagation();setAddModal(day);}} style={{position:"absolute",bottom:6,right:6,width:20,height:20,borderRadius:"50%",border:`1.5px dashed ${C.border}`,background:"transparent",cursor:"pointer",color:C.muted,fontSize:14,display:"flex",alignItems:"center",justifyContent:"center"}}>+</button>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}

      {/* VISÃO LISTA */}
      {view==="list"&&(
        <div style={{display:"flex",flexDirection:"column",gap:8}}>
          {[1,2,3,4].map(w=>{
            const start=(w-1)*7+1;
            const end=Math.min(w*7,31);
            const wEvents=filtered.filter(e=>e.day>=start&&e.day<=end).sort((a,b)=>a.day-b.day||a.hora?.localeCompare(b.hora));
            if(!wEvents.length)return null;
            return(
              <div key={w}>
                <div style={{fontSize:11,fontWeight:700,color:C.muted,marginBottom:8,textTransform:"uppercase",letterSpacing:"0.08em"}}>Semana {w} — dias {start}–{end}</div>
                <div style={{display:"flex",flexDirection:"column",gap:6}}>
                  {wEvents.map(ev=>(
                    <div key={ev.id} onClick={()=>setPanel(ev)}
                      style={{background:C.card,borderRadius:10,padding:"12px 16px",border:`1px solid ${ev.status==="concluido"?C.success+"40":C.border}`,cursor:"pointer",display:"flex",gap:12,alignItems:"center",opacity:ev.status==="cancelado"?0.5:1,transition:"all 0.15s"}}>
                      <div style={{width:36,height:36,borderRadius:8,background:TYPE_META[ev.type]?.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>
                        {TYPE_META[ev.type]?.icon}
                      </div>
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{fontWeight:700,fontSize:13,color:C.text,marginBottom:3,textDecoration:ev.status==="cancelado"?"line-through":"none"}}>{ev.title}</div>
                        <div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
                          <span style={{fontSize:11,color:C.muted}}>📅 {DOW[getDow(ev.day)]} {ev.day}/08</span>
                          {ev.hora&&<span style={{fontSize:11,color:C.muted}}>🕐 {ev.hora}</span>}
                          <span style={{fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:99,background:STATUS_META[ev.status]?.bg,color:STATUS_META[ev.status]?.color}}>{STATUS_META[ev.status]?.label}</span>
                          <span style={{fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:99,background:TYPE_META[ev.type]?.bg,color:TYPE_META[ev.type]?.color}}>{TYPE_META[ev.type]?.label}</span>
                        </div>
                      </div>
                      <ChevronRight size={15} color={C.muted}/>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* PAINEL LATERAL — detalhe do evento */}
      {panel&&(
        <div style={{position:"fixed",top:0,right:0,bottom:0,width:380,background:C.card,boxShadow:"-4px 0 30px rgba(0,0,0,0.12)",zIndex:500,display:"flex",flexDirection:"column",overflowY:"auto"}}>
          <div style={{padding:"20px 20px 16px",borderBottom:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
            <div style={{flex:1}}>
              <div style={{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"}}>
                <span style={{fontSize:10,fontWeight:700,padding:"3px 10px",borderRadius:99,background:TYPE_META[panel.type]?.bg,color:TYPE_META[panel.type]?.color}}>{TYPE_META[panel.type]?.icon} {TYPE_META[panel.type]?.label}</span>
                <span style={{fontSize:10,fontWeight:700,padding:"3px 10px",borderRadius:99,background:STATUS_META[panel.status]?.bg,color:STATUS_META[panel.status]?.color}}>{STATUS_META[panel.status]?.label}</span>
              </div>
              <div style={{fontWeight:800,fontSize:16,color:C.text,lineHeight:1.3}}>{panel.title}</div>
              <div style={{fontSize:12,color:C.muted,marginTop:4}}>
                {DOW[getDow(panel.day)]}, {panel.day} de agosto{panel.hora?` · ${panel.hora}`:""}
              </div>
            </div>
            <button onClick={()=>setPanel(null)} style={{background:"none",border:"none",cursor:"pointer",color:C.muted,padding:4}}><X size={18}/></button>
          </div>

          <div style={{padding:20,display:"flex",flexDirection:"column",gap:16,flex:1}}>
            {/* Descrição */}
            {panel.desc&&(
              <div>
                <div style={{fontSize:11,fontWeight:700,color:C.muted,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.06em"}}>Descrição</div>
                <div style={{fontSize:13,color:C.text,lineHeight:1.7,background:C.bg,padding:12,borderRadius:8}}>{panel.desc}</div>
              </div>
            )}

            {/* Alterar status */}
            <div>
              <div style={{fontSize:11,fontWeight:700,color:C.muted,marginBottom:8,textTransform:"uppercase",letterSpacing:"0.06em"}}>Status</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                {Object.entries(STATUS_META).map(([k,v])=>(
                  <button key={k} onClick={()=>{updateEvent(panel.id,{status:k});setPanel(p=>({...p,status:k}));}}
                    style={{padding:"8px 12px",borderRadius:8,border:`2px solid ${panel.status===k?v.color:C.border}`,background:panel.status===k?v.bg:C.card,cursor:"pointer",fontWeight:700,fontSize:12,color:panel.status===k?v.color:C.muted,transition:"all 0.15s"}}>
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mover para outro dia */}
            <div>
              <div style={{fontSize:11,fontWeight:700,color:C.muted,marginBottom:8,textTransform:"uppercase",letterSpacing:"0.06em"}}>Mover para o dia</div>
              <div style={{display:"flex",gap:8,alignItems:"center"}}>
                <select value={panel.day} onChange={e=>{const d=Number(e.target.value);updateEvent(panel.id,{day:d});setPanel(p=>({...p,day:d}));}}
                  style={{flex:1,padding:"8px 10px",borderRadius:8,border:`1px solid ${C.border}`,fontSize:13,fontFamily:"inherit",background:C.card}}>
                  {AGOSTO_DAYS.filter(d=>!isWeekend(d)).map(d=>(
                    <option key={d} value={d}>{DOW[getDow(d)]} {d}/08</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Editar título e hora */}
            <div>
              <div style={{fontSize:11,fontWeight:700,color:C.muted,marginBottom:8,textTransform:"uppercase",letterSpacing:"0.06em"}}>Editar</div>
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                <input value={panel.title} onChange={e=>{updateEvent(panel.id,{title:e.target.value});setPanel(p=>({...p,title:e.target.value}));}}
                  style={{padding:"8px 12px",borderRadius:8,border:`1px solid ${C.border}`,fontSize:13,fontFamily:"inherit",background:C.card,color:C.text}}
                  placeholder="Título do evento"/>
                <input value={panel.hora||""} onChange={e=>{updateEvent(panel.id,{hora:e.target.value});setPanel(p=>({...p,hora:e.target.value}));}}
                  type="time"
                  style={{padding:"8px 12px",borderRadius:8,border:`1px solid ${C.border}`,fontSize:13,fontFamily:"inherit",background:C.card,color:C.text}}/>
                <textarea value={panel.desc||""} onChange={e=>{updateEvent(panel.id,{desc:e.target.value});setPanel(p=>({...p,desc:e.target.value}));}}
                  rows={3} placeholder="Descrição / notas"
                  style={{padding:"8px 12px",borderRadius:8,border:`1px solid ${C.border}`,fontSize:13,fontFamily:"inherit",resize:"vertical",background:C.card,color:C.text}}/>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div style={{padding:"16px 20px",borderTop:`1px solid ${C.border}`,display:"flex",gap:8}}>
            <button onClick={()=>{updateEvent(panel.id,{status:"concluido"});setPanel(p=>({...p,status:"concluido"}));}}
              style={{flex:1,padding:"10px",borderRadius:8,border:"none",cursor:"pointer",background:C.success,color:"#fff",fontWeight:700,fontSize:13,display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>
              <Check size={14}/> Concluir
            </button>
            <button onClick={()=>deleteEvent(panel.id)}
              style={{padding:"10px 14px",borderRadius:8,border:"none",cursor:"pointer",background:C.dangerLight,color:C.danger,fontWeight:700,fontSize:13}}>
              <Trash2 size={14}/>
            </button>
          </div>
        </div>
      )}

      {/* MODAL — Novo evento */}
      {addModal&&(
        <div style={{position:"fixed",inset:0,background:"rgba(12,13,26,0.5)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:16}}>
          <div style={{background:C.card,borderRadius:16,padding:24,maxWidth:500,width:"100%",boxShadow:"0 20px 60px rgba(0,0,0,0.2)"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
              <span style={{fontWeight:800,fontSize:16,color:C.text}}>Novo evento</span>
              <button onClick={()=>setAddModal(null)} style={{background:"none",border:"none",cursor:"pointer",color:C.muted}}><X size={18}/></button>
            </div>
            <EventForm initialDay={addModal==="any"?1:addModal} onSave={addEvent} onCancel={()=>setAddModal(null)}/>
          </div>
        </div>
      )}

      {/* Legenda */}
      <div style={{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"center"}}>
        {Object.entries(TYPE_META).map(([k,v])=>(
          <div key={k} style={{display:"flex",alignItems:"center",gap:6,fontSize:11,color:C.muted}}>
            <div style={{width:10,height:10,borderRadius:3,background:v.color}}/>{v.label}
          </div>
        ))}
        <div style={{fontSize:11,color:C.muted,opacity:0.7}}>· Arraste eventos entre dias · Clique para editar</div>
      </div>
    </div>
  );
}

function EventForm({initialDay,onSave,onCancel}){
  const [ev,setEv]=useState({day:initialDay||1,type:"tarefa",title:"",hora:"09:00",desc:"",status:"pendente",pilar:""});
  const upd=(k,v)=>setEv(x=>({...x,[k]:v}));
  return(
    <div style={{display:"flex",flexDirection:"column",gap:12}}>
      <div>
        <div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Tipo</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
          {Object.entries(TYPE_META).map(([k,v])=>(
            <button key={k} onClick={()=>upd("type",k)} style={{padding:"9px",borderRadius:8,border:`2px solid ${ev.type===k?v.color:C.border}`,background:ev.type===k?v.bg:C.card,cursor:"pointer",fontWeight:700,fontSize:12,color:ev.type===k?v.color:C.muted,display:"flex",alignItems:"center",gap:6}}>
              {v.icon} {v.label}
            </button>
          ))}
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
        <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Dia</div>
          <select value={ev.day} onChange={e=>upd("day",Number(e.target.value))} style={{width:"100%",padding:"8px 10px",borderRadius:8,border:`1px solid ${C.border}`,fontSize:13,fontFamily:"inherit",background:C.card}}>
            {AGOSTO_DAYS.map(d=><option key={d} value={d}>{DOW[getDow(d)]} {d}/08</option>)}
          </select>
        </div>
        <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Horário</div>
          <input type="time" value={ev.hora} onChange={e=>upd("hora",e.target.value)} style={{width:"100%",padding:"8px 10px",borderRadius:8,border:`1px solid ${C.border}`,fontSize:13,fontFamily:"inherit",background:C.card,color:C.text,boxSizing:"border-box"}}/>
        </div>
      </div>
      <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Título *</div>
        <input value={ev.title} onChange={e=>upd("title",e.target.value)} placeholder="Nome do evento" style={{width:"100%",padding:"9px 12px",borderRadius:8,border:`1px solid ${C.border}`,fontSize:13,fontFamily:"inherit",background:C.card,color:C.text,boxSizing:"border-box"}}/>
      </div>
      <div><div style={{fontSize:12,fontWeight:600,color:C.muted,marginBottom:4}}>Notas / Descrição</div>
        <textarea value={ev.desc} onChange={e=>upd("desc",e.target.value)} rows={3} placeholder="Contexto, referências, links..." style={{width:"100%",padding:"9px 12px",borderRadius:8,border:`1px solid ${C.border}`,fontSize:13,fontFamily:"inherit",resize:"vertical",background:C.card,color:C.text,boxSizing:"border-box"}}/>
      </div>
      <div style={{display:"flex",gap:8,justifyContent:"flex-end",marginTop:8}}>
        <button onClick={onCancel} style={{padding:"9px 18px",borderRadius:8,border:`1px solid ${C.border}`,background:C.bg,cursor:"pointer",fontWeight:700,fontSize:13,color:C.muted}}>Cancelar</button>
        <button onClick={()=>ev.title&&onSave(ev)} style={{padding:"9px 18px",borderRadius:8,border:"none",background:ev.title?C.blue:"#ccc",cursor:ev.title?"pointer":"default",fontWeight:700,fontSize:13,color:"#fff",display:"flex",alignItems:"center",gap:6}}>
          <Save size={13}/> Salvar evento
        </button>
      </div>
    </div>
  );
}
