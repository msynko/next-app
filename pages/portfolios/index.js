import BaseLayout from "../../components/shared/Layout"
import axios from "axios";
import Link from "next/link";
import BasePage from "../../components/BasePage";

export default function Porfolios({ posts }) {
    return (
        <BaseLayout>
            <BasePage>
            <h1>Porfolios page</h1>
                {posts.map((post) => (
                        <Link key={post.id} href={`portfolios/${post.id}`}>
                            <li>
                            {post.title}
                            </li>

                        </Link>
                    ))}
            </BasePage>
        </BaseLayout>

    )
  }
export async function getServerSideProps() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const posts = response.data.slice(0, 10);
        
        return {
            props: {
            posts
        }, 
    }
    } catch (e) {
        console.error(e)
    }
   
  }

