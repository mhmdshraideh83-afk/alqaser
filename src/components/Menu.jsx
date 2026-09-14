import { useState } from 'react';
import { MENU, CATS } from '../data/menu.js';
import { cartKey } from '../lib/cart.js';
import { formatPrice } from '../lib/format.js';

export default function Menu({ cart, onAdd, onChange }) {
  const [activeCat, setActiveCat] = useState(CATS[0]);

  return (
    <section id="menu" className="bg-[#3c2620] py-[76px] text-[#f6ecd9]">
      <div className="mx-auto max-w-[1080px] px-[22px]">
        <div className="mb-[38px] max-w-[640px]">
          <div className="mb-2.5 text-[.9rem] font-bold text-[#e3b671]">قائمة الأصناف</div>
          <h2 className="font-['Aref_Ruqaa'] text-[2.1rem] font-bold leading-[1.25] text-[#f6ecd9]">
            منيو القصر الشرقي
          </h2>
          <p className="mt-3 text-[1.02rem] text-[#efe1c8]">
            اختر الصنف، حدّد الكمية، وأضفه إلى طلبك — الطلب يصل لنا مباشرة عبر واتساب.
          </p>
        </div>

        <div className="mb-[34px] flex gap-2.5 overflow-x-auto pb-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CATS.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCat(cat)}
              className={
                'flex-none rounded-full border-[1.5px] px-5 py-2.5 text-[.92rem] font-bold transition-all duration-200 ' +
                (cat === activeCat
                  ? 'border-[#c68a3e] bg-[#c68a3e] text-[#221410]'
                  : 'border-[#f6ecd9]/28 text-[#efe1c8]')
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-x-10 min-[701px]:grid-cols-2">
          {MENU[activeCat].map(([name, price]) => {
            const key = cartKey(activeCat, name);
            const qty = cart[key]?.qty ?? 0;
            return (
              <div
                key={key}
                className="flex items-center justify-between gap-3.5 border-b border-[#f6ecd9]/14 py-[15px]"
              >
                <div className="min-w-0">
                  <div className="text-[1.02rem] font-medium text-[#f6ecd9]">{name}</div>
                  <div className="mt-1 text-[.9rem] font-bold text-[#e3b671]">{formatPrice(price)}</div>
                </div>
                <div className="flex flex-none items-center gap-0 rounded-full bg-[#f6ecd9]/8 p-1">
                  {qty > 0 ? (
                    <>
                      <button
                        type="button"
                        onClick={() => onChange(key, -1)}
                        aria-label="إنقاص الكمية"
                        className="flex h-[30px] w-[30px] items-center justify-center rounded-full text-[1.1rem] text-[#f6ecd9] transition-colors hover:bg-[#f6ecd9]/14"
                      >
                        −
                      </button>
                      <span className="min-w-[22px] text-center text-[.95rem] font-bold">{qty}</span>
                      <button
                        type="button"
                        onClick={() => onChange(key, 1)}
                        aria-label="زيادة الكمية"
                        className="flex h-[30px] w-[30px] items-center justify-center rounded-full text-[1.1rem] text-[#f6ecd9] transition-colors hover:bg-[#f6ecd9]/14"
                      >
                        +
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onAdd(activeCat, name, price)}
                      className="h-[30px] rounded-full bg-[#c68a3e] px-3.5 text-[.85rem] font-bold text-[#221410] transition-colors hover:bg-[#e3b671]"
                    >
                      أضف
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
