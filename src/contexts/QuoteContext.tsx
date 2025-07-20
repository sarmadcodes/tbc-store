import React, { createContext, useContext, useState } from 'react';

export interface QuoteItem {
  id: string;
  name: string;
  image: string;
  category: string;
  quantity: number;
  specifications?: string;
}

interface QuoteContextType {
  quoteItems: QuoteItem[];
  addToQuote: (item: Omit<QuoteItem, 'quantity'>) => void;
  removeFromQuote: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearQuote: () => void;
  getQuoteCount: () => number;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};

export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);

  const addToQuote = (item: Omit<QuoteItem, 'quantity'>) => {
    setQuoteItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        return prev.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromQuote = (id: string) => {
    setQuoteItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromQuote(id);
      return;
    }
    setQuoteItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearQuote = () => {
    setQuoteItems([]);
  };

  const getQuoteCount = () => {
    return quoteItems.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    quoteItems,
    addToQuote,
    removeFromQuote,
    updateQuantity,
    clearQuote,
    getQuoteCount
  };

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
};