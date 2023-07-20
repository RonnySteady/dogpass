import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaPaw, FaUserAlt, FaPlusCircle, FaSearch, FaQuestionCircle } from 'react-icons/fa';

const NavBar = ({ theme, toggleTheme }) => {
  const router = useRouter();

  const isActive = (href) => router.pathname === href;

  return (
    <IconContext.Provider value={{ size: '24px' }}>
      <StyledNavbar>
        <NavLink href="/dogs" active={isActive('/dogs')}>
          <FaPaw size={28} color={isActive('/dogs') ? 'orange' : '${({ theme }) => theme.textColor}'} />
        </NavLink>
        <NavLink href="/owner" active={isActive('/owner')}>
          <FaUserAlt color={isActive('/owner') ? 'orange' : '${({ theme }) => theme.textColor}'} />
        </NavLink>
        <NavLink href="/newdog" active={isActive('/newdog')}>
          <FaPlusCircle color={isActive('/search') ? 'orange' : '${({ theme }) => theme.textColor}'} />
        </NavLink>
        <NavLink href="/search" active={isActive('/search')}>
          <FaSearch color={isActive('/search') ? 'orange' : '${({ theme }) => theme.textColor}'} />
        </NavLink>
        <NavLink href="/facts" active={isActive('/facts')}>
          <FaQuestionCircle color={isActive('/facts') ? 'orange' : '${({ theme }) => theme.textColor}'} />
        </NavLink>
      </StyledNavbar>
    </IconContext.Provider>
  );
};

export default NavBar;

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  padding-top: 6px;
  width: 375px;
  height: 50px;
  bottom: 0px;
  z-index: 3;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-top: 0.1px solid ${({ theme }) => theme.borderColor};
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.textColor};
`;



