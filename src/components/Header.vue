<template>
    <header>
        <h1>To Do List</h1>
    </header>
    <Button text="Add Task" color="green"/>
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
    }

    
</style>