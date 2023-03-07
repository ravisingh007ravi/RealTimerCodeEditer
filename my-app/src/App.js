import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import EditorPage from './Components/EditorPage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>     </Route>
          <Route path="/editor/:RoomId" element={<EditorPage />}>     </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
