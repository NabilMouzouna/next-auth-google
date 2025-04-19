'use client';

import { signIn, signOut, useSession } from "next-auth/react";

function AuthButton() {
    const { data: session } = useSession();
    if (session) {
        return (
            <div>
                {session.user?.name}
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        )
    }
    else {
    return (
        <div>
            <h1>Sign in</h1>
            <button onClick={() => signIn()}>Sign in</button>
        </div>
    )}
}

export default function NavMenu() {
    return (
        <div>
            <AuthButton /> 
        </div>
    )
}