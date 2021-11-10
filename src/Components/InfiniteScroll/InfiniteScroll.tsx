import React, {useRef, useCallback} from 'react';
import Grid from '@mui/material/Grid';
import {useSelector,useDispatch} from 'react-redux';
import type {RootState} from '../../redux/rootReducer';
import {fetchBooks} from '../../redux/Book/bookActions';
import BookCover from '../../Components/bookCover';
import Loader from '../Loader'
import type {stateTypes} from '../../redux/Book/bookAcrionTypes';
import './infiniteScroll.styles.scss';

 const InfiniteScroll = () => {
     const dispatch =  useDispatch();
   const  {bookData, isLoading, hasMore}: stateTypes =  useSelector((state: RootState) => state.Book);
    const observer: any =  useRef();
    const lastBookElementRef = useCallback( node => {
        if(isLoading) return;
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver( entries => {
            if(entries[0].isIntersecting && hasMore){
                dispatch(fetchBooks());
            }
        });
        if(node) observer.current.observe(node);
        
    },[isLoading, hasMore]);

    const altImage = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
    return (
        <Grid container boxSizing='border-box' spacing={2}>
            {
              bookData.map( (book: any, index: number) => {
                  if (bookData.length === index + 1 ){
                      return( 
                      <Grid item xs={4} sm={3} key={book.id} ref={lastBookElementRef} className='book-cover-wrapper' >
                      <BookCover bookId={book.id} imgSrc={book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail : altImage}/>
                    </Grid>
                      )
                  }
                  else{
                    return(  
                    <Grid item xs={4} sm={3} key={book.id} className='book-cover-wrapper'>
                    <BookCover  bookId={book.id} imgSrc={book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail : altImage}/>
                  </Grid> 
                    )
                  }
                
                
              }
                
              )
            }
            { isLoading &&  <Loader/>}
            

        </Grid>
    )
}

export default InfiniteScroll;