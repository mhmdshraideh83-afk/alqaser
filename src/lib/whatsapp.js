import { CURRENCY } from './format.js';

export const WHATSAPP_NUMBER = '962790715653';

export function buildOrderMessage({ items, total, branch, name, date, time, notes }) {
  let msg = `السلام عليكم، أرغب بالطلب من مخابز وحلويات القصر الشرقي (${branch}):\n\n`;
  items.forEach((i) => {
    const lineTotal = i.price > 0 ? `${(i.price * i.qty).toFixed(2)} ${CURRENCY}` : 'حسب الكمية';
    msg += `• ${i.qty} × ${i.name} — ${lineTotal}\n`;
  });
  msg += `\nالمجموع التقريبي: ${total.toFixed(2)} ${CURRENCY}\n`;
  msg += `الاسم: ${name}\n`;
  if (date) msg += `التاريخ: ${date}\n`;
  if (time) msg += `الوقت: ${time}\n`;
  if (notes) msg += `ملاحظات: ${notes}\n`;
  return msg;
}

export function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
