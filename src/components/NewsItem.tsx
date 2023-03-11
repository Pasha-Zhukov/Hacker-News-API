import { Link } from "react-router-dom"

type NewsItemProps = {
  id: number
  title: string
  url: string
  index: number
  score: number
  by: string
  time: number
}

export function NewsItem({ title, score, by, time, id }: NewsItemProps) {
  return (
    <div className="mb-12">
      <div>
        <Link to={`/news/${id}`} className="cursor-pointer text-3xl">
          {title}
        </Link>
      </div>

      <div className="ml-8 text-xl text-gray-500">
        <span>rating - {score}</span>
        <span> | </span>
        <span>nick-name: {by}</span>
        <span> | </span>
        {JSON.stringify(new Date(time).toLocaleString())}
      </div>
    </div>
  )
}
