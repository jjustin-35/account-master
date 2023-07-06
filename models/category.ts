import { Schema, model } from 'mongoose';

interface CustomCategory {
  custom_category: [
    {
      name: string;
      category_name: string;
      type_name: string;
    },
  ];
}

const CustomCategorySchema = new Schema<CustomCategory>({
  custom_category: [
    {
      name: {
        type: String,
        required: true,
      },
      category_name: {
        type: String,
        required: true,
      },
      type_name: {
        type: String,
        required: true,
      },
    },
  ],
});

export default model<CustomCategory>('CustomCategory', CustomCategorySchema);
