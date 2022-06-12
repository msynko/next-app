import BaseLayout from "@/components/Layout"
import BasePage from "@/components/BasePage";
import {withPageAuthRequired } from '@auth0/nextjs-auth0'
import { AuthUser } from "@/utils/authUser"

const SecretSSR = ({user}) => {
    return (
        <BaseLayout user={user} loading={false}>
            <BasePage>
                <h1>Secret page - {user?.name}</h1>
            </BasePage>
        </BaseLayout>
    )
}
    

export const getServerSideProps = withPageAuthRequired({
    getServerSideProps: async ({ req, res }) => {
        const user = await AuthUser(req, res)
        
        return {
            props: {user}
        }
    },
  });

export default SecretSSR;

  
