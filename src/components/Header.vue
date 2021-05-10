<template>
    <header>
        <h1>To Do List</h1>
        <Button text="Add Task" color="green"/>
    </header>
</template>

<script>
import Button from './Button'
export default {
    name: 'Header',
    components: {
        Button,
    }
}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
    }

    
</style>