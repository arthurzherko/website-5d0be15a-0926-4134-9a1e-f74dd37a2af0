import { useState } from "react";
import { motion } from "framer-motion";
import { SillyHeader } from "@/components/silly-header";
import { SillyFooter } from "@/components/silly-footer";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import {
  Sparkles,
  PartyPopper,
  Laugh,
  Heart,
  Star,
  Zap,
} from "lucide-react";

export function MegaSilly() {
  const [sillyLevel, setSillyLevel] = useState(0);

  const handleSillyButton = () => {
    setSillyLevel((prev) => prev + 1);
    
    const messages = [
      "Ой, щекотно!",
      "Хи-хи-хи!",
      "Ха-ха-ха!",
      "МЕГА ХА-ХА-ХА!",
      "УЛЬТРА МЕГА СУПЕР ХА-ХА-ХА!",
    ];

    toast(messages[Math.min(sillyLevel, messages.length - 1)], {
      icon: sillyLevel > 3 ? "🤪" : "😄",
      duration: 2000,
    });
  };

  const icons = [Heart, Star, Zap, PartyPopper, Laugh, Sparkles];

  return (
    <div className="flex min-h-screen flex-col">
      <SillyHeader />
      
      <main className="container flex-1 py-8">
        <Card className="relative overflow-hidden p-8">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Typography.H1 className="text-center">
              МЕГА глупая страница!!!
            </Typography.H1>
          </motion.div>

          <div className="mt-8 text-center">
            <Typography.Lead>
              Эта страница настолько глупая, что может взорвать твой мозг!
            </Typography.Lead>

            <div className="mt-4">
              <Button
                size="lg"
                variant="outline"
                onClick={handleSillyButton}
                className="group"
              >
                Нажми для максимальной глупости!
                {icons.slice(0, Math.min(sillyLevel + 1, icons.length)).map((Icon, i) => (
                  <Icon
                    key={i}
                    className="ml-2 inline-block animate-bounce"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </Button>
            </div>
          </div>

          <div className="mt-8">
            <motion.div
              className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
              animate={{
                rotate: sillyLevel > 3 ? [0, 360] : 0,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="aspect-square rounded-full bg-primary p-4"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: sillyLevel > 2 ? [0, 360] : 0,
                    backgroundColor: sillyLevel > 1 ? [
                      "rgb(var(--primary))",
                      "rgb(var(--secondary))",
                      "rgb(var(--accent))",
                    ] : "rgb(var(--primary))",
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </Card>
      </main>

      <SillyFooter />
    </div>
  );
}