import { create } from 'zustand'; // Importa la función `create` de Zustand para crear el store

// Define la estructura de un objeto Todo
interface Todo {
  id: number; // Identificador único de la tarea
  title: string; // Título de la tarea
  completed: boolean; // Estado de la tarea (completada o no)
}

// Define la estructura del estado del store
interface TodoState {
  todos: Todo[]; // Array de tareas
  addTodo: (todo: Todo) => void; // Función para agregar una nueva tarea
  toggleTodo: (id: number) => void; // Función para marcar o desmarcar una tarea como completada
  removeTodo: (id: number) => void; // Función para eliminar una tarea
  editTodo: (id: number, newTitle: string) => void; // Función para editar el título de una tarea
  setTodos: (todos: Todo[]) => void; // Función para establecer el array de tareas
}

// Crea el store utilizando Zustand y define el estado inicial y las funciones para modificar el estado
export const useTodoStore = create<TodoState>((set) => ({
  todos: [], // Estado inicial, un array vacío de tareas
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })), // Agrega una nueva tarea al array
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ), // Marca o desmarca una tarea como completada
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id), // Elimina una tarea del array
    })),
  editTodo: (id, newTitle) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      ), // Edita el título de una tarea
    })),
  setTodos: (todos) => set(() => ({ todos })), // Establece el array de tareas completo
}));
