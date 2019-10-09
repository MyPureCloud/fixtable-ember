import Component from '@ember/component';
import layout from '../templates/components/fixtable-row';

export default Component.extend({
  layout,
  tagName: 'tr',
  classNames: ['fixtable-row'],
  classNameBindings: ['active', 'expanded', 'hover', 'primary:fixtable-row-primary:fixtable-row-secondary'],
  click() {
    this.get('onClick')();
  },
  mouseEnter() {
    this.set('hover', true);
  },
  mouseLeave() {
    this.set('hover', false);
  }
});
