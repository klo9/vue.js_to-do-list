<template>

    <form 
    @submit="onSubmit">

        <div class="form-control">
            <label for="text">Tasks</label>
            <input type="text" v-model="text" name="text" placeholder="Add Task" class="form-input-txt">
        </div>

        <div class="form-control">
            <label for="date">Day and Time</label>
            <input type="text" v-model="date" name="date" placeholder="Add Day and Time" class="form-input-txt">
        </div>

        <div class="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" v-model="reminder" name="reminder">
        </div>

        <input type="submit" value="Save Task" class="btn btn-block">

    </form>

</template>

<script>
export default {
    name: 'AddTask',
    data() {
        return {
            text: '',
            date: '',
            reminder: false,
            isHidden: true
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()

            if(!this.text) {
                alert('Please add a task')
                return
            }

            const newTask = {
                id: Math.floor(Math.random() * 100000),     // don't do this in prod
                text: this.text,
                date: this.date,
                reminder: this.reminder
            }

            this.$emit('add-task',newTask)
            this.text = ''
            this.date = ''
            this.reminder= false
        }
    }

}
</script>

<style scoped>

form {
    display: flex;
    flex-direction: column;
    align-content: start;
    width: 90%;
    margin: 0 auto;
}

.form-control {
    display: flex;
    flex-direction: column;
    text-align: initial;
    align-content: flex-start;
    width: 100%;
    padding: 1rem;
}

.form-input-txt {
    border: 1px solid gray;
    padding: 0.5rem;
    width: 90%
}

.form-control.form-control-check {
    flex-direction: row;
}

.btn-block {
    display: inline-block;
    width: 90%;
}

</style>