$(function(){
	// Smooth Scroll
	$('.page-scroll').on('click', function(e) {
		// ambil isi href
		var tujuan = $(this).attr('href');
		//tangkap elemen
		var elemenTujuan = $(tujuan);		
		$('html , body').animate({
  			scrollTop: elemenTujuan.offset().top - 83
 		}, 900, 'easeInOutQuart');
	 	e.preventDefault();
	});
	$('.page-about').on('click', function(e) {		
		// ambil isi href
		var about = $(this).attr('href');
		//tangkap elemen
		var about = $('.about');		
		$('html , body').animate({
  			scrollTop: about.offset().top - 300
 		}, 900, 'easeInOutQuart')
	 	e.preventDefault();
	});
	$('.page-contact').on('click', function(e) {		
		// ambil isi href
		var contact = $(this).attr('href');
		//tangkap elemen
		var contact = $('.contact');		
		$('html , body').animate({
  			scrollTop: contact.offset().top - 195
 		}, 900, 'easeInOutQuart');
	 	e.preventDefault();
	});
});

// Transparent Navbar
var navbar = document.querySelector("nav");
window.addEventListener("scroll",function(){
  if (window.pageYOffset > 40){
	navbar.classList.add('bg-primary', 'shadow-sm');                    
  }else{
	navbar.classList.remove('bg-primary', 'shadow-sm');
  };
});

// GSAP Animation
gsap.registerPlugin(TextPlugin);
gsap.to('.display-3', {duration:1.5, delay: 1, text: 'Gede Jovan Tiyo Aditya', ease: 'none'});
gsap.to('.lead', {duration:3, delay: 3, text: 'Student | Web Developer | Designer', ease: 'none'});
gsap.from('.jumbotron img', {duration: 1, opacity: 0});
gsap.from('.navbar', {duration: 1, y: '-100%', opacity: 0});

// Contact Form
const scriptURL = "https://script.google.com/macros/s/AKfycbw-mjTEoBvSON-av80gkOf9Bn4THbWHDt_QZ3mC9jhuBx2FlSoOoDbujRY3uWNCNfGd/exec";
const form = document.forms["contact-form"];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // ketika tombol submit diklik
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
	.then((response) => {
	  // tampilkan tombol kirim, hilangkan tombol loading
	  btnLoading.classList.toggle('d-none');
	  btnKirim.classList.toggle('d-none');
	  // tampilkan alert
	  myAlert.classList.toggle('d-none');
	  // reset formnya
	  form.reset();
	  console.log('Success!', response);
	})
	.catch((error) => console.error('Error!', error.message));
});

// AOS Animation
AOS.init({
	once: true,
	duration: 1000,
  });