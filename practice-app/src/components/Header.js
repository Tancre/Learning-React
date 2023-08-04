import Image from "./Image";

const Header = (props) => {
    return (
        <header>
        <Image src={props.src} />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
    );
}

export default Header;