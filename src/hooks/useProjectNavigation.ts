import { useNavigate } from "react-router-dom";
import { useIsMobile } from "../components/ui/use-mobile";

export const useProjectNavigation = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleNavigateBack = () => {
    navigate("/");
  };

  return {
    navigate,
    isMobile,
    handleNavigateBack,
  };
};
