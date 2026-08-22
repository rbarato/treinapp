const HYROX = { id:"hyrox", label:"HYROX", type:"hyrox", focus:"Metabólico / inferiores" };
const WORKOUTS = [
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
    {id:"c_b1", name:"Remada curvada barra*", scheme:"3 × 8-10", tag:"B1"},
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
  HYROX,
];
const byId = id => WORKOUTS.find(w => w.id === id);
const KEY = "logTreino_v1";

let data = { selected:{}, loads:{}, reps:{} };
try { const raw = localStorage.getItem(KEY); if (raw) { const p = JSON.parse(raw); data = { selected:p.selected||{}, loads:p.loads||{}, reps:p.reps||{} }; } } catch(e){}

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
    const last = lastEntryFor(ex.id, day);
    const lk = day+"|"+ex.id;
    html += `<div class="ex">
      <div class="exrow">
        <div style="flex:1">
          <div style="display:flex;align-items:center;gap:6px">
            <span class="extag">${ex.tag}</span><span class="exname">${ex.name}</span>
          </div>
          <div class="exscheme">${ex.scheme}</div>
        </div>
        <input class="num carga" inputmode="decimal" placeholder="${last&&last.load?last.load:'—'}" value="${data.loads[lk]||''}" oninput="setLoad('${ex.id}', this.value)">
        <input class="num reps" inputmode="numeric" placeholder="${last&&last.reps?last.reps:'—'}" value="${data.reps[lk]||''}" oninput="setRep('${ex.id}', this.value)">
      </div>
      ${last ? `<div class="last">última: <b>${last.load?last.load+'kg':'—'}</b>${last.reps?` × <b>${last.reps}</b> reps`:''} · ${last.date.slice(5)}</div>` : ``}
    </div>`;
  });
  if (w.id === "costas") html += `<div class="note">* Se lombar/pegada fadigadas pós-HYROX, troque a remada curvada por remada apoiada ou puxada.</div>`;
  c.innerHTML = html;
}

function setLoad(exId, v) { data.loads[dateEl.value+"|"+exId] = v; save(); }
function setRep(exId, v) { data.reps[dateEl.value+"|"+exId] = v; save(); }

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
  data = { selected: parsed.selected || {}, loads: parsed.loads || {}, reps: parsed.reps || {} };
  try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) {}
  document.getElementById("importInput").value = "";
  setImportMsg("✓ dados importados com sucesso", true);
  render();
}

render();
