const HYROX = { id:"hyrox", label:"HYROX", type:"hyrox", focus:"Metabólico / inferiores" };
// Bloco 2 — força nos básicos (5-8 reps) + volume nos acessórios, ênfase peito e bíceps
const WORKOUTS = [
  { id:"peito2", label:"Peito / Tríceps", type:"resist", focus:"Empurrar · ênfase peito", note:"Básicos (A): quando fechar todas as séries no topo da faixa, +2,5kg. Acessórios: suba reps até o topo, depois carga.", exercises:[
    {id:"p2_a1", name:"Supino inclinado barra 30° (pegada pronada)", scheme:"3 × 5-7", tag:"A1"},
    {id:"p2_a2", name:"Supino reto halteres, pegada pronada (pausa 1s embaixo)", scheme:"3 × 8-10", tag:"A2"},
    {id:"p2_b1", name:"Crossover polia baixa → alta (peito superior)", scheme:"3 × 12-15", tag:"B1"},
    {id:"p2_b2", name:"Flexão com pés no banco (finisher)", scheme:"3 × falha", tag:"B2"},
    {id:"p2_c1", name:"Tríceps francês na polia com corda (pegada neutra)", scheme:"3 × 10-12", tag:"C1"},
    {id:"p2_c2", name:"Supino fechado barra (pegada pronada)", scheme:"3 × 6-8", tag:"C2"},
    {id:"p_c1", name:"Tríceps corda na polia alta (pegada neutra)", scheme:"3 × 12-15", tag:"C3"},
    {id:"p2_e1", name:"Elevação lateral no cabo (unilateral)", scheme:"3 × 12-15", tag:"D1"},
    {id:"p2_e2", name:"Face pull na polia alta com corda (pegada neutra)", scheme:"3 × 15", tag:"D2"},
  ]},
  { id:"costas2", label:"Costas / Bíceps", type:"resist", focus:"Puxar · terra + ênfase bíceps", note:"* Terra: RPE 7-8 (2-3 reps na reserva), técnica acima da carga. Se lombar fadigada pós-HYROX, reduza a carga ou troque por RDL. Pegada mista só na última série se a pegada falhar.", exercises:[
    {id:"c2_a1", name:"Levantamento terra barra (pegada pronada)*", scheme:"3 × 4-5", tag:"A1"},
    {id:"c2_d", name:"Crucifixo inclinado halteres (pegada neutra)", scheme:"3 × 12", tag:"A2"},
    {id:"c2_b1", name:"Puxada alta pegada supinada", scheme:"3 × 8-10", tag:"B1"},
    {id:"c2_b2", name:"Remada apoiada halteres no banco inclinado (pegada neutra)", scheme:"3 × 10-12", tag:"B2"},
    {id:"c2_c1", name:"Rosca direta barra (pegada supinada)", scheme:"3 × 6-8", tag:"C1"},
    {id:"c2_c2", name:"Rosca inclinada halteres 45-60° (pegada supinada)", scheme:"3 × 10-12", tag:"C2"},
    {id:"c2_c3", name:"Rosca Bayesian no cabo, de costas p/ polia baixa (pegada supinada)", scheme:"3 × 12-15", tag:"C3"},
    {id:"c_e1", name:"Rosca de punho (pegada supinada)", scheme:"3 × 15-20", tag:"D1"},
    {id:"c_e2", name:"Rosca de punho invertida (pegada pronada)", scheme:"3 × 15-20", tag:"D2"},
    {id:"c_f", name:"Farmer's hold halteres (pegada neutra)", scheme:"3 × máx tempo", tag:"E"},
  ]},
  { id:"inferior2", label:"Inferior / Ombro", type:"resist", focus:"Encaixe a cada 2-3 semanas", note:"Sem terra/RDL aqui — o terra já está no dia de costas.", exercises:[
    {id:"i2_a1", name:"Agachamento livre barra (rack)", scheme:"3 × 6-8", tag:"A1"},
    {id:"i2_a2", name:"Afundo búlgaro halteres", scheme:"3 × 8-10/perna", tag:"A2"},
    {id:"i_b", name:"Flexora em pé (unilateral)", scheme:"3 × 8-10", tag:"B1"},
    {id:"i_a2", name:"Cadeira extensora (pausa 1s no topo)", scheme:"3 × 15", tag:"B2"},
    {id:"i2_c1", name:"Abdutora", scheme:"3 × 15-20", tag:"C1"},
    {id:"i2_c2", name:"Adutora", scheme:"3 × 15-20", tag:"C2"},
    {id:"i2_e1", name:"Desenvolvimento halteres sentado (pegada neutra)", scheme:"3 × 8-10", tag:"D1"},
    {id:"p_e1", name:"Elevação lateral halteres", scheme:"3 × 12-15", tag:"D2"},
    {id:"i2_f1", name:"Crucifixo inverso no crossover (posterior de ombro)", scheme:"3 × 15", tag:"E1"},
    {id:"p_c2", name:"Tríceps testa barra W (pegada pronada)", scheme:"3 × 10", tag:"E2"},
    {id:"i2_d", name:"Panturrilha no leg press", scheme:"3 × 12-15", tag:"F"},
  ]},
  HYROX,
];
// Bloco 1 (arquivado) — mantido só para exibir o histórico das datas antigas
const ARCHIVED = [
  { id:"peito", label:"Peito / Tríceps", type:"resist", focus:"Empurrar", exercises:[
    {id:"p_a1", name:"Supino inclinado halteres (45°)", scheme:"4 × 8-10", tag:"A1"},
    {id:"p_a2", name:"Crossover polia alta", scheme:"4 × 12-15", tag:"A2"},
    {id:"p_b1", name:"Supino reto barra", scheme:"3 × 6-8", tag:"B1"},
    {id:"p_b2", name:"Crucifixo no crossover", scheme:"3 × 12", tag:"B2"},
    {id:"p_c1", name:"Tríceps corda (polia)", scheme:"3 × 12", tag:"C1"},
    {id:"p_c2", name:"Tríceps testa barra W", scheme:"3 × 10", tag:"C2"},
    {id:"p_d", name:"Mergulho no banco (finisher)", scheme:"2 × falha", tag:"D1"},
    {id:"p_e", name:"Rosca punho invertida W (antebraço)", scheme:"2 × 15-20", tag:"D2"},
    {id:"p_e1", name:"Elevação lateral", scheme:"3 × 12-15", tag:"E1"},
    {id:"p_e2", name:"Elevação diagonal", scheme:"3 × 12-15", tag:"E2"},
  ]},
  { id:"costas", label:"Costas / Bíceps", type:"resist", focus:"Puxar", exercises:[
    {id:"c_a1", name:"Barra fixa (ou puxada alta)", scheme:"4 × 6-10", tag:"A1"},
    {id:"c_a2", name:"Remada polia baixa", scheme:"4 × 10-12", tag:"A2"},
    {id:"c_b1", name:"Remada curvada barra", scheme:"3 × 8-10", tag:"B1"},
    {id:"c_b2", name:"Pullover no crossover", scheme:"3 × 12", tag:"B2"},
    {id:"c_c1", name:"Rosca direta barra W", scheme:"3 × 10", tag:"C1"},
    {id:"c_c2", name:"Rosca martelo halteres", scheme:"3 × 12", tag:"C2"},
    {id:"c_d", name:"Rosca no cabo (finisher)", scheme:"2 × 15", tag:"D"},
    {id:"c_e1", name:"Rosca de punho (flexão)", scheme:"3 × 15-20", tag:"E1"},
    {id:"c_e2", name:"Rosca de punho invertida", scheme:"3 × 15-20", tag:"E2"},
    {id:"c_f", name:"Farmer's hold halteres", scheme:"2 × máx tempo", tag:"F"},
  ]},
  { id:"inferior", label:"Inferior pesado", type:"resist", focus:"Encaixe a cada 2-3 semanas", exercises:[
    {id:"i_a1", name:"Leg press 45", scheme:"4 × 8-10", tag:"A1"},
    {id:"i_a2", name:"Cadeira extensora", scheme:"3 × 12", tag:"A2"},
    {id:"i_b", name:"Flexora em pé (unilateral)", scheme:"4 × 10-12", tag:"B1"},
    {id:"i_d", name:"Panturrilha em pé", scheme:"4 × 15", tag:"B2"},
    {id:"i_c", name:"RDL com barra (lower back)", scheme:"3 × 8", tag:"C"},
  ]},
];
const byId = id => WORKOUTS.find(w => w.id === id) || ARCHIVED.find(w => w.id === id);
const findExercise = exId => { for (const w of [...WORKOUTS, ...ARCHIVED]) { const ex = w.exercises && w.exercises.find(e => e.id === exId); if (ex) return ex; } return null; };
const KEY = "logTreino_v1";

function setsOf(ex) {
  const m = ex.scheme && ex.scheme.match(/^\s*(\d+)/);
  return m ? parseInt(m[1], 10) : 1;
}

function ensureSets(exId, day) {
  const key = day + "|" + exId;
  const ex = findExercise(exId);
  const n = ex ? setsOf(ex) : 1;
  let arr = data.sets[key];
  if (!arr) {
    const oldLoad = data.loads[key] || "";
    const oldReps = data.reps[key] || "";
    arr = [];
    for (let i = 0; i < n; i++) arr.push({ c: oldLoad, r: oldReps });
    data.sets[key] = arr;
  } else {
    while (arr.length < n) arr.push({ c: "", r: "" });
  }
  return data.sets[key];
}

function migrateOldData() {
  const keys = new Set([...Object.keys(data.loads), ...Object.keys(data.reps)]);
  let migrated = false;
  keys.forEach(key => {
    if (data.sets[key]) return;
    const [day, exId] = key.split("|");
    const ex = findExercise(exId);
    if (!ex) return;
    const oldLoad = data.loads[key] || "";
    const oldReps = data.reps[key] || "";
    if (!oldLoad && !oldReps) return;
    const n = setsOf(ex);
    const arr = [];
    for (let i = 0; i < n; i++) arr.push({ c: oldLoad, r: oldReps });
    data.sets[key] = arr;
    migrated = true;
  });
  return migrated;
}

function escapeAttr(v) { return String(v == null ? "" : v).replace(/"/g, "&quot;"); }

let data = { selected:{}, loads:{}, reps:{}, sets:{} };
try { const raw = localStorage.getItem(KEY); if (raw) { const p = JSON.parse(raw); data = { selected:p.selected||{}, loads:p.loads||{}, reps:p.reps||{}, sets:p.sets||{} }; } } catch(e){}
if (migrateOldData()) { try { localStorage.setItem(KEY, JSON.stringify(data)); } catch(e){} }

let saveTimer = null;
function save() {
  setBadge("saving");
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try { localStorage.setItem(KEY, JSON.stringify(data)); setBadge("saved"); setTimeout(()=>setBadge("idle"), 1500); }
    catch(e){ setBadge("err"); }
  }, 400);
}
function setBadge(s) {
  const el = document.getElementById("badge");
  const map = { idle:["",""], saving:["salvando…","#7d8aa0"], saved:["✓ salvo","#5fd08a"], err:["erro ao salvar","#ff6b6b"] };
  const [t,c] = map[s]; el.textContent = t; el.style.color = c;
}

const dateEl = document.getElementById("date");
dateEl.value = new Date().toISOString().slice(0,10);
dateEl.addEventListener("change", render);

function lastEntryFor(exId, day) {
  const dates = new Set();
  Object.keys(data.loads).forEach(k => { if (k.endsWith("|"+exId) && data.loads[k]) dates.add(k.split("|")[0]); });
  Object.keys(data.reps).forEach(k => { if (k.endsWith("|"+exId) && data.reps[k]) dates.add(k.split("|")[0]); });
  const prev = [...dates].filter(d => d < day).sort((a,b)=> a<b?1:-1);
  if (!prev.length) return null;
  const d = prev[0];
  return { date:d, load:data.loads[d+"|"+exId]||null, reps:data.reps[d+"|"+exId]||null };
}

function lastSetsFor(exId, day) {
  const dates = new Set();
  Object.keys(data.sets).forEach(k => {
    if (k.endsWith("|"+exId) && data.sets[k] && data.sets[k].some(s => s.c || s.r)) dates.add(k.split("|")[0]);
  });
  const prev = [...dates].filter(d => d < day).sort((a,b)=> a<b?1:-1);
  if (!prev.length) return null;
  const d = prev[0];
  return { date:d, sets:data.sets[d+"|"+exId] };
}

function lastSummaryFor(exId, day) {
  const s = lastSetsFor(exId, day);
  if (s) {
    const parts = s.sets.map(st => {
      if (st.c && st.r) return `${st.c}×${st.r}`;
      if (st.c) return `${st.c}`;
      if (st.r) return `×${st.r}`;
      return null;
    }).filter(Boolean);
    if (parts.length) return { date:s.date, text:parts.join(" ") };
  }
  const old = lastEntryFor(exId, day);
  if (old) {
    const text = `${old.load?old.load+'kg':'—'}${old.reps?` × ${old.reps} reps`:''}`;
    return { date:old.date, text };
  }
  return null;
}

function suggestedSetsFor(exId, day, n) {
  const arr = new Array(n).fill(null).map(() => ({ c:"", r:"" }));
  const last = lastSetsFor(exId, day);
  if (last && last.sets.some(s => s.c || s.r)) {
    for (let i = 0; i < n; i++) { const s = last.sets[i]; if (s) arr[i] = { c: s.c || "", r: s.r || "" }; }
    return arr;
  }
  const old = lastEntryFor(exId, day);
  if (old && (old.load || old.reps)) {
    for (let i = 0; i < n; i++) arr[i] = { c: old.load || "", r: old.reps || "" };
  }
  return arr;
}

function applySuggested(exId, i) {
  const day = dateEl.value;
  const sets = ensureSets(exId, day);
  const suggested = suggestedSetsFor(exId, day, sets.length);
  const sug = suggested[i];
  if (!sug || (!sug.c && !sug.r)) return;
  sets[i] = { c: sug.c, r: sug.r };
  save(); render();
}

function repeatLast(exId) {
  const day = dateEl.value;
  const sets = ensureSets(exId, day);
  const suggested = suggestedSetsFor(exId, day, sets.length);
  if (!suggested.some(s => s.c || s.r)) return;
  for (let i = 0; i < sets.length; i++) { if (suggested[i].c || suggested[i].r) sets[i] = { c: suggested[i].c, r: suggested[i].r }; }
  save(); render();
}

function pickWorkout(id) {
  const day = dateEl.value;
  data.selected[day] = data.selected[day] === id ? undefined : id;
  save(); render();
}

function renderPills() {
  const day = dateEl.value;
  const cur = data.selected[day] || "";
  document.getElementById("pills").innerHTML = WORKOUTS.map(w =>
    `<button class="pill ${cur===w.id?'active':''}" onclick="pickWorkout('${w.id}')">${w.label}<small>${w.focus}</small></button>`
  ).join("");
}

function render() {
  renderPills();
  const day = dateEl.value;
  const cur = data.selected[day] || "";
  const w = cur ? byId(cur) : null;
  const c = document.getElementById("content");

  if (!w) { c.innerHTML = `<div class="empty">Escolha o treino que você fez nesta data para começar a registrar.</div>`; return; }
  if (w.type === "hyrox") {
    c.innerHTML = `<div class="hyrox"><div class="chk">✓</div><div style="font-weight:700;font-size:18px">HYROX registrado nesta data</div><div style="font-size:15px;color:#9ab0cc;margin-top:4px">Treino metabólico — sem registro de carga.</div></div>`;
    return;
  }

  let html = `<div class="whead"><div class="wtitle">${w.label}</div><div style="font-size:14px;color:#7d8aa0">carga (kg) · reps</div></div>`;
  html += `<div class="cols"><div style="flex:1">Exercício</div><div style="width:70px;text-align:center">Carga</div><div style="width:56px;text-align:center">Reps</div></div>`;
  w.exercises.forEach(ex => {
    const sets = ensureSets(ex.id, day);
    const suggested = suggestedSetsFor(ex.id, day, sets.length);
    const hasSuggestion = suggested.some(s => s.c || s.r);
    const last = lastSummaryFor(ex.id, day);
    const rows = sets.map((s, i) => {
      const sug = suggested[i] || { c:"", r:"" };
      const isTemp = !s.c && !s.r;
      const showCheck = isTemp && (sug.c || sug.r);
      return `
      <div class="setrow">
        <span class="setnum">${i+1}ª</span>
        <input class="num carga" inputmode="decimal" placeholder="${escapeAttr(sug.c || '—')}" value="${escapeAttr(s.c)}" oninput="setCell('${ex.id}', ${i}, 'c', this.value)">
        <input class="num reps" inputmode="numeric" placeholder="${escapeAttr(sug.r || '—')}" value="${escapeAttr(s.r)}" oninput="setCell('${ex.id}', ${i}, 'r', this.value)">
        ${showCheck ? `<button class="setcheck" onclick="applySuggested('${ex.id}', ${i})" title="usar sugestão">✓</button>` : `<span class="setcheck-spacer"></span>`}
      </div>`;
    }).join("");
    html += `<div class="ex">
      <div class="exhead">
        <div class="exhead-left"><span class="extag">${ex.tag}</span><span class="exname">${ex.name}</span></div>
        ${hasSuggestion ? `<button class="repeatbtn" onclick="repeatLast('${ex.id}')">repetir último</button>` : ``}
      </div>
      <div class="exscheme">${ex.scheme}</div>
      <div class="setrows">${rows}</div>
      ${last ? `<div class="last">última: <b>${last.text}</b> · ${last.date.slice(5)}</div>` : ``}
    </div>`;
  });
  if (w.note) html += `<div class="note">${w.note}</div>`;
  c.innerHTML = html;
}

function setCell(exId, i, field, value) {
  const day = dateEl.value;
  const sets = ensureSets(exId, day);
  sets[i][field] = value;
  save();
}

function setExportMsg(msg, ok) {
  const el = document.getElementById("exportMsg");
  el.textContent = msg;
  el.style.color = ok ? "#5fd08a" : "#ff6b6b";
}
function setImportMsg(msg, ok) {
  const el = document.getElementById("importMsg");
  el.textContent = msg;
  el.style.color = ok ? "#5fd08a" : "#ff6b6b";
}

async function exportData() {
  const json = JSON.stringify(data);
  const box = document.getElementById("exportBox");
  box.style.display = "block";
  box.value = json;
  box.focus();
  box.select();
  try {
    await navigator.clipboard.writeText(json);
    setExportMsg("✓ copiado para a área de transferência", true);
  } catch (e) {
    try {
      document.execCommand("copy");
      setExportMsg("✓ copiado para a área de transferência", true);
    } catch (e2) {
      setExportMsg("não copiou automaticamente — o texto já está selecionado acima, copie manualmente", false);
    }
  }
}

function toggleImport() {
  const box = document.getElementById("importBox");
  box.style.display = box.style.display === "none" ? "block" : "none";
}

function importData() {
  const raw = document.getElementById("importInput").value.trim();
  if (!raw) { setImportMsg("cole o JSON antes de importar", false); return; }
  let parsed;
  try { parsed = JSON.parse(raw); }
  catch (e) { setImportMsg("JSON inválido", false); return; }
  if (!parsed || typeof parsed !== "object" || typeof parsed.selected !== "object" || typeof parsed.loads !== "object" || typeof parsed.reps !== "object") {
    setImportMsg("formato inesperado — precisa ter selected, loads e reps", false);
    return;
  }
  if (!confirm("Isso vai substituir todos os dados salvos neste dispositivo pelos dados importados. Continuar?")) return;
  data = { selected: parsed.selected || {}, loads: parsed.loads || {}, reps: parsed.reps || {}, sets: parsed.sets || {} };
  try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) {}
  document.getElementById("importInput").value = "";
  setImportMsg("✓ dados importados com sucesso", true);
  render();
}

render();
