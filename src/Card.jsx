import './Card.css'
import arfan from './assets/arfan.jpg'
import Button from './Button'

function Card({ title, description })
{
  return (
    <div className='card'>
      <img className='image' src={arfan} alt="placeholder" />
      <h2 className='title'>{title}</h2>
      <p className='desc'>{description}</p>
      <Button title="Read More" />
    </div>
  );
}
export default Card;