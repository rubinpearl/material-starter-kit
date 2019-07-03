
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCDrawer} from "@material/drawer";
import {MDCTextField} from '@material/textfield';
import {MDCChipSet} from '@material/chips';
import {MDCRipple} from '@material/ripple';


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


const selector = '.mdc-button, .mdc-card__primary-action, .mdc-chip, .tm-surface';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});

const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;


const chipSetEl = document.querySelector('.mdc-chip-set');
const chipSet = new MDCChipSet(chipSetEl);


const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));