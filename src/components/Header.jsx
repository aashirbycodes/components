

const Header = ({username, showDummyAlert}) =>{
    return(
        <div>
            <h1>Hello {username}</h1>
            <button onClick={showDummyAlert}>Click me </button>
            Header I am from Header Component working fine
        </div>
    );
};

export default Header;


