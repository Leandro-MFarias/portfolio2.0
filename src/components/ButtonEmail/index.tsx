import { useEffect, useRef, useState } from "react";
import { tv, VariantProps } from 'tailwind-variants'
import { copyToClipboard } from "../../helpers/copyToClipboard";

const button = tv({
  base: "relative transition duration-200 ease-in-out group",
  variants: {
    types: {
      about: 'hover:scale-125 shadow-social p-3 rounded-xl text-3xl',
      footer: 'hover:scale-110 rounded-full border-2 border-white text-xl font-light px-10 py-3'
    },
  },
  defaultVariants: {
    types: 'about'
  }
})

type ButtonEmailProps = {
  children: React.ReactNode
} & VariantProps<typeof button>

export function ButtonEmail({children, types}: ButtonEmailProps) {
  const [hasCopied, setHasCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const email = "leandrorf1606@gmail.com";

  useEffect(() => {
    timeoutRef.current = setTimeout(setHasCopied, 4000, false);

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [hasCopied]);

  function handleCopy() {
    copyToClipboard(email)?.then(() => setHasCopied(true));
  }

  const copied = hasCopied ? "Copied!" : "copy";

  return (
    <button
      onClick={handleCopy}
      className={button({types})}
    >
      <span
        className={`absolute text-sm -top-6 font-semibold opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 ${
          hasCopied ? "left-0" : "left-[11px]"
        }`}
      >
        {copied}
      </span>
      {children}
    </button>
  );
}
