import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Gauge, Phone } from "lucide-react";

interface Car {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  category: string;
  image: string;
  mileage: string;
}

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  const handleContact = () => {
    const message = `Olá! Tenho interesse no ${car.brand} ${car.model} ${car.year}`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-hover transition-smooth cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={car.image}
          alt={car.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
          {car.category}
        </Badge>
      </div>
      
      <div className="p-5 space-y-3">
        <div>
          <h3 className="text-xl font-bold text-foreground">{car.name}</h3>
          <p className="text-sm text-muted-foreground">{car.brand} {car.model}</p>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Gauge className="h-4 w-4" />
            <span>{car.mileage} km</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t">
          <div>
            <p className="text-xs text-muted-foreground">Preço</p>
            <p className="text-2xl font-bold text-primary">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(car.price)}
            </p>
          </div>
          
          <Button onClick={handleContact} className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Contato
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CarCard;
