import React from 'react'


const appetizers = [
  { id: 1, name: 'Bruschetta', description: 'Grilled bread topped with tomatoes and basil.' },
  { id: 2, name: 'Stuffed Mushrooms', description: 'Mushrooms filled with cheese and spices.' },
  { id: 3, name: 'Caprese Salad', description: 'Mozzarella, tomatoes, and basil salad.' },
  { id: 4, name: 'Deviled Eggs', description: 'Egg yolks mixed with mayonnaise, served in egg whites.' },
  { id: 5, name: 'Garlic Bread', description: 'Sliced bread with garlic butter.' },
  { id: 6, name: 'Nachos', description: 'Tortilla chips topped with cheese sauce and jalapeños.' },
  { id: 7, name: 'Spring Rolls', description: 'Rice paper rolls filled with vegetables.' },
  { id: 8, name: 'Meatballs', description: 'Meatballs served with sauce.' },
];

const Appetizers = () => {
  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {appetizers.map(app => (
        <div key={app.id} className="bg-white rounded-lg shadow-lg p-5">
          <h2 className="text-xl font-bold mb-2">{app.name}</h2>
          <p className="text-gray-600">{app.description}</p>
        </div>
      ))}
    </div>
  );
};



function Products() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Appetizers</h1>
        <Appetizers />
      </div>
    </div>
  )
}



export default Products