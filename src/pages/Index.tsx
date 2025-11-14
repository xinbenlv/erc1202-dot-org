import { Card } from "@/components/ui/card";
import { FileText, Users, MessageCircle, Presentation, Twitter, Send, MessageSquare } from "lucide-react";
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
    {
      title: "Tech Talks",
      description: "Read the latest tech talks from ERC-1202 WG",
      icon: Presentation,
      href: "https://erc1202.org/talks",
      gradient: "from-accent to-primary",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
      <footer className="container mx-auto px-6 py-12 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-6">
            {/* Social Media Icons */}
            <div className="flex items-center gap-6">
              <a 
                href="https://twitter.com/erc1202" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on X (Twitter)"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="https://t.me/erc1202wg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Join our Telegram"
              >
                <Send className="w-6 h-6" />
              </a>
              <a 
                href="https://discord.gg/erc1202" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Join our Discord"
              >
                <MessageSquare className="w-6 h-6" />
              </a>
            </div>
            
            {/* Copyright */}
            <div className="text-center text-sm text-muted-foreground">
              <p>© 2024 ERC-1202 Working Group. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
