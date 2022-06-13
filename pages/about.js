import BaseLayout from "@/components/Layout"
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";


export default function About() {
    const { data, loading } = useGetUser();
debugger
    return (
        <BaseLayout user={data} loading={loading}>
            <BasePage>
            <h1>About page</h1>
            </BasePage>
        </BaseLayout>

    )
  }
  
