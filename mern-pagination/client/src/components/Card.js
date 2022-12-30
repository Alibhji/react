import "./Card.css"
import { useNavigate } from 'react-router-dom';


const Card = ({ post }) => {


  const navigate = useNavigate();
  const remveCard = async (id) => {
    const res = await fetch(`/api/v1/posts/delete?id=${id}`);
    navigate('/');
  }


  return (
    <div className="card">
      <p className="card__id" > {post._id} </p>
      <button onClick={() => remveCard(post._id)}> remove </button>
      <p className="card__title"> {post.title}</p>
      <p className="card__body"> {post.body}</p>
      <p className="card__author"> {post.author}</p>

    </div>

  )
}

export default Card