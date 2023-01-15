import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainContent from '../MainContent/MainContent';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../Book/Book.module.css';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import { addToOrders, addToWaitingList } from '../../store/actions';
import { sanitize } from '../../helpers/sanitize';

// eslint-disable-next-line react/prop-types
const Book = () => {
  const [singleBook, setSingleBook] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(true);
  };
  const { id } = useParams();
  const books = useSelector((state) => state.fetchedBooksReducer.available);

  useEffect(() => {
    const book = books.find((item) => item.id === id);
    console.log(book);
    setSingleBook(book);
  }, [id]);

  const dispatch = useDispatch();

  const addToCart = (item) => {
    if (item.status === 'available') dispatch(addToOrders(item));
    if (item.status === 'taken') dispatch(addToWaitingList(item));
  };

  return (
    <>
      {singleBook && (
        <MainContent style="content_book">
          <img className={styles.book_img} src={singleBook.imageUrl} alt={singleBook.name} />
          <div className={styles.book_info}>
            <div className={styles.starwrap}>
              {[...Array(5)].map((star, i) => {
                if (i < singleBook.rating)
                  return <Icon id="star" type="star-book-active" key={i} />;
                else return <Icon id="star" type="star-book" key={i} />;
              })}
            </div>
            <h2 className={styles.book_title}>{singleBook.name}</h2>
            <p className={styles.book_author}>{singleBook.author}</p>
            <p className={styles.book_release}>
              <span>{singleBook.length}</span>, released in <span>{singleBook.released}</span>
            </p>
            <Button style="primary" clickHandler={() => addToCart(singleBook)}>
              Order
            </Button>
            <h3 className={styles.book_desc}>About book</h3>

            <div className={styles.book_text}>
              {showMore ? (
                <div dangerouslySetInnerHTML={{ __html: sanitize(singleBook.description) }} />
              ) : (
                <div
                  className={styles.book_text_shorten}
                  dangerouslySetInnerHTML={{ __html: sanitize(singleBook.description) }}
                />
              )}
            </div>
            {!showMore ? (
              <Button style="small" onClick={handleShowMore}>
                Show more
              </Button>
            ) : null}
          </div>
        </MainContent>
      )}
    </>
  );
};
export default Book;
