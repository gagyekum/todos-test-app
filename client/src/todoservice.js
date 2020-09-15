export async function getAllTodos() {
    const response = await fetch('/api/v1/todos/');
    return await response.json();
}

export async function createTodo(data) {
    const response = await fetch('/api/v1/todo/', {
        method: 'POST',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify(data)
    })
    return await response.json();
}