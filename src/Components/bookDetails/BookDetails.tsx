import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/rootReducer";
import { getBookInfo } from "../../Actions/APIs/BookAPIs";
import { AllbookInfo } from "./bookInfotypes";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import {KEY} from '../../config';
import Loader from "../Loader";
import "./BookDetails.styles.scss";

const BookDetails = () => {
  const { id } = useParams();
  const [bookInfo, setBookInfo] = useState<AllbookInfo>();
  const [loading, setLoading] = useState(true);

  const params = {
    Key: KEY,
  };

  useEffect(() => {
    getBookInfo(`/volumes/${id}`, params).then((res) => {
      setBookInfo(res);
      setLoading(false);
    });
  }, []);

  if (bookInfo && !loading) {
    const {
      imageLinks,
      title,
      subtitle,
      authors,
      averageRating,
      pageCount,
      description,
    } = bookInfo.volumeInfo;

    return (
      <Grid container spacing={2} className="top-container">
        <Grid item xs={5}>
          <img src={imageLinks.thumbnail} alt="bookImage" />
        </Grid>
        <Grid item xs={7}>
          <Grid container direction="column">
            <Grid item>
              <h3> {title} :</h3>
              <h4 className="book-subtitle"> {subtitle}</h4>
              by:
              { authors && authors.map((author: string, index: number) => (
                <span className="author" key={index}>{`  ${author} `}</span>
              ))}  
            </Grid>
            <Grid item>
              <Rating
                name="read-only"
                value={averageRating}
                readOnly
                className="star-rating"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={5} className="number-of-pages">
          <span> {pageCount} Pages</span>
        </Grid>
        <Grid item xs={7}>
          <Button className="button-style" variant="contained">
            Buy
          </Button>
          <IconButton className="Favorite-icon">
            <FavoriteIcon color="error" />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <h3>{description}</h3>
        </Grid>
      </Grid>
    );
  }
  return <React.Fragment>{loading && <Loader/>}</React.Fragment>;
};

export default BookDetails;
