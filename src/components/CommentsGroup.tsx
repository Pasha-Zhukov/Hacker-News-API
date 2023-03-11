import { useSelector } from "react-redux"
import { Comment } from "./Comment"

type propsType = {
  parentid: number
}
export function CommentsGroup({ parentid }: propsType) {
  const data = useSelector((state: { comments: [] }) => state)

  return (
    <ul>
      {data.comments
        ?.filter((item: { parent: number }) => item.parent === parentid)
        ?.map((item: { text: string; kids: number[]; id: number }) => (
          <Comment key={item.id} item={item} />
        ))}
    </ul>
  )
}
