import { component } from "vue";

export default component("vue-input", {
    data: () => ({ value: "ok" }),
    template: "<input type='text' v-model='value' />",
});
