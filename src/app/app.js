
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCDrawer} from "@material/drawer";
import {MDCTextField} from '@material/textfield';
import {MDCChipSet} from '@material/chips';
import {MDCRipple} from '@material/ripple';
import {MDCTextFieldIcon} from '@material/textfield/icon';
import  * as Parallax from './../../node_modules/scroll-parallax/dist/Parallax.js';

//const ripple = new MDCRipple(document.querySelector('.foo-button'));



//Instantiation

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));



const topAppBar = MDCTopAppBar.attachTo(document.getElementById('tm-app-bar'));
topAppBar.setScrollTarget(document.getElementById('tm-main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});


const textFileds = document.querySelectorAll('.mdc-text-field');
for (const textFiled of textFileds) {
	MDCTextField.attachTo(textFiled);
}


const selector = '.mdc-button, .mdc-card__primary-action, .tm-surface';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});

// .mdc-chip,



//const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
//iconButtonRipple.unbounded = true;


const chipSetEl = document.querySelector('.mdc-chip-set');
const chipSet = new MDCChipSet(chipSetEl);


const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));



//const icon = new MDCTextFieldIcon(document.querySelector('.mdc-text-field-icon'));
const icon = new MDCTextFieldIcon(document.querySelector('.mdc-text-field__icon'));




var p = new Parallax('.tm-parallax', {
	  offsetYBounds: 50,
	  intensity: 30,
	  center: 0.5,
	  safeHeight: 0.15
	}).init()
