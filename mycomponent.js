/* attention le nom du composant est TRES important, il va être utilisé
* sous forme de balise (comme React)*/
app.component("mycomponent", {
    template:`<p><button @click="addCount() ; sendToParent()">CLICK ME PLEASE {{ count }}</button></p>
        <h3>{{ myprops }}</h3>`,
    props: {
        myprops: {
            type: String,
            /*les differents types: String, Array, Number,
            * Array et Boolean*/
        }
    },
    data(){
        return {
            count: 0,
        }
    },
    methods: {
        addCount() {
            this.count++;
        },
        sendToParent() {
            this.$emit("hello-parent");
            /*pour pouvoir émettre un événement*/
        }

    },
    computed: {

    }
});
