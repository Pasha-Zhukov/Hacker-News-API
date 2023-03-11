import { useEffect } from "react"
import { NewsItem } from "./NewsItem"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setStoriesIdsData, setStoriesData, setResetComments } from "../actions"
import { Story } from "../types"
import { fetchStories, fetchTopStoriesIds } from "../utils/api"

export function Body() {
  const dispatch = useDispatch()
  const data = useSelector((state: { topStoriesIds: []; stories: [] }) => state)

  const loadStories = async () => {
    const topStoriesIdsData = await fetchTopStoriesIds()
    if (JSON.stringify(topStoriesIdsData) === JSON.stringify(data.stories))
      return
    dispatch(setStoriesIdsData(topStoriesIdsData))
    const storiesData = await fetchStories(topStoriesIdsData.slice(0, 100))
    dispatch(setStoriesData(storiesData))
  }

  useEffect(() => {
    loadStories()
    setInterval(loadStories, 60000)
    dispatch(setResetComments([]))
  }, [])
  return (
    <div className="pl-48 pt-24 bg-white border-b-8 border-gray-50">
      <div onClick={loadStories} className="mb-5 cursor-pointer text-2xl">
        Update
      </div>
      {data.topStoriesIds.map((it: Story, index: number) => (
        <NewsItem
          key={it.id}
          id={it.id}
          title={it.title}
          url={it.url}
          score={it.score}
          by={it.by}
          time={it.time * 1000}
          index={index}
        />
      ))}
    </div>
  )
}
