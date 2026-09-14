import { cartCount, cartTotal } from '../lib/cart.js';
import { formatTotal } from '../lib/format.js';

export default function CartBar({ cart, onOpen }) {
  const count = cartCount(cart);
  if (count === 0) return null;

  return (
    <div className="fixed bottom-[18px] left-1/2 z-70 flex max-w-[calc(100%-32px)] -translate-x-1/2 items-center gap-3.5 rounded-full bg-[#221410] py-3 pr-[10px] pl-[22px] text-[#f6ecd9] shadow-[0_14px_30px_-8px_rgba(0,0,0,.5)]">
      <span className="whitespace-nowrap text-[.9rem] font-medium text-[#efe1c8]">
        {count} {count === 1 ? 'صنف' : 'أصناف'}
      </span>
      <span className="whitespace-nowrap font-bold text-[#e3b671]">{formatTotal(cartTotal(cart))}</span>
      <button
        type="button"
        onClick={onOpen}
        className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#c68a3e] px-5 py-2.5 text-[.9rem] font-bold text-[#221410]"
      >
        عرض الطلب
      </button>
    </div>
  );
}
