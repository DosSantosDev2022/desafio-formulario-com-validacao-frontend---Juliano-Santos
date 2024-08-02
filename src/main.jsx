import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './style/index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Form } from './components/form.tsx'
import SuccessPage from './pages/success.tsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form" element={<Form />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>

    <ToastContainer position="bottom-center" />
  </React.StrictMode>,
)
