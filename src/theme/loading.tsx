import { Loader2 } from "lucide-react";
const Loading = () => {
  return (
    <div className="overlay">
      <Loader2 size={40} className="animate-spin" />
    </div>
  );
};

export default Loading;
