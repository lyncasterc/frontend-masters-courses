import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchPet from './fetchPet';
import Carousel from './Carousel';

const Details = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(['petDetails]]', id], fetchPet);

  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  if (isError) {
    return <h1>Woops! Something went wrong. Try again.</h1>;
  }

  const pet = data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

export default Details;
