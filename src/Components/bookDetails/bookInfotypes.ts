
 export interface AllbookInfo {
    volumeInfo: RelatedBookInfo
    
 } 

  interface RelatedBookInfo {
    imageLinks: ImageTypes,
    title: string,
    subtitle: string,
    authors: string [],
    averageRating: number,
    pageCount: number,
    description: string,
 } 

 interface ImageTypes {
    thumbnail: string
 }