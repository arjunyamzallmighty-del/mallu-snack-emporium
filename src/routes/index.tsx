import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ShoppingBag,
  Star,
  Truck,
  Leaf,
  Award,
  Users,
  Plus,
  Minus,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
  ArrowRight,
  Flame,
  Heart,
  Menu,
  X,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import why from "@/assets/why.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import step from "@/assets/step.jpg";
import pTomatoMurukku from "@/assets/p_tomato_murukku.jpg";
import pAchappam from "@/assets/p_achappam.jpg";
import pMurukku from "@/assets/p_murukku.jpg";
import pPakkavada from "@/assets/p_pakkavada.jpg";
import pJackfruit from "@/assets/p_jackfruit.jpg";
import pSweetBanana from "@/assets/p_sweet_banana.jpg";
import pMixture from "@/assets/p_mixture.jpg";

const WA_NUMBER = "919446614038";
const waUrl = (product?: string) => {
  const msg = product
    ? `Hi Mallu Snacks! I'd like to order: ${product}. Please share availability and delivery details.`
    : "Hi Mallu Snacks! I'd like to place an order. Please share the menu and delivery details.";
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mallu Snacks — Kerala's Favourite Crunch | Authentic Banana Chips" },
      { name: "description", content: "Premium Kerala snacks made fresh from traditional recipes. Banana chips, Murukku, Achappam, Sharkara Peratti, Mixture & more. Pan India delivery via WhatsApp." },
      { property: "og:title", content: "Mallu Snacks — Kerala's Favourite Crunch" },
      { property: "og:description", content: "Authentic Kerala snacks, freshly fried in coconut oil. Order on WhatsApp, delivered across India." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Index,
});

const products = [
  { id: 1, name: "Authentic Banana Chips", desc: "Fried fresh in pure Kerala coconut oil", price: 199, mrp: 249, rating: 4.9, reviews: 1284, img: p1, badge: "Best Seller", spice: 1 },
  { id: 2, name: "Peri Peri Fries", desc: "Smoky, fiery, dangerously addictive", price: 229, mrp: 279, rating: 4.8, reviews: 942, img: p2, badge: "Hot", spice: 4 },
  { id: 3, name: "Made in Jaggery", desc: "Crunchy chips kissed with pure jaggery", price: 219, mrp: 269, rating: 4.9, reviews: 781, img: p3, badge: "New", spice: 0 },
  { id: 4, name: "Banana Candy (Sharkara Peratti)", desc: "Glossy jaggery coated heritage bliss", price: 239, mrp: 289, rating: 5.0, reviews: 612, img: p4, badge: "Heritage", spice: 0 },
  { id: 5, name: "Sweet Banana Chips", desc: "Caramelised gold, melt-in-mouth crunch", price: 219, mrp: 269, rating: 4.9, reviews: 488, img: pSweetBanana, badge: "Loved", spice: 0 },
  { id: 6, name: "Jackfruit Chips", desc: "Wild jackfruit, golden & gloriously crisp", price: 259, mrp: 319, rating: 4.9, reviews: 421, img: pJackfruit, badge: "Premium", spice: 0 },
  { id: 7, name: "Tomato Murukku", desc: "Tangy tomato spice, perfect spiral crunch", price: 189, mrp: 239, rating: 4.8, reviews: 356, img: pTomatoMurukku, badge: "Trending", spice: 2 },
  { id: 8, name: "Classic Murukku", desc: "Hand-twisted Kerala tea-time legend", price: 179, mrp: 229, rating: 4.8, reviews: 612, img: pMurukku, badge: "Classic", spice: 1 },
  { id: 9, name: "Achappam", desc: "Crisp rose cookies — Kerala festive favourite", price: 199, mrp: 249, rating: 4.9, reviews: 287, img: pAchappam, badge: "Festive", spice: 0 },
  { id: 10, name: "Pakkavada", desc: "Crunchy ribbon pakoda with curry leaves", price: 189, mrp: 239, rating: 4.8, reviews: 394, img: pPakkavada, badge: "Tea-time", spice: 2 },
  { id: 11, name: "Kerala Mixture", desc: "The legendary spicy crunchy medley", price: 199, mrp: 249, rating: 4.9, reviews: 728, img: pMixture, badge: "Iconic", spice: 3 },
  { id: 12, name: "Kerala Masala Chips", desc: "Curry leaves & traditional spice blend", price: 229, mrp: 279, rating: 4.8, reviews: 533, img: p5, badge: "Spicy", spice: 3 },
];

const trustBar = [
  { icon: Truck, label: "Pan India Delivery" },
  { icon: Leaf, label: "Authentic Kerala Recipe" },
  { icon: Star, label: "10,000+ Happy Customers" },
  { icon: Award, label: "Premium Ingredients" },
];

const whyPoints = [
  "Freshly Prepared in small batches",
  "Zero Artificial Preservatives",
  "Premium Handpicked Kerala Bananas",
  "Traditional Kerala Family Recipe",
  "Hygienically Packed Same Day",
  "Sealed Fresh, Delivered Crisp",
];

const steps = [
  { n: "01", t: "Handpicked Bananas", d: "Sourced direct from Kerala farms at peak ripeness." },
  { n: "02", t: "Precision Slicing", d: "Each chip cut to a perfect 1.2mm for the ideal crunch." },
  { n: "03", t: "Coconut Oil Fry", d: "Slow-fried in pure Kerala coconut oil. Always fresh." },
  { n: "04", t: "Seasoning Magic", d: "Hand-tossed with traditional spice blends." },
  { n: "05", t: "Sealed & Shipped", d: "Nitrogen-flushed packs delivered to your door." },
];

const reviews = [
  { name: "Anjali R.", city: "Bengaluru", text: "The crispiest banana chips I've ever had. Tastes exactly like my Ammachi made!", img: "https://i.pravatar.cc/100?img=47" },
  { name: "Rohan M.", city: "Mumbai", text: "Tastes exactly like homemade Kerala chips. The peri peri is dangerously addictive.", img: "https://i.pravatar.cc/100?img=12" },
  { name: "Priya N.", city: "Delhi", text: "Perfect snack for tea time. The sharkara variant is pure nostalgia in a pack.", img: "https://i.pravatar.cc/100?img=32" },
  { name: "Arun K.", city: "Hyderabad", text: "Premium quality, beautifully packed. Better than anything at the supermarket.", img: "https://i.pravatar.cc/100?img=15" },
];

const faqs = [
  { q: "How fresh are the chips when they arrive?", a: "Every order is fried fresh and dispatched within 24 hours. Our nitrogen-flushed packaging keeps them garden-crisp for up to 90 days." },
  { q: "Do you ship across India?", a: "Yes. We deliver to every PIN code in India through trusted courier partners. Most metros receive orders in 2-4 days." },
  { q: "What oil do you use for frying?", a: "Only 100% pure Kerala coconut oil — the traditional choice. Never palm oil, never refined oils." },
  { q: "How long do they stay fresh after opening?", a: "Best enjoyed within 7 days of opening. Re-seal the pack tightly and store in a cool, dry place." },
  { q: "Are there any preservatives or artificial flavours?", a: "Zero preservatives. Zero artificial flavours. Just bananas, oil, salt and traditional Kerala spices." },
];

const counters = [
  { n: 50000, suffix: "+", label: "Orders Delivered" },
  { n: 10000, suffix: "+", label: "Happy Customers" },
  { n: 49, suffix: "/50", label: "Average Rating", divide: 10 },
  { n: 100, suffix: "%", label: "Kerala Authentic" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Counter({ to, suffix, divide }: { to: number; suffix: string; divide?: number }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1800;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setV(Math.floor(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  const display = divide ? (v / divide).toFixed(1) : v.toLocaleString("en-IN");
  return <span ref={ref}>{display}{suffix}</span>;
}

function Index() {
  useReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [reviewIdx, setReviewIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setReviewIdx((i) => (i + 1) % reviews.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <style>{`
        [data-reveal]{opacity:0;transform:translateY(28px);transition:opacity .8s ease,transform .8s ease;}
        [data-reveal].revealed{opacity:1;transform:none;}
        .parallax-bg{transform:translateZ(0);}
      `}</style>

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="container-x flex items-center justify-between h-16 sm:h-20">
          <a href="#top" className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-display font-black">M</div>
            <div className="leading-tight">
              <div className="font-display font-black tracking-tight text-base sm:text-lg">MALLU</div>
              <div className="text-[10px] sm:text-xs font-semibold text-primary uppercase tracking-[0.2em] -mt-0.5">Snacks</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="#shop" className="hover:text-primary transition-colors">Shop</a>
            <a href="#flavours" className="hover:text-primary transition-colors">Flavours</a>
            <a href="#story" className="hover:text-primary transition-colors">Our Story</a>
            <a href="#process" className="hover:text-primary transition-colors">How It's Made</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 !text-xs">
              <MessageCircle className="h-4 w-4" /> Order on WhatsApp
            </a>
            <button onClick={() => setMenuOpen(true)} className="md:hidden p-2" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-background flex flex-col p-6 md:hidden">
            <div className="flex justify-between items-center mb-10">
              <span className="font-display font-black text-xl">MALLU</span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close"><X className="h-7 w-7" /></button>
            </div>
            <nav className="flex flex-col gap-6 text-2xl font-display font-bold">
              {["Shop","Flavours","Story","Process","FAQ"].map(l => (
                <a key={l} onClick={() => setMenuOpen(false)} href={`#${l.toLowerCase()}`}>{l}</a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[100svh] flex items-center pt-16 sm:pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Crispy Kerala banana chips" className="w-full h-full object-cover parallax-bg" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>

        {/* floating chips */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-[18%] left-[8%] h-14 w-14 rounded-full bg-gold/90 blur-[1px] animate-float opacity-80" />
          <div className="absolute top-[60%] left-[14%] h-8 w-8 rounded-full bg-gold/70 animate-float-slow" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-[35%] right-[12%] h-10 w-10 rounded-full bg-gold/80 animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-[72%] right-[20%] h-6 w-6 rounded-full bg-gold/60 animate-float-slow" style={{ animationDelay: "0.5s" }} />
        </div>

        <div className="container-x relative z-10 py-20">
          <div className="max-w-2xl text-cream">
            <div data-reveal className="inline-flex items-center gap-2 rounded-full bg-cream/15 backdrop-blur px-4 py-1.5 text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-cream border border-cream/20">
              <Leaf className="h-3.5 w-3.5 text-gold" /> Authentic · From Kerala
            </div>
            <h1 data-reveal className="mt-6 font-display font-black leading-[0.95] text-[2.75rem] sm:text-6xl lg:text-7xl text-cream">
              Kerala's<br/>
              <span className="text-gold">Favourite Crunch.</span>
            </h1>
            <p data-reveal className="mt-6 text-lg sm:text-xl text-cream/90 max-w-xl font-light">
              Thin. Crispy. Freshly fried. Authentic banana chips made every day with premium Kerala bananas and time-tested family recipes.
            </p>
            <div data-reveal className="mt-10 flex flex-wrap gap-4">
              <a href="#shop" className="btn-gold">
                <ShoppingBag className="h-5 w-5" /> Order Now
              </a>
              <a href="#flavours" className="btn-outline-cream">
                Explore Flavours <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div data-reveal className="mt-10 flex items-center gap-6 text-cream/80 text-sm">
              <div className="flex -space-x-2">
                {[47, 12, 32, 15].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/40?img=${i}`} alt="" className="h-9 w-9 rounded-full border-2 border-cream object-cover" />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 text-gold">
                  {[...Array(5)].map((_,i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <div className="text-xs mt-0.5">Loved by 10,000+ snack lovers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-primary text-primary-foreground py-5 border-y border-primary-dark">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6">
          {trustBar.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-sm sm:text-base font-semibold">
              <Icon className="h-5 w-5 text-gold shrink-0" />
              <span className="truncate">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section id="shop" className="py-20 sm:py-28 bg-cream relative">
        <div className="absolute inset-0 leaf-pattern opacity-40 pointer-events-none" />
        <div className="container-x relative">
          <div className="text-center max-w-2xl mx-auto mb-14" data-reveal>
            <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-primary">Best Sellers</span>
            <h2 className="mt-3 text-4xl sm:text-5xl">Crunch In Every Bite</h2>
            <p className="mt-4 text-muted-foreground text-lg">Five iconic flavours. One unforgettable Kerala crunch. Made fresh, delivered fresher.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <article key={p.id} data-reveal style={{ transitionDelay: `${i * 80}ms` }} className="chip-card group flex flex-col">
                <div className="relative aspect-square overflow-hidden bg-white">
                  <img src={p.img} alt={p.name} loading="lazy" className="chip-img w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                    {p.badge}
                  </div>
                  <button aria-label="wishlist" className="absolute top-4 right-4 grid place-items-center h-9 w-9 rounded-full bg-white/90 backdrop-blur hover:bg-gold hover:text-gold-foreground transition-colors">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-1 text-gold text-sm">
                    {[...Array(5)].map((_,i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                    <span className="text-muted-foreground ml-1.5 text-xs">{p.rating} ({p.reviews})</span>
                  </div>
                  <h3 className="mt-2 text-xl">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>

                  {p.spice > 0 && (
                    <div className="mt-3 flex items-center gap-1.5">
                      <span className="text-[10px] font-bold uppercase text-muted-foreground">Spice</span>
                      {[...Array(5)].map((_,i) => (
                        <Flame key={i} className={`h-3.5 w-3.5 ${i < p.spice ? "text-destructive fill-destructive" : "text-border"}`} />
                      ))}
                    </div>
                  )}

                  <div className="mt-5 flex items-end justify-between">
                    <div>
                      <span className="font-display font-black text-2xl text-foreground">₹{p.price}</span>
                      <span className="ml-2 text-sm text-muted-foreground line-through">₹{p.mrp}</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Save ₹{p.mrp - p.price}</span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <button className="rounded-full border-2 border-primary text-primary font-display font-bold text-xs uppercase py-3 hover:bg-primary hover:text-primary-foreground transition-colors">Add to Cart</button>
                    <button className="rounded-full bg-foreground text-background font-display font-bold text-xs uppercase py-3 hover:bg-primary transition-colors">Quick Buy</button>
                  </div>
                </div>
              </article>
            ))}

            {/* CTA card to round out the grid */}
            <article data-reveal className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark text-primary-foreground p-8 flex flex-col justify-between min-h-[420px]">
              <div>
                <Leaf className="h-10 w-10 text-gold" />
                <h3 className="mt-6 text-3xl text-primary-foreground">Try Them All</h3>
                <p className="mt-3 text-primary-foreground/85">The Mallu Sampler Box — all 5 flavours, one perfect gift. Free shipping included.</p>
              </div>
              <div className="mt-6">
                <div className="text-4xl font-display font-black">₹999 <span className="text-base font-medium opacity-70 line-through">₹1245</span></div>
                <a href="#" className="mt-5 btn-gold w-full"><ShoppingBag className="h-5 w-5"/> Buy Sampler</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* WHY MALLU */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative" data-reveal>
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/20 to-gold/30 blur-2xl" />
            <img src={why} alt="Kerala lifestyle" loading="lazy" className="relative rounded-[2rem] shadow-card w-full object-cover aspect-[4/5]" />
            <div className="absolute -bottom-6 -right-6 sm:-right-10 bg-cream rounded-2xl p-5 shadow-card max-w-[200px]">
              <div className="flex gap-0.5 text-gold">{[...Array(5)].map((_,i)=><Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <div className="mt-2 font-display font-black text-2xl">4.9 / 5</div>
              <div className="text-xs text-muted-foreground">from 3,200+ verified reviews</div>
            </div>
          </div>
          <div data-reveal>
            <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-primary">Why Mallu</span>
            <h2 className="mt-3 text-4xl sm:text-5xl">Why People Love<br/>Mallu Snacks</h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-lg">
              We don't take shortcuts. Every pack carries the soul of a Kerala kitchen — slow, careful, generous, and impossibly crunchy.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {whyPoints.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <span className="mt-1 grid place-items-center h-6 w-6 shrink-0 rounded-full bg-primary text-primary-foreground text-xs font-bold">✓</span>
                  <span className="font-semibold">{pt}</span>
                </li>
              ))}
            </ul>
            <a href="#shop" className="mt-10 inline-flex btn-primary">Shop the Range <ArrowRight className="h-4 w-4"/></a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-20 sm:py-32 bg-primary-dark text-cream relative overflow-hidden">
        <div className="absolute inset-0 leaf-pattern opacity-20" />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="container-x relative text-center max-w-3xl mx-auto">
          <span data-reveal className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-gold">Our Story</span>
          <h2 data-reveal className="mt-4 text-4xl sm:text-6xl text-cream">From Kerala,<br/><em className="not-italic text-gold">with love.</em></h2>
          <p data-reveal className="mt-8 text-lg sm:text-xl text-cream/85 leading-relaxed">
            At Mallu Snacks, every batch is crafted using handpicked bananas and time-tested Kerala recipes — the same ones passed down through generations of home kitchens. We bring the authentic taste of God's Own Country directly to your doorstep, one perfectly crisp bite at a time.
          </p>
          <div data-reveal className="mt-10 inline-flex items-center gap-3 text-gold">
            <span className="h-px w-12 bg-gold/60" />
            <span className="font-display font-bold tracking-[0.25em] text-xs uppercase">Established 2018 · Kochi</span>
            <span className="h-px w-12 bg-gold/60" />
          </div>
        </div>
      </section>

      {/* FLAVOUR SHOWCASE */}
      <section id="flavours" className="py-20 sm:py-28 bg-cream">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12" data-reveal>
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-primary">Flavour Showcase</span>
              <h2 className="mt-3 text-4xl sm:text-5xl max-w-xl">Pick Your Crunch</h2>
            </div>
            <p className="text-muted-foreground max-w-md">From mellow & salty to fiery hot — there's a Mallu chip for every craving.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div key={p.id} data-reveal style={{transitionDelay:`${i*60}ms`}} className="group relative rounded-3xl overflow-hidden bg-white border border-border hover:shadow-card transition-all">
                <div className="aspect-[5/4] overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl">{p.name}</h3>
                    {p.badge === "Best Seller" && <span className="text-[10px] font-bold uppercase tracking-wider bg-gold text-gold-foreground px-2 py-1 rounded-full">Popular</span>}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1.5">{p.desc}</p>
                  <div className="mt-5 grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Spice</div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_,i)=>(
                          <span key={i} className={`h-2 w-full rounded-full ${i < p.spice ? "bg-destructive" : "bg-border"}`}/>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Crunch</div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_,i)=>(
                          <span key={i} className={`h-2 w-full rounded-full ${i < 5 ? "bg-gold" : "bg-border"}`}/>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14" data-reveal>
            <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-primary">Loved Pan India</span>
            <h2 className="mt-3 text-4xl sm:text-5xl">Real Reviews. Real Crunch.</h2>
          </div>

          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-center" data-reveal>
            <div className="text-center lg:text-left">
              <div className="font-display font-black text-7xl sm:text-8xl text-primary leading-none">4.9</div>
              <div className="flex justify-center lg:justify-start gap-1 text-gold mt-3">
                {[...Array(5)].map((_,i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <div className="mt-2 text-muted-foreground">Based on 3,200+ verified reviews</div>
            </div>

            <div className="relative">
              <div className="relative h-[280px] sm:h-[240px]">
                {reviews.map((r, i) => (
                  <article key={i}
                    className={`absolute inset-0 rounded-3xl bg-cream p-8 sm:p-10 shadow-soft transition-all duration-700 ${i === reviewIdx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
                    <div className="flex gap-1 text-gold mb-4">{[...Array(5)].map((_,i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                    <p className="text-lg sm:text-xl font-display font-bold leading-snug text-foreground">"{r.text}"</p>
                    <div className="mt-6 flex items-center gap-3">
                      <img src={r.img} alt={r.name} className="h-11 w-11 rounded-full object-cover" />
                      <div>
                        <div className="font-bold">{r.name}</div>
                        <div className="text-xs text-muted-foreground">{r.city} · Verified Customer</div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <div className="flex gap-2 mt-6">
                {reviews.map((_, i) => (
                  <button key={i} onClick={() => setReviewIdx(i)} aria-label={`review ${i+1}`}
                    className={`h-1.5 rounded-full transition-all ${i === reviewIdx ? "w-10 bg-primary" : "w-4 bg-border"}`}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20 sm:py-28 bg-cream relative overflow-hidden">
        <div className="container-x relative">
          <div className="text-center max-w-2xl mx-auto mb-16" data-reveal>
            <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-primary">How We Make It</span>
            <h2 className="mt-3 text-4xl sm:text-5xl">Crafted, Not Manufactured</h2>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            <div className="relative rounded-[2rem] overflow-hidden" data-reveal>
              <img src={step} alt="Slicing bananas" loading="lazy" className="w-full aspect-[5/4] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <div className="font-display font-bold text-xs uppercase tracking-[0.25em] text-gold">Step by step</div>
                <div className="font-display font-black text-2xl sm:text-3xl mt-2">Five steps. Zero shortcuts.</div>
              </div>
            </div>

            <ol className="relative">
              <div className="absolute left-[22px] top-2 bottom-2 w-px bg-border" aria-hidden />
              {steps.map((s, i) => (
                <li key={s.n} data-reveal style={{transitionDelay:`${i*100}ms`}} className="relative pl-16 pb-8 last:pb-0">
                  <div className="absolute left-0 top-0 grid place-items-center h-11 w-11 rounded-full bg-primary text-primary-foreground font-display font-black text-sm shadow-soft">{s.n}</div>
                  <h3 className="text-xl">{s.t}</h3>
                  <p className="text-muted-foreground mt-1">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* COUNTERS / SOCIAL PROOF */}
      <section className="py-16 sm:py-20 bg-foreground text-background">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-10">
          {counters.map((c) => (
            <div key={c.label} className="text-center" data-reveal>
              <div className="font-display font-black text-4xl sm:text-6xl text-gold">
                <Counter to={c.n} suffix={c.suffix} divide={c.divide} />
              </div>
              <div className="mt-2 text-sm sm:text-base font-semibold text-background/80 uppercase tracking-wider">{c.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10" data-reveal>
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-primary">@mallusnacks</span>
              <h2 className="mt-3 text-4xl sm:text-5xl">From The Gram</h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 font-display font-bold text-primary uppercase text-sm">
              <Instagram className="h-5 w-5" /> Follow Us
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[p1,p2,why,p4,p5,p3].map((img, i) => (
              <a key={i} data-reveal style={{transitionDelay:`${i*40}ms`}} href="#" className={`group relative block overflow-hidden rounded-2xl bg-cream ${i === 0 ? "sm:col-span-2 sm:row-span-2 aspect-square" : "aspect-square"}`}>
                <img src={img} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-colors flex items-center justify-center">
                  <Instagram className="h-7 w-7 text-cream opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 sm:py-28 bg-cream">
        <div className="container-x grid lg:grid-cols-[1fr_1.5fr] gap-12">
          <div data-reveal>
            <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-primary">Questions</span>
            <h2 className="mt-3 text-4xl sm:text-5xl">Frequently<br/>Asked</h2>
            <p className="mt-4 text-muted-foreground">Everything you wanted to know about our chips, freshness, and shipping.</p>
            <a href="#" className="mt-6 inline-flex items-center gap-2 font-bold text-primary">
              <MessageCircle className="h-5 w-5" /> Still have a question? Chat with us
            </a>
          </div>
          <div className="space-y-3" data-reveal>
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl bg-background border border-border overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left">
                  <span className="font-display font-bold text-base sm:text-lg">{f.q}</span>
                  <span className="shrink-0 grid place-items-center h-9 w-9 rounded-full bg-primary text-primary-foreground">
                    {openFaq === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${openFaq === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-6 text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary via-primary to-primary-dark text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 leaf-pattern opacity-25" />
        <div className="absolute top-10 left-10 h-20 w-20 rounded-full bg-gold/30 blur-2xl animate-float" />
        <div className="absolute bottom-10 right-20 h-32 w-32 rounded-full bg-gold/20 blur-3xl animate-float-slow" />
        <div className="container-x relative text-center max-w-3xl mx-auto" data-reveal>
          <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-gold">Final Call</span>
          <h2 className="mt-4 text-5xl sm:text-7xl text-primary-foreground">Bring Kerala<br/><span className="text-gold">Home.</span></h2>
          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/85 max-w-xl mx-auto">
            Experience authentic Kerala snacks delivered fresh to your doorstep. Free shipping on orders over ₹499.
          </p>
          <a href="#shop" className="mt-10 inline-flex btn-gold !text-base !px-10 !py-5">
            <ShoppingBag className="h-5 w-5" /> Order Now
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background pt-20 pb-32 sm:pb-12">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-display font-black">M</div>
                <div className="leading-tight">
                  <div className="font-display font-black text-lg">MALLU SNACKS</div>
                  <div className="text-[10px] font-semibold text-gold uppercase tracking-[0.2em] -mt-0.5">Kerala's Favourite Crunch</div>
                </div>
              </div>
              <p className="mt-5 text-background/70 max-w-sm">Authentic Kerala banana chips, freshly fried and delivered across India. Made with love in Kochi.</p>
              <form className="mt-6 flex max-w-sm">
                <input type="email" required placeholder="Your email" className="flex-1 rounded-l-full bg-background/10 border border-background/20 px-5 py-3 text-sm placeholder:text-background/50 focus:outline-none focus:border-gold" />
                <button className="rounded-r-full bg-gold text-gold-foreground px-5 font-display font-bold text-sm uppercase">Join</button>
              </form>
            </div>
            {[
              { t: "Shop", l: ["Classic Salted","Peri Peri","Sweet Jaggery","Sharkara","Masala","Sampler Box"] },
              { t: "Company", l: ["About Us","Our Story","Contact","Wholesale"] },
              { t: "Help", l: ["Shipping Policy","Refund Policy","Privacy Policy","Terms of Service"] },
            ].map(col => (
              <div key={col.t}>
                <div className="font-display font-black text-sm uppercase tracking-wider text-gold mb-4">{col.t}</div>
                <ul className="space-y-2.5 text-sm text-background/75">
                  {col.l.map(li => <li key={li}><a href="#" className="hover:text-gold transition-colors">{li}</a></li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-background/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-background/60">
            <div>© {new Date().getFullYear()} Mallu Snacks. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="hover:text-gold"><Instagram className="h-5 w-5"/></a>
              <a href="#" aria-label="Facebook" className="hover:text-gold"><Facebook className="h-5 w-5"/></a>
              <a href="#" aria-label="Youtube" className="hover:text-gold"><Youtube className="h-5 w-5"/></a>
              <a href="#" aria-label="WhatsApp" className="hover:text-gold"><MessageCircle className="h-5 w-5"/></a>
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY BAR */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-background border-t border-border grid grid-cols-2 gap-2 p-3 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.2)]">
        <a href="#shop" className="btn-primary !py-3 !text-xs"><ShoppingBag className="h-4 w-4"/> Order Now</a>
        <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background py-3 font-display font-bold text-xs uppercase tracking-wider">
          <MessageCircle className="h-4 w-4"/> WhatsApp
        </a>
      </div>
    </div>
  );
}
