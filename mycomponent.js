/* attention le nom du composant est TRES important, il va être utilisé
* sous forme de balise (comme React)*/
app.component("mycomponent", {
    template:'<button @click="addCount()">CLICK ME PLEASE {{ count }}</button>',
    data(){
        return {
            count: 0,
        }
    },
    methods: {
        addCount() {
            this.count++;
        }

    },
    computed: {

    }
});
