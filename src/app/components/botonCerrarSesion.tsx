
"use client"
import { useRouter } from "next/navigation";

function LogoutButton() {
    const router = useRouter();

    function handleLogout() {
        // Elimina la cookie del token
        document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;';

        // Redirige al usuario al login
        router.push('/login');
    }

    return (
        <button onClick={handleLogout} className="p-3 bg-black my-3 inline-block rounded-lg text-white font-bold">
            Cerrar sesión
        </button>
    );
}

export default LogoutButton;
