<template>

    <div @dblclick="$emit('toggle-reminder', task.id)" 
    :class="[task.reminder ? 'reminder' : '', 'task']">
        <h3>
            {{task.text}}
            <Button @btn-click="$emit('delete-task', task.id)" 
            text="Delete" 
            color="red"/>
        </h3>
        <p>{{task.date}}</p>
    </div>
    
</template>

<script>
import Button from './Button'

export default {
    name: 'Task',
    props: {
        task: Object
    },
    components: {
        Button
    },
}
</script>

<style scoped>
    .task {
        background-color: lightgray;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        padding: 0 2rem;
        margin: 1rem;
    }
    .reminder {
        border-left: 5px solid green;
    }
</style>