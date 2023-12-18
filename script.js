function changebg(){
	var navbars = document.getElementById('navbar')
	var scrollValue = window.scrollY;
	if (scrollValue < 600) {
		navbars.style.transform = "translateY(-100px)";
		document.getElementById("logo").style.opacity = "0";
	}else{
		console.log(scrollValue);
		navbars.style.transform = "translateY(0px)";
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

function changeAcco(){
	var scrollValue = window.scrollY;
	var acco = document.getElementById('accomodation-carousel')
	if (scrollValue > 1200){
		acco.style.transform = "scale(1.0)";
	}
}

window.addEventListener('scroll', changeAcco);