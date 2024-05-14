'use client'

import { useUserInfo } from './auth-provider-client'

export default function AuthProfileRestriction(props: { children: React.ReactNode; requireDueno?: boolean}) {
    const userInfo = useUserInfo()

    if (props.requireDueno && !userInfo?.isDueno) {
        return <NoDuenoPage />
    }

    return <>{props.children}</>
}


export function NoDuenoPage() {
    return <div>Seller required</div>
}
