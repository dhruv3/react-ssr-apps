import { useRouter } from 'next/router'
import posts from '../../posts.json'

export default () => {
  const router = useRouter()

  const post = posts[router.query.id]
  //Initially the component is rendered without the dynamic router.query.id information. 
  //After rendering, Next.js triggers an update with the query value and the page displays 
  //the correct information.
  if (!post) return <p></p>

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  )
}