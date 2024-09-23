import React, { useState } from 'react'; // Importa React y el hook useState para manejar el estado local
import { useTodoStore } from '../store/todoStore'; // Importa el store de Zustand

const AddTodo: React.FC = () => {
  const [title, setTitle] = useState(''); // Estado local para almacenar el título de la tarea

  const { addTodo } = useTodoStore(); // Obtiene la función addTodo del store (Zustand)
  
  // Función que se llama cuando el usuario hace clic en el botón para agregar la tarea
  const handleAdd = () => {
    if (title.trim()) {  // Verifica que el título no esté vacío después de quitar espacios
      addTodo({
        id: Date.now(), // Genera un ID único basado en la fecha actual
        title, // Toma el título de la tarea del estado local
        completed: false, // Inicialmente, la tarea no está completada
      });
      setTitle(''); // Limpia el campo de texto después de agregar la tarea
    }
  };

  return (
    <div className="flex mb-4"> {/* Contenedor flex con margen inferior */}
      <input
        type="text"
        value={title} // El valor del input es el estado local `title`
        onChange={(e) => setTitle(e.target.value)} // Actualiza el estado con el valor del input
        className="flex-grow p-2 border-2 border-gray-300 rounded-l-md" // Estilos de TailwindCSS
        placeholder="Agregar tarea" // Texto que aparece como placeholder
      />
      <button
        onClick={handleAdd} // Llama a `handleAdd` cuando se hace clic
        className="bg-green-500 p-2 text-white rounded-r-md hover:bg-green-600" // Estilos del botón
      >
        +
      </button>
    </div>
  );
};

export default AddTodo;

