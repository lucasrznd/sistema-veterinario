export default function Footer() {
    const anoAtual = new Date().getFullYear();

    return (
        <div className="flex align-items-center justify-content-center bg-primary border-round mt-2 h-4rem">
            <p className="text-md font-bold">VetSurge - {anoAtual}.&copy;</p>
        </div>
    )
}