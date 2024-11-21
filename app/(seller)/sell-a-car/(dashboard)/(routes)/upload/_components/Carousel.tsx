import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  ArrowLeft,
  ArrowRight,
} from '@/app/(seller)/sell-a-car/(dashboard)/_components/Icons/icon';

type ButtonGroupProps = {
  previous: () => void;
  goToSlide: (currentSlide: number) => void;
  carouselState: CarouselState;
};

type CarouselState = {
  currentSlide: number;
};

const Carouselitem = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };

  const ButtonGroup = ({ previous, goToSlide, ...rest }: ButtonGroupProps) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group absolute flex justify-between pt-2 w-full text-black -top-1">
        <div
          className={
            currentSlide === 0 ? 'disable' : 'p-2 rounded-full bg-white border border-secondary-500'
          }
          onClick={() => previous()}
        >
          <ArrowLeft classname={'#E6583D'} />
        </div>

        <div
          onClick={() => goToSlide(currentSlide + 1)}
          className="p-2 rounded-full bg-secondary-500"
        >
          <ArrowRight classname={'#ffffff'} />
        </div>
      </div>
    );
  };
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      arrows={false}
      customButtonGroup={
        <ButtonGroup
          previous={function (): void {}}
          goToSlide={function (): void {
            throw new Error('Function not implemented.');
          }}
          carouselState={{
            currentSlide: 0,
          }}
        />
      }
      className="p-0 h-40"
    >
      <div>
        <Image
          src="https://ik.imagekit.io/0xy9wqmrh/tableimage"
          alt="car"
          height={230}
          width={460}
          className="h-auto w-auto"
        />
      </div>
      <div>
        <Image
          src="https://ik.imagekit.io/0xy9wqmrh/tableimage"
          alt="car"
          height={230}
          width={460}
          className="h-auto w-auto"
        />
      </div>
      <div>
        <Image
          src="https://ik.imagekit.io/0xy9wqmrh/tableimage"
          alt="car"
          height={230}
          width={460}
          className="h-auto w-auto"
        />
      </div>
      <div>
        <Image
          src="https://ik.imagekit.io/0xy9wqmrh/tableimage"
          alt="car"
          height={230}
          width={460}
          className="h-auto w-auto"
        />
      </div>
      <div>
        <Image
          src="https://ik.imagekit.io/0xy9wqmrh/tableimage"
          alt="car"
          height={230}
          width={460}
          className="h-auto w-auto"
        />
      </div>
    </Carousel>
  );
};

export default Carouselitem;
