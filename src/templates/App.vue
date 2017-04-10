<template>
  <div id="app">
    <div v-if="showingMessage">{{ message }}</div>
    <button v-on:click="toggleMessage('random message')">{{toggleMessageText}}</button>
    <div v-bind:title="messageTitle">
       Hover your mouse over me for a few seconds
       to see my dynamically bound title!
     </div>
     <hr />
     <div v-for="user in users" v-bind:class="messageClass(user)">
         <user-row v-bind:user="user"></user-row>
       </div>
     </ul>

     <div v-bind:class="formClass">
      <input placeholder="Name" type="text" v-model="newUser.name" />
      <input placeholder="Email" type="text" v-model="newUser.email" />
      <button v-on:click="addUser()">Submit</button>
      <div v-if="newUser.error" class="error-message">Please correct the errors on the form and try again</div>
     </div>
   </div>
</template>

<script>
  export default {
    data(){
      return {
        message: 'Hello Vue!',
        showingMessage : false,
        messageTitle : 'You loaded this page on ' + new Date(),
        users : [
          {id:1,name:'Lance', email:'fallon.lance@gmail.com'},
          {id:2,name:'Bill', email:'bill@gmail.com'},
          {id:3,name:'Mary', email:'mary@gmail.com'}
        ],
        newUser : {
          name : '',
          email : '',
          error : false
        }
      }
    },

    computed: {
      toggleMessageText : function(){
        return this.showingMessage ? 'Hide Message' : 'Show Message';
      },
      formClass : function(){
        return this.newUser.error ? 'form-error' : '';
      }
    },

    methods: {
      toggleMessage: function(msg){
          debugger
          console.log(msg);
          this.showingMessage = !this.showingMessage;
        },
        messageClass: function(user){
          return user.id % 2 === 0 ? 'default-text' : 'bold-text';
        },
        hasErrors: function(){
          this.newUser.error = !this.newUser.email || !this.newUser.email;
          return this.newUser.error;
        },
        addUser: function(){
          if(!this.hasErrors()){
            var nextId = this.users.sort(function(a,b){return a.id < b.id ? 1 : a.id > b.id ? -1 : 0})[0].id + 1
            this.users.push({
              id : nextId,
              name : this.newUser.name,
              email : this.newUser.email
            });
            this.newUser = { name : '', email : '', error : false }
          }
        }
      },

  }
</script>

<style>
  body{
    background: black;
    color: white;
  }
</style>
