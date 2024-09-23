import { StrictMode } from 'react' // Importa StrictMode para ayudar a identificar problemas potenciales en la aplicación
import { createRoot } from 'react-dom/client' // Importa createRoot para crear la raíz del DOM para la aplicación React
import App from './App.tsx' // Importa el componente principal de la aplicación
import './styles.css' // Importa el archivo de estilos CSS globales

// Crea la raíz de la aplicación en el elemento del DOM con id 'root' y renderiza el componente App dentro de StrictMode
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
