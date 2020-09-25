var vm = new Vue({
    el: '#app',
    data: {
        message: '页面加载于 ' + new Date().toLocaleString(),
        arr:[1,2,3,4,5]
    },
    methods: {
        conso() {
            console.log(this.message)
        }
    },
    created() {
        console.log(this)
    },
});