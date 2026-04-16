import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import type { Poem } from "@/data/poems";

interface Props {
  poem: Poem | null;
  onClose: () => void;
}

export const PoemModal = ({ poem, onClose }: Props) => {
  return (
    <Dialog open={!!poem} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-2xl bg-background border-gold/30 p-0 overflow-hidden">
        {poem && (
          <div className="p-8 md:p-12">
            <DialogTitle asChild>
              <h3 className="font-script text-4xl md:text-5xl text-coffee text-center mb-2">
                {poem.title}
              </h3>
            </DialogTitle>
            <DialogDescription className="sr-only">{poem.excerpt}</DialogDescription>

            <div className="flex justify-center my-6">
              <span className="block h-px w-20 bg-gold/60" />
            </div>

            <pre className="font-typewriter text-base md:text-lg text-cocoa/90 whitespace-pre-wrap leading-relaxed text-center">
{poem.body}
            </pre>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
