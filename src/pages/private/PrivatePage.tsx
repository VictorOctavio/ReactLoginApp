import { Routes, Route } from "react-router-dom";

function PrivatePage() {
  return (
    <Routes>
        <Route path="/" element={<p>dashboard</p>} />
        <Route path="add" element={<p>add car</p>} />
    </Routes>
  )
}

export default PrivatePage