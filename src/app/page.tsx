import ProductCard from "@/components/productCard"

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100/50">
        <div className="text-center mb-10">
            <h1 className="text-5xl tracking-widest font-bold font-crimson-text text-red-400">LOS POLLOS HARMANOS</h1>
            <p className="text-lg text-gray-600">Delicious Food, Great Atmosphere</p>
        </div>
        <ProductCard 
          title='Appetizers'
          firstProductTitle='Caprese Salad'
          firstProductDesc='Fresh mozzarella slices, ripe tomatoes, and basil leaves drizzled with balsamic glaze and olive oil.'
          secondProductTitle='Buffalo Chicken Wings'
          secondProductDesc='Spicy chicken wings coated in buffalo sauce, served with celery sticks and blue cheese dressing.'
        />

        <ProductCard 
          title='Salads Menu'
          firstProductTitle='Cobb Salad'
          firstProductDesc='A hearty salad with mixed greens, grilled chicken, avocado, bacon, hard-boiled eggs, and blue cheese.'
          secondProductTitle='Asian Noodle Salad'
          secondProductDesc='Cold noodles tossed with shredded vegetables, sesame dressing, and topped with chopped peanuts and cilantro.'
        />

        <ProductCard 
          title='Main Courses'
          firstProductTitle='Grilled Salmon'
          firstProductDesc='Fresh salmon fillet grilled to perfection, served with seasonal vegetables.'
          secondProductTitle='Steak Frites'
          secondProductDesc='Juicy steak served with crispy fries and a side of garlic butter.'
        />
    </div>
  );
}
