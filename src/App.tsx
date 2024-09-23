import React from 'react';
import TodoList from './components/TodoList'; // Importa la lista de TODOs
import AddTodo from './components/AddTodo'; // Importa el componente para agregar TODOs

// Componente principal de la aplicación
const App: React.FC = () => {
  return (
    // Contenedor principal con fondo verde oscuro y texto blanco
    <div className="max-w-md mx-auto mt-10 bg-green-950 p-6 rounded-lg shadow-md">
      {/* Título */}
      <h1 className="text-3xl font-bold text-center text-white mb-4">Lista de Tareas Diarias</h1>

      {/* Formulario para agregar nuevas tareas */}
      <AddTodo />

      {/* Lista de tareas */}
      <TodoList />
    </div>
  );
};

export default App;


