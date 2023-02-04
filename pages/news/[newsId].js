import { useRouter } from "next/router";
import React from "react";

const DetailsPage = () => {
  const router = useRouter();

  const id = router.query.newsId;

  return <h2>{`DetailsPage for ${id}`}</h2>;
};

export default DetailsPage;
