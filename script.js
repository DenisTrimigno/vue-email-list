const {createApp} = Vue;

createApp ({
    data(){
        return{
           arrayEmail:[]
        }
    },
    mounted(){
        for(let i=1; i<=10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) =>
            {
                console.log(response.data.response)
            })
        }
    }
}).mount('#app');


