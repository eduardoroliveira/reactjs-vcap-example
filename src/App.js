import React from "react";
import "./App.css";

function App() {
  const cf_app = process.env;
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>application_name: {cf_app.REACT_APP_NAME}</li>
          <li>app_uris: {cf_app.REACT_APP_URIS}</li>
          <li>app_space_name: {cf_app.REACT_APP_SPACE}</li>
          <li>app_mem_limits: {cf_app.REACT_APP_MEM_LIMITS}</li>
          <li>app_disk_limits: {cf_app.REACT_APP_DISK_LIMITS}</li>
          <li>service_label: {cf_app.REACT_APP_SVC_NAME}</li>
          <li>service_name: {cf_app.REACT_APP_SVC_LABEL}</li>
          <li>service_plan: {cf_app.REACT_APP_SVC_PLAN}</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
