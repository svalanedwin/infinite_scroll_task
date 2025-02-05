import React from 'react';
import { useInfiniteScroll } from '../../shared/useInfiniteScroll';

export default function Home() {
  const { data, fetchData, loading, hasMore } = useInfiniteScroll('https://jsonplaceholder.typicode.com/posts');

  return (
    <div style={{ padding: '20px' }}>
      {data.map((item) => (
        <div key={item.id} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc' }}>
          <h3>{item.title}</h3>
        </div>
      ))}
      {loading && <p>Loading...</p>}
      {hasMore && (
        <button onClick={fetchData} style={{ padding: '10px', marginTop: '20px' }}>
          Load More
        </button>
      )}
    </div>
  );
}