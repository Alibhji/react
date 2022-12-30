import './App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Card from './components/Card';
import Pagination from './components/Pagination';


const App = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const [totalPages, setTotalPages] = useState(0);
  let { pageNumber } = useParams(); // Unpacking and retrieve id
  // if (pageNumber) {
  //   setPage(parseInt(pageNumber));
  // }

  // if (match.params.pageNumber) {
  //   setPage(match.params.pageNumber);
  // }


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {

        // setPage(parseInt(pageNumber) || 1)
        if (pageNumber) {setPage(parseInt(pageNumber) || 1)}
        const res = await fetch(`/api/v1/posts?page=${page}&limit=${limit}`);
        const { data, pages: totalPages } = await res.json();
        setTotalPages(totalPages);
        setPosts(data);
        setLoading(false);


      } catch (error) {
        setError(true);
        setLoading(false);
        console.log(error);
      }

    }
    fetchPosts();

  }, [page]);

  return (
    <div className="App">
      <p>page: {page}</p>
      <Pagination page={page} pages={totalPages} changePage={setPage} />
      <div className={"app_posts"}>
        {posts.map(post => <Card key={post._id} post={post} />)}

      </div>
      <Pagination page={page} pages={totalPages} changePage={setPage}  />

    </div>
  );
}

export default App;
