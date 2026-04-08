import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Check, Settings } from 'lucide-react';

interface ProductHeaderProps {
  selectedProducts: string[];
  onToggleProduct: (id: string) => void;
  onOpenAdmin: () => void;
}

export const ProductHeader: React.FC<ProductHeaderProps> = ({ selectedProducts, onToggleProduct, onOpenAdmin }) => {
  const [clickCount, setClickCount] = useState(0);
  
  const isSelected = (id: string) => selectedProducts.includes(id);

  const handleSecretClick = (e: React.MouseEvent) => {
    e.preventDefault(); 
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount === 5) {
      onOpenAdmin();
      setClickCount(0);
    }
  };

  return (
    <div className="mb-8">
      {/* Top Badge */}
      <div className="flex justify-center mb-6">
        <div className="relative bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-blue-100 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-nubank" />
          <h1 className="text-sm md:text-base font-bold text-gray-800 tracking-tight flex items-center">
            Compre seguro com o <span className="text-nubank mx-1">Nubank</span> pelo NuPay
            
            <button 
              onClick={handleSecretClick}
              className="ml-2 text-gray-300 hover:text-nubank transition-colors focus:outline-none p-1"
              title="Admin"
            >
              <Settings className="w-3.5 h-3.5" />
            </button>
          </h1>
        </div>
      </div>

      {/* Main Title & Subtitle */}
      <div className="text-center mb-8 px-4">
        <div className="flex flex-col items-center justify-center gap-4 mb-4">
           <img 
             src="https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-3.png" 
             alt="Nubank" 
             className="h-16 md:h-24 w-auto object-contain"
           />
           <div className="text-center">
             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
               Reserva de Enxames Selecionados
             </h2>
             <p className="text-gray-500 text-sm md:text-base font-medium italic mt-1">
               Meliponicultura Sustentável e Genética Premium
             </p>
           </div>
        </div>
      </div>

      {/* Single Centered Product Card */}
      <div className="flex items-center justify-center max-w-lg mx-auto p-4">
        <div 
          className={`
            group relative w-full flex items-center bg-white p-5 rounded-3xl shadow-lg border 
            ${isSelected('kit') ? 'border-nubank ring-4 ring-nubank/10' : 'border-gray-100'}
          `}
        >
          {/* Checkbox Overlay */}
          <div className={`
            absolute top-4 right-4 w-7 h-7 rounded-full border flex items-center justify-center transition-all z-10
            ${isSelected('kit') ? 'bg-nubank border-nubank shadow-md' : 'bg-white border-gray-300'}
          `}>
             {isSelected('kit') && <Check className="w-4 h-4 text-white" />}
          </div>

          <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0 overflow-hidden rounded-2xl relative shadow-inner">
             <img 
               src="https://abelhas.org:9443/MediaUploader/fa5ce88be106452ea6a0dd88ecc319c3.webp" 
               alt="Kit de Abelhas Premium" 
               className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className="ml-5 flex flex-col justify-center flex-1">
            <span className="text-xs font-black text-nubank uppercase tracking-[0.2em] mb-1">Combo Especial</span>
            <span className="text-sm md:text-base font-bold text-gray-800 leading-tight">
              1 enxame de abelha urucu cinzenta com frete grátis para todo o brasil com entrega segura.
            </span>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-[10px] bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-bold border border-green-100 uppercase">
                PRONTA ENTREGA
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-4">
         <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Genética selecionada de alta produtividade</span>
         </div>
      </div>
    </div>
  );
};