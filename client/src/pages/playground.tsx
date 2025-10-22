import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import { Plus, Download, Settings, Terminal, AlertCircle, Bell, Check, ChevronsUpDown, Calendar as CalendarIcon, User, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { sprintDSColorsHSL } from "@shared/sprint-ds-colors-hsl";
import { CargoSprintLogo, CargoSprintSymbol, SprintPayLogo, EModalLogo, SprintPassLogo, SprintPortLogo } from "@/components/branding";
import { Link } from "react-router-dom";

function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  return (
    <div className="flex flex-col gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        data-testid="component-calendar-single"
      />
      {date && (
        <p className="text-body-sm text-muted-foreground">
          Selected: {date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      )}
    </div>
  );
}

function CalendarRangeDemo() {
  const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({
    from: new Date(),
    to: undefined
  });
  
  return (
    <div className="flex flex-col gap-4">
      <Calendar
        mode="range"
        selected={dateRange}
        onSelect={(range) => setDateRange(range || { from: undefined, to: undefined })}
        className="rounded-md border"
        numberOfMonths={2}
        data-testid="component-calendar-range"
      />
      {dateRange?.from && (
        <p className="text-body-sm text-muted-foreground">
          {dateRange.to ? (
            <>
              From: {dateRange.from.toLocaleDateString()} - To: {dateRange.to.toLocaleDateString()}
            </>
          ) : (
            <>From: {dateRange.from.toLocaleDateString()}</>
          )}
        </p>
      )}
    </div>
  );
}

function ChartDemo() {
  const chartData = [
    { month: "Jan", desktop: 186 },
    { month: "Feb", desktop: 305 },
    { month: "Mar", desktop: 237 },
    { month: "Apr", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "Jun", desktop: 214 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--primary))",
    },
  };

  return (
    <ChartContainer config={chartConfig} className="max-w-2xl h-[300px]" data-testid="component-chart">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
      </BarChart>
    </ChartContainer>
  );
}

function CollapsibleDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="max-w-md space-y-2"
      data-testid="component-collapsible"
    >
      <div className="flex items-center justify-between space-x-4">
        <h4 className="text-body-md font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 text-body-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 text-body-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 text-body-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default function Playground() {
  return (
    <div className="min-h-screen w-full bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <Breadcrumb data-testid="breadcrumb">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Playground</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
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
            <TabsTrigger value="branding" data-testid="tab-branding">
              Branding
            </TabsTrigger>
            <TabsTrigger value="components" data-testid="tab-components">
              Components
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
                Displays user profile pictures, initials, or grouped avatars in a circular container.
              </p>
              <div className="space-y-8">
                <div>
                  <h3 className="text-title-md-em text-foreground mb-4">Photo Avatars</h3>
                  <div className="flex items-center gap-6">
                    <div className="space-y-2">
                      <Avatar 
                        size="md" 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
                        alt="User"
                        data-testid="component-avatar-photo-md"
                      />
                      <p className="text-label-sm text-muted-foreground">Medium (40px)</p>
                    </div>
                    <div className="space-y-2">
                      <Avatar 
                        size="sm" 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
                        alt="User"
                        data-testid="component-avatar-photo-sm"
                      />
                      <p className="text-label-sm text-muted-foreground">Small (24px)</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-title-md-em text-foreground mb-4">Basic Avatars (Letters)</h3>
                  <p className="text-body-sm text-muted-foreground mb-4">
                    Colors are automatically assigned based on the name for consistent identification.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-label-md text-muted-foreground mb-3">Medium (40px)</p>
                      <div className="flex items-center gap-4">
                        <Avatar size="md" name="Alice" data-testid="component-avatar-basic-alice" />
                        <Avatar size="md" name="Bob" />
                        <Avatar size="md" name="Charlie" />
                        <Avatar size="md" name="Diana" />
                        <Avatar size="md" name="Eve" />
                        <Avatar size="md" name="Frank" />
                        <Avatar size="md" name="Grace" />
                      </div>
                    </div>
                    <div>
                      <p className="text-label-md text-muted-foreground mb-3">Small (24px)</p>
                      <div className="flex items-center gap-4">
                        <Avatar size="sm" name="Alice" data-testid="component-avatar-basic-alice-sm" />
                        <Avatar size="sm" name="Bob" />
                        <Avatar size="sm" name="Charlie" />
                        <Avatar size="sm" name="Diana" />
                        <Avatar size="sm" name="Eve" />
                        <Avatar size="sm" name="Frank" />
                        <Avatar size="sm" name="Grace" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-title-md-em text-foreground mb-4">Avatar Groups</h3>
                  <p className="text-body-sm text-muted-foreground mb-4">
                    Multiple avatars displayed with overlap to show team members or collaborators.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-label-md text-muted-foreground mb-3">Medium (40px)</p>
                      <div className="flex flex-col gap-4">
                        <AvatarGroup 
                          size="md"
                          avatars={[
                            { name: "Alice" },
                            { name: "George" },
                          ]}
                          data-testid="component-avatar-group-2-md"
                        />
                        <AvatarGroup 
                          size="md"
                          avatars={[
                            { name: "Alice" },
                            { name: "Bob" },
                            { name: "Charlie" },
                          ]}
                        />
                        <AvatarGroup 
                          size="md"
                          avatars={[
                            { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop", alt: "User 1" },
                            { name: "Alice" },
                            { name: "Bob" },
                            { name: "Charlie" },
                          ]}
                        />
                        <AvatarGroup 
                          size="md"
                          avatars={[
                            { name: "Alice" },
                            { name: "Bob" },
                            { name: "Charlie" },
                            { name: "Diana" },
                            { name: "Eve" },
                          ]}
                          max={3}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-label-md text-muted-foreground mb-3">Small (24px)</p>
                      <div className="flex flex-col gap-4">
                        <AvatarGroup 
                          size="sm"
                          avatars={[
                            { name: "Alice" },
                            { name: "George" },
                          ]}
                          data-testid="component-avatar-group-2-sm"
                        />
                        <AvatarGroup 
                          size="sm"
                          avatars={[
                            { name: "Alice" },
                            { name: "Bob" },
                            { name: "Charlie" },
                          ]}
                        />
                        <AvatarGroup 
                          size="sm"
                          avatars={[
                            { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop", alt: "User 1" },
                            { name: "Alice" },
                            { name: "Bob" },
                            { name: "Charlie" },
                          ]}
                        />
                        <AvatarGroup 
                          size="sm"
                          avatars={[
                            { name: "Alice" },
                            { name: "Bob" },
                            { name: "Charlie" },
                            { name: "Diana" },
                            { name: "Eve" },
                          ]}
                          max={3}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

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

            <section>
              <h2 className="text-headline-md-em font-display text-foreground mb-4">Breadcrumb</h2>
              <p className="text-body-md text-muted-foreground mb-6">
                Displays navigation hierarchy to help users understand their current location.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-title-md-em text-foreground mb-4">Basic Breadcrumb</h3>
                  <Breadcrumb data-testid="component-breadcrumb-basic">
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                          <Link to="/">Home</Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Playground</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>

                <div>
                  <h3 className="text-title-md-em text-foreground mb-4">Multi-level Breadcrumb</h3>
                  <Breadcrumb data-testid="component-breadcrumb-multilevel">
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                          <Link to="/">Home</Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                          <Link to="/playground">Components</Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                          <Link to="/playground">Navigation</Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>

                <div>
                  <h3 className="text-title-md-em text-foreground mb-4">With Custom Separator</h3>
                  <Breadcrumb data-testid="component-breadcrumb-custom">
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                          <Link to="/">Home</Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator>/</BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                          <Link to="/playground">Components</Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator>/</BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </div>
            </section>

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

            <section>
              <h2 className="text-headline-md-em font-display text-foreground mb-4">Calendar</h2>
              <p className="text-body-md text-muted-foreground mb-6">
                A date picker component for selecting dates with a visual calendar interface.
              </p>
              <div className="space-y-8">
                <div>
                  <h3 className="text-title-md-em text-foreground mb-4">Single Date Selection</h3>
                  <CalendarDemo />
                </div>

                <div>
                  <h3 className="text-title-md-em text-foreground mb-4">Date Range Selection</h3>
                  <CalendarRangeDemo />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-headline-md-em font-display text-foreground mb-4">Card</h2>
              <p className="text-body-md text-muted-foreground mb-6">
                A flexible container for grouping related content and actions with multiple style variants.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-title-md-em text-foreground mb-4">Card Variants</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="space-y-2">
                      <Card variant="default" data-testid="component-card-default" className="h-32" />
                      <p className="text-label-md text-center">Default</p>
                      <p className="text-label-sm text-muted-foreground text-center">Subtle shadow</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Card variant="hover" data-testid="component-card-hover" className="h-32" />
                      <p className="text-label-md text-center">Hover</p>
                      <p className="text-label-sm text-muted-foreground text-center">Elevated shadow</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Card variant="color" data-testid="component-card-color" className="h-32" />
                      <p className="text-label-md text-center">Color</p>
                      <p className="text-label-sm text-muted-foreground text-center">Light background</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Card variant="flat" data-testid="component-card-flat" className="h-32" />
                      <p className="text-label-md text-center">Flat</p>
                      <p className="text-label-sm text-muted-foreground text-center">Border only</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-title-md-em text-foreground mb-4">Card Examples</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card variant="default">
                      <CardHeader>
                        <CardTitle>Default Card</CardTitle>
                        <CardDescription>Card with subtle shadow for standard content.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-body-md">This is the default card style with a subtle shadow that works well for most use cases.</p>
                      </CardContent>
                    </Card>

                    <Card variant="hover">
                      <CardHeader>
                        <CardTitle>Hover Card</CardTitle>
                        <CardDescription>Card with elevated shadow for interactive elements.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-body-md">This card has a stronger shadow that enhances on hover, perfect for clickable cards.</p>
                      </CardContent>
                      <CardFooter className="gap-2">
                        <Button variant="outline" size="sm">Cancel</Button>
                        <Button size="sm">Confirm</Button>
                      </CardFooter>
                    </Card>

                    <Card variant="color">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Bell className="h-5 w-5 text-primary-50" />
                          <CardTitle>Color Card</CardTitle>
                        </div>
                        <CardDescription>Card with light background for emphasis.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="h-2 w-2 rounded-full bg-primary-50 mt-2" />
                          <div>
                            <p className="text-body-sm font-medium">New message from Alice</p>
                            <p className="text-body-sm text-muted-foreground">2 minutes ago</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="h-2 w-2 rounded-full bg-primary-50 mt-2" />
                          <div>
                            <p className="text-body-sm font-medium">Project update available</p>
                            <p className="text-body-sm text-muted-foreground">1 hour ago</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card variant="flat">
                      <CardHeader>
                        <CardTitle>Flat Card</CardTitle>
                        <CardDescription>Minimal card with border only.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-body-md text-muted-foreground">Total Tasks</span>
                          <span className="text-title-md-em">48</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-body-md text-muted-foreground">Completed</span>
                          <div className="flex items-center gap-2">
                            <span className="text-title-md-em">32</span>
                            <Badge variant="success">67%</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-headline-md-em font-display text-foreground mb-4">Carousel</h2>
              <p className="text-body-md text-muted-foreground mb-6">
                A carousel component for cycling through elements like images or cards.
              </p>
              <div className="max-w-xl mx-auto">
                <Carousel className="w-full" data-testid="component-carousel">
                  <CarouselContent>
                    <CarouselItem>
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <div className="text-center">
                            <p className="text-display-sm font-display text-primary-40">1</p>
                            <p className="text-body-md text-muted-foreground mt-2">First slide</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                    <CarouselItem>
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <div className="text-center">
                            <p className="text-display-sm font-display text-secondary-40">2</p>
                            <p className="text-body-md text-muted-foreground mt-2">Second slide</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                    <CarouselItem>
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <div className="text-center">
                            <p className="text-display-sm font-display text-tertiary-40">3</p>
                            <p className="text-body-md text-muted-foreground mt-2">Third slide</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </section>

            <section>
              <h2 className="text-headline-md-em font-display text-foreground mb-4">Chart</h2>
              <p className="text-body-md text-muted-foreground mb-6">
                A chart component for visualizing data using Recharts library.
              </p>
              <ChartDemo />
            </section>

            <section>
              <h2 className="text-headline-md-em font-display text-foreground mb-4">Checkbox</h2>
              <p className="text-body-md text-muted-foreground mb-6">
                A checkbox component for binary choices or multi-select options.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-title-md-em text-foreground mb-4">Basic Checkboxes</h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" data-testid="component-checkbox-1" />
                      <label
                        htmlFor="terms"
                        className="text-body-md leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Accept terms and conditions
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="marketing" defaultChecked data-testid="component-checkbox-2" />
                      <label
                        htmlFor="marketing"
                        className="text-body-md leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Receive marketing emails
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="disabled" disabled />
                      <label
                        htmlFor="disabled"
                        className="text-body-md leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Disabled checkbox
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-headline-md-em font-display text-foreground mb-4">Collapsible</h2>
              <p className="text-body-md text-muted-foreground mb-6">
                A collapsible component for showing and hiding content.
              </p>
              <CollapsibleDemo />
            </section>

            <section>
              <h2 className="text-headline-md-em font-display text-foreground mb-4">Command</h2>
              <p className="text-body-md text-muted-foreground mb-6">
                A command palette component for fast navigation and actions with search functionality.
              </p>
              <div className="max-w-md">
                <Command className="rounded-lg border shadow-md" data-testid="component-command">
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      <CommandItem>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>Calendar</span>
                      </CommandItem>
                      <CommandItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </CommandItem>
                      <CommandItem>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Email</span>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>
            </section>

            <section>
              <h2 className="text-headline-md-em font-display text-foreground mb-4">Context Menu</h2>
              <p className="text-body-md text-muted-foreground mb-6">
                A context menu component that appears on right-click.
              </p>
              <div className="flex justify-center">
                <ContextMenu>
                  <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-body-sm" data-testid="component-context-menu-trigger">
                    Right click here
                  </ContextMenuTrigger>
                  <ContextMenuContent className="w-64" data-testid="component-context-menu-content">
                    <ContextMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <Mail className="mr-2 h-4 w-4" />
                      Messages
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
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
