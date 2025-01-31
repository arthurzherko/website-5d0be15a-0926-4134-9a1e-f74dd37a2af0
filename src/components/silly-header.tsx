import { useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Typography } from "./ui/typography";
import { motion } from "framer-motion";
import { PartyPopper } from "lucide-react";

export function SillyHeader() {
  const [isWiggling, setIsWiggling] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex flex-1 items-center justify-between">
          <motion.div
            animate={{ rotate: isWiggling ? [0, -10, 10, -10, 10, 0] : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-foreground hover:text-foreground/80"
              onMouseEnter={() => setIsWiggling(true)}
              onMouseLeave={() => setIsWiggling(false)}
            >
              <PartyPopper className="h-6 w-6 text-primary" />
              <Typography.Large>Глупый Сайт</Typography.Large>
            </Link>
          </motion.div>
          
          <nav className="flex items-center space-x-6">
            <Button asChild variant="ghost" className="text-foreground hover:text-foreground/80 hover:bg-accent/10">
              <Link to="/silly">Глупости</Link>
            </Button>
            <Button asChild variant="ghost" className="text-foreground hover:text-foreground/80 hover:bg-accent/10">
              <Link to="/very-silly">Очень глупости</Link>
            </Button>
            <Button asChild variant="ghost" className="text-foreground hover:text-foreground/80 hover:bg-accent/10">
              <Link to="/mega-silly">Мега глупости</Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}