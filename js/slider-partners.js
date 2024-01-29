//var screenWidth = window.innerWidth;
//
//if (screenWidth > 1024) {
//	let slideIndex = 0;
//
//	showSlidesAutomatic();
//	showSlides(slideIndex);
//
//	function plusSlides(n) {
//		showSlides(slideIndex += n);
//	}
//
//	function currentSlide(n) {
//		showSlides(slideIndex = n);
//	}
//
//	function showSlidesAutomatic() {
//		let i;
//		let slides = document.getElementsByClassName("slide--desktop");
//
//		for (i = 0; i < slides.length; i++) {
//			slides[i].style.display = "none";  
//		}
//
//		slideIndex++;
//
//		if (slideIndex > slides.length) {
//			slideIndex = 1
//		}    
//
//		slides[slideIndex-1].style.display = "flex";  
//
//		setTimeout(showSlidesAutomatic, 4000);
//	}
//
//	function showSlides(n) {
//		let i;
//		let slides = document.getElementsByClassName("slide--desktop");
//
//		if (n > slides.length) {
//			slideIndex = 1
//		}    
//
//		if (n < 1) {
//			slideIndex = slides.length
//		}
//
//		for (i = 0; i < slides.length; i++) {
//			slides[i].style.display = "none";  
//		}
//
//		slides[slideIndex-1].style.display = "flex";  
//	}
//} else {
//	console.log("Test");
//
//}
//
//window.addEventListener("resize", function() {
//	var newScreenWidth = window.innerWidth;
//	
//	if (newScreenWidth > 1024) {
//		let slideIndex = 0;
//
//		showSlidesAutomatic();
//		showSlides(slideIndex);
//
//		function plusSlides(n) {
//			showSlides(slideIndex += n);
//		}
//
//		function currentSlide(n) {
//			showSlides(slideIndex = n);
//		}
//
//		function showSlidesAutomatic() {
//			let i;
//			let slides = document.getElementsByClassName("slide--desktop");
//
//			for (i = 0; i < slides.length; i++) {
//				slides[i].style.display = "none";  
//			}
//
//			slideIndex++;
//
//			if (slideIndex > slides.length) {
//				slideIndex = 1
//			}    
//
//			slides[slideIndex-1].style.display = "flex";  
//
//			setTimeout(showSlidesAutomatic, 4000);
//		}
//
//		function showSlides(n) {
//			let i;
//			let slides = document.getElementsByClassName("slide--desktop");
//
//			if (n > slides.length) {
//				slideIndex = 1
//			}    
//
//			if (n < 1) {
//				slideIndex = slides.length
//			}
//
//			for (i = 0; i < slides.length; i++) {
//				slides[i].style.display = "none";  
//			}
//
//			slides[slideIndex-1].style.display = "flex";  
//		}
//	} else {
//		console.log("Test");
//
//	}
//});




//function someFunc() {
//  var w = window.innerWidth;
//  if (w > 1024) {
//	    showSlidesDesktop();
//  } else {
//		showSlidesMobile();
//  }
//}
//
//window.addEventListener("resize", function() {
//  someFunc();
//});
//
//
//
//
//function showSlidesDesktop() {
//	let slideIndex = 0;
//
//	showSlidesAutomatic();
//	showSlides(slideIndex);
//
//	function plusSlides(n) {
//		showSlides(slideIndex += n);
//	}
//
//	function currentSlide(n) {
//		showSlides(slideIndex = n);
//	}
//
//	function showSlidesAutomatic() {
//		let i;
//		let slides = document.getElementsByClassName("slide--desktop");
//
//		for (i = 0; i < slides.length; i++) {
//			slides[i].style.display = "none";  
//		}
//
//		slideIndex++;
//
//		if (slideIndex > slides.length) {
//			slideIndex = 1
//		}    
//
//		slides[slideIndex-1].style.display = "flex";  
//
//		setTimeout(showSlidesAutomatic, 4000);
//	}
//
//	function showSlides(n) {
//		let i;
//		let slides = document.getElementsByClassName("slide--desktop");
//
//		if (n > slides.length) {
//			slideIndex = 1
//		}    
//
//		if (n < 1) {
//			slideIndex = slides.length
//		}
//
//		for (i = 0; i < slides.length; i++) {
//			slides[i].style.display = "none";  
//		}
//
//		slides[slideIndex-1].style.display = "flex";  
//	}
//}



/* --- DESKTOP --- */

let slideIndex = 0;

showSlidesAutomatic();
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlidesAutomatic() {
	let i;
	let slides = document.getElementsByClassName("slide--desktop");

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}

	slideIndex++;

	if (slideIndex > slides.length) {
		slideIndex = 1
	}    

	slides[slideIndex-1].style.display = "flex";  

	setTimeout(showSlidesAutomatic, 4000);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("slide--desktop");

	if (n > slides.length) {
		slideIndex = 1
	}    

	if (n < 1) {
		slideIndex = slides.length
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}

	slides[slideIndex-1].style.display = "flex";  
}



/* --- MOBILE --- */

let slideIndexMobile = 0;

showSlidesAutomaticMobile();
showSlidesMobile(slideIndexMobile);

function plusSlidesMobile(n) {
	showSlidesMobile(slideIndexMobile += n);
}

function currentSlide(n) {
	showSlidesMobile(slideIndexMobile = n);
}

function showSlidesAutomaticMobile() {
	let i;
	let slides = document.getElementsByClassName("slide--mobile");

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}

	slideIndexMobile++;

	if (slideIndexMobile > slides.length) {
		slideIndexMobile = 1
	}    

	slides[slideIndexMobile-1].style.display = "flex";  

	setTimeout(showSlidesAutomaticMobile, 4000);
}

function showSlidesMobile(n) {
	let i;
	let slides = document.getElementsByClassName("slide--mobile");

	if (n > slides.length) {
		slideIndexMobile = 1
	}    

	if (n < 1) {
		slideIndexMobile = slides.length
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}

	slides[slideIndexMobile-1].style.display = "flex";  
}