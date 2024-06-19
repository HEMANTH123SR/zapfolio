'use client'

import { useRouter } from 'next/navigation'

export function ClientLinkedinRedirectComponent() {
    const router = useRouter()
    router.push('/')
    return (
        <></>
    )
}