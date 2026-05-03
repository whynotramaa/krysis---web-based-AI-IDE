import { DotmSquare2 } from "@/components/ui/dotm-square-2";

export const AuthLoadingView = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <DotmSquare2
        size={32}
        dotSize={3}
        speed={1.4}
        opacityBase={0.1}
        opacityMid={0.4}
        opacityPeak={0.95}
      />
    </div>
  );
};
