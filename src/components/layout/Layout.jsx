import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';

const Layout = ({ children }) => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("isAuthenticated");
        navigate("/", { replace: true });
    }

    const start = (
        <div className="flex align-items-center">
            <span className="ml-3 text-2xl font-bold text-white">VetConsent</span>
        </div>
    );

    const end = (
        <div className="flex gap-2">
            <Button
                label="Sair"
                icon="pi pi-sign-out"
                rounded
                className="text-white border-round"
                onClick={logout}
            />
        </div>
    );

    return (
        <div>
            <Menubar
                start={start}
                end={end}
                className="bg-primary border-none p-3 shadow-2"
            />
            <main className="p-4">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;

