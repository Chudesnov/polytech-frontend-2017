new Vue({
el: '#vue-app',
data: {
name: 'Ivan',
surname:'Ivanov'
},

methods: {
logName:function(){
console.log('name');
},
logSurname: function(){
console.log('surname');
}
},

computed:{	
fullname: function(){
return this.name + ' ' + this.surname;
}	
}

});





