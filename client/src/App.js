import React, { useState, useMemo } from "react";
import "./styles.css";
import { Context } from "./components/Context";
import InputPage from "./pages/InputPage";
import HistoryPage from "./pages/HistoryPage";

function App() {
  const [value, setValue] = useState(null);
  const _val = useMemo(() => ({ value, setValue }), [value, setValue]);
  return (
    <div class="container">
      <Context.Provider value={_val}>
        <InputPage />
        <HistoryPage />
      </Context.Provider>
    </div>
  );
}

export default App;
