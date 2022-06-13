import BaseLayout from "@/components/Layout"
import BasePage from "@/components/BasePage";
import { useGetUser } from '@/actions/user';

const Blogs = () => {
    const { data, loading } = useGetUser();
    return (
      <BaseLayout user={data} loading={loading}>
        <BasePage>
          <h1>I am Blog Page</h1>
        </BasePage>
      </BaseLayout>
    )
  }
  
  export default Blogs;
