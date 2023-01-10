import { Routes, Route, Navigate} from "react-router-dom";
import HomePage from './pages/Home/index'
import ProductPage from './pages/Products/index'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route/>
      </Routes>
    </>
  );
}

export default App;
