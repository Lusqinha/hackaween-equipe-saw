import { Button } from "@/components/ui/button";
import { ChevronLeft, Star } from "lucide-react";
import Image from "next/image";

const ProductsFood = () => {
  return (
    <div>
      <div className="relative w-full bg-slate-500">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-8 left-8 z-10"
        >
          <ChevronLeft size={24} />
        </Button>
        <div className="w-full">
          <Image
            src="/assets/queijo.jpg"
            alt="food"
            width={1920}
            height={600}
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-row">
          <h4 className="text-slate-500">Vendido por</h4>
          <p className="ml-1">Polo Norte</p>
        </div>
        <div className="mt-4">
          <h1 className="text-4xl font-bold">Queijo Mussarela</h1>
          <p className="text-slate-500">Queijo Mussarela com 180g</p>
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-base">Descrição</h2>
          <p className="text-base text-slate-500">
            Este queijo mussarela está com uma aparência excelente, dentro da
            validade e pronto para o consumo.
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="mt-8">
            <h2 className="font-bold text-base">Validade</h2>
            <p className="text-base text-slate-500">20/11/2024</p>
          </div>
          <div className="flex mt-10">
            <h1 className="font-extrabold text-xl">R$ 13,00</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button variant="destructive" size="lg" className="mt-8">
          Compre Agora!
        </Button>
      </div>
    </div>
  );
};

export default ProductsFood;
