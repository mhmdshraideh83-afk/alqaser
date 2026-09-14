import { BRANCHES } from '../data/branches.js';

export default function Branches() {
  return (
    <section id="branches" className="bg-[#fbf6ec] py-[76px]">
      <div className="mx-auto max-w-[1080px] px-[22px]">
        <div className="mb-[38px] max-w-[640px]">
          <div className="mb-2.5 text-[.9rem] font-bold text-[#c68a3e]">فروعنا</div>
          <h2 className="font-['Aref_Ruqaa'] text-[2.1rem] font-bold leading-[1.25] text-[#221410]">وين تلاقينا</h2>
          <p className="mt-3 text-[1.02rem] text-[#6b564d]">فرعان في إربد لخدمتكم.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 min-[761px]:grid-cols-2">
          {BRANCHES.map((b) => (
            <div
              key={b.name}
              className="rounded-[18px] border border-[#5c3a34]/10 bg-[#f6ecd9] p-[30px] shadow-[0_18px_40px_-20px_rgba(20,10,6,0.55)]"
            >
              <span className="mb-3.5 inline-block rounded-full bg-[#1f6b46]/10 px-3 py-1 text-[.78rem] font-bold text-[#1f6b46]">
                {b.tag}
              </span>
              <h3 className="font-['Aref_Ruqaa'] text-[1.4rem] font-bold leading-[1.25] text-[#5c3a34]">{b.name}</h3>
              <p className="mt-2.5 text-[.98rem] text-[#6b564d]">{b.address}</p>
              {b.mapUrl && (
                <div className="mt-5 flex flex-wrap gap-2.5">
                  <a
                    href={b.mapUrl}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-[#5c3a34] px-5 py-2.5 text-[.88rem] font-bold text-[#5c3a34] transition-colors hover:bg-[#5c3a34] hover:text-[#f6ecd9]"
                  >
                    الاتجاهات على الخريطة
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
