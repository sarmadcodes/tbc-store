import React, { useState, useEffect } from 'react';
import ProductCard from '../components/products/ProductCard';
import FilterSidebar from '../components/products/FilterSidebar';
import { Search, Grid, List } from 'lucide-react';

// Mock data - replace with Firebase data
const mockProducts = [
  {
    id: '1',
    name: 'Premium Cotton Twill Cloth',
    category: 'Cotton',
    weight: '280 GSM',
    material: 'Cotton',
    color: 'Natural',
    image: 'https://images.pexels.com/photos/5559959/pexels-photo-5559959.jpeg',
    price: '$12.50/meter',
    description: 'High-quality cotton twill cloth perfect for premium fashion garments',
    exportAvailable: true
  },
  {
    id: '2',
    name: 'Indigo Denim Cloth',
    category: 'Denim',
    weight: '320 GSM',
    material: 'Cotton',
    color: 'Indigo',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
    price: '$15.00/meter',
    description: 'Premium denim cloth material with excellent durability',
    exportAvailable: true
  },
  {
    id: '3',
    name: 'Luxury Silk Chiffon Cloth',
    category: 'Silk',
    weight: '60 GSM',
    material: 'Silk',
    color: 'White',
    image: 'https://images.pexels.com/photos/6069129/pexels-photo-6069129.jpeg',
    price: '$45.00/meter',
    description: 'Elegant silk chiffon cloth for premium fashion applications',
    exportAvailable: true
  },
  {
    id: '4',
    name: 'Organic Cotton Jersey Cloth',
    category: 'Cotton',
    weight: '180 GSM',
    material: 'Cotton',
    color: 'Natural',
    image: 'https://images.pexels.com/photos/5559959/pexels-photo-5559959.jpeg',
    price: '$10.00/meter',
    description: 'Soft organic cotton jersey cloth for comfortable wear',
    exportAvailable: true
  },
  {
    id: '5',
    name: 'Stretch Denim Cloth',
    category: 'Denim',
    weight: '300 GSM',
    material: 'Cotton/Elastane',
    color: 'Dark Blue',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
    price: '$18.00/meter',
    description: 'Comfortable stretch denim cloth with excellent recovery',
    exportAvailable: true
  },
  {
    id: '6',
    name: 'Printed Cotton Poplin Cloth',
    category: 'Cotton',
    weight: '120 GSM',
    material: 'Cotton',
    color: 'Multicolor',
    image: 'https://images.pexels.com/photos/5559959/pexels-photo-5559959.jpeg',
    price: '$8.50/meter',
    description: 'Lightweight printed cotton poplin cloth for shirts',
    exportAvailable: true
  }
];

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

interface Filters {
  category: string;
  weight: string;
  material: string;
  color: string;
  search: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  const [filters, setFilters] = useState<Filters>({
    category: '',
    weight: '',
    material: '',
    color: '',
    search: ''
  });
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let filtered = products;

    // Apply search filter
    if (filters.search) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Apply weight filter
    if (filters.weight) {
      filtered = filtered.filter(product => product.weight === filters.weight);
    }

    // Apply material filter
    if (filters.material) {
      filtered = filtered.filter(product => product.material === filters.material);
    }

    // Apply color filter
    if (filters.color) {
      filtered = filtered.filter(product => product.color === filters.color);
    }

    setFilteredProducts(filtered);
  }, [filters, products]);

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      weight: '',
      material: '',
      color: '',
      search: ''
    });
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Cloth Material Collection</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our extensive range of premium cloth materials crafted with precision and quality
            </p>
          </div>

          {/* Search and View Controls */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                placeholder="Search cloth materials..."
                value={filters.search}
                onChange={(e) => handleFilterChange({ search: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden bg-gray-700 text-white px-4 py-2 rounded-lg"
              >
                Filters
              </button>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-600'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-600'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={clearFilters}
                products={products}
              />
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="mb-6 flex justify-between items-center">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 text-gray-700 hover:text-gray-900 font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    : 'space-y-6'
                }>
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      viewMode={viewMode}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;