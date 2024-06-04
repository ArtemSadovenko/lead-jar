import { useNavigate } from "react-router-dom";
import { AuthenticatedUserDatabase, UsersDatabase } from "../backend/Database";
import Login from "../domain/Login";

import useRunOnce from "../hooks/userRunOnce";

function Home() {
  const navigator = useNavigate();
  const lsystem = new Login(new UsersDatabase(), new AuthenticatedUserDatabase())
  
  useRunOnce({
    fn: () => {
      const auth = lsystem.isAuthenticated()
      if (auth === null)
        navigator("/login")
      else
        navigator("/dashboard/leads")
    }
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default Home
