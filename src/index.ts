import { Input as InputComponent } from "bx-ui";
import * as Vue from "vue";
import * as dd from "vuex";

const a = new Vue({
    components: { InputComponent },
    el: "#root",
    template: "<div><vue-input /></div>",
});
