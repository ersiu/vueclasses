<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vue Http</h1>
                <div class="form-group">
                    <label for="user">User</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label for="email">email</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users">{{ u.username }} - {{ u.email }}</li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: [],
                resource: {}
            }
        },
        methods: {
            submit() {
                // this.$http.post('data.json', this.user)
                //     .then(response => {
                //         console.log(response)
                //     }, error => {
                //         console.log(error);
                //     });
                // console.log(this.user);

                this.resource.save({}, this.user);
            },
            fetchData() {
                console.log('fetchData here');
                this.$http.get('data.json')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log(data)
                        const resultArray = [];
                        for (let key in data) {
                            resultArray.push(data[key]);
                        }  
                        this.users = resultArray;
                    });
            },
            created() {
                this.resource = this.$resource('data.json');
            }
        }
    }
</script>

<style>

</style>
