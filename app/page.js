import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="products" class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
          <div class="max-w-screen-md mx-auto">
            <div class="grid grid-cols-3 gap-6">
              {new Array(6).fill(null).map(product => (
                <Product />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
