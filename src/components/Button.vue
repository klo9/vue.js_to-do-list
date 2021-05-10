<template>
    <button @click="onClick()" :style="{background: color}" class="btn">{{text}}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        color: String,
    },
    methods: {
        onClick() {
            console.log('click')
        },
    }
}
</script>

<style>
    .btn {
        background-color: black;
        color: white;
        border: none;
        padding: 1rem;
        margin: 1rem;
        border-radius: 5px;
    }

</style>