import { Button } from "@/components/ui/button";

export default function Playground() {
  return (
    <div className="min-h-screen w-full bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div>
          <h1 className="text-headline-lg-em font-display text-foreground mb-2" data-testid="text-playground-heading">
            Sprint DS Typography System
          </h1>
          <p className="text-body-lg text-muted-foreground">
            A comprehensive typography showcase using Lato for Display/Headline and Roboto for Title/Body/Label text.
          </p>
        </div>

        <section>
          <h2 className="text-headline-md-em font-display text-foreground mb-6">Display (Lato)</h2>
          <div className="space-y-4">
            <div>
              <p className="text-display-lg font-display text-foreground" data-testid="text-display-lg">Display Large</p>
              <p className="text-display-lg-em font-display text-foreground" data-testid="text-display-lg-em">Display Large Emphasized</p>
            </div>
            <div>
              <p className="text-display-md font-display text-foreground" data-testid="text-display-md">Display Medium</p>
              <p className="text-display-md-em font-display text-foreground" data-testid="text-display-md-em">Display Medium Emphasized</p>
            </div>
            <div>
              <p className="text-display-sm font-display text-foreground" data-testid="text-display-sm">Display Small</p>
              <p className="text-display-sm-em font-display text-foreground" data-testid="text-display-sm-em">Display Small Emphasized</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-headline-md-em font-display text-foreground mb-6">Headline (Lato)</h2>
          <div className="space-y-4">
            <div>
              <p className="text-headline-lg font-display text-foreground" data-testid="text-headline-lg">Headline Large</p>
              <p className="text-headline-lg-em font-display text-foreground" data-testid="text-headline-lg-em">Headline Large Emphasized</p>
            </div>
            <div>
              <p className="text-headline-md font-display text-foreground" data-testid="text-headline-md">Headline Medium</p>
              <p className="text-headline-md-em font-display text-foreground" data-testid="text-headline-md-em">Headline Medium Emphasized</p>
            </div>
            <div>
              <p className="text-headline-sm font-display text-foreground" data-testid="text-headline-sm">Headline Small</p>
              <p className="text-headline-sm-em font-display text-foreground" data-testid="text-headline-sm-em">Headline Small Emphasized</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-headline-md-em font-display text-foreground mb-6">Title (Roboto)</h2>
          <div className="space-y-4">
            <div>
              <p className="text-title-lg text-foreground" data-testid="text-title-lg">Title Large</p>
              <p className="text-title-lg-em text-foreground" data-testid="text-title-lg-em">Title Large Emphasized</p>
            </div>
            <div>
              <p className="text-title-md text-foreground" data-testid="text-title-md">Title Medium</p>
              <p className="text-title-md-em text-foreground" data-testid="text-title-md-em">Title Medium Emphasized</p>
            </div>
            <div>
              <p className="text-title-sm text-foreground" data-testid="text-title-sm">Title Small</p>
              <p className="text-title-sm-em text-foreground" data-testid="text-title-sm-em">Title Small Emphasized</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-headline-md-em font-display text-foreground mb-6">Body (Roboto)</h2>
          <div className="space-y-4">
            <div>
              <p className="text-body-lg text-foreground" data-testid="text-body-lg">Body Large - The quick brown fox jumps over the lazy dog. This is regular body text at large size.</p>
              <p className="text-body-lg-em text-foreground" data-testid="text-body-lg-em">Body Large Emphasized - The quick brown fox jumps over the lazy dog. This is emphasized body text at large size.</p>
            </div>
            <div>
              <p className="text-body-md text-foreground" data-testid="text-body-md">Body Medium - The quick brown fox jumps over the lazy dog. This is regular body text at medium size.</p>
              <p className="text-body-md-em text-foreground" data-testid="text-body-md-em">Body Medium Emphasized - The quick brown fox jumps over the lazy dog. This is emphasized body text at medium size.</p>
            </div>
            <div>
              <p className="text-body-sm text-foreground" data-testid="text-body-sm">Body Small - The quick brown fox jumps over the lazy dog. This is regular body text at small size.</p>
              <p className="text-body-sm-em text-foreground" data-testid="text-body-sm-em">Body Small Emphasized - The quick brown fox jumps over the lazy dog. This is emphasized body text at small size.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-headline-md-em font-display text-foreground mb-6">Label (Roboto)</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-label-lg text-muted-foreground" data-testid="text-label-lg">Label Large</p>
              <p className="text-label-lg-em text-muted-foreground" data-testid="text-label-lg-em">Label Large Emphasized</p>
            </div>
            <div className="space-y-2">
              <p className="text-label-md text-muted-foreground" data-testid="text-label-md">Label Medium</p>
              <p className="text-label-md-em text-muted-foreground" data-testid="text-label-md-em">Label Medium Emphasized</p>
            </div>
            <div className="space-y-2">
              <p className="text-label-sm text-muted-foreground" data-testid="text-label-sm">Label Small</p>
              <p className="text-label-sm-em text-muted-foreground" data-testid="text-label-sm-em">Label Small Emphasized</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-headline-md-em font-display text-foreground mb-6">Button Example</h2>
          <Button data-testid="button-example">
            example button
          </Button>
        </section>
      </div>
    </div>
  );
}
