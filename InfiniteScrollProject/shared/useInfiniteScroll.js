import { useState, useEffect, useCallback } from 'react';

export const useInfiniteScroll = (apiEndpoint) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    
    try {
      const response = await fetch(`${apiEndpoint}?_limit=10&_page=${page}`);
      const result = await response.json();

      setData((prevData) => [...prevData, ...result]);
      if (result.length < 10) setHasMore(false);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, [apiEndpoint, page, loading, hasMore]);

  useEffect(() => {
    fetchData();
  }, []);

  return { data, fetchData, loading, hasMore };
};