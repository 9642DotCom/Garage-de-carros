import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, CreditCard, FileText, Phone, CheckCircle2 } from "lucide-react";

const Financing = () => {
  const features = [
    {
      icon: Calculator,
      title: "Simulação Online",
      description: "Faça simulações e encontre as melhores condições",
    },
    {
      icon: CreditCard,
      title: "Taxas Competitivas",
      description: "Parceria com os principais bancos do mercado",
    },
    {
      icon: FileText,
      title: "Documentação Simples",
      description: "Processo rápido e descomplicado",
    },
  ];

  const banks = [
    "Banco do Brasil",
    "Itaú",
    "Bradesco",
    "Santander",
    "Caixa Econômica",
    "BV Financeira",
  ];

  const benefits = [
    "Aprovação em até 24 horas",
    "Entrada facilitada",
    "Até 60 meses para pagar",
    "Taxas a partir de 1,49% ao mês",
    "Sem custo de avaliação",
    "Atendimento personalizado",
  ];

  const handleContact = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de simular um financiamento", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Financiamento de Veículos
            </h1>
            <p className="text-xl text-muted-foreground">
              Realize o sonho do seu carro com as melhores condições
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center shadow-card hover:shadow-hover transition-smooth">
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 mb-8 shadow-card">
            <h2 className="text-2xl font-bold mb-6">Nossos Parceiros</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {banks.map((bank, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg text-center font-medium hover:bg-muted/50 transition-smooth"
                >
                  {bank}
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 mb-8 shadow-card">
            <h2 className="text-2xl font-bold mb-6">Vantagens</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 text-center shadow-card gradient-hero">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Precisa de Ajuda com Financiamento?
            </h2>
            <p className="text-gray-300 mb-6">
              Fale com nossos especialistas e encontre a melhor opção para você
            </p>
            <Button onClick={handleContact} size="lg" className="flex items-center gap-2 mx-auto">
              <Phone className="h-5 w-5" />
              Simular Agora
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Financing;
