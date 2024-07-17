import Link from "next/link";

const WelcomePage = () => {
    return (
      <div>
        <h1>Welcome to My Shop!</h1>
        <Link href="/login">login</Link>
      </div>
    );
  };
  
  export default WelcomePage;