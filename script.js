const lessons=[
{id:'ligacoes',icon:'☎',title:'Ligar e atender chamadas',desc:'Faça e receba ligações sem se perder entre os botões.',
intro:'Em uma ligação, o caminho costuma ser simples: abrir o telefone, escolher o contato e tocar no botão de chamada.',
tip:'Se a tela escurecer durante a ligação, isso normalmente acontece porque o sensor de proximidade está ativo.',
exampleTitle:'Tela de chamada',exampleDesc:'Os principais controles aparecem durante uma ligação.',
exampleNote:'Os nomes e posições podem variar um pouco de acordo com a marca do celular.',
example:`<div class="example-header"><span class="example-dot"></span> Ligação</div><div class="example-body"><div class="fake-row"><span>Maria</span><span class="fake-green">00:42</span></div><div class="fake-row"><span class="fake-muted">Microfone</span><button class="fake-button">Encerrar</button></div></div>`,
steps:[
['Abra o aplicativo Telefone','Procure o ícone de telefone na tela inicial ou na lista de aplicativos.'],
['Escolha um contato ou digite um número','Você pode tocar em um contato salvo ou usar o teclado numérico.'],
['Toque no botão de chamada','O botão costuma ser verde e aparece na parte inferior da tela.'],
['Para atender','Quando o telefone tocar, toque ou deslize o botão de atendimento.'],
['Para encerrar','Durante a ligação, toque no botão de encerrar chamada.']
]},
{id:'whatsapp',icon:'◌',title:'Enviar mensagem no WhatsApp',desc:'Envie textos, fotos e respostas para seus contatos.',
intro:'O WhatsApp permite conversar com pessoas conhecidas. O mais importante é encontrar a conversa e tocar na caixa de mensagem.',
tip:'Para corrigir uma letra, use a tecla de apagar do teclado. Não é preciso apagar a conversa inteira.',
exampleTitle:'Tela de conversa',exampleDesc:'A caixa inferior é onde você escreve a mensagem.',
exampleNote:'A aparência pode mudar conforme a versão do aplicativo.',
example:`<div class="example-header"><span class="example-dot"></span> Conversa</div><div class="example-body"><div class="fake-row"><span class="fake-muted">Olá! Tudo bem?</span></div><div class="fake-row"><span>Digite sua mensagem...</span><button class="fake-button">Enviar</button></div></div>`,
steps:[
['Abra o WhatsApp','Procure o aplicativo verde de mensagens.'],
['Abra a conversa','Toque no nome da pessoa. Para começar uma nova conversa, use a opção de nova conversa.'],
['Toque na caixa de mensagem','Ela fica na parte inferior da conversa.'],
['Digite devagar','Toque nas letras do teclado e revise antes de enviar.'],
['Envie','Toque no botão de envio ao lado da caixa de texto.']
]},
{id:'camera',icon:'▣',title:'Tirar fotos com a câmera',desc:'Registre momentos importantes e encontre a foto depois.',
intro:'Para fotografar, abra a câmera, enquadre o que deseja registrar e toque no botão de captura.',
tip:'Segurar o aparelho com as duas mãos ajuda a evitar fotos tremidas.',
exampleTitle:'Tela da câmera',exampleDesc:'O botão de captura fica destacado na parte inferior.',
exampleNote:'Alguns aparelhos oferecem botões extras, como zoom e flash.',
example:`<div class="example-header"><span class="example-dot"></span> Câmera</div><div class="example-body"><div style="height:115px;background:#DDE7EA;border-radius:8px;display:grid;place-items:center;color:#5C737D;font-size:12px">Área da câmera</div><div style="display:flex;justify-content:center;margin-top:10px"><span style="width:42px;height:42px;border:4px solid #315C72;border-radius:50%;display:block"></span></div></div>`,
steps:[
['Abra a Câmera','Procure o aplicativo de câmera na tela inicial ou entre os aplicativos.'],
['Enquadre o que deseja fotografar','Tudo o que estiver na área da tela fará parte da foto.'],
['Toque no botão de captura','É o círculo que normalmente aparece na parte inferior.'],
['Veja a foto','Toque na miniatura para conferir o resultado.'],
['Volte para a câmera','Use o botão de voltar do aparelho para retornar.']
]},
{id:'wifi',icon:'⌁',title:'Conectar ao Wi-Fi',desc:'Conecte o celular à internet da sua casa ou trabalho.',
intro:'Uma rede Wi-Fi permite navegar sem usar os dados móveis do plano. Você precisa saber o nome da rede e, quando solicitado, a senha.',
tip:'A senha do Wi-Fi diferencia letras maiúsculas e minúsculas. Digite exatamente como foi informada.',
exampleTitle:'Lista de redes',exampleDesc:'Toque no nome da rede que você deseja usar.',
exampleNote:'A rede pode aparecer com um cadeado quando exige senha.',
example:`<div class="example-header"><span class="example-dot"></span> Wi-Fi</div><div class="example-body"><div class="fake-row"><span>Minha Casa</span><span class="fake-green">Conectado</span></div><div class="fake-row"><span>Casa da Família</span><span>🔒</span></div><div class="fake-row"><span>Rede Pública</span><span>🔒</span></div></div>`,
steps:[
['Abra Configurações','Procure o aplicativo com o símbolo de engrenagem.'],
['Toque em Wi-Fi','O nome pode aparecer entre os primeiros itens da lista.'],
['Ative o Wi-Fi','Se estiver desligado, toque no interruptor para ligá-lo.'],
['Escolha a rede','Toque no nome da rede que você deseja usar.'],
['Digite a senha e conecte','Toque em Conectar ou botão equivalente.']
]},
{id:'ajustes',icon:'☼',title:'Ajustar volume e brilho',desc:'Deixe o som e a tela mais confortáveis para você.',
intro:'O volume e o brilho podem ser ajustados para deixar o celular mais confortável em ambientes claros, escuros ou barulhentos.',
tip:'Se o brilho variar sozinho, procure nas configurações a opção de brilho automático.',
exampleTitle:'Controles rápidos',exampleDesc:'Os ajustes mais usados podem aparecer em um painel de acesso rápido.',
exampleNote:'O modo de abrir esse painel muda entre Android e iPhone.',
example:`<div class="example-header"><span class="example-dot"></span> Controles rápidos</div><div class="example-body"><div class="fake-row"><span>🔊 Volume</span><span>━━━━━━</span></div><div class="fake-row"><span>☼ Brilho</span><span>━━━━━━</span></div></div>`,
steps:[
['Use os botões laterais para o volume','O botão superior aumenta e o inferior reduz, na maioria dos aparelhos.'],
['Abra os controles rápidos','Deslize de cima para baixo na tela para encontrar os ajustes rápidos.'],
['Localize o controle de brilho','Ele costuma aparecer como uma barra com símbolo de sol.'],
['Arraste a barra','Mova até encontrar um nível confortável.']
]},
{id:'apps',icon:'↓',title:'Baixar e abrir aplicativos',desc:'Instale aplicativos pela loja oficial do aparelho.',
intro:'Para instalar um aplicativo com mais segurança, use a loja oficial do sistema: Play Store no Android ou App Store no iPhone.',
tip:'Evite instalar aplicativos enviados por links desconhecidos. Prefira sempre a loja oficial do aparelho.',
exampleTitle:'Página de aplicativo',exampleDesc:'Confira o nome antes de tocar em instalar.',
exampleNote:'No iPhone, o botão costuma indicar “Obter”; no Android, “Instalar”.',
example:`<div class="example-header"><span class="example-dot"></span> Loja de aplicativos</div><div class="example-body"><div class="fake-row"><span>Aplicativo escolhido</span><button class="fake-button">Instalar</button></div><div class="fake-row"><span class="fake-muted">Desenvolvedor</span><span>Informações</span></div></div>`,
steps:[
['Abra a loja de aplicativos','No Android, procure a Play Store. No iPhone, procure a App Store.'],
['Pesquise o aplicativo','Toque na busca e digite o nome do aplicativo desejado.'],
['Confira o aplicativo','Observe o nome e o desenvolvedor para evitar aplicativos falsos.'],
['Toque em Instalar ou Obter','Aguarde o download terminar.'],
['Abra o aplicativo','Toque em Abrir ou procure o ícone na tela inicial.']
]},
{id:'seguranca',icon:'✓',title:'Cuidado com golpes',desc:'Reconheça sinais de mensagens e ligações suspeitas.',
intro:'Golpes digitais costumam tentar criar pressa, medo ou confusão. Antes de clicar, pare e confira quem está falando com você.',
tip:'Nunca compartilhe senhas, códigos de confirmação ou dados do cartão apenas porque alguém pediu por mensagem ou ligação.',
exampleTitle:'Mensagem suspeita',exampleDesc:'Quando algo parece urgente demais, pare antes de agir.',
exampleNote:'Na dúvida, procure o canal oficial da empresa ou serviço citado na mensagem.',
example:`<div class="example-header"><span class="example-dot"></span> Aviso</div><div class="example-body"><div class="fake-row fake-warning"><span>“Sua conta será bloqueada hoje. Clique aqui.”</span></div><div class="fake-row"><span class="fake-muted">Não reconhece a mensagem?</span><span>Não clique</span></div></div>`,
steps:[
['Desconfie de urgência exagerada','Mensagens que dizem que algo será bloqueado imediatamente merecem atenção.'],
['Não compartilhe códigos','Códigos recebidos por SMS ou aplicativo são informações de segurança.'],
['Evite links inesperados','Mesmo quando a mensagem parece vir de alguém conhecido, confirme antes.'],
['Procure a fonte oficial','Abra o aplicativo oficial ou use um contato que você já conhece.'],
['Peça ajuda quando estiver em dúvida','É melhor parar por alguns minutos do que agir com pressa.']
]},
{id:'duvidas',icon:'?',title:'Perguntas frequentes',desc:'Respostas rápidas para situações comuns no dia a dia.',type:'faq',
intro:'Aqui estão algumas dúvidas frequentes que podem ajudar quando algo inesperado acontece.',
tip:'Se uma situação não estiver nesta lista, procure ajuda antes de fazer algo que possa apagar informações importantes.',
exampleTitle:'Dúvidas rápidas',exampleDesc:'Abra uma pergunta para ver a resposta.',
exampleNote:'As respostas são orientações gerais e podem variar conforme o aparelho ou aplicativo.',
faq:[
['Apaguei uma mensagem sem querer. O que faço?','Em muitos aplicativos, uma mensagem apagada não pode ser recuperada diretamente. Quando possível, peça para a outra pessoa reenviar.'],
['Meu celular está travando. O que posso fazer?','Feche aplicativos que não estiver usando e, se necessário, reinicie o aparelho. Se o problema continuar, procure suporte.'],
['Como sei se estou com internet?','Observe o topo da tela: o Wi-Fi ou os dados móveis costumam aparecer ali quando estão ativos.'],
['Posso usar o celular molhado?','É mais seguro secar o aparelho antes de manuseá-lo e nunca conectar o carregador enquanto houver umidade.'],
['Como aumentar a letra?','Procure por Tela ou Acessibilidade nas configurações e localize o tamanho da fonte ou do texto.']
]}
];

let current=0;
let completed=JSON.parse(localStorage.getItem('celular-completed')||'{}');
let fontSize=Number(localStorage.getItem('celular-font')||'16');

document.body.style.fontSize=fontSize+'px';

function renderCards(){
  const cards=document.getElementById('cards');
  cards.innerHTML=lessons.map((l,i)=>`
    <button class="topic ${completed[l.id]?'done':''}" onclick="openLesson('${l.id}')">
      <span class="topic-icon">${l.icon}</span>
      <h3>${l.title}</h3>
      <p>${l.desc}</p>
      <span class="topic-bottom">${completed[l.id]?'Concluído':'Abrir conteúdo'} <span>→</span></span>
    </button>`).join('');
  updateProgress();
}
function updateProgress(){
  const done=lessons.filter(l=>completed[l.id]).length;
  document.getElementById('progress').style.width=(done/lessons.length*100)+'%';
  document.getElementById('progress-text').textContent=`${done} de ${lessons.length} concluídos`;
  document.getElementById('done-stat').textContent=done;
  document.getElementById('total-stat').textContent=lessons.length;
}
function openLesson(id){
  const index=lessons.findIndex(l=>l.id===id);
  if(index<0)return;
  current=index;
  const l=lessons[index];
  document.getElementById('home').classList.add('hidden');
  document.getElementById('lesson').classList.add('active');
  document.getElementById('lesson-count').textContent=`${index+1} de ${lessons.length}`;
  document.getElementById('lesson-icon').textContent=l.icon;
  document.getElementById('lesson-title').textContent=l.title;
  document.getElementById('lesson-subtitle').textContent=l.desc;
  document.getElementById('lesson-intro').textContent=l.intro;
  document.getElementById('tip').innerHTML=`<strong>Dica:</strong> ${l.tip}`;
  document.getElementById('example-title').textContent=l.exampleTitle;
  document.getElementById('example-desc').textContent=l.exampleDesc;
  document.getElementById('example-note').textContent=l.exampleNote;
  document.getElementById('example-box').innerHTML=l.example||'';

  const steps=document.getElementById('steps');
  const faq=document.getElementById('faq-list');
  if(l.type==='faq'){
    steps.innerHTML='';
    faq.innerHTML=l.faq.map((x,i)=>`
      <div class="faq">
        <button onclick="this.parentElement.classList.toggle('open')">
          <span>${x[0]}</span><span>+</span>
        </button>
        <div class="faq-answer">${x[1]}</div>
      </div>`).join('');
  }else{
    faq.innerHTML='';
    steps.innerHTML=l.steps.map((x,i)=>`
      <div class="step"><span class="step-number">${i+1}</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></div>`).join('');
  }
  updateComplete();
  window.scrollTo({top:0,behavior:'instant'});
}
function goHome(){
  document.getElementById('lesson').classList.remove('active');
  document.getElementById('home').classList.remove('hidden');
  renderCards();
  window.scrollTo({top:0,behavior:'instant'});
}
function toggleComplete(){
  const id=lessons[current].id;
  completed[id]=!completed[id];
  localStorage.setItem('celular-completed',JSON.stringify(completed));
  updateComplete();renderCards();
}
function updateComplete(){
  const done=!!completed[lessons[current].id];
  const btn=document.getElementById('complete-btn');
  btn.textContent=done?'Concluída ✓':'Marcar como concluída';
  btn.classList.toggle('done',done);
  document.getElementById('complete-status').textContent=done?'Você já concluiu esta aula.':'Aula ainda não concluída.';
}
function previousLesson(){openLesson(lessons[(current-1+lessons.length)%lessons.length].id)}
function nextLesson(){openLesson(lessons[(current+1)%lessons.length].id)}
function changeFont(dir){
  fontSize=Math.max(14,Math.min(21,fontSize+dir));
  document.body.style.fontSize=fontSize+'px';
  localStorage.setItem('celular-font',fontSize);
}
renderCards();
