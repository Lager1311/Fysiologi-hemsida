/* ════════════════════════════════════════════════════════
   Quiz – Fysiologi Gy25
   50 frågor · E/C/A-nivå · Matspjälkning/Respiration/Cirkulation
   ════════════════════════════════════════════════════════ */

const QUESTIONS = [
  // ── E-NIVÅ · MATSPJÄLKNING ────────────────────────────────
  { id:1,  level:'E', cat:'mat',
    q: 'Vad menas med att vi är heterotrofer?',
    a: 'Vi kan inte tillverka egen näring och måste äta organiska ämnen. Autotrofer (växter) kan det via fotosyntes.',
    short: 'Kan inte tillverka egen näring – måste äta organiska ämnen' },

  { id:2,  level:'E', cat:'mat',
    q: 'Nämn de tre huvudnäringsämnena och vad de bryts ned till.',
    a: 'Kolhydrater → glukos. Fetter → glycerol + fettsyror. Proteiner → aminosyror.',
    short: 'Kolhydrater→glukos, Fetter→glycerol+fettsyror, Proteiner→aminosyror' },

  { id:3,  level:'E', cat:'mat',
    q: 'Vilka två typer av nedbrytning sker i matspjälkningskanalen?',
    a: 'Mekanisk nedbrytning (tuggning och blandning) och kemisk nedbrytning (enzymatisk).',
    short: 'Mekanisk (tuggning/blandning) och kemisk (enzymatisk)' },

  { id:4,  level:'E', cat:'mat',
    q: 'Vilket enzym finns i saliven och vad bryter det ned?',
    a: 'Amylas bryter ned stärkelse (polysackarider) till disackarider och kortare sockerarter.',
    short: 'Amylas – bryter ned stärkelse till disackarider' },

  { id:5,  level:'E', cat:'mat',
    q: 'Vad är peristaltiska rörelser?',
    a: 'Koordinerade muskelsammandragningar som transporterar mat framåt i matspjälkningskanalen, oberoende av tyngdkraften.',
    short: 'Koordinerade muskelsammandragningar som för maten framåt' },

  { id:6,  level:'E', cat:'mat',
    q: 'Varför har magsäcken pH ≈ 2?',
    a: 'Saltsyra (HCl) produceras av magsäcksväggen för att döda bakterier och denaturera proteiner.',
    short: 'HCl produceras för att döda bakterier och denaturera proteiner' },

  { id:7,  level:'E', cat:'mat',
    q: 'Vad är skillnaden mellan pepsinogen och pepsin?',
    a: 'Pepsinogen är ett inaktivt proenzym som utsöndras av huvudcellerna. Det aktiveras till pepsin av saltsyran.',
    short: 'Pepsinogen = inaktivt proenzym; aktiveras till pepsin av HCl' },

  { id:8,  level:'E', cat:'mat',
    q: 'Vilka enzymer producerar bukspottkörteln?',
    a: 'Amylas (kolhydrater), lipas (fetter), proteaser (proteiner) och nukleaser (nukleinsyror).',
    short: 'Amylas, lipas, proteaser och nukleaser' },

  { id:9,  level:'E', cat:'mat',
    q: 'Vad är villi och mikrovilli?',
    a: 'Fingerformade utskott (villi) och ännu mindre utskott (mikrovilli) som ökar tunntarmens absorptionsyta till ~200 m².',
    short: 'Fingerformade utskott som ökar tunntarmens absorptionsyta till ~200 m²' },

  { id:10, level:'E', cat:'mat',
    q: 'Vad är tjocktarmens viktigaste funktion?',
    a: 'Absorbera vatten och salter från resterande mag-tarminnehåll; bestämmer avföringens konsistens.',
    short: 'Absorbera vatten och salter; bestämmer avföringens konsistens' },

  // ── E-NIVÅ · RESPIRATION ─────────────────────────────────
  { id:11, level:'E', cat:'resp',
    q: 'Vad är diffusion och varför är det centralt för gasutbytet?',
    a: 'Molekylers spontana rörelse från hög till låg koncentration. Driver O₂ och CO₂ mellan lungor och vävnader.',
    short: 'Spontan rörelse längs koncentrationsgradienten – driver O₂ och CO₂' },

  { id:12, level:'E', cat:'resp',
    q: 'Beskriv luftens väg från näshåla till alveoler.',
    a: 'Näshåla → struphuvud → luftstrupe → bronker → bronkioler → alveoler.',
    short: 'Näshåla → struphuvud → luftstrupe → bronker → bronkioler → alveoler' },

  { id:13, level:'E', cat:'resp',
    q: 'Vad gör cilierna i luftvägarna?',
    a: 'Transporterar slem (med fångade partiklar och bakterier) uppåt mot svalget.',
    short: 'Transporterar slem med partiklar uppåt mot svalget' },

  { id:14, level:'E', cat:'resp',
    q: 'Vad händer vid inandning?',
    a: 'Diafragman kontraherar och sänks. Bröstkorgsvolymen ökar, trycket sjunker under atmosfärstrycket, luft strömmar in.',
    short: 'Diafragman sänks → volym ökar → tryck sjunker → luft strömmar in' },

  { id:15, level:'E', cat:'resp',
    q: 'Vad är tidalvolym, vitalkapacitet och residualvolym?',
    a: 'TV ~500 ml (normalt andetag). VC = maximal utandning efter max inandning. RV ~1,2 L luft som alltid finns kvar.',
    short: 'TV ~500 ml (normalt), VC = max ut/in, RV ~1,2 L (alltid kvar)' },

  { id:16, level:'E', cat:'resp',
    q: 'Hur transporteras merparten av syret i blodet?',
    a: 'Bundet till hemoglobin i röda blodkroppar (98–99%). Resterande löst i blodplasma.',
    short: 'Bundet till hemoglobin i röda blodkroppar (98–99%)' },

  { id:17, level:'E', cat:'resp',
    q: 'Vad är dead-space?',
    a: '~150 ml luft i luftvägarna (luftstrupe, bronker) som aldrig når alveolerna och inte deltar i gasutbytet.',
    short: '~150 ml luft i luftvägarna som aldrig når alveolerna' },

  { id:18, level:'E', cat:'resp',
    q: 'Varför är kolmonoxid livsfarligt?',
    a: 'Binder till hemoglobin ~200 gånger starkare än O₂. Hemoglobin blockeras och kan inte transportera syre.',
    short: 'Binder till Hb ~200× starkare än O₂ → blockerar syretransport' },

  // ── E-NIVÅ · CIRKULATION ────────────────────────────────
  { id:19, level:'E', cat:'cirk',
    q: 'Vad är skillnaden mellan artärer och vener?',
    a: 'Artärer: leder blod från hjärtat, tjocka elastiska väggar, högt tryck. Vener: till hjärtat, tunnare väggar, lägre tryck, venklaffar.',
    short: 'Artärer: från hjärtat, tjocka, högt tryck. Vener: till hjärtat, tunnare, venklaffar' },

  { id:20, level:'E', cat:'cirk',
    q: 'Nämn tre typer av blodkroppar och deras funktion.',
    a: 'Röda (syretransport via hemoglobin), vita (immunförsvar), blodplättar (koagulering).',
    short: 'Röda (syretransport), vita (immunförsvar), blodplättar (koagulering)' },

  { id:21, level:'E', cat:'cirk',
    q: 'Vad är systoliskt respektive diastoliskt blodtryck?',
    a: 'Systoliskt (~120 mmHg): trycket när kamrarna kontraherar. Diastoliskt (~80 mmHg): trycket när hjärtat vilar.',
    short: 'Systoliskt (~120): kontraktion. Diastoliskt (~80): vila' },

  { id:22, level:'E', cat:'cirk',
    q: 'Beskriv blodets väg i stora kretsloppet.',
    a: 'Vänster kammare → aorta → artärer → kapillärer → vener → hålvener → höger förmak.',
    short: 'Vänster kammare → aorta → artärer → kapillärer → vener → höger förmak' },

  { id:23, level:'E', cat:'cirk',
    q: 'Vad är lymfsystemets tre huvudfunktioner?',
    a: 'Återföra vävnadsvätska till blodet. Transportera fett (kylomikroner) från tarmen. Immunförsvar via lymfknutor.',
    short: 'Återföra vävnadsvätska, transportera fett (kylomikroner), immunförsvar' },

  { id:24, level:'E', cat:'cirk',
    q: 'Vad är slagvolym och minutvolym?',
    a: 'Slagvolym ~70 ml per slag. Minutvolym = slagvolym × pulsfrekvens ≈ 70 × 70 ≈ 5 l/min i vila.',
    short: 'Slagvolym ~70 ml/slag. Minutvolym = 70 × 70 ≈ 5 l/min' },

  { id:25, level:'E', cat:'cirk',
    q: 'Vad är skillnaden mellan öppet och slutet blodomlopp?',
    a: 'Öppet: blod lämnar kärlen och blandas med vävnadsvätska (insekter). Slutet: blodet stannar inuti kärlen (ryggradsdjur).',
    short: 'Öppet: blod lämnar kärlen (insekter). Slutet: alltid inuti kärlen (ryggradsdjur)' },

  // ── C-NIVÅ ────────────────────────────────────────────────
  { id:26, level:'C', cat:'mat',
    q: 'Varför utsöndras pepsinogen i inaktiv form?',
    a: 'Skyddar magsäcksväggen från självnedbrytning. Enzymet aktiveras till pepsin först i magsäckens hålighet av saltsyran.',
    short: 'Skyddar magsäcksväggen; aktiveras i håligheten av HCl' },

  { id:27, level:'C', cat:'mat',
    q: 'Varför är gallsalter inte enzymer?',
    a: 'De katalyserar inga kemiska reaktioner. De emulgerar fett mekaniskt (som tvål) utan att omvandla molekylerna.',
    short: 'Katalyserar inga reaktioner – emulgerar fett mekaniskt som tvål' },

  { id:28, level:'C', cat:'mat',
    q: 'Varför transporteras fetter via lymfan och inte direkt via blodet?',
    a: 'Kylomikroner är för stora och hydrofoba för att passera blodkapillärerna direkt. Lymfkärlen tar emot dem.',
    short: 'Kylomikroner för stora och hydrofoba för blodkapillärer – lymfan tar dem' },

  { id:29, level:'C', cat:'mat',
    q: 'Hur orsakar Helicobacter pylori magsår?',
    a: 'Bakterien producerar ammoniak och gifter som förstör magsäckens epitelceller. Saltsyran kan då tränga igenom och fräta på vävnaden.',
    short: 'Producerar ammoniak och gifter → förstör epitelceller → HCl tränger igenom' },

  { id:30, level:'C', cat:'mat',
    q: 'Varför är 9 aminosyror essentiella?',
    a: 'Kroppen saknar enzymer för att syntetisera dem. De måste tillföras via kosten.',
    short: 'Kroppen saknar enzymer för att syntetisera dem – måste komma via kosten' },

  { id:31, level:'C', cat:'mat',
    q: 'Jämför tarmlängd hos herbivorer och karnivorer.',
    a: 'Herbivorer: längre tarm eftersom cellulosa är svår att bryta ned. Karnivorer: kortare tarm eftersom animalisk föda bryts ned enklare.',
    short: 'Herbivorer: längre (cellulosa svår). Karnivorer: kortare (animalisk föda enklare)' },

  { id:32, level:'C', cat:'resp',
    q: 'Förklara andningsmekanismen – varför "suger" inte lungorna?',
    a: 'Lungorna är passiva. Diafragman skapar en tryckskillnad: ökad volym → sänkt tryck → luft strömmar in längs tryckgradienten.',
    short: 'Lungorna passiva. Diafragman ökar volym → tryck sjunker → luft strömmar in' },

  { id:33, level:'C', cat:'resp',
    q: 'Hur regleras andningsrytmen av CO₂ och pH?',
    a: 'Hög CO₂ → kolsyra bildas → pH sjunker → kemoreceptorer signalerar → andningscentrum ökar frekvens → CO₂ andas ut.',
    short: 'Hög CO₂ → lägre pH → kemoreceptorer → andningscentrum ökar frekvens' },

  { id:34, level:'C', cat:'resp',
    q: 'Vad är motströmningsprincipen hos fiskgälar?',
    a: 'Blod och vatten flödar i motsatt riktning. Koncentrationsgradienten upprätthålls längs hela gälen → maximalt gasutbyte.',
    short: 'Blod och vatten i motsatt riktning → konstant gradient → max effektivitet' },

  { id:35, level:'C', cat:'resp',
    q: 'Hur transporteras CO₂ i blodet? Nämn tre sätt.',
    a: '75–80% som vätekarbonat (HCO₃⁻), 10–20% bundet till hemoglobin, 5–10% löst direkt i blodplasman.',
    short: '75–80% som HCO₃⁻, 10–20% bundet till Hb, 5–10% löst i plasma' },

  { id:36, level:'C', cat:'cirk',
    q: 'Förklara hjärtcykelns faser och klaffarnas roll.',
    a: 'Systole: kamrar kontraherar, ficklaffar öppnas, segelklaffar stängs – blod pumpas ut. Diastole: kamrar slappnar av och fylls, ficklaffar stängs.',
    short: 'Systole: kamrar kontraherar, blod ut. Diastole: kamrar fylls' },

  { id:37, level:'C', cat:'cirk',
    q: 'Varför är vänster kammares vägg tjockare än höger?',
    a: 'Vänster kammare pumpar blod runt hela kroppen och behöver skapa högt tryck. Höger pumpar bara till lungorna – kortare sträcka, lägre motstånd.',
    short: 'Vänster pumpar runt hela kroppen (högt tryck), höger bara till lungorna' },

  { id:38, level:'C', cat:'cirk',
    q: 'Förklara ämnesutbytet i kapillärerna.',
    a: 'Hydrostatiskt tryck driver filtration av vätska ut vid ingångssidan. Blodproteinernas osmotiska tryck suger tillbaka ~99% vid utgångssidan.',
    short: 'Hydrostatiskt tryck driver ut; osmotiskt tryck (proteiner) suger tillbaka ~99%' },

  { id:39, level:'C', cat:'cirk',
    q: 'Jämför enkelt och dubbelt blodomlopp.',
    a: 'Enkelt (fiskar): blod passerar hjärtat en gång, lägre tryck. Dubbelt (fåglar/däggdjur): fullständig separation, högt tryck i båda kretsloppen.',
    short: 'Enkelt (fiskar): en gång, lägre tryck. Dubbelt (däggdjur): separation, högt tryck' },

  { id:40, level:'C', cat:'cirk',
    q: 'Hur samverkar venklaffar och skelettmuskelpumpen?',
    a: 'Muskler klämer samman venerna och driver blod framåt mot hjärtat. Venklaffarna förhindrar att blodet rinner tillbaka.',
    short: 'Muskler driver blod framåt; venklaffar hindrar bakflöde' },

  // ── A-NIVÅ ────────────────────────────────────────────────
  { id:41, level:'A', cat:'mat',
    q: 'Analysera varför idisslare har fyra magavdelningar kopplat till cellulosa.',
    a: 'β-1,4-glykosidiska bindningar kan inte klyvas av däggdjursenzymer. Vommen innehåller symbiotiska mikroorganismer med cellulasor. Evolutionärt tryck: gräs är abundanta resurser → stor konkurrensfördel.',
    short: 'β-1,4-bindningar kräver cellulasor; vommen har symbiotiska mikroorganismer med dessa' },

  { id:42, level:'A', cat:'mat',
    q: 'Fria radikaler och paradoxen att immunförsvaret producerar dem – förklara.',
    a: 'Immunförsvaret producerar reaktiva syrespecies för att döda patogener, men samma radikaler skadar egna celler. Antioxidanter (C, E) begränsar kollateralskadan.',
    short: 'Immunförsvaret dödar patogener med radikaler men skadar egna celler; antioxidanter begränsar skadan' },

  { id:43, level:'A', cat:'mat',
    q: 'Varför diffunderar fettsyror in i tarmcellen medan aminosyror behöver aktiv transport?',
    a: 'Fettsyror är hydrofoba och löser sig i cellmembranets lipidlager. Aminosyror är polära och kan inte passera den hydrofoba barriären utan transportproteiner och ATP.',
    short: 'Fettsyror hydrofoba → löser sig i membranet. Aminosyror polära → behöver transportprotein' },

  { id:44, level:'A', cat:'resp',
    q: 'Varför kan hyperventilering orsaka medvetslöshet trots att syre finns tillgängligt?',
    a: 'Andningsdriften styrs av CO₂/pH, inte O₂. Hyperventilering sänker CO₂ → andningsdriften försvinner → O₂ sjunker okontrollerat → medvetslöshet utan förvarning.',
    short: 'Andningsdriften styrs av CO₂. Hyperventilering sänker CO₂ → O₂ sjunker okontrollerat' },

  { id:45, level:'A', cat:'resp',
    q: 'Varför är fåglarnas lungor effektivare än däggdjurens?',
    a: 'Enkelriktat luftflöde via luftsäckar: frisk luft passerar gasutbytesytan vid både in- och utandning. Däggdjur har restvolym av gammal luft som späder ut O₂.',
    short: 'Enkelriktat flöde via luftsäckar: frisk luft vid gasutbytesytan vid in- OCH utandning' },

  { id:46, level:'A', cat:'resp',
    q: 'Förklara Bohrs effekt och varför den är adaptivt genial.',
    a: 'Lågt pH (hög CO₂ i aktiv vävnad) minskar hemoglobinets O₂-affinitet → O₂ levereras automatiskt dit det behövs mest. Autoreglerande utan hormoner.',
    short: 'Lågt pH i aktiv vävnad → Hb släpper O₂ dit det behövs mest – autoreglerande' },

  { id:47, level:'A', cat:'cirk',
    q: 'Analysera ödem via hydrostatiskt och osmotiskt tryck.',
    a: 'Ödem = rubbad balans: lågt blodprotein (minskat osmotiskt tryck), högt blodtryck (ökad filtration) eller blockerade lymfkärl → nettoansamling av vävnadsvätska.',
    short: 'Lågt blodprotein, högt blodtryck eller blockerade lymfkärl → vävnadsvätska ansamlas' },

  { id:48, level:'A', cat:'cirk',
    q: 'Varför kräver endoterma djur fyrrummiga hjärtan?',
    a: 'Hög metabolism kräver kontinuerlig O₂-leverans. Fullständig separation av syrerikt/syrefattigt blod ger maximalt tryck och effektivitet. Blandning (trerummigt) sänker O₂-kapaciteten.',
    short: 'Hög metabolism kräver max O₂. Fullständig separation ger max tryck; blandning sänker kapaciteten' },

  { id:49, level:'A', cat:'cirk',
    q: 'Hur reglerar kroppen blodflödet under muskelarbete?',
    a: 'Arterioler vidgas i aktiva muskler, snävas i inaktiva organ (t.ex. tarm). Sfinktrarna styr kapillärflöde lokalt. Omfördelning utan proportionell ökning av hjärtarbete.',
    short: 'Arterioler vidgas i aktiva muskler, snävas i inaktiva organ; sfinktrarna styr lokalt' },

  { id:50, level:'A', cat:'mat',
    q: 'Diskutera blindtarmens/appendix evolutionära status.',
    a: 'Hos herbivorer: cellulosanedbrytning via fermentation. Hos karnivorer: minimal. Hos oss: länge sedd som rest, men ny forskning pekar på roll i immunförsvaret (reservoar för normalflora).',
    short: 'Herbivorer: cellulosa. Karnivorer: minimal. Hos oss: trolig roll i immunförsvaret' },
];

/* ════════════════════════════════════════════════════════
   TILLSTÅND
   ════════════════════════════════════════════════════════ */
let activeDeck   = [];
let currentIdx   = 0;
let score        = 0;
let correct      = 0;
let filterLevel  = 'all';
let filterCat    = 'all';
let answered     = false;

const LS_KEY = 'fysiologi_quiz';

/* ════════════════════════════════════════════════════════
   HJÄLPFUNKTIONER
   ════════════════════════════════════════════════════════ */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildDeck() {
  let deck = QUESTIONS;
  if (filterLevel !== 'all') deck = deck.filter(q => q.level === filterLevel);
  if (filterCat   !== 'all') deck = deck.filter(q => q.cat   === filterCat);
  activeDeck = shuffle(deck);
  currentIdx = 0;
  score = 0;
  correct = 0;
}

function makeOptions(q) {
  const others = QUESTIONS.filter(o => o.id !== q.id);
  const distractors = shuffle(others).slice(0, 3).map(o => o.short);
  const all = shuffle([q.short, ...distractors]);
  return { options: all, correctText: q.short };
}

function saveProgress() {
  const data = JSON.parse(localStorage.getItem(LS_KEY) || '{}');
  data.answered = (data.answered || 0) + 1;
  data.score    = (data.score    || 0) + score;
  data.ts       = Date.now();
  localStorage.setItem(LS_KEY, JSON.stringify(data));
}

/* ════════════════════════════════════════════════════════
   DOM
   ════════════════════════════════════════════════════════ */
const elStart      = document.getElementById('start-screen');
const elQuiz       = document.getElementById('quiz-area');
const elResults    = document.getElementById('results-screen');
const elCounter    = document.getElementById('quiz-counter');
const elScoreDisp  = document.getElementById('quiz-score-disp');
const elProgress   = document.getElementById('quiz-progress');
const elCard       = document.getElementById('quiz-card');
const elTags       = document.getElementById('quiz-tags');
const elQuestion   = document.getElementById('quiz-question');
const elOptions    = document.getElementById('quiz-options');
const elFeedback   = document.getElementById('quiz-feedback');

function setFilter(type, val) {
  if (type === 'level') {
    filterLevel = val;
    document.querySelectorAll('.filter-level').forEach(b => {
      b.className = 'tab-btn filter-level';
      if (b.dataset.val === val) b.classList.add('active-' + (val === 'all' ? 'all' : val));
    });
  } else {
    filterCat = val;
    document.querySelectorAll('.filter-cat').forEach(b => {
      b.className = 'tab-btn filter-cat';
      if (b.dataset.val === val) b.classList.add('active-' + (val === 'all' ? 'all' : val));
    });
  }
}

function startQuiz() {
  buildDeck();
  if (activeDeck.length === 0) {
    alert('Inga frågor matchar det filtret. Välj en bredare kombination.');
    return;
  }
  elStart.style.display   = 'none';
  elResults.classList.remove('show');
  elQuiz.style.display    = 'block';
  renderQuestion();
}

function renderQuestion() {
  if (currentIdx >= activeDeck.length) {
    showResults();
    return;
  }

  answered = false;
  const q   = activeDeck[currentIdx];
  const pct = Math.round((currentIdx / activeDeck.length) * 100);
  const pts  = q.level === 'E' ? 1 : q.level === 'C' ? 2 : 3;

  elCounter.innerHTML  = `Fråga <strong>${currentIdx + 1}</strong> av <strong>${activeDeck.length}</strong>`;
  elScoreDisp.innerHTML = `Poäng <strong>${score}</strong>`;
  elProgress.style.width = pct + '%';

  const catMap  = { mat:'Matspjälkning', resp:'Respiration', cirk:'Cirkulation' };
  elTags.innerHTML = `
    <span class="chip chip-${q.cat}">${catMap[q.cat]}</span>
    <span class="chip chip-${q.level}">${q.level}-nivå · ${pts}p</span>
  `;

  elCard.className = `quiz-card cat-${q.cat}`;
  elQuestion.textContent = q.q;
  elFeedback.className   = 'quiz-feedback';
  elFeedback.textContent = '';

  const { options, correctText } = makeOptions(q);
  elOptions.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className   = 'quiz-option';
    btn.textContent = opt;
    btn.setAttribute('aria-label', opt);
    btn.addEventListener('click', () => handleAnswer(btn, opt, correctText, q));
    elOptions.appendChild(btn);
  });
}

function handleAnswer(btn, chosen, correctText, q) {
  if (answered) return;
  answered = true;

  const pts = q.level === 'E' ? 1 : q.level === 'C' ? 2 : 3;
  const isRight = chosen === correctText;

  elOptions.querySelectorAll('.quiz-option').forEach(b => {
    b.disabled = true;
    if (b.textContent === correctText) b.classList.add('correct');
  });

  if (isRight) {
    btn.classList.add('correct');
    score  += pts;
    correct++;
    elFeedback.textContent = `Rätt! +${pts} poäng`;
    elFeedback.className   = 'quiz-feedback show ok';
  } else {
    btn.classList.add('incorrect');
    elFeedback.textContent = `Fel. Rätt svar: ${q.a}`;
    elFeedback.className   = 'quiz-feedback show err';
  }

  elScoreDisp.innerHTML = `Poäng <strong>${score}</strong>`;

  setTimeout(() => {
    currentIdx++;
    renderQuestion();
  }, isRight ? 1200 : 2800);
}

function showResults() {
  saveProgress();
  elQuiz.style.display = 'none';
  elResults.classList.add('show');

  const total   = activeDeck.length;
  const maxPts  = activeDeck.reduce((s, q) => s + (q.level === 'E' ? 1 : q.level === 'C' ? 2 : 3), 0);
  const pct     = maxPts > 0 ? Math.round(score / maxPts * 100) : 0;
  const stars   = pct >= 85 ? '★★★' : pct >= 60 ? '★★☆' : '★☆☆';
  const emoji   = pct >= 85 ? '🏆' : pct >= 60 ? '👏' : '💪';

  const byLvl   = { E: { n: 0, ok: 0 }, C: { n: 0, ok: 0 }, A: { n: 0, ok: 0 } };
  activeDeck.forEach((q, i) => {
    byLvl[q.level].n++;
  });

  document.getElementById('res-icon').textContent  = emoji;
  document.getElementById('res-stars').textContent = stars;
  document.getElementById('res-score').innerHTML =
    `Poäng: <strong>${score}</strong> / ${maxPts} &nbsp;·&nbsp; Rätt: ${correct} / ${total}`;
  document.getElementById('res-pct').textContent = `${pct}% av maxpoängen`;

  const bd = document.getElementById('res-breakdown');
  bd.innerHTML = ['E','C','A'].map(lvl => {
    const qs = activeDeck.filter(q => q.level === lvl);
    if (qs.length === 0) return '';
    const pts = qs.reduce((s, q) => s + (q.level === 'E' ? 1 : q.level === 'C' ? 2 : 3), 0);
    return `<div class="rb-item"><strong>${lvl}-nivå</strong>${qs.length} frågor · max ${pts}p</div>`;
  }).join('');
}

window.startQuiz  = startQuiz;
window.restartQuiz = function () {
  elResults.classList.remove('show');
  elStart.style.display = 'block';
};

/* ════════════════════════════════════════════════════════
   FILTER-KNAPPAR (kopplas efter DOM-load)
   ════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.filter-level').forEach(b => {
    b.addEventListener('click', () => setFilter('level', b.dataset.val));
  });
  document.querySelectorAll('.filter-cat').forEach(b => {
    b.addEventListener('click', () => setFilter('cat', b.dataset.val));
  });

  // init active classes
  setFilter('level', 'all');
  setFilter('cat',   'all');
});
