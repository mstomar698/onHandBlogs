// use this model to fill form or extend it further
import mongoose, { Schema } from 'mongoose';

interface IFormData {
  name: string;
  travel: string;
  about: string;
  email: string;
  twitter?: string;
  instagram?: string;
}

const FormDataSchema = new Schema<IFormData>({
  name: { type: String, required: true },
  travel: { type: String, required: true },
  about: { type: String, required: true },
  email: { type: String, required: true },
  twitter: { type: String },
  instagram: { type: String },
});

const FormDataModel = mongoose.model<IFormData>('FormData', FormDataSchema);

export default FormDataModel;
