import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ooooops ...</h1>
      <h2>That page does not exist.</h2>
      <p>
        Go back to{" "}
        <Link href={"/"}>
          <u>Home Page</u>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
