
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div>
      <h2>Data from JSONPlaceholder:</h2>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default blog;
