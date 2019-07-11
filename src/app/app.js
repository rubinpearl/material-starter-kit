
//import {MDCTopAppBar} from '@material/top-app-bar';
//import {MDCDrawer} from "@material/drawer";
//import {MDCTextField} from '@material/textfield';
//import {MDCChipSet} from '@material/chips';
import {MDCRipple} from '@material/ripple';
//import {MDCTextFieldIcon} from '@material/textfield/icon';
//import  * as Parallax from './../../node_modules/scroll-parallax/dist/Parallax.js';
import simpleParallax from './../../node_modules/simple-parallax-js'
//const ripple = new MDCRipple(document.querySelector('.foo-button'));



//Instantiation




//const drawerEl = document.querySelector('.mdc-drawer');
//if (!drawerEl) {
//	const drawer = MDCDrawer.attachTo(drawerEl);
//}


const topAppBarEl = document.getElementById('tm-app-bar');

console.log(topAppBarEl);
if (topAppBarEl !== null) {
	const topAppBar = MDCTopAppBar.attachTo(topAppBarEl);
	topAppBar.listen('MDCTopAppBar:nav', () => {
		drawer.open = !drawer.open;
	});
	
	const mainContentEl = document.getElementById('tm-main-content');
	if (mainContentEl !== null) {
		topAppBar.setScrollTarget(document.getElementById(mainContentEl));
	}
}




const textFiledEl = document.querySelectorAll('.mdc-text-field');
if (textFiledEl !== null) {
	for (const textFiled of textFiledEl) {
		MDCTextField.attachTo(textFiled);
	}
}



const selector = '.mdc-button, .mdc-card__primary-action';
const rippleEl = document.querySelectorAll(selector);
if (rippleEl !== null){
	const ripples = [].map.call(rippleEl, function(el) {
		  return new MDCRipple(el);
	});
}






// .mdc-chip, .tm-surface



//const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
//iconButtonRipple.unbounded = true;


const chipSetEl = document.querySelector('.mdc-chip-set');
if (chipSetEl!== null){
	const chipSet = new MDCChipSet(chipSetEl);
}


const fabRippleEl = document.querySelector('.mdc-fab');
if (fabRippleEl !== null) {
	const fabRipple = new MDCRipple(fabRippleEl);
}




//const icon = new MDCTextFieldIcon(document.querySelector('.mdc-text-field-icon'));


const iconeEl = document.querySelector('.mdc-text-field__icon');
if (iconeEl !== null) {
	const fabRipple = new MDCTextFieldIcon(iconeEl);
}




//if (!document.querySelector('.tm-parallax')){
//	console.log('init entry');
//	var p = new Parallax('.tm-parallax', {
//		offsetYBounds: 90,
//		intensity: 10,
//		center: 0.5,
//		safeHeight: 0.5
//	}).init();
//	console.log('init');
//}

//var scene = document.getElementById('tm-parallax');
//var parallaxInstance = new Parallax(scene, {
 // relativeInput: true
//});
//parallaxInstance.friction(0.2, 0.2);


var image = document.getElementsByClassName('tm-parallax');
new simpleParallax(image);