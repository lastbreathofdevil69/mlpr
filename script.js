// Notebook previewer (vanilla JS)
const NB_PATH = 'notebooks';
const tabsEl = document.getElementById('tabs');
const notebookEl = document.getElementById('notebook');
const nbTitle = document.getElementById('nb-title');
const nbMeta = document.getElementById('nb-meta');
const spinner = document.getElementById('spinner');
const search = document.getElementById('search');
const downloadBtn = document.getElementById('downloadBtn');
const themeToggle = document.getElementById('themeToggle');

let current = null;

function updateDownloadButton(nb){
  if(!nb){
    downloadBtn.href = '#';
    downloadBtn.download = '';
    downloadBtn.classList.add('is-disabled');
    downloadBtn.setAttribute('aria-disabled', 'true');
    return;
  }

  const filePath = `${NB_PATH}/${nb.name}`;
  downloadBtn.href = filePath;
  downloadBtn.download = nb.name;
  downloadBtn.classList.remove('is-disabled');
  downloadBtn.setAttribute('aria-disabled', 'false');
}

function makeTabs(){
  notebooklist.forEach(nb => {
    const btn = document.createElement('button');
    btn.className='tab';
    btn.dataset.id = nb.id;
    btn.innerText = `LAB ${nb.id}`;
    btn.addEventListener('click',()=>loadNotebook(nb, btn));
    tabsEl.appendChild(btn);
  });
}

function setActiveTab(btn){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  if(btn) btn.classList.add('active');
}

function showSpinner(show){
  spinner.classList.toggle('hidden', !show);
}

async function loadNotebook(nb, btn){
  setActiveTab(btn);
  showSpinner(true);
  notebookEl.innerHTML='';
  nbTitle.innerText = `Loading ${nb.title}...`;
  nbMeta.innerText='';
  updateDownloadButton(null);
  try{
    const res = await fetch(`${NB_PATH}/${nb.name}`);
    if(!res.ok) throw new Error(`Could not find ${nb.name}`);
    const nbData = await res.json();
    renderNotebook(nbData, nb);
    current = nb;
    updateDownloadButton(current);
  }catch(err){
    nbTitle.innerText = `Error: ${nb.title}`;
    nbMeta.innerText = nb.description;
    notebookEl.innerHTML = `<div class="cell markdown"><em style="color:#ff6b6b;">${err.message}</em></div>`;
    updateDownloadButton(null);
  }finally{showSpinner(false)}
}

function renderNotebook(nb, meta){
  nbTitle.innerText = meta.title;
  nbMeta.innerText = meta.description;
  const cells = nb.cells || [];
  cells.forEach((c, idx)=>{
    const el = document.createElement('article');
    el.className = 'cell ' + (c.cell_type === 'markdown' ? 'markdown' : c.cell_type === 'code' ? 'code' : 'raw');
    // markdown
    if(c.cell_type === 'markdown'){
      const md = c.source.join('');
      const html = marked.parse(md);
      el.innerHTML = html;
      el.querySelectorAll('pre code').forEach(block=>hljs.highlightBlock(block));
    }
    // code
    else if(c.cell_type === 'code'){
      const codeWrapper = document.createElement('div');
      codeWrapper.className = 'code-block';
      const pre = document.createElement('pre');
      const code = document.createElement('code');
      code.className = 'language-python';
      code.textContent = c.source.join('');
      pre.appendChild(code);
      codeWrapper.appendChild(pre);
      el.appendChild(codeWrapper);

      const copyBtn = document.createElement('button');
      copyBtn.className='copy-btn';
      copyBtn.innerText='Copy';
      copyBtn.addEventListener('click', async ()=>{
        try{
          await navigator.clipboard.writeText(c.source.join(''));
          copyBtn.innerText='Copied!';
          setTimeout(()=>copyBtn.innerText='Copy',1200);
        }catch(e){copyBtn.innerText='Err';setTimeout(()=>copyBtn.innerText='Copy',1200)}
      });
      el.appendChild(copyBtn);
      hljs.highlightElement(code);

      // outputs
      if(c.outputs && c.outputs.length){
        c.outputs.forEach(o=>{
          const outEl = document.createElement('div');
          outEl.className='output';
          // stream
          if(o.output_type === 'stream'){
            const preo = document.createElement('pre');
            preo.textContent = o.text.join ? o.text.join('') : (o.text||'');
            outEl.appendChild(preo);
          }
          // display_data or execute_result
          else if(o.data){
            if(o.data['text/html']){
              outEl.innerHTML = o.data['text/html'].join ? o.data['text/html'].join('') : o.data['text/html'];
            }else if(o.data['image/png']){
              const img = document.createElement('img');
              img.src = 'data:image/png;base64,' + (o.data['image/png'].join ? o.data['image/png'].join('') : o.data['image/png']);
              img.style.maxWidth='100%';
              outEl.appendChild(img);
            }else if(o.data['text/plain']){
              const preo = document.createElement('pre');
              preo.textContent = o.data['text/plain'].join ? o.data['text/plain'].join('') : o.data['text/plain'];
              outEl.appendChild(preo);
            }
          }
          el.appendChild(outEl);
        })
      }
    }
    // raw
    else{
      el.textContent = c.source.join('');
    }

    notebookEl.appendChild(el);
  });
}

// search/filter tabs
search.addEventListener('input', ()=>{
  const q = search.value.trim().toLowerCase();
  document.querySelectorAll('.tab').forEach((t, idx)=>{
    const nb = notebooklist[idx];
    const searchStr = `${nb.title} ${nb.description}`.toLowerCase();
    t.style.display = searchStr.includes(q) ? '' : 'none';
  });
});

// theme toggle with persistence
function initTheme(){
  const saved = localStorage.getItem('theme');
  const prefer = window.matchMedia('(prefers-color-scheme: light)').matches;
  const shouldLight = saved ? (saved === 'light') : prefer;
  
  if(shouldLight){
    document.body.classList.add('light');
    themeToggle.innerText = 'Light';
  }else{
    document.body.classList.remove('light');
    themeToggle.innerText = 'Dark';
  }
}

themeToggle.addEventListener('click', ()=>{
  const isLight = document.body.classList.toggle('light');
  themeToggle.innerText = isLight ? 'Light' : 'Dark';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// initial
initTheme();
makeTabs();
// load first notebook by default if available
document.querySelector('.tab')?.click();
