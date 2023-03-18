import styled from 'styled-components';
import Image from 'next/image';
import main from '../assets/main.png';

const Home = () => {
  return (
    <Positioner>
      <MainScreen>
        <div className='image-wrapper'>
          <Image alt='main' src={main} className='image' />
        </div>
        <div className='background' />
        {/* <div className='content-wrapper'></div> */}
      </MainScreen>
    </Positioner>
  );
};

const Positioner = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const MainScreen = styled.div`
  position: relative;

  .image-wrapper {
    width: auto;
    height: 100vh;

    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 500px;
    background: linear-gradient(180deg, white 0%, white 59px, rgba(255, 255, 255, 0) 100%);
  }
`;

export default Home;
