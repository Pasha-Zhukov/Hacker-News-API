import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { NewsItemPage } from "./NewsItemPage"
import { Story } from "../types"
import { useDispatch } from "react-redux"
import { setResetComments } from "../actions"

let found: Story
export function Single() {
  const dispatch = useDispatch()
  const data = useSelector((state: any) => state)
  const { id } = useParams()
  if (id) {
    found = data?.topStoriesIds?.find(
      (element: { id: number }) => +element.id == +id
    )
  }
  const resetComment = () => {
    dispatch(setResetComments([]))
  }
  return (
    <div className="pl-48 pt-24 pr-48 bg-white border-b-8 border-gray-50">
      <Link to="/" className="cursor-pointer text-2xl" onClick={resetComment}>
        Back
      </Link>
      <NewsItemPage
        key={found.id}
        id={found.id}
        title={found.title}
        url={found.url}
        by={found.by}
        time={found.time * 1000}
        descendants={found.descendants}
        kids={found.kids}
        index={found.id}
      />
    </div>
  )
}
