import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "../services/api";

interface IAuthUserProps {
  children: ReactNode;
}

interface IAuthUserProviderData {
  user: IUser | undefined;
  setUser: Dispatch<SetStateAction<IUser | undefined>>;
  isLoading: boolean;
  technologies: ITech[];
  setTechnologies: Dispatch<SetStateAction<ITech[]>>;
  works: IWork[];
  setWorks: Dispatch<SetStateAction<IWork[]>>;
  loginUser: (user: IUserLogin) => void;
  registerUser: (user: IUserRegister) => void;
  isPasswordWrong: boolean;
}

export interface IUserLogin {
  email: string;
  password: string;
}

interface ILoginResponse {
  data: {
    user: IUser;
    token: string;
  };
}

interface ILoginProfileResponse {
  data: IUser;
}

export interface IUserRegister {
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  password: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: ITech[];
  works: IWork[];
  created_at: string;
  updated_at: string;
  avatar_url: string | null;
}

export interface ITech {
  title: string;
  status: string;
  id: string;
  created_at: string;
  updated_at: string;
}

export interface IWork {
  id: string;
  title: string;
  description: string;
  deploy_url: string;
  created_at: string;
  updated_at: string;
}

const AuthUserContext = createContext({} as IAuthUserProviderData);

const AuthUserProvider = ({ children }: IAuthUserProps) => {
  const [user, setUser] = useState<IUser>();
  const [isPasswordWrong, setIsPasswordWrong] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [technologies, setTechnologies] = useState<ITech[]>([]);
  const [works, setWorks] = useState<IWork[]>([]);

  const navigate = useNavigate();

  const loginUser = (data: IUserLogin) => {
    api
      .post("/sessions", data)
      .then((res: ILoginResponse) => {
        setUser(res.data.user);
        window.localStorage.setItem("@kenzihub-token", res.data.token);
        window.localStorage.setItem("@kenzihub-userid", res.data.user.id);
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.data.token}`;

        toast.success(
          "Você será redirecionado para página principal em instantes",
        );

        setIsLoading(false);

        setTimeout(() => {
          navigate("/home", { replace: true });
        }, 1000);
      })
      .catch(() => {
        setIsPasswordWrong(true);
        toast.error("Algum dos campos está incorreto");
      });
  };

  const registerUser = (data: IUserRegister) => {
    api
      .post("/users", data)
      .then(() => {
        toast.success(
          "Você será redirecionado para página de login em instantes",
        );
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1000);
      })
      .catch(() => toast.error("Não foi possível fazer o registro."));
  };

  useEffect(() => {
    const token = localStorage.getItem("@kenzihub-token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    if (token) {
      api
        .get(`/profile`)
        .then((res: ILoginProfileResponse) => {
          setUser(res.data);
          setTechnologies(res.data.techs);
          setWorks(res.data.works);
        })
        .catch(() => {
          localStorage.clear();
          setIsLoading(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      navigate("/", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthUserContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        setTechnologies,
        technologies,
        loginUser,
        registerUser,
        isPasswordWrong,
        works,
        setWorks,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthUserProvider;

export const useAuthUserContext = () => useContext(AuthUserContext);
