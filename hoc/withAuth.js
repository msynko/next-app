/* eslint-disable react/display-name */
import { useGetUser } from "@/actions/user";
import Redirect from "@/components/Redirect";

export const withAuth = (Component) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    return props => {
        const { data, loading } = useGetUser();

        console.log(data)
        if (loading) {
            return <p>Loading</p>
        }
        if (!data) {
            return <Redirect ssr to={"/api/auth/login"} />
        } else {
            // if (data && data[process.env.AUTH0_NAMESPACE + '/roles'].includes(role))
                
            return <Component user={data} loading={loading} {...props} />
        }  
    }
   
}

