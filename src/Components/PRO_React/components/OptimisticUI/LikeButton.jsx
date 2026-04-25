///////////////////////////////////////////////
// Optimistic UI Pattern (Օպտիմիստական UI)
//
// Մեխանիզմ որ անմիջապես թարմացնում է UI-ն,
// մինչ կրկեղ server-ից հաստատում չստանա։
//
// Քայլ 1: Արմատական անմիջապես թարմացվում է
// Քայլ 2: Հարցումը ուղարկվում է server-ին
// Քայլ 3: Եթե սխալ - վերածվում է իր նախորդ վիճակին
//
// Առավելություն: Շատ արագ UI, հաճելի user experience
///////////////////////////////////////////////

import { useState } from 'react';

export const LikeButton = ({ itemId, initialLikes = 0 }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isPending, setIsPending] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLike = async () => {
    const previousLikes = likes;
    setLikes(prev => prev + 1);
    setIsPending(true);
    setHasError(false);

    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() < 0.3 ? reject(new Error('Like failed')) : resolve();
        }, 500);
      });
    } catch {
      setLikes(previousLikes);
      setHasError(true);
      setTimeout(() => setHasError(false), 2000);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="like-button-wrapper">
      <button className={`like-button ${isPending ? 'pending' : ''} ${hasError ? 'error' : ''}`} onClick={handleLike} disabled={isPending}>
        <span className="like-icon">❤️</span>
        <span className="like-text">{likes} Likes</span>
      </button>
      {hasError && <span className="error-message">Failed! Try again</span>}
    </div>
  );
};

export default LikeButton;
