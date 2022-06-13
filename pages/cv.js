import BaseLayout from "@/components/Layout"
import BasePage from "@/components/BasePage";
import { useGetUser } from '@/actions/user';

export default function Cv() {
    const { data, loading } = useGetUser();
    return (
      <BaseLayout user={data} loading={loading}>
        <BasePage>
          <h1>I am Cv Page</h1>
        </BasePage>
      </BaseLayout>
    )
  }
  