import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { BsApple } from 'react-icons/bs';
import { FaGooglePlay } from 'react-icons/fa';
import Image from 'next/image';
import main from '../assets/main.png';

const Home = () => {
  const scrollRef = useRef<any>();

  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  const scrollDown = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Container>
      <MainSection>
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
            <div className='scroll-wrapper'>
              <button onClick={scrollDown}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </MainScreen>
        <SubScreen ref={scrollRef}>
          <p className='desc'>
            내 사진첩 속 잠들어 있던, <br /> 나의 반려동물의 모든 순간을 onlypets에 기록하세요. <br /> onlypets와 함께라면 당신의 일상이 새로워질 거예요.
          </p>
        </SubScreen>
      </MainSection>
    </Container>
  );
};

const Container = styled.div``;

const MainSection = styled.section`
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
      margin-top: 250px;

      h2 {
        width: 100%;
        margin-bottom: 70px;
        text-align: center;
        font-size: 60px;
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

  .down-button {
    margin-bottom: 30px;
    padding: 0;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;

    svg {
      color: gray;
      font-size: 30px;
    }
  }

  .scroll-wrapper {
    position: relative;
    margin-bottom: 100px;

    button {
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
    }

    button span {
      position: absolute;
      top: 0;
      left: 50%;
      width: 24px;
      height: 24px;
      margin-left: -12px;
      border-left: 1px solid #000;
      border-bottom: 1px solid #000;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      -webkit-animation: scroll 2s infinite;
      animation: scroll 2s infinite;
      opacity: 0;
      box-sizing: border-box;
    }

    button span:nth-of-type(1) {
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
    }

    button span:nth-of-type(2) {
      top: 16px;
      -webkit-animation-delay: 0.15s;
      animation-delay: 0.15s;
    }

    button span:nth-of-type(3) {
      top: 32px;
      -webkit-animation-delay: 0.3s;
      animation-delay: 0.3s;
    }

    @-webkit-keyframes scroll {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    @keyframes scroll {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
`;

const SubScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 250px 0;
  background: #f9fafb;

  .desc {
    margin-bottom: 50px;
    color: #191f28;
    text-align: center;
    font-size: 35px;
    font-weight: 700;
    line-height: 1.6;
  }
`;

export default Home;
