import { Invoice } from '../models/invoice.model';

const InvoiceKey = Object.keys(Invoice.getAttributes());

export const validateFieldsInvoice = (body: any) => {
  const bodyKey = Object.keys(body);
  // No este vació el Cuerpo de la petición
  if (bodyKey.length === 0) {
    return { message: "No hay campos en el body." };
  }
  // Validar campos contra modelos
  for (const key of bodyKey) {
    if (!InvoiceKey.includes(key)) {
      return {
        message: `El campo ${key} no está definido en el modelo usuario.`,
      };
    }
  }
  return true;
};
export const validateRequeridFieldsInvoice = (body: any) => {
  const requiredFields = InvoiceKey.filter(
    (key) => Invoice.getAttributes()[key].allowNull === false
  )
  for (const field of requiredFields) {
    if (!body[field]) {
      return { message: `El campo ${field} es requerido.` }
    }
  }
  return true
}
