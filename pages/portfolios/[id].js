import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/Layout"
import { useGetPostsById } from "actions";
import { useRouter } from "next/router";

export default function PortfolioDetail() {
    const router = useRouter();
    const {data: portfolio, error, loading} = useGetPostsById(router.query.id);

    return (
      <BaseLayout>
        <BasePage>
        { loading && <p>Loading Data...</p>}
        { error && <div className="alert alert-danger">{error.message}</div>}
        { portfolio &&
          <>
            <h1>I am Portfolio page</h1>
            <h1>{portfolio.title}</h1>
            <p>BODY: {portfolio.body}</p>
            <p>ID: {portfolio.id}</p>
          </>
        }
        </BasePage>
      </BaseLayout>
    )
  }

