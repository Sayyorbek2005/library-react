import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home"
// ? toast
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {
  
  return (
     <QueryClientProvider client={queryClient}>

    <div className="App">
      <ToastContainer />

      <div className="cont-int">
        <h1>
          salom
        </h1>
      </div>

      
       
    

    {/* ? router */}

      <Routes>
        <Route path='home' element={<Home />}/>

      </Routes>
   
      
    </div>
     </QueryClientProvider>
  );
}

export default App;
