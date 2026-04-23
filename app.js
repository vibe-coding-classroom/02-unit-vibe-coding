// Antigravity Todo App Logic
document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
    const itemsLeft = document.getElementById('items-left');
    const clearCompleted = document.getElementById('clear-completed');
    const filterBtns = document.querySelectorAll('.filter-btn');

    let todos = JSON.parse(localStorage.getItem('antigravity-todos')) || [];
    let currentFilter = 'all';

    // Initial Render
    renderTodos();

    // Event Listeners
    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo();
    });

    clearCompleted.addEventListener('click', () => {
        todos = todos.filter(t => !t.completed);
        saveAndRender();
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderTodos();
        });
    });

    function addTodo() {
        const text = todoInput.value.trim();
        if (text) {
            const newTodo = {
                id: Date.now(),
                text: text,
                completed: false
            };
            todos.unshift(newTodo);
            todoInput.value = '';
            saveAndRender();
        }
    }

    function toggleTodo(id) {
        todos = todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        saveAndRender();
    }

    function deleteTodo(id) {
        todos = todos.filter(todo => todo.id !== id);
        saveAndRender();
    }

    function saveAndRender() {
        localStorage.setItem('antigravity-todos', JSON.stringify(todos));
        renderTodos();
    }

    function renderTodos() {
        const filteredTodos = todos.filter(todo => {
            if (currentFilter === 'active') return !todo.completed;
            if (currentFilter === 'completed') return todo.completed;
            return true;
        });

        todoList.innerHTML = '';
        filteredTodos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            li.innerHTML = `
                <div class="checkbox">
                    ${todo.completed ? '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
                </div>
                <span>${todo.text}</span>
                <button class="delete-btn">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            `;

            li.querySelector('.checkbox').addEventListener('click', () => toggleTodo(todo.id));
            li.querySelector('.delete-btn').addEventListener('click', () => deleteTodo(todo.id));
            
            todoList.appendChild(li);
        });

        const activeCount = todos.filter(t => !t.completed).length;
        itemsLeft.textContent = `${activeCount} item${activeCount !== 1 ? 's' : ''} left`;
    }
});
