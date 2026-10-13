const TYPES = {
  normal:   { name: "ノーマル", symbol: "○", color: "#8d9292" },
  fire:     { name: "ほのお", symbol: "♨", color: "#eb6a3f" },
  water:    { name: "みず", symbol: "●", color: "#428dc6" },
  electric: { name: "でんき", symbol: "⚡", color: "#d7aa1c" },
  grass:    { name: "くさ", symbol: "♣", color: "#58a447" },
  ice:      { name: "こおり", symbol: "✣", color: "#49aaa7" },
  fighting: { name: "かくとう", symbol: "✊", color: "#c15b3f" },
  poison:   { name: "どく", symbol: "☣", color: "#98528c" },
  ground:   { name: "じめん", symbol: "◆", color: "#bf8848" },
  flying:   { name: "ひこう", symbol: "▲", color: "#6d92c6" },
  psychic:  { name: "エスパー", symbol: "◉", color: "#d85a78" },
  bug:      { name: "むし", symbol: "♟", color: "#829a36" },
  rock:     { name: "いわ", symbol: "⬟", color: "#9b8252" },
  ghost:    { name: "ゴースト", symbol: "☯", color: "#655587" },
  dragon:   { name: "ドラゴン", symbol: "♢", color: "#555da7" },
  dark:     { name: "あく", symbol: "☾", color: "#565064" },
  steel:    { name: "はがね", symbol: "⬡", color: "#6c929b" },
  fairy:    { name: "フェアリー", symbol: "✦", color: "#cd77a4" }
};

// こうげきするタイプ -> こうかを うけるタイプ。PDFの18タイプ表に対応。
const CHART = {
  normal:   { rock:.5, ghost:0, steel:.5 },
  fire:     { fire:.5, water:.5, grass:2, ice:2, bug:2, rock:.5, dragon:.5, steel:2 },
  water:    { fire:2, water:.5, grass:.5, ground:2, rock:2, dragon:.5 },
  electric: { water:2, electric:.5, grass:.5, ground:0, flying:2, dragon:.5 },
  grass:    { fire:.5, water:2, grass:.5, poison:.5, ground:2, flying:.5, bug:.5, rock:2, dragon:.5, steel:.5 },
  ice:      { fire:.5, water:.5, grass:2, ice:.5, ground:2, flying:2, dragon:2, steel:.5 },
  fighting: { normal:2, ice:2, poison:.5, flying:.5, psychic:.5, bug:.5, rock:2, ghost:0, dark:2, steel:2, fairy:.5 },
  poison:   { grass:2, poison:.5, ground:.5, rock:.5, ghost:.5, steel:0, fairy:2 },
  ground:   { fire:2, electric:2, grass:.5, poison:2, flying:0, bug:.5, rock:2, steel:2 },
  flying:   { electric:.5, grass:2, fighting:2, bug:2, rock:.5, steel:.5 },
  psychic:  { fighting:2, poison:2, psychic:.5, dark:0, steel:.5 },
  bug:      { fire:.5, grass:2, fighting:.5, poison:.5, flying:.5, psychic:2, ghost:.5, dark:2, steel:.5, fairy:.5 },
  rock:     { fire:2, ice:2, fighting:.5, ground:.5, flying:2, bug:2, steel:.5 },
  ghost:    { normal:0, psychic:2, ghost:2, dark:.5 },
  dragon:   { dragon:2, steel:.5, fairy:0 },
  dark:     { fighting:.5, psychic:2, ghost:2, dark:.5, fairy:.5 },
  steel:    { fire:.5, water:.5, electric:.5, ice:2, rock:2, steel:.5, fairy:2 },
  fairy:    { fire:.5, fighting:2, poison:.5, dragon:2, dark:2, steel:.5 }
};

const POKEMON = [
  { name:"イーブイ", types:["normal"], image:"eevee.png" }, { name:"ヒトカゲ", types:["fire"], image:"charmander.png" },
  { name:"ゼニガメ", types:["water"], image:"squirtle.png" }, { name:"ピカチュウ", types:["electric"], image:"pikachu.png" },
  { name:"チコリータ", types:["grass"], image:"chikorita.png" }, { name:"バニプッチ", types:["ice"], image:"vanillite.png" },
  { name:"ワンリキー", types:["fighting"], image:"machop.png" }, { name:"アーボ", types:["poison"], image:"ekans.png" },
  { name:"サンド", types:["ground"], image:"sandshrew.png" }, { name:"ココガラ", types:["flying"], image:"rookidee.png" },
  { name:"ケーシィ", types:["psychic"], image:"abra.png" }, { name:"キャタピー", types:["bug"], image:"caterpie.png" },
  { name:"ウソッキー", types:["rock"], image:"sudowoodo.png" }, { name:"ムウマ", types:["ghost"], image:"misdreavus.png" },
  { name:"キバゴ", types:["dragon"], image:"axew.png" }, { name:"ゾロア", types:["dark"], image:"zorua.png" },
  { name:"ギアル", types:["steel"], image:"klink.png" }, { name:"ニンフィア", types:["fairy"], image:"sylveon.png" },
  { name:"ミジュマル", types:["water"], image:"oshawott.png" }, { name:"ケロマツ", types:["water"], image:"froakie.png" },
  { name:"デデンネ", types:["electric","fairy"], image:"dedenne.png" }, { name:"コダック", types:["water"], image:"psyduck.png" },
  { name:"ホゲータ", types:["fire"], image:"fuecoco.png" }, { name:"ラウドボーン", types:["fire","ghost"], image:"skeledirge.png" },
  { name:"カイリュー", types:["dragon","flying"], image:"dragonite.png" }, { name:"ミュウツー", types:["psychic"], image:"mewtwo.png" },
  { name:"ルギア", types:["psychic","flying"], image:"lugia.png" }, { name:"カイオーガ", types:["water"], image:"kyogre.png" },
  { name:"グラードン", types:["ground"], image:"groudon.png" }, { name:"レックウザ", types:["dragon","flying"], image:"rayquaza.png" },
  { name:"ディアルガ", types:["steel","dragon"], image:"dialga.png", practiceAnswer:"ground", hint:"したから ドーンと こうげき！" },
  { name:"パルキア", types:["water","dragon"], image:"palkia.png", practiceAnswer:"fairy", hint:"ふしぎな まほうで こうげき！" },
  { name:"ザシアン", types:["fairy","steel"], image:"zacian.png", practiceAnswer:"ground", hint:"したから ドーンと こうげき！" },
  { name:"フシギダネ", types:["grass","poison"], image:"bulbasaur.png" }, { name:"ロコン", types:["fire"], image:"vulpix.png" },
  { name:"メリープ", types:["electric"], image:"mareep.png" }, { name:"リオル", types:["fighting"], image:"riolu.png" },
  { name:"ディグダ", types:["ground"], image:"diglett.png" }, { name:"ゴンベ", types:["normal"], image:"munchlax.png" },
  { name:"ミミッキュ", types:["ghost","fairy"], image:"mimikyu.png", practiceAnswer:"ghost" },
  { name:"ナエトル", types:["grass"], image:"turtwig.png" }, { name:"アチャモ", types:["fire"], image:"torchic.png" },
  { name:"カビゴン", types:["normal"], image:"snorlax.png" }, { name:"ハリマロン", types:["grass"], image:"chespin.png" },
  { name:"ソウブレイズ", types:["fire","ghost"], image:"ceruledge.png" }, { name:"ツタージャ", types:["grass"], image:"snivy.png" },
  { name:"ウェーニバル", types:["water","fighting"], image:"quaquaval.png" }, { name:"リザードン", types:["fire","flying"], image:"charizard.png" },
  { name:"マスカーニャ", types:["grass","dark"], image:"meowscarada.png" }, { name:"タネボー", types:["grass"], image:"seedot.png" }
];

const HINTS = {
  normal:"ちからいっぱい パンチしてみよう！",
  fire:"もえている ひを けすには？",
  water:"みずに ビリビリを ながそう！",
  electric:"ビリビリは どこへ にがせるかな？",
  grass:"はっぱを もやせる ものは？",
  ice:"つめたい こおりを とかそう！",
  fighting:"たかい ところから こうげき！",
  poison:"したから ドーンと こうげき！",
  ground:"かわいた つちを ながせる ものは？",
  flying:"そらまで とどく ビリビリは？",
  psychic:"ふしぎな ちからを こわがらないのは？",
  bug:"ちいさな むしが にがてな あついものは？",
  rock:"かたい いわも けずれる ながれは？",
  ghost:"おばけと おなじ よるの なかまは？",
  dragon:"つよい ドラゴンに ふしぎな まほう！",
  dark:"わるものに せいぎの パンチ！",
  steel:"かたい てつを あつく とかそう！",
  fairy:"まほうに まけない かたい ものは？"
};

// れんしゅうでは、まず覚えやすい代表的な組み合わせを1つずつ定着させる。
const PRACTICE_ANSWERS = {
  normal:"fighting", fire:"water", water:"electric", electric:"ground", grass:"fire", ice:"fire",
  fighting:"flying", poison:"ground", ground:"water", flying:"electric", psychic:"dark", bug:"fire",
  rock:"water", ghost:"dark", dragon:"fairy", dark:"fighting", steel:"fire", fairy:"steel"
};

const $ = (id) => document.getElementById(id);
const screens = ["homeScreen","practiceCountScreen","battleScreen","resultScreen","guideScreen"];
let state = { mode:"practice", index:0, total:8, score:0, results:[], current:null, timer:null, deadline:0, locked:false, queue:[], reviewNames:[] };
let soundOn = localStorage.getItem("typeTouchSound") !== "off";
const safariSpeechNeedsGesture = navigator.vendor === "Apple Computer, Inc.";
let activeSpeechFinish = null;

function typeChip(key) {
  const t = TYPES[key];
  return `<span class="type-chip" style="--type-color:${t.color}"><span class="symbol">${t.symbol}</span>${t.name}</span>`;
}
function effect(attack, defenders) { return defenders.reduce((n,d) => n * (CHART[attack][d] ?? 1), 1); }
function shuffle(items) {
  const result=[...items];
  for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}
  return result;
}
function winningTypes(defenders) { return Object.keys(TYPES).filter(t => effect(t,defenders) > 1); }
function nonWinningTypes(defenders) { return Object.keys(TYPES).filter(t => effect(t,defenders) <= 1); }
function storedNames(key) {
  try {
    const value=JSON.parse(localStorage.getItem(key)||"[]");
    return Array.isArray(value)?value.filter(name=>POKEMON.some(p=>p.name===name)):[];
  } catch { return []; }
}
function buildQuestionQueue(total) {
  const reviewNames=storedNames("typeTouchReview");
  const reviewSet=new Set(reviewNames);
  const priority=shuffle(POKEMON.filter(p=>reviewSet.has(p.name)));
  const regular=shuffle(POKEMON.filter(p=>!reviewSet.has(p.name)));
  const queue=[...priority,...regular];
  const previous=storedNames("typeTouchLastOrder");

  // 前回と同じポケモンから始まらないよう、候補同士を入れ替える。
  if(queue.length>1&&queue[0].name===previous[0]) [queue[0],queue[1]]=[queue[1],queue[0]];

  const selected=queue.slice(0,total);
  localStorage.setItem("typeTouchLastOrder",JSON.stringify(selected.map(p=>p.name)));
  return {selected,reviewNames};
}
function showScreen(id) {
  screens.forEach(s => $(s).classList.toggle("active",s === id));
  $("backButton").classList.toggle("hidden",id === "homeScreen");
  window.scrollTo({top:0,behavior:"smooth"});
}
function stopSpeech() {
  if(activeSpeechFinish) activeSpeechFinish();
  if("speechSynthesis" in window) speechSynthesis.cancel();
}
function say(text) {
  return new Promise(resolve=>{
    if(!soundOn||!("speechSynthesis" in window)){resolve();return;}
    stopSpeech();
    speechSynthesis.resume();
    const utterance=new SpeechSynthesisUtterance(text);
    utterance.lang="ja-JP";utterance.rate=.82;utterance.pitch=1.15;
    let finished=false;
    const safetyTimer=setTimeout(finish,8000);
    function finish(){
      if(finished)return;
      finished=true;clearTimeout(safetyTimer);
      if(activeSpeechFinish===finish)activeSpeechFinish=null;
      resolve();
    }
    activeSpeechFinish=finish;
    utterance.onend=finish;utterance.onerror=finish;
    speechSynthesis.speak(utterance);
  });
}
function beep(correct) {
  if (!soundOn) return;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return;
  const ctx = new Ctx(); const osc = ctx.createOscillator(); const gain = ctx.createGain();
  osc.connect(gain); gain.connect(ctx.destination); osc.type="sine"; osc.frequency.value=correct?660:180;
  if(correct) osc.frequency.exponentialRampToValueAtTime(990,ctx.currentTime+.18);
  gain.gain.setValueAtTime(.12,ctx.currentTime); gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.28);
  osc.start(); osc.stop(ctx.currentTime+.3);
}
function makeQuestion(pokemon) {
  if(state.mode==="team"){
    const strong=POKEMON.filter(candidate=>candidate.name!==pokemon.name&&candidate.types.some(type=>effect(type,pokemon.types)>1));
    const answer=strong[Math.floor(Math.random()*strong.length)];
    const distractors=shuffle(POKEMON.filter(candidate=>candidate.name!==answer.name&&candidate.types.every(type=>effect(type,pokemon.types)<=1))).slice(0,2);
    const options=shuffle([answer,...distractors]);
    return {pokemon,answer:answer.name,answerLabel:`${answer.name}の ${answer.types.map(t=>TYPES[t].name).join("・")}タイプ`,options};
  }
  const wins = winningTypes(pokemon.types);
  const preferred=pokemon.practiceAnswer||PRACTICE_ANSWERS[pokemon.types[0]];
  const practiceAnswer=effect(preferred,pokemon.types)>1?preferred:wins[0];
  const answer = state.mode === "practice" ? practiceAnswer : wins[Math.floor(Math.random()*wins.length)];
  const distractors = shuffle(nonWinningTypes(pokemon.types)).slice(0,2);
  return { pokemon, answer, answerLabel:`${TYPES[answer].name}タイプ`, options:shuffle([answer,...distractors]) };
}
function startGame(mode,requestedTotal) {
  clearTimer();
  const total=mode==="speed"||mode==="team"?10:[10,15,20].includes(Number(requestedTotal))?Number(requestedTotal):10;
  const {selected,reviewNames}=buildQuestionQueue(total);
  state = {mode,index:0,total,score:0,results:[],current:null,timer:null,deadline:0,locked:false,queue:selected,reviewNames};
  $("modeName").textContent = mode==="speed"?"3びょう バトル":mode==="team"?"チーム バトル":"ゆっくり れんしゅう";
  $("questionTotal").textContent=state.total;
  $("timerWrap").classList.toggle("hidden",mode!=="speed");
  $("hintRow").classList.toggle("hidden",mode!=="practice");
  $("battlePrompt").textContent=mode==="team"?"てもちから えらぼう！":"どの タイプで たたかう？";
  showScreen("battleScreen"); nextQuestion();
}
function nextQuestion() {
  if(state.index>=state.total){finishGame();return;}
  state.locked=false; state.current=makeQuestion(state.queue[state.index]);
  $("answerReason").classList.add("hidden");
  $("answerReason").replaceChildren();
  $("hintRow").classList.toggle("hidden",state.mode!=="practice");
  $("speakButton").classList.remove("hidden");
  const {pokemon,answer,options}=state.current;
  $("questionNumber").textContent=state.index+1;
  $("pokemonName").textContent=pokemon.name;
  $("defenderTypes").innerHTML=pokemon.types.map(typeChip).join("");
  $("hintText").textContent=pokemon.hint||HINTS[pokemon.types[0]];
  const primary=TYPES[pokemon.types[0]];
  $("enemyMon").style.setProperty("--type-color",primary.color);
  const stage=$("pokemonImage").parentElement;
  stage.classList.remove("has-art");
  $("pokemonImage").alt=`${pokemon.name}の え`;
  $("pokemonImage").onload=()=>stage.classList.add("has-art");
  $("pokemonImage").onerror=()=>stage.classList.remove("has-art");
  $("pokemonImage").src=`assets/pokemon/${pokemon.image}`;
  $("answers").className="answers";
  if(state.mode==="team"){
    $("answers").innerHTML=options.map(candidate=>`<button class="answer-button team-answer-button" data-choice="${candidate.name}" style="--type-color:${TYPES[candidate.types[0]].color}"><img class="team-answer-art" src="assets/pokemon/${candidate.image}" alt="" /><strong>${candidate.name}</strong><span class="team-answer-types">${candidate.types.map(t=>TYPES[t].name).join("・")}</span></button>`).join("");
  }else{
    $("answers").innerHTML=options.map(key=>`<button class="answer-button" data-choice="${key}" style="--type-color:${TYPES[key].color}"><span class="answer-symbol">${TYPES[key].symbol}</span>${TYPES[key].name}</button>`).join("");
  }
  [...$("answers").children].forEach(btn=>btn.addEventListener("click",()=>choose(btn.dataset.choice,btn)));
  updatePips();
  say(state.mode==="team"?`${pokemon.name}。${pokemon.types.map(t=>TYPES[t].name).join("と")}タイプ。てもちから えらぼう！`:`${pokemon.name}。${pokemon.types.map(t=>TYPES[t].name).join("と")}タイプ。どの タイプで たたかう？`);
  if(state.mode==="speed") startTimer();
}
async function choose(type,button,timeout=false) {
  if(state.locked)return; state.locked=true; clearTimer();
  const correct=type===state.current.answer;
  const answerPokemon=state.mode==="team"?POKEMON.find(candidate=>candidate.name===state.current.answer):null;
  const attackType=state.mode==="team"
    ?answerPokemon.types.find(candidateType=>effect(candidateType,state.current.pokemon.types)>1)
    :state.current.answer;
  const defenderType=state.current.pokemon.types.find(candidateType=>(CHART[attackType][candidateType]??1)>1);
  const reasonText=`${TYPES[attackType].name}は ${TYPES[defenderType].name}に ばつぐん！`;
  const feedback=correct?`ばつぐん！ せいかい！ ${state.current.answerLabel}。${reasonText}`:`${timeout?"じかん！":"おしい！"} こたえは ${state.current.answerLabel}。${reasonText}`;
  const reason=$("answerReason");
  reason.innerHTML=`<div class="reason-matchup"><span class="reason-type" style="--type-color:${TYPES[attackType].color}">${TYPES[attackType].symbol} ${TYPES[attackType].name}</span><span class="reason-arrow" aria-hidden="true">➡</span><span class="reason-type" style="--type-color:${TYPES[defenderType].color}">${TYPES[defenderType].symbol} ${TYPES[defenderType].name}</span><button class="reason-speak" id="reasonSpeakButton" aria-label="せつめいを もういちど きく">♪</button></div><strong>${reasonText}</strong>`;
  $("reasonSpeakButton").addEventListener("click",()=>say(feedback));
  reason.classList.remove("hidden");
  $("hintRow").classList.add("hidden");
  $("speakButton").classList.add("hidden");
  if(correct)state.score++;
  state.results.push({pokemon:state.current.pokemon,correct});
  $("answers").classList.add("locked");
  [...$("answers").children].forEach(btn=>{btn.disabled=true;if(btn.dataset.choice===String(state.current.answer))btn.classList.add("correct")});
  if(button&&!correct)button.classList.add("wrong");
  $("impact").textContent=correct?"ばつぐん！":timeout?"じかん！":"おしい！";
  $("impact").classList.remove("show"); void $("impact").offsetWidth; $("impact").classList.add("show");
  beep(correct);
  const currentGame=state;
  state.index++; updatePips();
  await say(feedback);
  await new Promise(resolve=>setTimeout(resolve,1800));
  if(state===currentGame&&$("battleScreen").classList.contains("active")){
    if(state.mode==="team"||safariSpeechNeedsGesture){
      const nextButton=document.createElement("button");
      nextButton.className="reason-next";
      nextButton.textContent="つぎの もんだいへ ▶";
      nextButton.addEventListener("click",()=>{if(state===currentGame&&$("battleScreen").classList.contains("active"))nextQuestion();},{once:true});
      $("answerReason").append(nextButton);
    }else nextQuestion();
  }
}
function updatePips(){ $("scorePips").innerHTML=Array.from({length:state.total},(_,i)=>`<i class="${state.results[i]?(state.results[i].correct?"correct":"wrong"):""}"></i>`).join(""); }
function startTimer(){
  const duration=3500; state.deadline=performance.now()+duration; $("timerBar").style.transform="scaleX(1)";
  function tick(now){const left=Math.max(0,(state.deadline-now)/duration);$("timerBar").style.transform=`scaleX(${left})`;if(left>0&&!state.locked)state.timer=requestAnimationFrame(tick);else if(!state.locked)choose(null,null,true)}
  state.timer=requestAnimationFrame(tick);
}
function clearTimer(){if(state.timer)cancelAnimationFrame(state.timer);state.timer=null;}
function finishGame(){
  clearTimer(); const ratio=state.score/state.total; const stars=ratio>=.8?3:ratio>=.5?2:1;
  $("resultScore").textContent=state.score;$("resultTotal").textContent=`/ ${state.total}もん`;
  $("resultStars").textContent="★ ".repeat(stars)+"☆ ".repeat(3-stars);
  $("resultTitle").textContent=ratio===1?"パーフェクト！":ratio>=.8?"すごい！":ratio>=.5?"いい ちょうし！":"また つよくなれる！";
  $("resultMessage").textContent=ratio>=.8?"あいてを みて すぐに えらべたね！":"まちがえた タイプは つぎに おぼえよう！";
  const review=new Set(state.reviewNames);
  state.results.forEach(({pokemon,correct})=>correct?review.delete(pokemon.name):review.add(pokemon.name));
  localStorage.setItem("typeTouchReview",JSON.stringify([...review]));
  const best=Math.max(Number(localStorage.getItem("typeTouchBest")||0),stars);localStorage.setItem("typeTouchBest",best);renderHomeProgress();showScreen("resultScreen");say(`${state.score}もん せいかい！ ${$("resultTitle").textContent}`);
}
function renderHomeProgress(){const best=Number(localStorage.getItem("typeTouchBest")||0);$("bestRecord").textContent=best?`さいこう ${best}つぼし`:`まだ ないよ`;$("homeStars").textContent="★ ".repeat(best)+"☆ ".repeat(3-best);$("homeStars").setAttribute("aria-label",`ほし ${best}こ`)}
function openPracticeCount(){clearTimer();stopSpeech();showScreen("practiceCountScreen")}
function openGuide(){
  clearTimer();showScreen("guideScreen");
  $("typePicker").innerHTML=Object.entries(TYPES).map(([key,t])=>`<button class="pick-type" data-type="${key}" style="--type-color:${t.color}"><span>${t.symbol}</span>${t.name}</button>`).join("");
  [...$("typePicker").children].forEach(btn=>btn.addEventListener("click",()=>selectGuideType(btn.dataset.type,btn)));
  $("guideAnswer").classList.add("hidden");
}
function selectGuideType(type,button){[...$("typePicker").children].forEach(b=>b.classList.toggle("selected",b===button));$("selectedType").innerHTML=typeChip(type);$("strongTypes").innerHTML=winningTypes([type]).map(typeChip).join("");$("guideAnswer").classList.remove("hidden");$("guideAnswer").scrollIntoView({behavior:"smooth",block:"nearest"});say(`${TYPES[type].name}タイプには、${winningTypes([type]).map(t=>TYPES[t].name).join("、")}タイプが ばつぐん！`)}
function goHome(){clearTimer();stopSpeech();showScreen("homeScreen")}

document.querySelectorAll("[data-mode]").forEach(b=>b.addEventListener("click",()=>b.dataset.mode==="practice"?openPracticeCount():startGame(b.dataset.mode)));
document.querySelectorAll("[data-practice-total]").forEach(b=>b.addEventListener("click",()=>startGame("practice",Number(b.dataset.practiceTotal))));
$("guideButton").addEventListener("click",openGuide);$("backButton").addEventListener("click",goHome);$("homeButton").addEventListener("click",goHome);$("retryButton").addEventListener("click",()=>startGame(state.mode,state.total));
$("speakButton").addEventListener("click",()=>{const p=state.current?.pokemon;if(p)say(state.mode==="team"?`${p.name}。${p.types.map(t=>TYPES[t].name).join("と")}タイプ。てもちから えらぼう！`:`${p.name}。${p.types.map(t=>TYPES[t].name).join("と")}タイプ。どの タイプで たたかう？`)});
$("soundButton").addEventListener("click",()=>{soundOn=!soundOn;localStorage.setItem("typeTouchSound",soundOn?"on":"off");$("soundButton").textContent=soundOn?"♪":"×";$("soundButton").setAttribute("aria-pressed",String(soundOn));if(!soundOn)stopSpeech();const toast=$("toast");toast.textContent=soundOn?"おと オン":"おと オフ";toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1000)});
$("soundButton").textContent=soundOn?"♪":"×";renderHomeProgress();
