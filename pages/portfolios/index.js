import BaseLayout from "@/components/Layout"
import Link from "next/link";
import BasePage from "@/components/BasePage";
import { useGetPosts } from "actions";


export default function Porfolios() {
    const { data, error, loading } = useGetPosts();
    return (
        <BaseLayout>
            <BasePage> 
                <h1>Porfolios page</h1>
                { data && (
                    data.map((post) => (
                        <Link key={post.id} href={`portfolios/${post.id}`}>
                            <li>
                            {post.title}
                            </li>
                        </Link>
                    ))
                    )
                }
                {error && (
                    <div className="alert alert-danger">{error.message}</div>
                )}
                {loading && (
                    <div className="alert alert-danger">Loading</div>
                )}
            </BasePage>
        </BaseLayout>

    )
  }

  

