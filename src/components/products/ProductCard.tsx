import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ExternalLink, Globe } from 'lucide-react';
import { useQuote } from '../../contexts/QuoteContext';
import toast from 'react-hot-toast';

interface Product {
  id: string;
  name: string;
  category: string;
  weight: string;
  material: string;
  color: string;
  image: string;
  price: string;
  description: string;
  exportAvailable: boolean;
}

interface ProductCardProps {
  product: Product;
  viewMode: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode }) => {
  const { addToQuote } = useQuote();

  const handleAddToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    addToQuote({
      id: product.id,
      name: product.name,
      image: product.image,
      category: product.category
    });
    toast.success(`${product.name} added to quote request`);
  };

  if (viewMode === 'list') {
    return (
      <Link to={`/products/${product.id}`} className="block">
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
          <div className="flex gap-6">
            <div className="w-48 h-32 flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                <span className="text-lg font-bold text-blue-600">{product.price}</span>
              </div>
              <p className="text-gray-600 mb-3">{product.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">{product.category}</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">{product.weight}</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">{product.material}</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">{product.color}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {product.exportAvailable && (
                    <div className="flex items-center text-green-600 text-sm">
                      <Globe className="h-4 w-4 mr-1" />
                      Export Available
                    </div>
                  )}
                </div>
                <button
                  onClick={handleAddToQuote}
                  className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
      <Link to={`/products/${product.id}`}>
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.exportAvailable && (
            <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs flex items-center">
              <Globe className="h-3 w-3 mr-1" />
              Export
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">{product.category}</span>
          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">{product.weight}</span>
          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">{product.material}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-700">{product.price}</span>
          <div className="flex space-x-2">
            <Link
              to={`/products/${product.id}`}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </Link>
            <button
              onClick={handleAddToQuote}
              className="bg-gray-700 text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;