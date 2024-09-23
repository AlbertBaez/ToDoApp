import React, { useState } from 'react'; // Importa React y useState para manejar el estado local
import { useTodoStore } from '../store/todoStore'; // Importa el store de Zustand

const TodoList: React.FC = () => {
  const { todos, toggleTodo, removeTodo, editTodo } = useTodoStore(); // Obtiene el estado y las funciones del store (Zustand)
  const [editingTodo, setEditingTodo] = useState<number | null>(null); // Estado para manejar el ID de la tarea en edición
  const [editTitle, setEditTitle] = useState(''); // Estado para almacenar el nuevo título de la tarea

  // Habilita la edición de una tarea
  const handleEdit = (todoId: number, currentTitle: string) => {
    setEditingTodo(todoId); // Establece la tarea que está siendo editada
    setEditTitle(currentTitle);  // Establece el título actual de la tarea en el estado
  };

  // Guarda los cambios de la tarea editada
  const saveEdit = (todoId: number) => {
    editTodo(todoId, editTitle); // Llama a la función del store para editar la tarea
    setEditingTodo(null); // Reinicia el estado de edición después de guardar
    setEditTitle(''); // Limpia el título editado
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li
        key={todo.id} // Necesario para que React identifique correctamente cada elemento en la lista
        className={`flex items-center justify-between p-2 mb-2 rounded-md ${todo.completed ? 'bg-green-400 text-white' : 'bg-white text-black'} shadow-md`} // Estilos condicionales para tareas completadas o no
      >
        <div className="flex items-center">

          {/* Checkbox para marcar tarea como completada */}
          <input
            type="checkbox"
            checked={todo.completed} // Checkbox está marcado si la tarea está completada
            onChange={() => toggleTodo(todo.id)} // Llama a toggleTodo cuando se hace clic en el checkbox
            className="mr-2 h-6 w-6 appearance-none rounded-full border-2 border-gray-300 checked:bg-green-600 checked:border-green-600 focus:outline-none"
          />

          {/* Título editable */}
          {editingTodo === todo.id ? (
            <input
              type="text"
              value={editTitle} // Valor del input es el estado `editTitle`
              onChange={(e) => setEditTitle(e.target.value)} // Actualiza `editTitle` cuando cambia el input
              className="p-1 rounded text-black"
            />
          ) : (
            <span className={`text-lg ${todo.completed ? 'line-through text-white' : 'text-black'}`}>
              {todo.title} {/* Muestra el título de la tarea */}
            </span>
          )}
        </div>
        <div className="flex space-x-2">

          {/* Botones de guardar, editar y eliminar */}
          {editingTodo === todo.id ? (
            <button
              onClick={() => saveEdit(todo.id)} // Guarda los cambios cuando se hace clic
              className="bg-green-600 p-1 rounded-md hover:bg-green-700"
              title="Guardar"
            >
              ✅
            </button>
          ) : (
            <button
              onClick={() => handleEdit(todo.id, todo.title)} // Activa el modo de edición
              className="bg-green-600 p-1 rounded-md hover:bg-green-700"
              title="Editar"
            >
              ✏️
            </button>
          )}
          <button
            onClick={() => removeTodo(todo.id)} // Elimina la tarea cuando se hace clic
            className="bg-red-600 p-1 rounded-md hover:bg-red-700"
            title="Borrar"
          >
            🗑️
          </button>
        </div>
      </li>
      ))}
    </ul>
  );
};

export default TodoList;

