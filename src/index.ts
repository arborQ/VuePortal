import * as Vue from "vue";

Vue.component("lol", { template: "<input type='text' />" });

const a = new Vue({
    data: { message: "hallo" },
    el: "#root",
    template: "<div>Hi {{message}}<lol></lol></div>",
});
