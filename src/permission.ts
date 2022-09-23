import { Directive, ObjectDirective } from "vue";

export const Permission: ObjectDirective<Element, string[]> = {
  mounted(el, binding) {
    const { value } = binding;
    console.log(value, typeof value);
  }
}
