import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="group h-full bg-gradient-card border-border/50 hover:shadow-premium transition-all duration-500 hover:-translate-y-2 hover:border-primary/20">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden rounded-t-lg bg-gradient-secondary relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              // Fallback to a placeholder if image fails to load
              (e.target as HTMLImageElement).src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04NyAxMDBIMTEzVjEyNkg4N1YxMDBaIiBmaWxsPSIjOTY5N0E3Ii8+CjxwYXRoIGQ9Ik0xMDAgODdWNzQiIHN0cm9rZT0iIzk2OTdBNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==";
            }}
          />
        </div>
        <div className="p-6">
          <div className="mb-2">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 px-2 py-1 rounded-full">
              {product.category}
            </span>
          </div>
          <h3 className="text-lg font-bold text-card-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            ₹{product.price.toLocaleString('en-IN')}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          variant="default"
          size="lg"
          className="w-full bg-gradient-primary hover:bg-gradient-accent text-primary-foreground font-bold transition-all duration-300 hover:shadow-glow hover:scale-105 active:scale-95"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};