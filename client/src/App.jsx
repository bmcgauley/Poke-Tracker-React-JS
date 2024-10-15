import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import EnhancedLandingPage from './components/EnhancedLandingPage';
import AuthPage from './components/AuthPage';
import { AuthProvider } from './context/AuthContext';
import Auth from './components/Auth';
import Home from './components/Home';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/auth" />;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

// export default App;
// function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<EnhancedLandingPage />} />
//           <Route path="/auth" element={<AuthPage />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

export default App;
