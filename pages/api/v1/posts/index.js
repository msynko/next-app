import axios from "axios";


 // eslint-disable-next-line import/no-anonymous-default-export
 export default async (req, res) => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const data = response.data.slice(0, 10);
        res.status(200).json(data)
        return data;
    } catch (e) {
        res.status(e.message || 400).json({message: "API Error"})
    }
  
   
}
