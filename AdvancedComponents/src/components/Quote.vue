<template>
    <div>
        <!-- <p>{{ quote }}</p>     -->
        <div class="title">
            <slot name='title'></slot>
            <span style="color: #ccc"><slot name='subtitle'>The Subtitle</slot></span>
        </div>
        <hr>
        <div>
            <slot></slot>
        </div>
        
    </div>    
</template>

<script>
export default {
    // props: ['quote']


}
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 5px gray;
        padding: 20px;
        margin: 50px auto;
        text-align: center;
    }

    h2 {
        color: red;
    }

    .title {
        font-style: italic;
    }
</style>
