import Link from 'next/link';
import styled from 'styled-components';

const menuList = [{ name: '팀원 소개', path: '/introduce' }];

const Header = () => {
  return (
    <Container>
      <div className='inner-container'>
        <Link href='/' className='header-name'>
          onlypets
        </Link>
        <span className='nav-tab'>
          {menuList.map(menu => {
            return (
              <Link key={menu.name} href={menu.path} className='menu'>
                {menu.name}
              </Link>
            );
          })}
        </span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 59px;
  border-bottom: 1px solid #e5e8eb;
  background-color: #fff;

  .inner-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1140px;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px;

    .header-name {
      font-size: 2rem;
      color: #e27b3f;
    }

    .nav-tab {
      align-items: center;

      .menu {
        transition: 0.2s;

        &:hover {
          color: #e27b3f;
        }
      }
    }
  }
`;

export default Header;
