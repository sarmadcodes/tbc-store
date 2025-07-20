import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { X } from 'lucide-react';

// Define the form data interface
interface FormData {
  name: string;
  description: string;
  category: string;
  weight: string;
  material: string;
  color: string;
  price: string;
  minOrder: string;
  exportAvailable: boolean;
}

interface AdminProductFormProps {
  product?: Partial<FormData>;
  onClose: () => void;
  onSave: () => void;
}

const AdminProductForm: React.FC<AdminProductFormProps> = ({ product, onClose, onSave }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      name: product?.name || '',
      description: product?.description || '',
      category: product?.category || '',
      weight: product?.weight || '',
      material: product?.material || '',
      color: product?.color || '',
      price: product?.price || '',
      minOrder: product?.minOrder || '',
      exportAvailable: product?.exportAvailable ?? true
    }
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      // Validate required fields
      if (!data.name) {
        alert('Product name is required');
        return;
      }
      if (!data.description) {
        alert('Description is required');
        return;
      }
      if (!data.category) {
        alert('Category is required');
        return;
      }
      if (!data.weight) {
        alert('Weight is required');
        return;
      }
      if (!data.material) {
        alert('Material is required');
        return;
      }
      if (!data.color) {
        alert('Color is required');
        return;
      }
      if (!data.price) {
        alert('Price is required');
        return;
      }
      if (!data.minOrder) {
        alert('Minimum order is required');
        return;
      }

      // Here you would save to Firebase Firestore
      console.log('Product data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert(product ? 'Product updated successfully!' : 'Product added successfully!');
      onSave();
    } catch (error) {
      alert('Failed to save product. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">
            {product ? 'Edit Product' : 'Add New Product'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Name *
              </label>
              <input
                {...register('name', { required: 'Product name is required' })}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="e.g., Premium Cotton Twill Cloth"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category *
              </label>
              <select
                {...register('category', { required: 'Category is required' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                <option value="">Select category</option>
                <option value="Cotton">Cotton</option>
                <option value="Denim">Denim</option>
                <option value="Silk">Silk</option>
                <option value="Linen">Linen</option>
                <option value="Polyester">Polyester</option>
                <option value="Blended">Blended</option>
              </select>
              {errors.category && (
                <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              {...register('description', { required: 'Description is required' })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              placeholder="Detailed cloth material description..."
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Weight (GSM) *
              </label>
              <input
                {...register('weight', { required: 'Weight is required' })}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="e.g., 280 GSM"
              />
              {errors.weight && (
                <p className="mt-1 text-sm text-red-600">{errors.weight.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Material *
              </label>
              <input
                {...register('material', { required: 'Material is required' })}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="e.g., 100% Cotton"
              />
              {errors.material && (
                <p className="mt-1 text-sm text-red-600">{errors.material.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Color *
              </label>
              <input
                {...register('color', { required: 'Color is required' })}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="e.g., Natural"
              />
              {errors.color && (
                <p className="mt-1 text-sm text-red-600">{errors.color.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price per Meter *
              </label>
              <input
                {...register('price', { required: 'Price is required' })}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="e.g., $12.50"
              />
              {errors.price && (
                <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Minimum Order *
              </label>
              <input
                {...register('minOrder', { required: 'Minimum order is required' })}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="e.g., 500 meters"
              />
              {errors.minOrder && (
                <p className="mt-1 text-sm text-red-600">{errors.minOrder.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-center">
            <input
              {...register('exportAvailable')}
              type="checkbox"
              className="h-4 w-4 text-gray-700 focus:ring-gray-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700">
              Available for Export
            </label>
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Saving...' : (product ? 'Update Product' : 'Add Product')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminProductForm;