export const designTokens = {
  heroStyle: "cinematic",
  typography: { heading: "Playfair Display", body: "DM Sans", display: "Playfair Display" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "dramatic", serviceCardStyle: "overlay", projectGridStyle: "masonry", testimonialStyle: "carousel", statsStyle: "overlay", bgPattern: "none",
  homeSectionOrder: ["hero","marquee","services","portfolio","stats","about","whyChooseUs","testimonials","cta"],
};

const siteData = {
  business: {
    name: "Precise Panel Beaters", legalName: "Precise Panel Beaters", tagline: "Precision Restored. Perfection Delivered.",
    description: "Precise Panel Beaters is Harare's trusted collision repair specialist. From minor dent removal to full-body restoration, we return your vehicle to factory condition using state-of-the-art equipment and certified technicians who treat every car as if it were their own.",
    phone: "+263 71 969 2306", phoneRaw: "+263719692306", whatsappNumber: "263719692306", email: "info@precisepanelbeaters.co.zw",
    address: "Kelvin Rd S, Harare, Zimbabwe", country: "Zimbabwe", city: "Harare",
    rating: 4.6, ratingRounded: 5, reviewCount: 31, established: "2010", yearsExperience: "14+", projectsCompleted: "3000+", employees: "25+",
    coordinates: { lat: -17.83, lng: 31.05 },
    hours: [{ day: "Monday - Friday", time: "7:30 AM - 5:00 PM" }, { day: "Saturday", time: "8:00 AM - 1:00 PM" }, { day: "Sunday", time: "Closed" }],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.05!3d-17.83",
    cookieConsentKey: "precise-panel-consent",
    socialLinks: { facebook: "https://www.facebook.com/precisepanelbeaters/about/", instagram: "#", linkedin: "#" },
  },
  navbar: { logoImage: null, logoLine1: "Precise", logoLine2: "Panel Beaters" },
  hero: {
    badge: "Harare's Trusted Collision Repair Specialists",
    titleParts: [{ text: "PRECISION " }, { text: "RESTORED", highlight: true }, { text: " PERFECTION DELIVERED." }],
    subtitle: "Insurance-approved repairs. Factory-grade finishes. Over 3,000 vehicles restored to perfection since 2010.",
    ctaPrimary: "Get a Free Quote", ctaSecondary: "View Our Work", trustBadge: "3,000+ Vehicles Restored",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1920&q=85", alt: "Panel beating workshop" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1920&q=85", alt: "Vehicle restoration in progress" },
      { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=85", alt: "Precision spray painting" },
    ],
  },
  stats: [
    { number: "3000+", label: "Vehicles Restored" }, { number: "14+", label: "Years Experience" },
    { number: "99%", label: "Insurance Approved" }, { number: "48hr", label: "Express Service" },
  ],
  servicesPreview: [
    { title: "Panel Beating", desc: "Expert body repair using hydraulic frame straightening and precision metalwork. We restore structural integrity to factory specifications on every vehicle.", icon: "Wrench" },
    { title: "Spray Painting", desc: "Computer-matched colour formulation and dust-free booth application. Your finish will be indistinguishable from the original factory paint.", icon: "Star" },
    { title: "Dent Removal", desc: "Paintless dent repair for minor damage. Quick, affordable, and preserves your original factory finish without any repainting required.", icon: "Target" },
    { title: "Insurance Claims", desc: "We handle the entire insurance process on your behalf. Direct billing with all major insurers in Zimbabwe -- zero paperwork stress for you.", icon: "ShieldCheck" },
    { title: "Frame Straightening", desc: "Computerised measuring and hydraulic correction for vehicles with structural damage from serious collisions.", icon: "Ruler" },
    { title: "Full Restoration", desc: "Complete body rebuilds for accident-damaged vehicles. We turn write-offs back into road-worthy, showroom-condition machines.", icon: "Rocket" },
  ],
  services: {
    heroTitle: "Our Services", heroSubtitle: "Comprehensive collision repair, from minor dings to major rebuilds.",
    items: [
      { title: "Panel Beating", slug: "panel-beating", desc: "Our panel beating workshop is equipped with hydraulic pulling systems and precision hammering tools that restore your vehicle's body panels to factory alignment. Every repair is measured against manufacturer specifications to ensure structural integrity and perfect fit.", features: ["Hydraulic Pulling","Precision Hammering","Factory Alignment","Structural Integrity","Quality Check","Warranty"], image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80" },
      { title: "Spray Painting", slug: "spray-painting", desc: "Our dust-free downdraft spray booth and computer colour-matching system deliver finishes that are indistinguishable from factory original. We use premium automotive paints with multi-stage clear coat application for lasting durability.", features: ["Computer Colour Match","Dust-Free Booth","Premium Paints","Clear Coat","UV Protection","Warranty"], image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80" },
      { title: "Paintless Dent Repair", slug: "paintless-dent-repair", desc: "For minor dents, door dings, and hail damage, our PDR technicians use specialised tools to massage panels back to their original shape without disturbing the factory paint finish.", features: ["No Repainting","Original Paint Preserved","Hail Damage","Door Dings","Quick Turnaround","Cost Effective"], image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80" },
      { title: "Insurance Claims", slug: "insurance-claims", desc: "We are approved by all major Zimbabwean insurance companies. Our claims team handles everything from assessment through to final sign-off, so you can focus on getting back on the road.", features: ["All Insurers Accepted","Direct Billing","Claims Management","Assessment Reports","Towing Arranged","Courtesy Vehicle"], image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80" },
      { title: "Frame Straightening", slug: "frame-straightening", desc: "Using computerised measuring systems, we identify and correct even the most subtle chassis misalignment. Our hydraulic frame machines restore structural dimensions to within fractions of a millimetre.", features: ["Computer Measuring","Hydraulic Correction","Chassis Alignment","Structural Repair","Verification Report","Safety Check"], image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80" },
      { title: "Full Restoration", slug: "full-restoration", desc: "When a vehicle has sustained catastrophic damage, our restoration team rebuilds it from the ground up. Panel replacement, structural repair, mechanical checks, and a factory-fresh respray.", features: ["Complete Rebuild","Panel Replacement","Mechanical Check","Full Respray","Road Test","Documentation"], image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80" },
    ],
  },
  projects: {
    heroTitle: "Our Work", heroSubtitle: "Before-and-after transformations that speak for themselves.",
    items: [
      { title: "BMW 5 Series Full Respray", slug: "bmw-5-series-respray", category: "Respray", location: "Harare", desc: "Complete colour restoration in Mineral White. 72-hour turnaround.", client: "Private", services: ["Respray"], image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80", images: ["https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80"] },
      { title: "Mercedes C-Class Collision", slug: "mercedes-c-collision", category: "Collision", location: "Harare", desc: "Front-end rebuild after highway collision. Returned to factory spec.", client: "Insurance", services: ["Panel Beating","Spray Painting"], image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80", images: ["https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80"] },
      { title: "Toyota Hilux Side Impact", slug: "hilux-side-impact", category: "Panel Beating", location: "Harare", desc: "Door and quarter panel replaced after T-bone collision.", client: "Insurance", services: ["Panel Beating"], image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", images: ["https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"] },
      { title: "Range Rover Bumper Repair", slug: "range-rover-bumper", category: "Bumper Repair", location: "Harare", desc: "Front bumper crack repaired and colour-matched. Same-day service.", client: "Private", services: ["Repair"], image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80", images: ["https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80"] },
      { title: "Nissan X-Trail Restoration", slug: "x-trail-restoration", category: "Full Restoration", location: "Harare", desc: "Insurance write-off brought back to life. Full body and cosmetic rebuild.", client: "Insurance", services: ["Full Restoration"], image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80", images: ["https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80"] },
      { title: "Honda Fit Hail Damage", slug: "honda-fit-hail", category: "PDR", location: "Harare", desc: "40+ hail dents removed using paintless dent repair. Original paint preserved.", client: "Private", services: ["PDR"], image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", images: ["https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"] },
      { title: "Ford Ranger Rollover", slug: "ford-ranger-rollover", category: "Full Restoration", location: "Harare", desc: "Complete cab replacement and respray after rollover accident.", client: "Insurance", services: ["Full Restoration"], image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80", images: ["https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80"] },
      { title: "VW Polo Rear-End", slug: "vw-polo-rear-end", category: "Collision", location: "Harare", desc: "Rear bumper, bootlid, and tail lights replaced after rear-end collision.", client: "Insurance", services: ["Panel Beating"], image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80", images: ["https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80"] },
    ],
  },
  homeTestimonials: [
    { text: "My BMW looked brand new after Precise finished with it. The colour match was perfect -- you cannot tell it was ever in an accident. Outstanding craftsmanship.", name: "Tendai Moyo", role: "BMW 5 Series Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "They handled everything with my insurance company. I dropped the car off and picked it up repaired. Zero stress on my end. Highly recommend.", name: "Grace Mutasa", role: "Mercedes C-Class Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { text: "I thought my Hilux was a write-off after the accident. Precise brought it back to factory condition in three weeks. Incredible work.", name: "James Karonga", role: "Toyota Hilux Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
    { text: "Quick turnaround on my bumper repair. They matched the pearl white perfectly and had it done the same day. Professional from start to finish.", name: "Patricia Sibanda", role: "Range Rover Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "Third time using Precise and the quality is always consistent. They treat your car like it is their own. That is rare in this industry.", name: "Michael Chigwedere", role: "Repeat Client", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
  ],
  reviews: {
    heroTitle: "Client Reviews", heroSubtitle: "What our clients say about our work.",
    items: [
      { text: "My BMW looked brand new. Colour match was perfect -- you cannot tell it was ever in an accident.", name: "Tendai Moyo", role: "BMW Owner", rating: 5 },
      { text: "Handled everything with my insurance. Dropped it off, picked it up repaired. Zero stress.", name: "Grace Mutasa", role: "Mercedes Owner", rating: 5 },
      { text: "Thought my Hilux was a write-off. Precise brought it back to factory condition in three weeks.", name: "James Karonga", role: "Hilux Owner", rating: 5 },
      { text: "Quick turnaround on bumper repair. Matched the pearl white perfectly. Same-day service.", name: "Patricia Sibanda", role: "Range Rover Owner", rating: 5 },
      { text: "Third time using Precise. Quality is always consistent. They treat your car like their own.", name: "Michael Chigwedere", role: "Repeat Client", rating: 5 },
      { text: "Exceptional paintless dent repair. 40 hail dents gone and original paint completely preserved.", name: "Angela Mhembere", role: "Honda Fit Owner", rating: 5 },
    ],
  },
  about: {
    heroTitle: "The Precise Story", heroSubtitle: "Precision in every repair since 2010.",
    story: [
      "Founded in 2010 on Kelvin Road South, Precise Panel Beaters has grown into one of Harare's most respected collision repair workshops. Our name is our promise -- precision in every repair, every time.",
      "Over 3,000 vehicles restored and counting. From minor parking lot dings to catastrophic accident damage, our team of 25 certified technicians uses state-of-the-art equipment to return your vehicle to factory condition.",
      "We are approved by every major insurer in Zimbabwe and our lifetime workmanship warranty means your repair is guaranteed for as long as you own the vehicle.",
    ],
    values: [
      { title: "Precision Standard", desc: "Every repair measured against factory specifications. We do not approximate -- we replicate." },
      { title: "Insurance Expertise", desc: "Direct billing with all major insurers. We manage the entire claims process for you." },
      { title: "Factory Equipment", desc: "Downdraft spray booths, computerised measuring, and hydraulic frame systems." },
      { title: "Lifetime Warranty", desc: "Every repair backed by our lifetime workmanship warranty." },
    ],
    team: [
      { name: "David Moyo", role: "Founder & MD", bio: "20 years in collision repair. David built Precise on a foundation of quality and integrity.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Sarah Mutasa", role: "Workshop Manager", bio: "Oversees daily operations ensuring every vehicle meets our exacting standards.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
      { name: "Peter Chimwanda", role: "Lead Panel Beater", bio: "Master craftsman with 18 years of hands-on experience in body repair.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
      { name: "Lisa Karonga", role: "Insurance Liaison", bio: "Navigates the claims process so our clients never have to.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    ],
  },
  whyChooseUs: { title: "Why Precise", points: [
    { title: "Insurance Approved", desc: "Direct billing with all major Zimbabwean insurers. We handle the paperwork so you do not have to." },
    { title: "Factory-Grade Finish", desc: "Computer colour matching and dust-free spray booths deliver a finish indistinguishable from original." },
    { title: "48-Hour Express", desc: "Minor repairs completed within 48 hours. We respect your time as much as your vehicle." },
    { title: "Lifetime Warranty", desc: "Every repair backed by our lifetime workmanship warranty. We stand behind every job." },
  ]},
  featuredProjects: [
    { title: "BMW 5 Series Respray", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80", category: "Respray" },
    { title: "Mercedes Collision", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80", category: "Collision" },
    { title: "Honda Fit PDR", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", category: "PDR" },
  ],
  careers: { heroTitle: "Join Our Team", heroSubtitle: "Skilled technicians wanted.", positions: [
    { title: "Panel Beater", department: "Workshop", location: "Harare", type: "Full-time", desc: "Join our team of certified collision repair professionals." },
    { title: "Spray Painter", department: "Paint Shop", location: "Harare", type: "Full-time", desc: "Apply factory-grade finishes in our state-of-the-art booth." },
  ]},
  contact: { heroTitle: "Get a Quote", heroSubtitle: "Bring your vehicle in for a free assessment.", branches: [
    { name: "Kelvin Road Workshop", address: "Kelvin Rd S, Harare, Zimbabwe", phone: "+263 71 969 2306", email: "info@precisepanelbeaters.co.zw" },
  ]},
  homeCta: {
    title: "ACCIDENT DAMAGE? WE FIX IT RIGHT.", subtitle: "From minor dents to major collision damage, our certified team restores your vehicle to factory condition. Get a free estimate today.",
    ctaPrimary: "Get a Free Quote", ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Precise Panel Beaters! I need a quote for vehicle repair work.",
    backgroundImage: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1920&q=85",
  },
  footer: { description: "Harare's trusted collision repair specialists. Precision restored, perfection delivered since 2010.", copyright: "Precise Panel Beaters" },
};

export default siteData;
