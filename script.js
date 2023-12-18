function changebg(){
	var navbars = document.getElementById('navbar')
	var scrollValue = window.scrollY;
	if (scrollValue < 600) {
		document.getElementById("logo").style.opacity = "0";
		navbars.classList.remove('nav-color');
	}else{
		navbars.classList.add('nav-color')
		document.getElementById("logo").style.opacity = "1";
	}
}

window.addEventListener('scroll', changebg);

const dots = document.querySelector('.dots');
dots.addEventListener('click', e => {
  const target = e.target;
  if (!target.matches('.dot')) {
	  return;
  }
  
  const index = Array.from(dots.children).indexOf(target);
  const selector = `.box:nth-child(${index + 1})`;
  const box = document.querySelector(selector)
  box.scrollIntoView({
  	behavior: 'smooth',
  	block: 'nearest',
    })
})