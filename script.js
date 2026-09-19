const btn=document.getElementById('musicBtn');
const audio=document.getElementById('music');
const text=document.getElementById('musicText');
btn.addEventListener('click',async()=>{
  if(audio.paused){
    try{await audio.play();btn.classList.add('playing');btn.setAttribute('aria-pressed','true');text.textContent='Pause the little lullaby';}
    catch(e){text.textContent='Tap again to play the lullaby';}
  }else{
    audio.pause();btn.classList.remove('playing');btn.setAttribute('aria-pressed','false');text.textContent='Play your little lullaby';
  }
});
audio.addEventListener('ended',()=>{btn.classList.remove('playing');text.textContent='Play your little lullaby';});
