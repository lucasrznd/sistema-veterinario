export default function Footer() {
    const anoAtual = new Date().getFullYear();

    return (
        <>
            <div className="flex align-items-center justify-content-center bg-primary border-round mt-2 h-4rem">
                <p className="text-md font-bold">VetConsent - {anoAtual}.&copy;</p>
            </div>

            <div className="flex align-items-center justify-content-center">
                <p>Para maiores informações, entre em contato com o suporte:
                    <a href="mailto:suporte@vetconsent.com.br"><strong> suporte@vetconsent.com.br</strong></a>
                </p>
            </div>
        </>
    )
}