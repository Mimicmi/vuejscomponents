const RootComponent = {
    data() {
        return {
            title: "Hello my Vue v3"
        }
    },
    methods: {

    }
};
const app = Vue.createApp(RootComponent);
const vm = app.mount("#app");