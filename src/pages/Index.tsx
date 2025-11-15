import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  FileText,
  Users,
  MessageCircle,
  Presentation,
  Twitter,
  Send,
  MessageSquare,
  Mail,
  Github,
  BookOpen,
  Code,
  Smartphone,
  Shield,
  Wallet,
  Search,
  Vote,
  Palette,
} from "lucide-react";
import logo from "@/assets/erc1202-logo.png";

const Index = () => {
  const supportersAndContributors = [
    {
      name: "Victor Zhou",
      email: "erc1202@zzn.im",
      github: "xinbenlv",
      description: "EIP/ERC Editor, Lead Author of ERC-1202",
      image: "https://b.zzn.im/assets/images/zzn-pic.jpeg",
    },
    {
      name: "William Entriken",
      github: "fulldecent",
      description: "Lead Author of ERC-721",
      image: "https://avatars.githubusercontent.com/u/382183?v=4",
    },
    {
      name: "Nick Mudge",
      github: "mudgen",
      description: "Author of ERC-2535 Diamonds, Multi-Facet Proxy",
      image: "https://avatars.githubusercontent.com/u/49092?v=4",
    },
    {
      name: "Premm.eth",
      github: "premm.eth",
      description: "Co-founder of Unruggable Labs, ENS Service Provider",
      image: "https://avatars.githubusercontent.com/u/3857985?v=4",
    },
    {
      name: "Evan Botello",
      github: "evbots",
      description: "",
      image: "https://avatars.githubusercontent.com/u/3102036?v=4",
    },
    {
      name: "Yin Xu",
      github: "yingogobot",
      description: "",
      image: "https://avatars.githubusercontent.com/u/4603314?v=4",
    }
  ];

  const ctaCards = [
    {
      title: "Read the Current Draft",
      description: "Explore the ERC-1202 specification and technical documentation",
      icon: FileText,
      href: "https://eips.ethereum.org/EIPS/eip-1202",
      gradient: "from-primary to-primary/80",
    },
    {
      title: "Join WG mailing list",
      description: "Stay updated with the latest discussions and announcements",
      icon: Users,
      href: "https://groups.google.com/g/erc1202",
      gradient: "from-accent to-accent/80",
    },
    {
      title: "Join WG Telegram",
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
          <img src={logo} alt="ERC-1202 Logo" className="w-32 h-32 mx-auto" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            ERC-1202 Voting Standard Working Group
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A standardized interface for voting systems for Ethereum and EVM blockchains
          </p>
        </div>
      </header>

      {/* Newsletter Subscription */}
      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-md mx-auto">
          <div className="rounded-lg overflow-hidden border border-border bg-card shadow-lg">
            <iframe 
              src="https://erc1202.substack.com/embed" 
              width="100%" 
              height="200"
              className="w-full"
              frameBorder="0" 
              scrolling="no"
              title="Subscribe to ERC-1202 Newsletter"
            />
          </div>
        </div>
      </section>

      {/* CTA Cards */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {ctaCards.map((card, index) => (
            <a key={index} href={card.href} target="_blank" rel="noopener noreferrer" className="group">
              <Card className="h-full p-8 bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${card.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* Call for Contributors */}
      <section className="container mx-auto px-6 pb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Call for Contributors</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Experts, enthusiast, interns all welcome. Contributions will be public domain and MIT licensed.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Co-authors", icon: FileText },
            { title: "Smart Contract Devs", icon: Code },
            { title: "Web SDK Devs", icon: Code },
            { title: "Mobile SDK Devs", icon: Smartphone },
            { title: "Security Researcher", icon: Shield },
            { title: "Wallets", icon: Wallet },
            { title: "Blockchain Explorers", icon: Search },
            { title: "Voting Interfaces", icon: Vote },
            { title: "Designers", icon: Palette },
          ].map((role, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                  <role.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-sm font-medium text-card-foreground">{role.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Supporters and Contributors */}
      <section className="container mx-auto px-6 pb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Working Group</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Co-authors, advisors, contributors and supporters
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {supportersAndContributors.map((person, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={person.image} alt={person.name} />
                  <AvatarFallback>
                    {person.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-card-foreground mb-1">{person.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{person.description}</p>
                  <div className="flex gap-3">
                    {person.email && (
                      <a
                        href={`mailto:${person.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Email ${person.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                    {person.github && (
                      <a
                        href={`https://github.com/${person.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${person.name}'s GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-8">
            {/* Email Subscription */}
            <div className="w-full max-w-md">
              <h3 className="text-xl font-semibold text-center text-foreground mb-4">Subscribe to Updates</h3>
              <div className="rounded-lg overflow-hidden border border-border bg-card shadow-sm">
                <iframe 
                  src="https://erc1202.substack.com/embed" 
                  width="100%" 
                  height="200"
                  className="w-full"
                  frameBorder="0" 
                  scrolling="no"
                  title="Subscribe to ERC-1202 Newsletter"
                />
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-6">
              <a
                href="https://x.com/erc_1202"
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
                href="https://discord.gg/EMNfuQQppv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Join our Discord"
              >
                <MessageSquare className="w-6 h-6" />
              </a>
              <a
                href="https://substack.com/@erc1202"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Substack"
              >
                <BookOpen className="w-6 h-6" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-muted-foreground">
              <p>© 2018-2025 ERC-1202 Working Group. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
