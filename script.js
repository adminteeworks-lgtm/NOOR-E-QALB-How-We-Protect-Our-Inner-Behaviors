function protectInner(){
  const f=document.getElementById('feeling').value;
  const g=document.getElementById('good').value;
  const m=document.getElementById('msg');
  if(!f){m.style.display='block';m.style.background='#fee2e2';m.style.color='#991b1b';m.innerText='🌸 Please apni feeling likho!';return;}
  m.style.display='block';
  m.style.background='#dcfce7';
  m.style.color='#166534';
  m.innerHTML=`✨ MashaAllah! Dil Mehfooz Ho Gaya!<br><br>🤲 <b>Feeling:</b> ${f}<br>🌟 <b>Achi Baat:</b> ${g || 'Aap qeemti ho'}<br><br>Backend: app.py → Connected ✓`;
}
