import { Card } from "@/components/ui/card";
import { FileText, Users, MessageCircle } from "lucide-react";
import logo from "@/assets/erc1202-logo.png";

const Index = () => {
  const ctaCards = [
    {
      title: "Read the Current Draft",
      description: "Explore the ERC-1202 specification and technical documentation",
      icon: FileText,
      href: "https://eips.ethereum.org/EIPS/eip-1202",
      gradient: "from-primary to-primary/80",
    },
    {
      title: "Subscribe to Mailing List",
      description: "Stay updated with the latest discussions and announcements",
      icon: Users,
      href: "https://groups.google.com/g/erc1202",
      gradient: "from-accent to-accent/80",
    },
    {
      title: "Join Telegram",
      description: "Connect with the community and contribute to the conversation",
      icon: MessageCircle,
      href: "https://t.me/erc1202wg",
      gradient: "from-primary to-accent",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary">
      {/* Header */}
      <header className="container mx-auto px-6 py-12">
        <div className="text-center space-y-6">
          <img 
            src={logo} 
            alt="ERC-1202 Logo" 
            className="w-32 h-32 mx-auto"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">ERC-1202</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-8 md:py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Ethereum Voting Standard</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Voting Standard Working Group
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A standardized interface for voting systems on the Ethereum blockchain
          </p>
        </div>
      </section>

      {/* CTA Cards */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ctaCards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full p-8 bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${card.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-border">
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2024 ERC-1202 Working Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
