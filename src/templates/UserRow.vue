<template>
  <div><small>{{user.id}}</small> <strong>{{user.name}}</strong> (<i>{{user.email}}</i>)</div>
</template>

<script>
    module.exports = {
        props: {
          user : {}
        },

        ready: function () {

        },

        computed: {

        }
    }
</script>
