import { useEffect, useState } from 'react';
import { BRANCHES } from '../data/branches.js';
import { cartTotal } from '../lib/cart.js';
import { formatPrice, formatTotal } from '../lib/format.js';
import { buildOrderMessage, whatsappUrl } from '../lib/whatsapp.js';

const inputClass =
  'w-full rounded-[10px] border-[1.5px] border-[#5c3a34]/20 bg-white px-3.5 py-3 text-[.95rem] text-[#221410] focus:border-transparent focus:outline focus:outline-2 focus:outline-[#c68a3e]';
const labelClass = 'mb-[7px] block text-[.85rem] font-bold text-[#5c3a34]';

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

export default function CartDrawer({ open, cart, onClose, onChange }) {
  const [branch, setBranch] = useState(BRANCHES[0].name);
  const [name, setName] = useState('');
  const [date, setDate] = useState(todayISO);
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [nameError, setNameError] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const items = Object.entries(cart);
  const total = cartTotal(cart);

  const handleSend = () => {
    if (!name.trim()) {
      setNameError(true);
      return;
    }
    const message = buildOrderMessage({
      items: items.map(([, item]) => item),
      total,
      branch,
      name: name.trim(),
      date,
      time,
      notes: notes.trim(),
    });
    window.open(whatsappUrl(message), '_blank');
  };

  return (
    <>
      <div
        onClick={onClose}
        className={
          'fixed inset-0 z-80 bg-[#0f0907]/60 transition-opacity duration-300 ' +
          (open ? 'opacity-100' : 'pointer-events-none opacity-0')
        }
      />
      <div
        className={
          'fixed inset-y-0 right-0 z-90 flex w-full max-w-[460px] flex-col bg-[#fbf6ec] text-[#221410] shadow-[-20px_0_40px_rgba(0,0,0,.3)] transition-transform duration-350 ' +
          (open ? 'translate-x-0' : 'translate-x-full')
        }
      >
        <div className="flex flex-none items-center justify-between border-b border-[#5c3a34]/15 px-[22px] py-5">
          <h3 className="font-['Aref_Ruqaa'] text-[1.3rem] font-bold text-[#5c3a34]">قائمة طلبك</h3>
          <button type="button" onClick={onClose} aria-label="إغلاق" className="text-[1.5rem] leading-none text-[#5c3a34]">
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-[22px] py-5">
          {items.length === 0 ? (
            <div className="px-2.5 py-[60px] text-center text-[.95rem] text-[#93877c]">
              سلة طلبك فارغة حاليًا
              <br />
              اختر أصنافك من المنيو لتظهر هنا
            </div>
          ) : (
            <>
              {items.map(([key, item]) => (
                <div key={key} className="flex items-center justify-between gap-2.5 border-b border-[#5c3a34]/12 py-3">
                  <div>
                    <div className="text-[.95rem] font-medium">{item.name}</div>
                    <div className="mt-0.5 text-[.82rem] text-[#8a7267]">
                      {item.price > 0 ? `${formatPrice(item.price)} × ${item.qty}` : 'حسب الكمية'}
                    </div>
                  </div>
                  <div className="flex flex-none items-center gap-0 rounded-full bg-[#5c3a34]/8 p-1">
                    <button
                      type="button"
                      onClick={() => onChange(key, -1)}
                      aria-label="إنقاص الكمية"
                      className="flex h-[30px] w-[30px] items-center justify-center rounded-full text-[1.1rem] text-[#5c3a34]"
                    >
                      −
                    </button>
                    <span className="min-w-[22px] text-center text-[.95rem] font-bold">{item.qty}</span>
                    <button
                      type="button"
                      onClick={() => onChange(key, 1)}
                      aria-label="زيادة الكمية"
                      className="flex h-[30px] w-[30px] items-center justify-center rounded-full text-[1.1rem] text-[#5c3a34]"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}

              <div className="mt-[18px]">
                <label htmlFor="branchSel" className={labelClass}>
                  الفرع
                </label>
                <select
                  id="branchSel"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className={inputClass}
                >
                  {BRANCHES.map((b) => (
                    <option key={b.name} value={b.name}>
                      {b.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-[18px]">
                <label htmlFor="custName" className={labelClass}>
                  الاسم
                </label>
                <input
                  id="custName"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (nameError) setNameError(false);
                  }}
                  placeholder="اسمك الكامل"
                  className={inputClass + (nameError ? ' !border-[#a13c2f]' : '')}
                />
              </div>

              <div className="mt-[18px] grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="custDate" className={labelClass}>
                    التاريخ
                  </label>
                  <input
                    id="custDate"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="custTime" className={labelClass}>
                    الوقت
                  </label>
                  <input
                    id="custTime"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-[18px]">
                <label htmlFor="custNotes" className={labelClass}>
                  ملاحظات (اختياري)
                </label>
                <textarea
                  id="custNotes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="أي تفاصيل إضافية على الطلب..."
                  className={inputClass + ' min-h-[64px] resize-y'}
                />
              </div>
            </>
          )}
        </div>

        <div className="flex-none border-t border-[#5c3a34]/15 bg-[#fbf6ec] px-[22px] pb-[26px] pt-[18px]">
          <div className="mb-3.5 flex items-center justify-between">
            <span className="text-[.95rem] text-[#6b564d]">المجموع التقريبي</span>
            <span className="font-['Aref_Ruqaa'] text-[1.6rem] font-bold text-[#5c3a34]">{formatTotal(total)}</span>
          </div>
          <button
            type="button"
            onClick={handleSend}
            disabled={items.length === 0}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#1f6b46] py-[15px] text-[1rem] font-bold text-white transition-colors hover:bg-[#2c8657] disabled:cursor-not-allowed disabled:opacity-50"
          >
            إرسال الطلب عبر واتساب
          </button>
          <p className="mt-2.5 text-center text-[.76rem] text-[#93877c]">
            سيتم فتح واتساب برسالة جاهزة تحتوي طلبك — التأكيد النهائي يتم مباشرة من الفرع.
          </p>
        </div>
      </div>
    </>
  );
}
