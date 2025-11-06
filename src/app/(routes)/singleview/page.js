import Link from "next/link";

const test = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1>Single View Page</h1>
      <Link href="/">Go back to Home</Link>
    </div>
  );
};

export default test;
