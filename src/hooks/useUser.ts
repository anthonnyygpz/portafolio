import { useEffect, useState } from "react";
import { userApi } from "../lib/endpoints/user";

const useUser = () => {
  const [user, setUser] = useState();
  const [avatar_url, setAvatar_url] = useState();
  const [loading, setLoading] = useState<boolean>(true);

  const getUser = async () => {
    try {
      const data = await userApi();
      setAvatar_url(data.avatar_url);
      setUser(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return { user, avatar_url, loading };
};

export default useUser;
