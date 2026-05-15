import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { products, projectImage } from '@/lib/siteData';

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Project categories and business supplies handled by Thakura Infratech."
        description="Explore residential plots, construction work, material supply and manufactured goods handled through the company’s development and trading capabilities."
      />

      <section className="split-section">
        <div className="split-image" style={{ backgroundImage: `url(${projectImage})` }} />
        <div className="split-content">
          <span className="eyebrow">Product Focus</span>
          <h2>Products and offerings depend on site availability, project scope and trading demand.</h2>
          <p>
            Pricing is shared after requirement review because plotting, construction and trading supplies vary by
            location, quantity, specification and delivery timelines.
          </p>
          <Link className="primary-btn inline-btn" href="/contact">Ask For Availability <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="section">
        <div className="product-grid large">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <article className="product-card" key={product.title}>
                <Icon size={30} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
