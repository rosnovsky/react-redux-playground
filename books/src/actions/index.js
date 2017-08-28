
export function selectBook(book){
    //action creator returns and action with type and payload
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}