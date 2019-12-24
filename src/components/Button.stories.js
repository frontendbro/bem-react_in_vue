import Vue from 'vue';
import MyButton from './Button.vue';

export default { title: 'Button' };

export const Кнопка = () => ({
  components: { MyButton },
  template: '<MyButton msg="кнопка" />'
});

export const Кнопка2 = () => ({
  components: { MyButton },
  template: '<MyButton msg="кнопка2" className="buttonApp" size="xxxl"/>'
});

export const Кнопка3 = () => ({
  components: { MyButton },
  template: '<MyButton msg="кнопка2" className="buttonApp" size="xxxl" icon="777"/>'
});