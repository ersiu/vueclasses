<template>
    <div>
        <h3>New Quote</h3>
        <button @click="counter++">Increase!</button>
        <p>{{ counter }}</p>
    </div>    
</template>

<script>
    export default { 
        data: function() {
            return {
                counter: 0
            };
        },
        destroyed() {
            console.log('appNew - destroyed!!');
        },
        deactivated() {
            console.log('appNew - deactivated!!');
        },
        activated() {
            console.log('appNew - activated!!');
        }
    }
</script>

<style>
</style>