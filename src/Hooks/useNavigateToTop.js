import { useNavigate } from "react-router-dom";

const useNavigateToTop = () => {
    
  const navigate = useNavigate();
  const go = (to) => {
    window.scrollTo({ top: 0, behavior: "auto" });
    navigate(to);
  };

  return go;
};

export default useNavigateToTop;
