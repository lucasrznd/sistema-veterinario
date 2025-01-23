import { useRef, useState } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import { msgErro } from '../components/ui/Mensagens';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);
    const toast = useRef(null);

    // Credenciais hard-coded para teste
    const VALID_CREDENTIALS = {
        username: 'admin',
        password: 'senha123'
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (
            username === VALID_CREDENTIALS.username &&
            password === VALID_CREDENTIALS.password
        ) {
            // Simula autenticação e redireciona
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/home');
        } else {
            msgErro(toast, 'Credenciais inválidas');
        }
    };

    return (
        <>
            <form onSubmit={handleLogin}>
                <Toast ref={toast} />

                <div className="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
                    <div className="flex flex-column align-items-center justify-content-center">
                        <div
                            style={{
                                borderRadius: '56px',
                                padding: '0.3rem',
                                background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)'
                            }}>
                            <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                                <div className="text-center mb-5">
                                    <div className="text-900 text-3xl font-medium mb-3">Olá, bem vindo de volta!</div>
                                    <span className="text-600 font-medium">Preencha os campos para continuar</span>
                                </div>

                                <div>
                                    <label htmlFor="username" className="block text-900  font-medium mb-2">
                                        Usuário
                                    </label>
                                    <InputText id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Nome de Usuário" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} required />

                                    <label htmlFor="password" className="block text-900 font-medium  mb-2">
                                        Senha
                                    </label>
                                    <Password inputId="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Senha" toggleMask className="w-full mb-5" feedback={false}
                                        inputClassName="w-full p-3 md:w-30rem" required />

                                    <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                        <div className="flex align-items-center">
                                            <Checkbox inputId="rememberme1" checked={checked} onChange={(e) => setChecked(e.checked ?? false)} className="mr-2" />
                                            <label htmlFor="rememberme1">Lembrar-me</label>
                                        </div>

                                        <a className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }}>
                                            Esqueceu a senha?
                                        </a>
                                    </div>

                                    <Button type="submit" label="Entrar" className="w-full p-3 text-md" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default LoginPage;