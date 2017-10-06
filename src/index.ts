import { Input } from "bx-ui";
import * as Vue from "vue";
import * as dd from "vuex";

const a = new Vue({
    components: { Input },
    data: { message: "input.toString()" },
    el: "#root",
    template: "<div><vue-input /></div>",
});
