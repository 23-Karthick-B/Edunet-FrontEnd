import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CartItem } from '@/hooks/useCart';
import { toast } from '@/hooks/use-toast';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
  totalPrice: number;
  totalItems: number;
  onClearCart: () => void;
}

export const Cart = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  totalPrice,
  totalItems,
  onClearCart,
}: CartProps) => {
  const handleBuyNow = () => {
    toast({
      title: "Purchase Successful!",
      description: `Thank you for your purchase of ${totalItems} items for ₹${totalPrice.toLocaleString('en-IN')}`,
    });
    onClearCart();
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}
      
      {/* Cart Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border shadow-cart z-50 transform transition-transform duration-300 ease-smooth ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <CardHeader className="flex-row items-center justify-between space-y-0 pb-4 border-b border-border">
            <CardTitle className="flex items-center gap-2 text-xl font-bold">
              <ShoppingBag className="w-5 h-5" />
              Shopping Cart ({totalItems})
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="rounded-full hover:bg-muted"
            >
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>

          {/* Content */}
          <CardContent className="flex-1 overflow-auto p-0">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-8">
                <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  Your cart is empty
                </h3>
                <p className="text-muted-foreground">
                  Add some products to get started!
                </p>
              </div>
            ) : (
              <div className="p-6 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="group">
                    <div className="flex gap-4 p-4 rounded-lg border border-border hover:shadow-soft transition-shadow duration-200">
                      <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden bg-gradient-secondary">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjRjNGNHF2Ii8+CjxwYXRoIGQ9Ik0yOCAzMkgzNlY0MEgyOFYzMloiIGZpbGw9IiM5Njk3QTciLz4KPC9zdmc+Cg==";
                          }}
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-card-foreground text-sm truncate">
                          {item.name}
                        </h4>
                        <p className="text-sm font-bold bg-gradient-primary bg-clip-text text-transparent mt-1">
                          ₹{item.price.toLocaleString('en-IN')}
                        </p>
                        
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8 rounded-full p-0 hover:bg-muted"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="text-sm font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 rounded-full p-0 hover:bg-muted"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onRemoveItem(item.id)}
                            className="text-destructive hover:text-destructive hover:bg-destructive/10 h-8 w-8 rounded-full p-0"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-border p-6 space-y-4">
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-card-foreground">
                  Total:
                </span>
                <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </span>
              </div>
              
              <Button
                size="lg"
                className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold transition-all duration-300 hover:shadow-soft"
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className="w-full text-muted-foreground hover:text-destructive hover:border-destructive"
                onClick={onClearCart}
              >
                Clear Cart
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};