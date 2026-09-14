import { useEffect, useState } from 'react';
import Logo from './icons/Logo.jsx';

const LINKS = [
  { href: '#about', label: 'من نحن' },
  { href: '#menu', label: 'المنيو' },
  { href: '#branches', label: 'فروعنا' },
  { href: '#contact', label: 'تواصل معنا' },
];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={
        'fixed inset-x-0 top-0 z-60 flex items-center justify-between transition-[background,box-shadow,padding] duration-350 ' +
        (solid
          ? 'bg-[#221410]/92 backdrop-blur-[10px] shadow-[0_2px_20px_rgba(0,0,0,.25)] px-[22px] py-3'
          : 'px-[22px] py-4')
      }
    >
      <div className="flex items-center gap-2.5">
        <Logo className="w-[34px] h-[34px] flex-none" />
        <span className="font-['Aref_Ruqaa'] text-[1.28rem] font-bold text-[#f6ecd9]">القصر الشرقي</span>
      </div>

      <nav className="hidden min-[761px]:flex items-center gap-[26px]">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="relative text-[.95rem] font-medium text-[#efe1c8] after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:bg-[#e3b671] after:transition-transform after:duration-250 after:content-[''] hover:after:scale-x-100"
          >
            {l.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        aria-label="القائمة"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
        className="min-[761px]:hidden text-[1.5rem] leading-none text-[#f6ecd9]"
      >
        ☰
      </button>

      {menuOpen && (
        <nav className="min-[761px]:hidden absolute inset-x-0 top-full flex flex-col gap-1 bg-[#221410]/95 px-[22px] py-4 backdrop-blur-[10px] shadow-[0_2px_20px_rgba(0,0,0,.25)]">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-[.95rem] font-medium text-[#efe1c8]"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
