const slides = [
  {k:'資料の事実｜学級全体の土台',t:'支援の出発点は、学級づくり',b:'特別な教育的支援を必要とする子どもが、どの学級にもいることを想定。授業・集団・教室環境を整える方向です。'},
  {k:'資料の事実｜困難の背景を見る',t:'子どもと環境の関係を捉える',b:'見えている困難だけでなく、どんな環境で生じるのかを考える「社会モデル」の視点が示されています。'},
  {k:'資料の事実｜重層的な支援',t:'共通の工夫に、個別の支援を重ねる',b:'学級全体の工夫を土台に、個別対応、通級、特別支援学級などを教育的ニーズに応じて組み合わせます。'},
  {k:'資料の事実｜合理的配慮',t:'対話し、必要な方法を調整する',b:'基礎的環境整備を土台に、なお残る障壁を本人・保護者と対話して調整。計画への記載や引継ぎも示されています。'},
  {k:'資料の事実｜支援の具体例',t:'読み上げ、見える化、文字情報',b:'資料の事例では読み上げや視覚化、音声の文字変換などが登場。デジタル基盤は参加や理解を支える道具です。'},
  {k:'授業への提案｜試して振り返る',t:'本人と選び、学びやすさを確かめる',b:'授業の見通しを示し、方法を一緒に選ぶ。どの場面で役立ったか本人と振り返り、次の授業に生かす提案です。'}
];
const topics = [
 {type:'fact',title:'特別支援教育は、すべての学級に関わる',text:'通常の学級にも特別な教育的支援を必要とする子どもが在籍し得ることを前提に、特別支援教育を進める方向が示されています。',pages:'資料1/4 印刷頁114–116（PDF頁115–117）'},
 {type:'fact',title:'困難さの背景と環境に目を向ける',text:'教師から見える状態への対応だけで終わらず、困難さが生じる要因を捉える。心身の状態と環境の両方を見る社会モデル・ICFの視点が示されています。',pages:'資料1/4 印刷頁114–116（PDF頁115–117）'},
 {type:'fact',title:'学級全体の環境づくりが支援の土台',text:'学習者主体の授業、学級・集団づくり、教室や学習環境の整備を先に進め、その上に個別の手立てを重ねる考え方です。',pages:'資料1/4 印刷頁115–116（PDF頁116–117）／資料2/4 印刷頁510（PDF頁111）'},
 {type:'fact',title:'重層的な支援は、学びの場を機械的に決める階段ではない',text:'通常の学級での工夫、個別的対応、通級による指導、特別支援学級などを、本人の教育的ニーズに応じて検討する方向です。段階を一律に進む制度変更ではありません。',pages:'資料1/4 印刷頁115–116（PDF頁116–117）'},
 {type:'fact',title:'合理的配慮と基礎的環境整備',text:'基礎的環境整備は、全体への事前の改善措置。合理的配慮は、それを踏まえても解消しない障壁に個別に対応するものとして整理されています。',pages:'資料1/4 印刷頁116–117（PDF頁117–118）／資料2/4 印刷頁510（PDF頁111）'},
 {type:'fact',title:'本人・保護者との対話、記録、引継ぎ',text:'本人・保護者との建設的対話と合意形成、合理的配慮の計画への記載、学校間の引継ぎを進める方向が示されています。',pages:'資料1/4 印刷頁116–117（PDF頁117–118）'},
 {type:'proposal',title:'通級での自立活動と通常学級の学びをつなぐ',text:'通級による指導を、通常の学級での学習や学校生活に生かす考え方。教科指導を通級で行う特例的な扱いも審議段階の提案として示されています。',pages:'資料1/4 印刷頁117–118（PDF頁118–119）'},
 {type:'proposal',title:'特別支援学級の教育課程の質を高める',text:'自立活動の時間を適切に設けること、教育活動全体を通じた自立活動、交流及び共同学習での必要な配慮などを明確にする案です。',pages:'資料1/4 印刷頁118–120（PDF頁119–121）'},
 {type:'fact',title:'デジタル機器は、参加と理解を支える道具',text:'読字困難の例では音声読み上げ、短い行や色分け、図・動画による手順提示。難聴の例では音声の文字変換や資料の事前共有が示されています。',pages:'資料2/4 印刷頁511–512（PDF頁112–113）'},
 {type:'fact',title:'自立活動は、本人の実感や意思を起点に',text:'子ども自身が捉えている困難さや環境因子を実態把握に含め、自己選択・自己決定につながる指導を促す方向です。自立活動と教科等も関連付けます。',pages:'資料1/4 印刷頁120–122（PDF頁121–123）'},
 {type:'fact',title:'特別活動も、包摂的な学級づくりを支える',text:'特別活動、とりわけ学級活動が、多様性・包摂性を尊重した生活づくりを支える教育課程上の要として位置付けられています。',pages:'資料4/4 PDF頁156–157（印刷頁993–994）'},
 {type:'proposal',title:'授業への提案：選べる方法を一緒に試す',text:'流れを先に示し、情報の見せ方や読み方などを本人と選ぶ。授業後に「どこで助かった？」を振り返り、次の手立てへつなげる実践例です。公的決定事項ではありません。',pages:'授業への提案（審議まとめをもとにした実践例）'}
];
let index=0,playing=false,elapsed=0,timerId=null;
const $=id=>document.getElementById(id),TOTAL=90,PER_SCENE=TOTAL/slides.length;
function fmt(sec){sec=Math.floor(sec);return `${String(Math.floor(sec/60)).padStart(2,'0')}:${String(sec%60).padStart(2,'0')}`}
function render(){const s=slides[index];$('slideCount').textContent=`${index+1} / ${slides.length}`;$('slideTitle').textContent=s.t;$('slideBody').textContent=s.b;$('kicker').textContent=s.k;$('slideImage').src=`assets/scene-${String(index+1).padStart(2,'0')}.svg`;$('slideImage').alt=`${s.k}：${s.t}`;$('progress').style.width=`${Math.min(100,elapsed/TOTAL*100)}%`;$('timer').textContent=`${fmt(elapsed)} / 01:30`;$('prev').disabled=index===0;$('next').disabled=index===slides.length-1}
function stop(){playing=false;clearInterval(timerId);timerId=null;$('play').textContent='▶ スライド解説を再生'}
function tick(){elapsed=Math.min(TOTAL,elapsed+1);index=Math.min(slides.length-1,Math.floor(elapsed/PER_SCENE));render();if(elapsed>=TOTAL)stop()}
$('prev').onclick=()=>{index=Math.max(0,index-1);elapsed=index*PER_SCENE;render()};
$('next').onclick=()=>{index=Math.min(slides.length-1,index+1);elapsed=index*PER_SCENE;render()};
$('play').onclick=()=>{if(playing){stop();return}if(elapsed>=TOTAL){elapsed=0;index=0}playing=true;$('play').textContent='⏸ 一時停止';timerId=setInterval(tick,1000)};
function fillCards(q=''){const found=topics.filter(x=>(x.title+x.text+x.pages+x.type).toLowerCase().includes(q.toLowerCase()));$('cards').innerHTML=found.map(x=>`<article class="card"><span class="tag ${x.type==='proposal'?'proposal':''}">${x.type==='proposal'?'授業への提案':'資料の事実・方向性'}</span><h3>${x.title}</h3><p>${x.text}</p><p class="pages">${x.pages}</p></article>`).join('');$('resultCount').textContent=`${found.length}件を表示`}
$('search').addEventListener('input',e=>fillCards(e.target.value));
render();fillCards();
