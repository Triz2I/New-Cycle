<script>
const btn=document.getElementById('openA11y');
const panel=document.getElementById('a11yPanel');
btn.onclick=()=>panel.style.display=panel.style.display==='block'?'none':'block';

let font=0;
function changeFont(v){
  font+=v;
  document.body.style.fontSize=(16+font)+'px';
}

function toggleContrast(){
 document.body.classList.toggle('high-contrast');
}

function toggleReading(){
 document.body.classList.toggle('reading-mode');
}

function enableKeyboardNav(){
 alert('Use TAB para navegar pelos elementos do site.');
}

// adicionar ALT automaticamente se faltar

document.querySelectorAll('img').forEach(img=>{
 if(!img.alt || img.alt==='') img.alt='imagem de produto cosmético';
});
</script>
