const RootComponent = {
    data() {
        return {
            title: "Hello my Vue v3",
            property: "Are you OK Annie ?"
        }
    },
    methods: {
        wakeUp() {
            alert("wow");
        }
    },
    created() {
        console.log("CREATED !!!");
    },
    mounted() {
        console.log("MOUNTED .. !");
    }
};

const app = Vue.createApp(RootComponent);
