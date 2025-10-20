import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-destructive" data-testid="img-error-icon" />
            <h1 className="text-2xl font-bold text-foreground" data-testid="text-error-heading">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-muted-foreground" data-testid="text-error-message">
            Did you forget to add the page to the router?
          </p>

          <div className="mt-6">
            <Button asChild data-testid="button-home">
              <Link href="/" className="inline-flex items-center gap-2">
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
