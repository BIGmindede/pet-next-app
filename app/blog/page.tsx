import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Posts list"
}

async function getData() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, 
    {
      next: {
          // рекеширование
          revalidate: 60
      } 
    })
  
    if (!response.ok) throw new Error("Error text")
  
    return response.json()
  }

export default async function Blog() {
    const data = await getData()
    return (
        <div>
            <h1>Blog Page</h1>
            <ul>
                {data.map((post: any) => 
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.id}. {post.title}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}