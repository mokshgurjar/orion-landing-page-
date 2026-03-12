"use client";
import { CSSProperties, useEffect } from "react";
import { motion, stagger, useAnimate, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  style,
  filter = true,
  duration = 0.5,
  startTrigger = true,
}: {
  words: string;
  className?: string;
  style?: CSSProperties;
  filter?: boolean;
  duration?: number;
  startTrigger?: boolean;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (startTrigger) {
        animate(
          "span",
          {
            opacity: 1,
            filter: filter ? "blur(0px)" : "none",
          },
          {
            duration: duration ? duration : 1,
            delay: stagger(0.04), // sped up
          }
        );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current, startTrigger]);

  const wordVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className={cn("", className)} style={style}>
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            variants={wordVariants}
            className="opacity-0 inline-block"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
