import Link from "next/link";
import React from "react";

const NewsPage = () => {
  return (
    <>
      <h2>NewsPage</h2>
      <ul>
        <li>
          <Link href="/news/item1">Item1</Link>
        </li>
        <li>
          <Link href="/news/item2">Item2</Link>
        </li>
        <li>
          <Link href="/news/item3">Item3</Link>
        </li>
        <li>
          <Link href="/news/item4">Item4</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
