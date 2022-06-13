import BaseLayout from "@/components/Layout"
import BasePage from "@/components/BasePage";
import { withAuth } from "@/hoc/withAuth";


function OnlyAdmin({ user, loading }) {
    debugger
    return (
        <BaseLayout user={user} loading={loading}>
            <BasePage>
                <h1>Admin page - {user.name}</h1>
            </BasePage>
        </BaseLayout>
    )} 
//HOC

// eslint-disable-next-line react/display-name
// const withAuth = (Component) => props=> 
//     <Component title='Hello world' {...props} />
    
export default withAuth(OnlyAdmin, 'admin');

  
