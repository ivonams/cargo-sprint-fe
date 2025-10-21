import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { CargoSprintLogo } from "@/components/branding";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10 p-4">
      <Card className="p-12 max-w-2xl w-full space-y-8 text-center">
        <div className="space-y-4">
          <div className="flex justify-center" data-testid="text-hero-heading">
            <CargoSprintLogo size="xl" />
          </div>
          <p className="text-lg text-primary/80" data-testid="text-hero-subtitle">
            This is the first step—bigger things are on the way.
          </p>
        </div>

        <div className="pt-4">
          <Button
            variant="default"
            asChild
            data-testid="button-playground"
          >
            <Link to="/playground" className="inline-flex items-center gap-2">
              Check design system
              <Rocket className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
