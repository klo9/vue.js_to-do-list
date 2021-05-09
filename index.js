const ToDoList = {
    data() {
        return {
            todoList: [
                { id: 0, text: 'Vegetables' },
                { id: 1, text: 'Cheese' },
                { id: 2, text: 'Butter' }
            ]
        }
    }
}

const app = Vue.createApp(ToDoList)

app.component('todo-item', {
    props: ['todo'],
    template: `<li>{{ todo.text }}</li>`
})

app.mount('#todo-list-app')