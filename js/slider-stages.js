/* --- MOBILE --- */

let stagesSlideIndex = 1;

showStagesSlides(stagesSlideIndex);

function plusSlidesStagesMobile(n) {
	showStagesSlides(stagesSlideIndex += n);
}

function currentSlideStagesMobile(n) {
	showStagesSlides(stagesSlideIndex = n);
}

function showStagesSlides(n) {
	let i;
	
	let slides = document.getElementsByClassName("stage__item-box--mobile");
	let dots = document.getElementsByClassName("dot");
	
	if (n > slides.length) {
		stagesSlideIndex = 1;
	}   
	
	if (n < 1) {
		stagesSlideIndex = slides.length;
	}
	
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	
	slides[stagesSlideIndex-1].style.display = "flex";  
	dots[stagesSlideIndex-1].className += " active";
}