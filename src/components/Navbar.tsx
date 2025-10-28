import { Link, useLocation } from "react-router-dom";
import { Car, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { path: "/", label: "Estoque" },
    { path: "/consignamento", label: "Consignamento" },
    { path: "/financiamento", label: "Financiamento" },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá, gostaria de mais informações sobre os veículos!", "_blank");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Car className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">AutoPrime</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={isActive(link.path) ? "default" : "ghost"}
                  className="transition-smooth"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          <Button onClick={handleWhatsApp} className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="flex md:hidden items-center justify-around pb-3 space-x-1">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="flex-1">
              <Button
                variant={isActive(link.path) ? "default" : "ghost"}
                size="sm"
                className="w-full transition-smooth text-xs"
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
