import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import CarCard from "@/components/CarCard";
import FilterSidebar from "@/components/FilterSidebar";
import { Button } from "@/components/ui/button";
import { Phone, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [cars, setCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  
  const [filters, setFilters] = useState({
    name: "",
    category: "all",
    brand: "all",
    model: "",
    yearMin: "",
    yearMax: "",
    priceMin: "",
    priceMax: "",
  });

  useEffect(() => {
    loadCars();
  }, []);

  const loadCars = async () => {
    try {
      const { data, error } = await supabase
        .from("cars")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setCars(data || []);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erro ao carregar veículos",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters({
      name: "",
      category: "all",
      brand: "all",
      model: "",
      yearMin: "",
      yearMax: "",
      priceMin: "",
      priceMax: "",
    });
  };

  const filteredCars = cars.filter((car) => {
    if (filters.name && !car.name.toLowerCase().includes(filters.name.toLowerCase())) {
      return false;
    }
    if (filters.category !== "all" && car.category !== filters.category) {
      return false;
    }
    if (filters.brand !== "all" && car.brand !== filters.brand) {
      return false;
    }
    if (filters.model && !car.model.toLowerCase().includes(filters.model.toLowerCase())) {
      return false;
    }
    if (filters.yearMin && car.year < parseInt(filters.yearMin)) {
      return false;
    }
    if (filters.yearMax && car.year > parseInt(filters.yearMax)) {
      return false;
    }
    if (filters.priceMin && car.price < parseInt(filters.priceMin)) {
      return false;
    }
    if (filters.priceMax && car.price > parseInt(filters.priceMax)) {
      return false;
    }
    return true;
  });

  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá, gostaria de mais informações!", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="relative h-[400px] gradient-hero flex items-center justify-center text-center px-4 mb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Encontre o Carro dos Seus Sonhos
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Os melhores veículos seminovos e zero km com qualidade garantida
          </p>
          <Button onClick={handleWhatsApp} size="lg" className="flex items-center gap-2 mx-auto">
            <Phone className="h-5 w-5" />
            Fale Conosco
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-80 shrink-0">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
            />
          </aside>

          <main className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">
                Nosso Estoque
                <span className="text-muted-foreground text-lg ml-2">
                  ({filteredCars.length} {filteredCars.length === 1 ? "veículo" : "veículos"})
                </span>
              </h2>
            </div>

            {loading ? (
              <div className="flex justify-center py-16">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={{...car, image: car.image_url}} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">
                  Nenhum veículo encontrado com os filtros selecionados.
                </p>
                <Button onClick={handleClearFilters} className="mt-4">
                  Limpar Filtros
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>

      <Button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-smooth z-50 p-0"
        aria-label="WhatsApp"
      >
        <Phone className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Index;
