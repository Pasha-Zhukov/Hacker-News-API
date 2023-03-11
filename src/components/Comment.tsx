import { useState } from "react"
import { CommentsGroup } from "./CommentsGroup"

type propsType = {
  item: { text: string; kids: number[]; id: number }
}
export function Comment({ item }: propsType) {
  const [isKidsVisible, setIsKidsVisible] = useState(false)
  const showKids = () => {
    setIsKidsVisible(!isKidsVisible)
  }
  return (
    <li className="mt-5 mb-5 ml-8 mr-20 text-xl text-gray-500">
      <hr />
      {item.text}
      {item.kids?.length && (
        <div className="cursor-pointer ml-5 text-l" onClick={showKids}>
          {isKidsVisible ? "close comment" : "open comment"}
        </div>
      )}
      {item?.kids?.length && isKidsVisible && (
        <CommentsGroup parentid={item.id} />
      )}
    </li>
  )
}
