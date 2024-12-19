import { useEffect, useRef, useState } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { motion, useInView } from 'motion/react'
import { copyToClipboard } from "../../helpers/copyToClipboard";

const button = tv({
  base: "relative transition duration-200 ease-in-out group",
  variants: {
    types: {
      about: "hover:scale-125 shadow-social p-3 rounded-xl text-3xl",
      footer:
        "hover:scale-110 rounded-full border-2 border-white text-sm sm:text-base xl:text-xl font-light px-8 xl:px-10 py-3",
    },
  },
  defaultVariants: {
    types: "about",
  },
});

const textCopy = tv({
  base: "absolute text-sm -top-6 font-semibold opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100",
  variants: {
    typesCopy: {
      aboutTrue: "-left-0",
      aboutFalse: "left-[11px]",
      footerTrue: "left-8",
      footerFalse: "left-12",
    },
  },
});

type ButtonEmailProps = {
  children: React.ReactNode;
  typesCopy?: VariantProps<typeof textCopy>["typesCopy"];
} & VariantProps<typeof button>;

export function ButtonEmail({ children, types, typesCopy }: ButtonEmailProps) {
  const [hasCopied, setHasCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const ref = useRef(null)
  const inView = useInView(ref, {
    margin: '0px 0px -80px 0px',
    once: true
  })

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

  const textCopyVariant =
    typesCopy ??
    (types ? `${types}${hasCopied ? "True" : "False"}` : undefined)

  return (
    <motion.button 
      onClick={handleCopy} 
      className={button({ types })}
      ref={ref} 
      animate={{
        y: inView ? 0 : "80%", 
        opacity: inView ? [0, 0.1, 1] : 0 
      }}
      transition={{
        duration: 0.4,
        ease: "linear",
        delay: 1.4,
      }}
    >
      <span
        className={textCopy({ typesCopy: textCopyVariant })}
      >
        {copied}
      </span>
      {children}
    </motion.button>
  );
}
