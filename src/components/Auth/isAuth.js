import {useAuthenticator} from '@aws-amplify/ui-react';
import {usePathname, useRouter, useSearchParams} from 'next/navigation'

export const IsAuth = () => {
    const {authStatus} = useAuthenticator();
    const router = useRouter();
    const currentPage = usePathname()

    if (authStatus !== 'authenticated')
    {
        router.push('/login?next=' + currentPage)
        return false
    } else {
        return true;
    }
}