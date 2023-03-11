import { fetchArrComments } from "../utils/api"
import { useDispatch } from "react-redux"
import { setComments, setResetComments } from "../actions"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { CommentsGroup } from "./CommentsGroup"

type NewsItemProps = {
  id: number
  title: string
  url: string
  index: number
  by: string
  time: number
  descendants: number
  kids: number[]
}
export function NewsItemPage({
  title,
  url,
  by,
  time,
  kids,
  id,
}: NewsItemProps) {
  const data = useSelector((state: { comments: [] }) => state)
  console.log(data)
  const dispatch = useDispatch()
  const updateComments = () => {
    dispatch(setResetComments([]))
    kids?.forEach((item) => {
      const loadStories = async (item: any) => {
        const commentsData = await fetchArrComments(item)
        dispatch(setComments(commentsData))
        if (commentsData.kids) {
          commentsData.kids.forEach((items: []) => {
            loadStories(items)
          })
        }
        return
      }
      loadStories(item)
    })
  }
  useEffect(() => {
    updateComments()
  }, kids)

  return (
    <div className="mb-12">
      <div>
        <a
          className="cursor-pointer text-3xl"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {url ? new URL(url).hostname : ""}
          <span> | </span>
          {title}
        </a>
      </div>
      <div className="ml-8 mt-5 text-2xl text-gray-500">
        {JSON.stringify(new Date(time).toLocaleString())}
        <span> | </span>
        <span>nick-name: {by}</span>
        <span> | </span>
        <span>comments {data.comments?.length} | </span>
        <button className="text-black border-red" onClick={updateComments}>
          update
        </button>
      </div>
      <div className="mb-10  text-xl text-gray-500">
        <CommentsGroup parentid={id} />
      </div>
    </div>
  )
}
