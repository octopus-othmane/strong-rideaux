import { productsData } from "@/lib/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InteractiveCategoryList } from "@/components/InteractiveCategoryList";

export const metadata = {
  title: "Nos Produits | STRONG RIDEAUX",
  description: "Découvrez notre gamme complète de solutions de fermeture en aluminium : volets roulants, portes sectionnelles, portails automatiques.",
};

export default function ProduitsPage() {
  return (
    <div className="bg-[#F3F1EC] min-h-screen pt-32 pb-24 md:pt-48 md:pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="NOS PRODUITS"
          subtitle="Des solutions de fermeture, de protection et d'automatisation pensées pour répondre aux exigences des espaces contemporains."
          align="left"
          className="mb-12"
        />

        <InteractiveCategoryList categories={productsData} />
      </div>
    </div>
  );
}
