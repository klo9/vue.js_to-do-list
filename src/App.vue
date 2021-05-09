<template>
  <div class="container">
    <Header />
    <Tasks :tasks="tasks" />
    <!-- <h1>To Do List</h1>
    <form>
      <input type="text" v-model="task">
      <input type="submit" value="add" @click="addTask">
    </form> -->

    <!-- <ol>
      <li :key="task.id" v-for="task in tasks">{{task.text}}</li>
    </ol> -->
  </div>
</template>

<script>
import Header from './components/Header'
import Tasks from './components/Tasks'

export default {
  name: 'App',
  components: {
    Header,
    Tasks
  },
  data() {
    return {
      task: '',
      tasks: []
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.task)
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
