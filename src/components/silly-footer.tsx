import { Typography } from "./ui/typography";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

export function SillyFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="group animate-pulse hover:animate-none"
          >
            <Heart className="mr-2 h-4 w-4 text-destructive group-hover:animate-ping" />
            <Typography.Small>
              Сделано с любовью и глупостью
            </Typography.Small>
          </Button>
          <Typography.Muted>
            © {new Date().getFullYear()} Самый глупый сайт в мире
          </Typography.Muted>
        </div>
      </div>
    </footer>
  );
}