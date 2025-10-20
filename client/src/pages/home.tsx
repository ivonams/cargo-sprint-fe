import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10 p-4">
      <Card className="p-12 max-w-2xl w-full space-y-8 text-center">
        <div className="flex justify-center">
          <div className="h-16 w-16 animate-spin-slow" data-testid="img-react-logo">
            <svg viewBox="-11.5 -10.23174 23 20.46348" className="text-primary">
              <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
              <g stroke="currentColor" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2"/>
                <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
              </g>
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent" data-testid="text-hero-heading">
            Hello World
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="text-hero-subtitle">
            A simple React TypeScript boilerplate app
          </p>
        </div>

        <div className="space-y-3 text-left max-w-md mx-auto">
          <div className="flex items-start gap-3" data-testid="text-instruction-start">
            <div className="h-2 w-2 rounded-full bg-primary mt-2" data-testid="marker-dot-start" />
            <p className="text-sm text-foreground">
              Get started: <code className="px-2 py-1 bg-muted rounded text-xs font-mono" data-testid="text-command-dev">npm run dev</code>
            </p>
          </div>
          <div className="flex items-start gap-3" data-testid="text-instruction-edit">
            <div className="h-2 w-2 rounded-full bg-primary mt-2" data-testid="marker-dot-edit" />
            <p className="text-sm text-foreground">
              Edit: <code className="px-2 py-1 bg-muted rounded text-xs font-mono" data-testid="text-command-edit">client/src/pages/home.tsx</code>
            </p>
          </div>
          <div className="flex items-start gap-3" data-testid="text-instruction-build">
            <div className="h-2 w-2 rounded-full bg-primary mt-2" data-testid="marker-dot-build" />
            <p className="text-sm text-foreground">
              Build: <code className="px-2 py-1 bg-muted rounded text-xs font-mono" data-testid="text-command-build">npm run build</code>
            </p>
          </div>
        </div>

        <div className="pt-4">
          <Button
            variant="default"
            asChild
            data-testid="button-view-docs"
          >
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              View Documentation
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </Card>
    </div>
  );
}
