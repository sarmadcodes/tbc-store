import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Share2, Download, Globe, CheckCircle } from 'lucide-react';
import { useQuote } from '../contexts/QuoteContext';
import toast from 'react-hot-toast';

// Mock product data - replace with Firebase data
const mockProduct = {
  id: '1',
  name: 'Premium Cotton Twill Cloth',
  category: 'Cotton',
  weight: '280 GSM',
  material: 'Cotton',
  color: 'Natural',
  images: [
    'https://images.pexels.com/photos/5559959/pexels-photo-5559959.jpeg',
    'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg',
    'https://images.pexels.com/photos/6069129/pexels-photo-6069129.jpeg'
  ],
  price: '$12.50/meter',
  description: 'Premium cotton twill cloth perfect for high-end fashion garments. This cloth material offers excellent drape, durability, and comfort. Ideal for creating sophisticated clothing pieces.',
  exportAvailable: true,
  specifications: {
    'Cloth Type': 'Cotton Twill',
    'Weight': '280 GSM',
    'Width': '150cm',
    'Composition': '100% Cotton',
    'Weave': 'Twill',
    'Shrinkage': '<3%',
    'Color Fastness': 'Grade 4-5',
    'Pilling Resistance': 'Grade 4',
    'Tear Strength': 'High',
    'Minimum Order': '500 meters'
  },
  certifications: ['OEKO-TEX Standard 100', 'GOTS Certified', 'ISO 9001'],
  applications: ['Shirts', 'Dresses', 'Pants', 'Jackets', 'Uniforms'],
  colors: ['Natural', 'White', 'Black', 'Navy', 'Khaki', 'Olive'],
  sustainability: 'Made from sustainably sourced cotton materials with minimal environmental impact.'
};

const ProductDetail = () => {
  const { id } = useParams();
  const { addToQuote } = useQuote();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(mockProduct.colors[0]);
  const [quantity, setQuantity] = useState(100);

  // In a real app, fetch product data based on id
  const product = mockProduct;

  const handleAddToQuote = () => {
    addToQuote({
      id: product.id,
      name: product.name,
      image: product.images[0],
      category: product.category,
      specifications: `Color: ${selectedColor}, Quantity: ${quantity} meters`
    });
    toast.success(`${product.name} added to quote request`);
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/products" className="flex items-center hover:text-blue-600">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Products
          </Link>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-xl text-gray-700 font-semibold mb-4">{product.price}</p>
              
              {product.exportAvailable && (
                <div className="flex items-center text-green-600 mb-4">
                  <Globe className="h-5 w-5 mr-2" />
                  <span className="font-medium">Available for Export</span>
                </div>
              )}

              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Available Colors</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                      selectedColor === color
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                Quantity (meters)
              </label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">Minimum order: 500 meters</p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleAddToQuote}
                className="flex-1 bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Quote Request
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center">
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center">
                <Download className="h-5 w-5 mr-2" />
                Download Specs
              </button>
            </div>

            {/* Certifications */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center"
                  >
                    <CheckCircle className="h-4 w-4 mr-1" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Specifications */}
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Specifications */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">{key}:</span>
                      <span className="text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Applications */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Applications</h3>
              <ul className="space-y-2">
                {product.applications.map((app) => (
                  <li key={app} className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {app}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainability</h3>
                <p className="text-gray-600">{product.sustainability}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;