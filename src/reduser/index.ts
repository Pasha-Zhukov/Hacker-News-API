const initialState = {
  stories: [],
  topStoriesIds: [],
  comments: [],
}

export const STORIES_IDS_DATA = "STORIES_IDS_DATA"
export const STORIES_DATA = "STORIES_DATA"
export const COMMENTS_DATA = "COMMENTS_DATA"
export const RESET_COMMENTS_DATA = "RESET_COMMENTS_DATA"

const reducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case STORIES_IDS_DATA:
      // массив чисел
      return {
        ...state,
        stories: action.payload,
      }
    case STORIES_DATA:
      // массив обьектов
      return {
        ...state,
        topStoriesIds: action.payload,
      }
    case COMMENTS_DATA:
      // обьект
      return {
        ...state,
        comments: [...state.comments, action.payload],
      }
    case RESET_COMMENTS_DATA:
      // пустой массив
      return {
        ...state,
        comments: [],
      }
    default:
      return state
  }
}

export default reducer
