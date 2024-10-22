import React from 'react'

function menu() {
  return (
    <div>
        <div className="max-w-6xl mx-auto p-6">
        <header className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800">LOS POLLOS HARMANOS</h1>
            <p className="text-lg text-gray-600">Delicious Food, Great Atmosphere</p>
        </header>

        <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Appetizers</h2>
            <ul className="space-y-4">
                <li className="bg-white p-4 rounded shadow">
                    <h3 className="text-xl font-bold">Bruschetta al Pomodoro</h3>
                    <p className="text-gray-600">Toasted bread topped with fresh tomatoes, garlic, basil, and drizzled with olive oil.</p>
                </li>
                <li className="bg-white p-4 rounded shadow">
                    <h3 className="text-xl font-bold">Stuffed Mushrooms</h3>
                    <p className="text-gray-600">Mushrooms filled with a savory mixture of cream cheese, garlic, herbs, and breadcrumbs.</p>
                </li>
            </ul>
        </section>

        <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Salads</h2>
            <ul className="space-y-4">
                <li className="bg-white p-4 rounded shadow">
                    <h3 className="text-xl font-bold">Caesar Salad</h3>
                    <p className="text-gray-600">Crisp romaine lettuce tossed with Caesar dressing, croutons, and grated Parmesan cheese.</p>
                </li>
                <li className="bg-white p-4 rounded shadow">
                    <h3 className="text-xl font-bold">Greek Salad</h3>
                    <p className="text-gray-600">Fresh cucumbers, tomatoes, red onion, Kalamata olives, and feta cheese with olive oil.</p>
                </li>
            </ul>
        </section>

        <section>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Main Courses</h2>
            <ul className="space-y-4">
                <li className="bg-white p-4 rounded shadow">
                    <h3 className="text-xl font-bold">Grilled Salmon</h3>
                    <p className="text-gray-600">Fresh salmon fillet grilled to perfection, served with seasonal vegetables.</p>
                </li>
                <li className="bg-white p-4 rounded shadow">
                    <h3 className="text-xl font-bold">Steak Frites</h3>
                    <p className="text-gray-600">Juicy steak served with crispy fries and a side of garlic butter.</p>
                </li>
            </ul>
        </section>
    </div>
    </div>
  )
}

export default menu