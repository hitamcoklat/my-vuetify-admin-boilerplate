<template>
    <p>Ini adalah dashboard</p>
</template>

<script>
export default {
    name: 'Dashboard',
    beforeCreate () {
        console.log(this.$store.getters.isLogged)
        console.log(this.$store.getters.userData)
        if (this.$store.getters.isLogged) {
          this.isLoggedIn = this.$store.getters.isLogged
          this.$router.push('/dashboard')            
        }else {
          this.$router.push('/')            
        }
    }      
}
</script>