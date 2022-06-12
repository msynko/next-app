/* eslint-disable react/display-name */
import { useUser } from '@auth0/nextjs-auth0';
import Redirect from "@/components/Redirect";

export const withAuth = (Component) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    return props => {
        const { user, error, isLoading } = useUser();

        if (isLoading) {
            return <p>Loading</p>
        }
        if (!user) {
            return <Redirect ssr to={"/api/auth/login"} />
        } else {
            return <Component user={user} loading={isLoading} {...props} />
        }  
    }
   
}

