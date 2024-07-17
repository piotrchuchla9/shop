import Link from "next/link";

const WelcomePage = () => {
  return (
    <div className="bg-transparent">
      <h1 className="bg-red-200">Welcome to My Shop!</h1>
      <Link href="/login">login</Link>
    </div>
  );
};

export default WelcomePage;