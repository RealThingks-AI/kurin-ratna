import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, LayoutDashboard, Shield, Zap, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: LayoutDashboard,
      title: "Unified Dashboard",
      description: "Manage all your applications from one central hub with real-time insights.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with advanced authentication and data protection.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance ensuring your apps run at peak efficiency.",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy and scale your applications worldwide with zero configuration.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <LayoutDashboard className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">App Master</span>
          </div>
          <nav className="flex items-center gap-4">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Pricing</Button>
            <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
          </nav>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-6 py-24 text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Master Your Applications with{" "}
              <span className="text-primary">Intelligence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The ultimate platform to build, manage, and scale your applications. 
              Everything you need in one powerful dashboard.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="gap-2" onClick={() => navigate("/dashboard")}>
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to transform your workflow?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of developers who trust App Master to manage their applications.
            </p>
            <Button size="lg" onClick={() => navigate("/dashboard")}>
              Start Building Today
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
          © 2024 App Master. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
