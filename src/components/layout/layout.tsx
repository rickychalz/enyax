// src/components/Layout.tsx
import { Outlet} from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

const Layout: React.FC = () => {
  return (
    <div className='mx-auto flex max-w-screen-md flex-col h-screen justify-between px-4'>
      {/* Navbar */}
      <Navbar/>

      {/* Main content area where routes will be rendered */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
     <Footer/>
    </div>
  );
};

export default Layout;
