import { Button } from "@/components/ui/button";

export default function Playground() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-foreground" data-testid="text-playground-heading">
          Welcome to the playground
        </h1>
        <Button data-testid="button-example">
          example button
        </Button>
      </div>
    </div>
  );
}
