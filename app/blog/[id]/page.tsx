import { Metadata } from "next"

type Props = {
    params: {
        id: string
    }
}

async function getData(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
  {
    next: {
        // рекеширование
        revalidate: 60
    } 
  })
  
  return response.json()
}

export async function generateMetadata({params: {id}} : Props) {
  const post = await getData(id)
  return {
    title: `${post.title}`
  }
}

export default async function Post({params: {id}} : Props) {
  const post = await getData(id)
  return (
    <div>
      <h1>{post.id}. {post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}
