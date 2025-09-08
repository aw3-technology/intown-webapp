import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AlertCircle, CheckCircle, XCircle, Info } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

const Styleguide: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Styleguide</h1>
          <p className="text-muted-foreground">
            A comprehensive guide to the design system and components used in this application.
          </p>
          <div className="flex items-center gap-4">
            <Label htmlFor="theme-switch">Theme:</Label>
            <Select value={theme} onValueChange={(value: any) => setTheme(value)}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-background border"></div>
              <p className="text-sm font-medium">Background</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-foreground"></div>
              <p className="text-sm font-medium">Foreground</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-primary"></div>
              <p className="text-sm font-medium">Primary</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-secondary"></div>
              <p className="text-sm font-medium">Secondary</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-muted"></div>
              <p className="text-sm font-medium">Muted</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-accent"></div>
              <p className="text-sm font-medium">Accent</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-gray-700"></div>
              <p className="text-sm font-medium">Gray 700</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-gray-900"></div>
              <p className="text-sm font-medium">Gray 900</p>
            </div>
          </div>
        </section>

        <Separator />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Typography</h2>
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold">Heading 1</h1>
              <p className="text-muted-foreground">text-4xl font-bold</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold">Heading 2</h2>
              <p className="text-muted-foreground">text-3xl font-semibold</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Heading 3</h3>
              <p className="text-muted-foreground">text-2xl font-semibold</p>
            </div>
            <div>
              <h4 className="text-xl font-medium">Heading 4</h4>
              <p className="text-muted-foreground">text-xl font-medium</p>
            </div>
            <div>
              <p className="text-base">Body text - Regular paragraph text for content.</p>
              <p className="text-muted-foreground">text-base</p>
            </div>
            <div>
              <p className="text-sm">Small text - Used for secondary information.</p>
              <p className="text-muted-foreground">text-sm</p>
            </div>
            <div>
              <p className="text-xs">Extra small text - Used for captions and labels.</p>
              <p className="text-muted-foreground">text-xs</p>
            </div>
          </div>
        </section>

        <Separator />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">Large</Button>
            <Button size="default">Default</Button>
            <Button size="sm">Small</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button disabled>Disabled</Button>
            <Button variant="secondary" disabled>Secondary Disabled</Button>
            <Button variant="outline" disabled>Outline Disabled</Button>
          </div>
        </section>

        <Separator />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Form Elements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="input-default">Default Input</Label>
              <Input id="input-default" placeholder="Enter text..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="input-disabled">Disabled Input</Label>
              <Input id="input-disabled" placeholder="Disabled..." disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="select-demo">Select</Label>
              <Select>
                <SelectTrigger id="select-demo">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
          </div>
        </section>

        <Separator />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>Card description goes here</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is the card content area where you can place any content.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Action</Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-card-solid">
              <CardHeader>
                <CardTitle>Solid Card</CardTitle>
                <CardDescription>Using card-solid background</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This card uses the solid card background color.</p>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle>Accented Card</CardTitle>
                <CardDescription>Card with primary border</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This card has a primary colored border for emphasis.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Alerts</h2>
          <div className="space-y-4">
            <Alert>
              <AlertCircle className="h-4 w-4 text-gray-400" />
              <AlertTitle>Default Alert</AlertTitle>
              <AlertDescription>
                This is a default alert message. Use it for general information.
              </AlertDescription>
            </Alert>
            
            <Alert variant="destructive">
              <XCircle className="h-4 w-4 text-gray-500" />
              <AlertTitle>Error Alert</AlertTitle>
              <AlertDescription>
                Something went wrong. Please try again later.
              </AlertDescription>
            </Alert>

            <Alert className="bg-gray-900/20 border-gray-700">
              <CheckCircle className="h-4 w-4 text-gray-400" />
              <AlertTitle>Success Alert</AlertTitle>
              <AlertDescription>
                Your action was completed successfully!
              </AlertDescription>
            </Alert>

            <Alert className="bg-gray-800/20 border-gray-600">
              <Info className="h-4 w-4 text-gray-500" />
              <AlertTitle>Warning Alert</AlertTitle>
              <AlertDescription>
                Please be aware of this important information.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        <Separator />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Badges</h2>
          <div className="flex flex-wrap gap-4">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </section>

        <Separator />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Tabs</h2>
          <Tabs defaultValue="tab1" className="w-full">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Tab 1 Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>This is the content for the first tab.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tab2" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Tab 2 Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>This is the content for the second tab.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tab3" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Tab 3 Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>This is the content for the third tab.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <Separator />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Progress</h2>
          <div className="space-y-4">
            <Progress value={progress} className="w-full" />
            <Progress value={33} className="w-full" />
            <Progress value={66} className="w-full" />
            <Progress value={100} className="w-full" />
          </div>
        </section>

        <Separator />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Avatars</h2>
          <div className="flex gap-4">
            <Avatar className="border border-gray-600">
              <AvatarImage src="https://github.com/shadcn.png" className="grayscale" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="border border-gray-600">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar className="border border-gray-600">
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </div>
        </section>

        <Separator />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Spacing</h2>
          <div className="space-y-4">
            <div className="flex gap-2">
              <div className="bg-primary p-2 rounded">p-2</div>
              <div className="bg-primary p-4 rounded">p-4</div>
              <div className="bg-primary p-6 rounded">p-6</div>
              <div className="bg-primary p-8 rounded">p-8</div>
            </div>
            <div className="space-y-2">
              <div className="bg-secondary h-12 rounded flex items-center px-4">Margin: m-2</div>
              <div className="bg-secondary h-12 rounded flex items-center px-4">Margin: m-4</div>
              <div className="bg-secondary h-12 rounded flex items-center px-4">Margin: m-6</div>
            </div>
          </div>
        </section>

        <Separator />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Border Radius</h2>
          <div className="flex gap-4">
            <div className="bg-primary h-20 w-20 rounded-sm flex items-center justify-center text-white">sm</div>
            <div className="bg-primary h-20 w-20 rounded-md flex items-center justify-center text-white">md</div>
            <div className="bg-primary h-20 w-20 rounded-lg flex items-center justify-center text-white">lg</div>
            <div className="bg-primary h-20 w-20 rounded-xl flex items-center justify-center text-white">xl</div>
            <div className="bg-primary h-20 w-20 rounded-full flex items-center justify-center text-white">full</div>
          </div>
        </section>

        <Separator />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Shadows</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="shadow-sm">
              <CardContent className="pt-6">
                <p>Shadow sm</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <p>Shadow md</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="pt-6">
                <p>Shadow lg</p>
              </CardContent>
            </Card>
            <Card className="shadow-xl">
              <CardContent className="pt-6">
                <p>Shadow xl</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Styleguide;