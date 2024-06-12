"use client"
import { Loader2Icon, PlusCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner"
import { Button } from "app/app/_components/ui/button"; 
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "app/app/_components/ui/dialog";
import { Input } from "app/app/_components/ui/input"; 
import { Label } from "app/app/_components/ui/label";
import { asTRPCError } from "app/lib/errors";
import { api } from "app/trpc/react";


export function AddDeporte() {

    const [isLoading, setIsLoading] = useState<boolean>(false);

  const { mutateAsync: createDeporte } =
    api.deporte.create.useMutation();

  const [Nombre, setNombre] = useState("");
  const [Tamaño, setTamaño] = useState<number>(0)


  const [open, setOpen] = useState(false);

  const router = useRouter();

function handleCreate() {
    setIsLoading(true);
    try {
    createDeporte({
            name: Nombre,
            tipo: Tamaño
    });

    toast.success("Producto creado correctamente");
router.refresh();
    setOpen(false);
    } catch (e) {
    const error = asTRPCError(e)!;
    toast.error(error.message);
    }
    setIsLoading(false);
}

  return (
    <>
            <Button onClick={() => setOpen(true)}>
        <PlusCircleIcon className="mr-2" size={20} />
        Crear un deporte
        </Button>
        <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle>Crear un deporte</DialogTitle>
            {/* <DialogDescription>
                    
                </DialogDescription> */}
            </DialogHeader>
            <div>
            <Label htmlFor="Nombre">Nombre</Label>
            <Input
                id="Nombre"
                placeholder="..."
                value={Nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="Tamaño">Tamaño</Label>
            <Input
              id="Tamaño"
              placeholder="..."
              value={Tamaño}
              type="number"
              onChange={(e) => setTamaño(parseFloat(e.target.value))}
            />
          </div>
          <DialogFooter>
            <Button disabled={isLoading} onClick={handleCreate}>
              {isLoading && (
                <Loader2Icon className="mr-2 animate-spin" size={20} />
              )}
              Confirmar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
