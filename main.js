const app = Vue.createApp({
    data: function(){
        return {
            product: 'Socks',
            description: 'This is the description for Socks product.'
        }
    }
});

const mountedApp = app.mount('#app');
