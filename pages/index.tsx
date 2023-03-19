import styled from 'styled-components';
import { BsApple } from 'react-icons/bs';
import { FaGooglePlay } from 'react-icons/fa';
import { SlArrowDown } from 'react-icons/sl';
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
        <div className='content-wrapper'>
          <div className='content'>
            <h2>
              1500만 반려가구의 행복한 공존
              <br />
              onlypets에서 쉽고 편리하게
            </h2>
            <div className='button-wrapper'>
              <a href='https://apps.apple.com/kr/app/'>
                <BsApple />
                <p> App Store</p>
              </a>
              <a href='https://play.google.com/store/apps/'>
                <FaGooglePlay />
                <p> Google Play</p>
              </a>
            </div>
          </div>
        </div>
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
    height: 600px;
    background: linear-gradient(180deg, white 0%, white 59px, rgba(255, 255, 255, 0) 100%);
  }

  .content-wrapper {
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

    .content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin-top: 200px;

      h2 {
        width: 100%;
        margin-bottom: 50px;
        text-align: center;
        font-size: 55px;
        font-weight: 700;
        line-height: 1.4;
      }

      .button-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;

        a {
          display: flex;
          flex-direction: row;
          padding: 15px 25px;
          border-radius: 70px;
          background-color: rgba(0, 12, 30, 0.8);
          color: #fff;
          font-size: 17px;
          cursor: pointer;

          p {
            margin-left: 10px;
          }
        }

        a:hover {
          background-color: rgb(78, 89, 104);
          color: #fff;
        }

        a + a {
          margin-left: 10px;
        }
      }
    }
  }
`;

export default Home;
