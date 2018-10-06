<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }} </p>
        <p>User Age: {{ userAge }} </p>
        <button @click="resetName">Reset name</button>
        <button @click="resetFn()"> Reset name (parent)</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';
    export default{
        props: {
            userName: {
                type: String
            },
            resetFn: Function,
            userAge: Number,
            sampleStringProp: {
                type: String,
                default: 'This is a default string value'
                
            },
            sampleStringProp2: {
                type: Object,
                default: function() {
                    return {
                        name: 'Eric',
                        age: 43
                    }
                }
            }
        },
        methods: {
            switchName() {
                return this.userName.split("").reverse().join("");
            },
            resetName() {
                this.userName = 'Eric';
                this.$emit('nameWasReset', this.myName);
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            });

        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
