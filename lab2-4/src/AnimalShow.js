import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

const svgMap = {
  bird: bird,
  cat: cat,
  cow: cow,
  dog: dog,
  gator: gator,
  heart: heart,
  horse: horse,
};

export default function AnimalShow({type}) {
  const animalSvg = svgMap[type];
  return (
    <div>
      <img alt="animal" src={animalSvg} />
    </div>
  );
}
