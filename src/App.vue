<template>

  <div class="container">

    <Header 
    @show-add-task="showForm"
    :showAddTask ="showAddTask" />

    <div v-if="showAddTask">

      <AddTask 
      @add-task="addTask"/>

    </div>
    

    <Tasks 
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask" 
    :tasks="tasks" />

  </div>

</template>

<script>

  import Header from './components/Header'
  import Tasks from './components/Tasks'
  import AddTask from './components/AddTask'

  export default {
    name: 'App',
    components: {
      Header,
      Tasks,
      AddTask
    },
    data() {
      return {
        task: '',
        tasks: [],
        showAddTask: false
      }
    },
    methods: {
      addTask(task) {
        this.tasks = [...this.tasks, task]
      },
      deleteTask(id) {
        if (confirm('Are you sure?')){
          this.tasks = this.tasks.filter((task) => task.id !== id)   // return everything that isn't the id passed
        }
      },
      toggleReminder(id) {
        this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
      },
      showForm(){
        this.showAddTask = !this.showAddTask
      }
    },
    created() {
      this.tasks = [
        {
          id: 1,
          text: 'Learn Vue',
          date: 'May 9, 2021',
          reminder: true
        },
        {
          id: 2,
          text: 'Cry',
          date: 'May 9, 2021',
          reminder: true
        },
        {
          id: 3,
          text: 'Git gud',
          date: 'May 9, 2021',
          reminder: false
        }
      ]
    }
  }
</script>

<style>

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .container {
    margin: 0 auto;
    width: 70%;
    border: 1px solid gray;
  }

</style>
