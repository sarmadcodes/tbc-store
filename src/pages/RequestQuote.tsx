import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useQuote } from '../contexts/QuoteContext';
import QuoteForm from '../components/quote/QuoteForm';

const RequestQuote = () => {
  const { quoteItems, removeFromQuote, updateQuantity, getQuoteCount } = useQuote();

  if (quoteItems.length === 0) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Request a Quote</h1>
            <p className="text-xl text-gray-600 mb-8">
              Your quote request is empty. Browse our products to add items.
            </p>
            <a
              href="/products"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Browse Products
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Request a Quote</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quote Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Selected Items ({getQuoteCount()} items)
              </h2>
              
              <div className="space-y-4">
                {quoteItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.category}</p>
                      {item.specifications && (
                        <p className="text-sm text-gray-500">{item.specifications}</p>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <Minus className="h-4 w-4 text-gray-600" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <Plus className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeFromQuote(item.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Quote Form */}
          <div>
            <QuoteForm quoteItems={quoteItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;