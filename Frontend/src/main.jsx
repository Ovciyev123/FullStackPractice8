import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import FavoritesProvider from './Context/FavoritesContext.jsx'

createRoot(document.getElementById('root')).render(
 <FavoritesProvider>
    <App />
    </FavoritesProvider>
)
