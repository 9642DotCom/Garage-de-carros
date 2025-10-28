import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";

interface FilterSidebarProps {
  filters: {
    name: string;
    category: string;
    brand: string;
    model: string;
    yearMin: string;
    yearMax: string;
    priceMin: string;
    priceMax: string;
  };
  onFilterChange: (key: string, value: string) => void;
  onClearFilters: () => void;
}

const FilterSidebar = ({ filters, onFilterChange, onClearFilters }: FilterSidebarProps) => {
  const categories = ["SUV", "Sedan", "Hatch", "Pickup", "Esportivo"];
  const brands = ["BMW", "Mercedes", "Audi", "Porsche", "Volkswagen", "Chevrolet", "Fiat"];

  return (
    <Card className="p-6 shadow-card sticky top-20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-bold">Filtros</h2>
        </div>
        <Button variant="ghost" size="sm" onClick={onClearFilters}>
          <X className="h-4 w-4 mr-1" />
          Limpar
        </Button>
      </div>

      <div className="space-y-5">
        <div>
          <Label htmlFor="name" className="text-sm font-medium mb-2 block">
            Nome
          </Label>
          <Input
            id="name"
            placeholder="Buscar por nome..."
            value={filters.name}
            onChange={(e) => onFilterChange("name", e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="category" className="text-sm font-medium mb-2 block">
            Categoria
          </Label>
          <Select value={filters.category} onValueChange={(value) => onFilterChange("category", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="brand" className="text-sm font-medium mb-2 block">
            Marca
          </Label>
          <Select value={filters.brand} onValueChange={(value) => onFilterChange("brand", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              {brands.map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="model" className="text-sm font-medium mb-2 block">
            Modelo
          </Label>
          <Input
            id="model"
            placeholder="Ex: X5, Civic..."
            value={filters.model}
            onChange={(e) => onFilterChange("model", e.target.value)}
          />
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-medium">Ano</Label>
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="number"
              placeholder="De"
              value={filters.yearMin}
              onChange={(e) => onFilterChange("yearMin", e.target.value)}
            />
            <Input
              type="number"
              placeholder="Até"
              value={filters.yearMax}
              onChange={(e) => onFilterChange("yearMax", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-medium">Preço (R$)</Label>
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="number"
              placeholder="Mínimo"
              value={filters.priceMin}
              onChange={(e) => onFilterChange("priceMin", e.target.value)}
            />
            <Input
              type="number"
              placeholder="Máximo"
              value={filters.priceMax}
              onChange={(e) => onFilterChange("priceMax", e.target.value)}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FilterSidebar;
