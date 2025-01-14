import React from 'react';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <header className="bg-primary text-white py-4 border-round">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold">VetConsent</h1>
                </div>
            </header>

            <main>
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;

