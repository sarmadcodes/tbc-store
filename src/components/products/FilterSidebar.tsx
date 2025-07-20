import React from 'react';
import { X } from 'lucide-react';

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

interface FilterSidebarProps {
  filters: Filters;
  onFilterChange: (filters: Partial<Filters>) => void;
  onClearFilters: () => void;
  products: Product[];
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
  products
}) => {
  // Get unique values for filter options
  const categories = [...new Set(products.map(p => p.category))];
  const weights = [...new Set(products.map(p => p.weight))];
  const materials = [...new Set(products.map(p => p.material))];
  const colors = [...new Set(products.map(p => p.color))];

  const hasActiveFilters = Object.values(filters).some(filter => filter !== '');

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-sm text-gray-700 hover:text-gray-900 flex items-center"
          >
            <X className="h-4 w-4 mr-1" />
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => onFilterChange({ category: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Weight Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Weight (GSM)
          </label>
          <select
            value={filters.weight}
            onChange={(e) => onFilterChange({ weight: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          >
            <option value="">All Weights</option>
            {weights.map(weight => (
              <option key={weight} value={weight}>{weight}</option>
            ))}
          </select>
        </div>

        {/* Material Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Material
          </label>
          <select
            value={filters.material}
            onChange={(e) => onFilterChange({ material: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          >
            <option value="">All Materials</option>
            {materials.map(material => (
              <option key={material} value={material}>{material}</option>
            ))}
          </select>
        </div>

        {/* Color Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Color
          </label>
          <select
            value={filters.color}
            onChange={(e) => onFilterChange({ color: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          >
            <option value="">All Colors</option>
            {colors.map(color => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </div>

        {/* Export Availability */}
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-gray-700 focus:ring-gray-500"
            />
            <span className="ml-2 text-sm text-gray-700">Export Available Only</span>
          </label>
        </div>
      </div>

      {/* Price Range */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Price Range</h4>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="100"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>$0</span>
            <span>$100+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;