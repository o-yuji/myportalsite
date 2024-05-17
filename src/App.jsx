import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Data from './pages/Data'
import Tell from './pages/Tell'
import AppLayout from './components/common/AppLayout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='/data' element={<Data />} />
          <Route path='/tell' element={<Tell />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
