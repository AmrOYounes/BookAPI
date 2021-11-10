import React from 'react';
import {Link} from 'react-router-dom';
import {BookCoverProps} from './bookCocerTypes';
import './bookCover.styles.scss'
 const BookCover: React.FC <BookCoverProps> = ({imgSrc, bookId}) => {

    return (
        <Link to={`/book/${bookId}`}>
            <img src={imgSrc} className='book-image' alt="bookCover" />
        </Link>
    )
}

export default BookCover;
