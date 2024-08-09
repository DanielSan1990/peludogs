export const getWhatsappLink = (phonenumber: string, message: string) =>
  `https://wa.me/${phonenumber}?text=${encodeURIComponent(message)}`;
