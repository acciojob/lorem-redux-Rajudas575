import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLorem } from './actions';

const LoremFetcher = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.lorem.content);
  const status = useSelector((state) => state.lorem.status);
  const error = useSelector((state) => state.lorem.error);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  return (
    <div>
      <h1>Lorem Ipsum Fetcher</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && <p>{content}</p>}
    </div>
  );
};

export default LoremFetcher;
