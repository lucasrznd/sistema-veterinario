import { ProgressSpinner } from 'primereact/progressspinner';

export default function ManutencaoPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center text-white p-4">
            <div className="max-w-2xl w-full space-y-8 text-center">
                <div className="space-y-2">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-black-alpha-60">
                        Site em construção
                    </h1>
                </div>

                <div className="flex justify-center items-center space-x-2">
                    <ProgressSpinner />
                </div>

                <div className="pt-12">
                    <p className="text-sm text-gray-400">
                        Precisa de assistência? Entre em contato com o suporte
                    </p>
                    <a href="mailto:suporte@vetconsent.com.br" className="text-sm text-blue-400 hover:underline text-primary">
                        suporte@vetconsent.com.br
                    </a>
                </div>
            </div>
        </div>
    )
}

