import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Download, Settings, ArrowLeft, Terminal, AlertCircle, User } from "lucide-react";
import { sprintDSColorsHSL } from "@shared/sprint-ds-colors-hsl";
import { CargoSprintLogo, CargoSprintSymbol, SprintPayLogo, EModalLogo, SprintPassLogo, SprintPortLogo } from "@/components/branding";
import { Link } from "react-router-dom";

export default function Playground() {
  return (
    <div className="min-h-screen w-full bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <Button
          variant="ghost"
          asChild
          className="mb-4"
          data-testid="button-back"
        >
          <Link to="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        
        <div>
          <h1 className="text-headline-lg-em font-display text-foreground mb-2" data-testid="text-playground-heading">
            CargoSprint DS Component Showcase
          </h1>
          <p className="text-body-lg text-muted-foreground">
            A comprehensive showcase of CargoSprint DS typography system and components.
          </p>
        </div>

        <Tabs defaultValue="colors" className="w-full">
          <TabsList data-testid="tabs-list">
            <TabsTrigger value="colors" data-testid="tab-colors">
              Colors
            </TabsTrigger>
            <TabsTrigger value="typography" data-testid="tab-typography">
              Typography
            </TabsTrigger>
            <TabsTrigger value="buttons" data-testid="tab-buttons">
              Buttons
            </TabsTrigger>
            <TabsTrigger value="badges" data-testid="tab-badges">
              Badges
            </TabsTrigger>
            <TabsTrigger value="components" data-testid="tab-components">
              Components
            </TabsTrigger>
            <TabsTrigger value="branding" data-testid="tab-branding">
              Branding
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

          <TabsContent value="badges" className="space-y-8 mt-8" data-testid="tab-content-badges">
            <section>
              <h2 className="text-headline-md-em font-display text-foreground mb-4">Badges</h2>
              <p className="text-body-md text-muted-foreground mb-6">
                Small status indicators with soft pastel backgrounds.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-title-md-em text-foreground mb-4">All Variants</h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="info">Label</Badge>
                    <Badge variant="error">Label</Badge>
                    <Badge variant="neutral">Label</Badge>
                    <Badge variant="success">Label</Badge>
                    <Badge variant="outline">Label</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-title-md-em text-foreground mb-4">Examples</h3>
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-body-md">Status:</span>
                      <Badge variant="success">Active</Badge>
                      <Badge variant="error">Failed</Badge>
                      <Badge variant="neutral">Pending</Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-body-md">Notifications:</span>
                      <Badge variant="info">5</Badge>
                      <Badge variant="info">99+</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="components" className="space-y-12 mt-8" data-testid="tab-content-components">
            <section>
              <h2 className="text-headline-md-em font-display text-foreground mb-4">Accordion</h2>
              <p className="text-body-md text-muted-foreground mb-6">
                A collapsible component to organize content in expandable sections.
              </p>
              <div className="max-w-2xl">
                <Accordion type="single" collapsible className="w-full" data-testid="component-accordion">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern and uses semantic HTML.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It comes with default styles that can be customized to match your design system.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It includes smooth animations for opening and closing content sections.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </section>

            <section>
              <h2 className="text-headline-md-em font-display text-foreground mb-4">Alert Dialog</h2>
              <p className="text-body-md text-muted-foreground mb-6">
                A modal dialog that interrupts the user with important content and expects a response.
              </p>
              <div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" data-testid="component-alert-dialog-trigger">Show Alert Dialog</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent data-testid="component-alert-dialog-content">
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </section>

            <section>
              <h2 className="text-headline-md-em font-display text-foreground mb-4">Alert</h2>
              <p className="text-body-md text-muted-foreground mb-6">
                Displays a callout for user attention with different variants for various message types.
              </p>
              <div className="space-y-4 max-w-2xl">
                <Alert data-testid="component-alert-default">
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    You can add components to your app using the cli.
                  </AlertDescription>
                </Alert>
                
                <Alert variant="destructive" data-testid="component-alert-destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Your session has expired. Please log in again.
                  </AlertDescription>
                </Alert>
              </div>
            </section>

            <section>
              <h2 className="text-headline-md-em font-display text-foreground mb-4">Aspect Ratio</h2>
              <p className="text-body-md text-muted-foreground mb-6">
                Maintains a consistent aspect ratio for responsive media content.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <div>
                  <h3 className="text-title-sm-em text-foreground mb-3">16:9 (Video)</h3>
                  <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg" data-testid="component-aspect-ratio-16-9">
                    <div className="flex items-center justify-center h-full text-muted-foreground text-body-md">
                      16:9 Aspect Ratio
                    </div>
                  </AspectRatio>
                </div>
                <div>
                  <h3 className="text-title-sm-em text-foreground mb-3">1:1 (Square)</h3>
                  <AspectRatio ratio={1} className="bg-muted rounded-lg" data-testid="component-aspect-ratio-1-1">
                    <div className="flex items-center justify-center h-full text-muted-foreground text-body-md">
                      1:1 Aspect Ratio
                    </div>
                  </AspectRatio>
                </div>
                <div>
                  <h3 className="text-title-sm-em text-foreground mb-3">4:3 (Standard)</h3>
                  <AspectRatio ratio={4 / 3} className="bg-muted rounded-lg" data-testid="component-aspect-ratio-4-3">
                    <div className="flex items-center justify-center h-full text-muted-foreground text-body-md">
                      4:3 Aspect Ratio
                    </div>
                  </AspectRatio>
                </div>
                <div>
                  <h3 className="text-title-sm-em text-foreground mb-3">21:9 (Ultrawide)</h3>
                  <AspectRatio ratio={21 / 9} className="bg-muted rounded-lg" data-testid="component-aspect-ratio-21-9">
                    <div className="flex items-center justify-center h-full text-muted-foreground text-body-md">
                      21:9 Aspect Ratio
                    </div>
                  </AspectRatio>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-headline-md-em font-display text-foreground mb-4">Avatar</h2>
              <p className="text-body-md text-muted-foreground mb-6">
                Displays user profile pictures or initials in a circular container.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-title-md-em text-foreground mb-4">With Image</h3>
                  <div className="flex items-center gap-4">
                    <Avatar data-testid="component-avatar-image">
                      <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>

                <div>
                  <h3 className="text-title-md-em text-foreground mb-4">With Fallback</h3>
                  <div className="flex items-center gap-4">
                    <Avatar data-testid="component-avatar-fallback">
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback className="bg-primary-90 text-primary-10">CS</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="branding" className="space-y-12 mt-8" data-testid="tab-content-branding">
            <section>
              <h2 className="text-headline-md-em font-display text-foreground mb-4">CargoSprint Branding</h2>
              <p className="text-body-md text-muted-foreground mb-8">
                Theme-aware branding components that automatically adapt to light and dark modes.
              </p>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-title-lg-em text-foreground mb-6">Main Logo</h3>
                  <div className="flex flex-wrap items-center gap-8">
                    <div className="space-y-2">
                      <CargoSprintLogo size="xl" data-testid="branding-cargosprint-xl" />
                      <p className="text-label-sm text-muted-foreground">Extra Large</p>
                    </div>
                    <div className="space-y-2">
                      <CargoSprintLogo size="lg" data-testid="branding-cargosprint-lg" />
                      <p className="text-label-sm text-muted-foreground">Large</p>
                    </div>
                    <div className="space-y-2">
                      <CargoSprintLogo size="md" data-testid="branding-cargosprint-md" />
                      <p className="text-label-sm text-muted-foreground">Medium</p>
                    </div>
                    <div className="space-y-2">
                      <CargoSprintLogo size="sm" data-testid="branding-cargosprint-sm" />
                      <p className="text-label-sm text-muted-foreground">Small</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-title-lg-em text-foreground mb-6">Symbol / Icon</h3>
                  <div className="flex flex-wrap items-center gap-8">
                    <div className="space-y-2">
                      <CargoSprintSymbol size="xl" data-testid="branding-symbol-xl" />
                      <p className="text-label-sm text-muted-foreground">Extra Large</p>
                    </div>
                    <div className="space-y-2">
                      <CargoSprintSymbol size="lg" data-testid="branding-symbol-lg" />
                      <p className="text-label-sm text-muted-foreground">Large</p>
                    </div>
                    <div className="space-y-2">
                      <CargoSprintSymbol size="md" data-testid="branding-symbol-md" />
                      <p className="text-label-sm text-muted-foreground">Medium</p>
                    </div>
                    <div className="space-y-2">
                      <CargoSprintSymbol size="sm" data-testid="branding-symbol-sm" />
                      <p className="text-label-sm text-muted-foreground">Small</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-title-lg-em text-foreground mb-6">Product Logos</h3>
                  <p className="text-body-sm text-muted-foreground mb-6">
                    CargoSprint product family logos with automatic theme support.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <SprintPayLogo size="lg" data-testid="branding-sprintpay" />
                      <p className="text-label-md text-muted-foreground">SprintPay</p>
                    </div>
                    <div className="space-y-3">
                      <EModalLogo size="lg" data-testid="branding-emodal" />
                      <p className="text-label-md text-muted-foreground">eModal</p>
                    </div>
                    <div className="space-y-3">
                      <SprintPassLogo size="lg" data-testid="branding-sprintpass" />
                      <p className="text-label-md text-muted-foreground">SprintPass</p>
                    </div>
                    <div className="space-y-3">
                      <SprintPortLogo size="lg" data-testid="branding-sprintport" />
                      <p className="text-label-md text-muted-foreground">SprintPort</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="colors" className="space-y-8 mt-8" data-testid="tab-content-colors">
            <section>
              <h2 className="text-headline-md-em font-display text-foreground mb-4">Color Palettes</h2>
              <p className="text-body-md text-muted-foreground mb-6">
                CargoSprint DS provides complete color scales from 0 (darkest) to 100 (lightest) for all palettes.
                Use utilities like <code className="text-label-sm bg-muted px-2 py-1 rounded">bg-primary-50</code> or <code className="text-label-sm bg-muted px-2 py-1 rounded">text-success-40</code>.
              </p>
            </section>

            <ColorPalette
              name="Primary"
              description="Teal/Cyan - Core brand identity"
              scales={[100, 99, 98, 95, 90, 80, 70, 60, 50, 40, 35, 30, 25, 20, 15, 10, 5, 0]}
              colorClass="primary"
            />

            <ColorPalette
              name="Secondary"
              description="Blue - Supporting elements"
              scales={[100, 99, 98, 95, 90, 80, 70, 60, 50, 40, 35, 30, 25, 20, 15, 10, 5, 0]}
              colorClass="secondary"
            />

            <ColorPalette
              name="Tertiary"
              description="Green - Additional UI elements"
              scales={[100, 99, 98, 95, 90, 80, 70, 60, 50, 40, 35, 30, 25, 20, 15, 10, 5, 0]}
              colorClass="tertiary"
            />

            <ColorPalette
              name="Error"
              description="Red - Error states and destructive actions"
              scales={[100, 99, 98, 95, 90, 80, 70, 60, 50, 40, 35, 30, 25, 20, 15, 10, 5, 0]}
              colorClass="error"
            />

            <ColorPalette
              name="Success"
              description="Green - Success states and confirmations"
              scales={[100, 99, 98, 95, 90, 80, 70, 60, 50, 40, 35, 30, 25, 20, 15, 10, 5, 0]}
              colorClass="success"
            />

            <ColorPalette
              name="Warning"
              description="Orange/Amber - Warning states and caution"
              scales={[100, 99, 98, 95, 90, 80, 70, 60, 50, 40, 35, 30, 25, 20, 15, 10, 5, 0]}
              colorClass="warning"
            />

            <ColorPalette
              name="Info"
              description="Blue - Informational states"
              scales={[100, 99, 98, 95, 90, 80, 70, 60, 50, 40, 35, 30, 25, 20, 15, 10, 5, 0]}
              colorClass="info"
            />

            <ColorPalette
              name="Neutral"
              description="Grays - Text, backgrounds, and structural elements"
              scales={[100, 99, 98, 95, 90, 80, 70, 60, 50, 40, 35, 30, 25, 20, 15, 10, 5, 0]}
              colorClass="neutral"
            />

            <ColorPalette
              name="Neutral Variant"
              description="Subtle backgrounds and dividers"
              scales={[100, 99, 98, 95, 90, 80, 70, 60, 50, 40, 35, 30, 25, 20, 15, 10, 5, 0]}
              colorClass="neutral-variant"
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function ColorPalette({ name, description, scales, colorClass }: {
  name: string;
  description: string;
  scales: number[];
  colorClass: string;
}) {
  const getColorValue = (scale: number): string => {
    const paletteMap: Record<string, keyof typeof sprintDSColorsHSL> = {
      'primary': 'primary',
      'secondary': 'secondary',
      'tertiary': 'tertiary',
      'error': 'error',
      'success': 'success',
      'warning': 'warning',
      'info': 'info',
      'neutral': 'neutral',
      'neutral-variant': 'neutralVariants',
    };
    
    const palette = paletteMap[colorClass];
    if (!palette) return '0 0% 50%';
    
    return sprintDSColorsHSL[palette][scale as keyof typeof sprintDSColorsHSL.primary];
  };

  return (
    <section>
      <h3 className="text-title-lg-em text-foreground mb-2">{name}</h3>
      <p className="text-body-sm text-muted-foreground mb-4">{description}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {scales.map((scale) => {
          const hslValue = getColorValue(scale);
          const isLight = scale >= 90;
          
          return (
            <div
              key={scale}
              className="flex flex-col items-center"
              data-testid={`color-${colorClass}-${scale}`}
            >
              <div
                className="w-16 h-16 rounded-md border border-border mb-2"
                style={{
                  backgroundColor: `hsl(${hslValue})`,
                }}
              />
              <span className={`text-label-sm font-medium ${isLight ? 'text-foreground' : 'text-muted-foreground'}`}>
                {scale}
              </span>
              <code className="text-label-sm text-muted-foreground">
                {colorClass}-{scale}
              </code>
            </div>
          );
        })}
      </div>
    </section>
  );
}
