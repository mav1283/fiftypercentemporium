import { CartLink, Logo, SearchArea } from './index';

function Header(){

    return (
        <header className="App-header">
            <Logo />
            <SearchArea />
            <CartLink />
        </header>      
    )
}

export default Header;