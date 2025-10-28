import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Car, TrendingUp, Shield, Phone } from "lucide-react";

const Consignment = () => {
  const benefits = [
    {
      icon: Car,
      title: "Venda Rápida",
      description: "Seu veículo exposto para milhares de clientes interessados",
    },
    {
      icon: TrendingUp,
      title: "Melhor Preço",
      description: "Avaliação justa e competitiva do seu veículo",
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Contrato detalhado e toda documentação regularizada",
    },
  ];

  const steps = [
    "Avaliação gratuita do seu veículo",
    "Definição do preço de venda",
    "Anúncio em nossos canais",
    "Acompanhamento de visitas e propostas",
    "Venda concluída com segurança",
  ];

  const handleContact = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de informações sobre consignamento", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Consignamento de Veículos
            </h1>
            <p className="text-xl text-muted-foreground">
              Deixe seu carro conosco e venda com rapidez e segurança
            </p>
          </div>

          <Card className="p-8 mb-8 shadow-card">
            <h2 className="text-2xl font-bold mb-6">Como Funciona</h2>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-lg">{step}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center shadow-card hover:shadow-hover transition-smooth">
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 text-center shadow-card gradient-hero">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Pronto para Consignar seu Veículo?
            </h2>
            <p className="text-gray-300 mb-6">
              Entre em contato conosco e receba uma avaliação gratuita
            </p>
            <Button onClick={handleContact} size="lg" className="flex items-center gap-2 mx-auto">
              <Phone className="h-5 w-5" />
              Falar com Especialista
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Consignment;
