import React, {lazy, Suspense} from 'react';
import Loader from '../Loader';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";

  const InfiniteScroll = lazy(() => import('../InfiniteScroll'));
  const BookDetails = lazy(() => import('../bookDetails'));
  const Routing = () => {
    return (
        <React.Fragment>
          <Suspense fallback={<Loader/>}> 
        <Routes>
          <Route path="/" element={<Navigate to="/book" />} />
          <Route path="/book" element={<InfiniteScroll />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
        </Suspense>
        </React.Fragment>
    )
}

export default Routing;
