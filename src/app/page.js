import Counter from "@/components/Counter/Counter";
import Link from "next/link";

const HomePage = () => {
  
  // console.log('hello world');
  // throw new error()
  return (
    <div>
      <h1>This is Next app</h1>
      <Counter />
      <Link href="/about">
      <button className="btn btn-accent">about</button>
      </Link>
      <Link href="/news">
      <button className="btn btn-accent">news</button>
      </Link>
    </div>
  );
};

export default HomePage;