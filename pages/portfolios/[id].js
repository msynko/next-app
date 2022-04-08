import BasePage from "../../components/BasePage";
import BaseLayout from "../../components/shared/Layout"
import axios from "axios";

export default function PortfolioDetail({ post }) {
    console.log(post)
    return (
        <BaseLayout>
            <BasePage>
                <h1>{post.title}</h1>
            <p>
                {post.body}
            </p>
            
            </BasePage>

        </BaseLayout>

    )
  }


export async function getServerSideProps({ params }) {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const posts = response.data;
        const post = posts.find(({id}) => id == params.id)
    
        return {
            props: {
            post
        }, 
    }
    } catch (e) {
        console.error(e)
    }
   
  }

