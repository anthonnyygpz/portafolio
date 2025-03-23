import { useEffect, useState } from "react";
import { repoApi } from "../lib/endpoints/repo";

const useTitleMain = () => {
  const [repo, setRepo] = useState();
  const [loading, setLoading] = useState<boolean>(true);

  const getRepo = async () => {
    try {
      const data = await repoApi();
      setRepo(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRepo();
  }, []);
  return { repo, loading };
};

export default useTitleMain;
