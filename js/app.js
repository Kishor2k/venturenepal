
window.onscroll = () => {
  const header = document.querySelector('header');
  if(this.scrollY <= 10)
   	header.className = '';
   else
   	header.className = 'sticky';
};