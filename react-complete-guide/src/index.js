import ReactDOM from "react-dom/client";

import './index.css';
import App from './App'//omit the extensions in case of libraries or third-party js files

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />);