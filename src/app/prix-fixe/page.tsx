import React from 'react'


const prixFixeMenu = [
  { id: 1, name: 'Appetizer: Bruschetta', description: 'Grilled bread with tomatoes and basil.' },
  { id: 2, name: 'Soup: Tomato Basil', description: 'Creamy tomato soup topped with fresh basil.' },
  { id: 3, name: 'Salad: Caesar Salad', description: 'Romaine lettuce with Caesar dressing and croutons.' },
  { id: 4, name: 'Main Course: Grilled Salmon', description: 'Served with seasonal vegetables.' },
  { id: 5, name: 'Main Course: Chicken Marsala', description: 'Chicken breast with mushroom sauce.' },
  { id: 6, name: 'Dessert: Tiramisu', description: 'Classic Italian coffee-flavored dessert.' },
  { id: 7, name: 'Dessert: Chocolate Mousse', description: 'Rich and creamy chocolate dessert.' },
  { id: 8, name: 'Beverage: House Wine', description: 'Choice of red or white house wine.' },
];

const PrixFixe = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {prixFixeMenu.map(item => (
        <div key={item.id} className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-bold mb-2">{item.name}</h2>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
};


function Products() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Prix Fixe</h1>
        <PrixFixe />
      </div>
    </div>
  )
}



export default Products