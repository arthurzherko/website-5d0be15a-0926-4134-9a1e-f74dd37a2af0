import { motion } from "framer-motion";
import { Typography } from "./ui/typography";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

interface SillyHeroProps {
  title: string;
  subtitle: string;
  onActionClick?: () => void;
}

export function SillyHero({ title, subtitle, onActionClick }: SillyHeroProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Фоновая анимация */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-4 w-4 rounded-full bg-primary/20"
            animate={{
              x: ["0%", "100%", "0%"],
              y: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Основной контент */}
      <div className="container relative flex min-h-[70vh] flex-col items-center justify-center gap-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography.H1 className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {title}
          </Typography.H1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography.Lead>{subtitle}</Typography.Lead>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            size="lg"
            onClick={onActionClick}
            className="group relative overflow-hidden"
          >
            <span className="relative z-10">Нажми на меня!</span>
            <Sparkles className="relative z-10 ml-2 h-4 w-4" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}