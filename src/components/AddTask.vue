<template>

    <form @submit="onSubmit" class="add-form">

        <div class="form-control">
            <label>Tasks</label>
            <input type="text" v-model="text" name="text" placeholder="Add Task ">
        </div>

        <div class="form-control">
            <label>Day & Time</label>
            <input type="text" v-model="day" name="day" placeholder="Add Day & Time">
        </div>

        <div class="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" v-model="reminder" name="reminder">
        </div>

        <input type="submit" value="Save Task" class="btn">

    </form>

</template>

<script>
export default {
    name: 'AddTask',
    data() {
        return {
            text: '',
            day: '',
            reminder: false
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
                id: Math.floor(Math.random() * 100000),
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

.form-control {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    width: 90%;
    margin: 0 auto;
}

</style>