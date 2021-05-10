<template>

    <div @dblclick="$emit('toggle-reminder', task.id)" 
    :class="[task.reminder ? 'reminder' : '', 'task']">
        <div class="header">
            <h3>
                {{task.text}}
            </h3>
            <Button @btn-click="$emit('delete-task', task.id)" 
            text="Delete" 
            color="red"/>
        </div>
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

    .header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        text-align: center;
        line-height: 45px;  /* vertically center align items */
    }
</style>