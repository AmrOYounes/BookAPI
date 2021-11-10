import React from 'react'
import LoaderImage from '../../assets/images/BlackLoading.gif';
import './loader.styles.scss';
const Loader : React.FC = () => {
    return (
        <div className='loader-wrapper'>
            <br/>
            <img src={LoaderImage} alt="loading-image" className='img-loader' />
        </div>
    )
}

export default Loader;
