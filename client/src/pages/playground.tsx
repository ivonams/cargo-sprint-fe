import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Download, Settings } from "lucide-react";

export default function Playground() {
  return (
    <div className="min-h-screen w-full bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="text-headline-lg-em font-display text-foreground mb-2" data-testid="text-playground-heading">
            CargoSprint DS Component Showcase
          </h1>
          <p className="text-body-lg text-muted-foreground">
            A comprehensive showcase of CargoSprint DS typography system and components.
          </p>
        </div>

        <Tabs defaultValue="typography" className="w-full">
          <TabsList data-testid="tabs-list">
            <TabsTrigger value="typography" data-testid="tab-typography">
              Typography
            </TabsTrigger>
            <TabsTrigger value="buttons" data-testid="tab-buttons">
              Buttons
            </TabsTrigger>
          </TabsList>

          <TabsContent value="typography" className="space-y-12 mt-8" data-testid="tab-content-typography">
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
          </TabsContent>

          <TabsContent value="buttons" className="space-y-8 mt-8" data-testid="tab-content-buttons">
            <section>
              <h2 className="text-headline-md-em font-display text-foreground mb-6">Button Variants</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-title-md-em text-foreground mb-4">Primary (Default Variant)</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="default" data-testid="button-primary">
                      <Plus />
                      Button
                    </Button>
                    <Button variant="default" data-testid="button-primary-text-only">
                      Button
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-title-md-em text-foreground mb-4">Secondary (Outline Variant)</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" data-testid="button-secondary">
                      <Download />
                      Button
                    </Button>
                    <Button variant="outline" data-testid="button-secondary-text-only">
                      Button
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-title-md-em text-foreground mb-4">Tertiary (Ghost Variant)</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="ghost" data-testid="button-tertiary">
                      <Settings />
                      Button
                    </Button>
                    <Button variant="ghost" data-testid="button-tertiary-text-only">
                      Button
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-title-md-em text-foreground mb-4">Sizes</h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm" data-testid="button-size-sm">
                      <Plus />
                      Small
                    </Button>
                    <Button size="default" data-testid="button-size-default">
                      <Plus />
                      Default
                    </Button>
                    <Button size="lg" data-testid="button-size-lg">
                      <Plus />
                      Large
                    </Button>
                    <Button size="icon" data-testid="button-size-icon">
                      <Plus />
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-title-md-em text-foreground mb-4">Disabled State</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="default" disabled data-testid="button-disabled-primary">
                      <Plus />
                      Disabled
                    </Button>
                    <Button variant="outline" disabled data-testid="button-disabled-secondary">
                      <Download />
                      Disabled
                    </Button>
                    <Button variant="ghost" disabled data-testid="button-disabled-tertiary">
                      <Settings />
                      Disabled
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
