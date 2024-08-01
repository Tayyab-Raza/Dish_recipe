import React, { useState } from "react";
import card1 from "../images/card1.webp";
import card2 from "../images/card2.webp";
import card3 from "../images/card3.webp";

const Card1 = () => {
  // State to manage expanded view for each card
  const [isExpanded, setIsExpanded] = useState({
    card1: false,
    card2: false,
    card3: false,
  });

  // Function to toggle the state
  const toggleExpand = (card) => {
    setIsExpanded((prev) => ({ ...prev, [card]: !prev[card] }));
  };

  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Learn, Cook, Eat and Repeat!
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Here's something you would love!...
          </p>
        </div>
        <div className="pt-14">
          <p className="underline justify-start mt-7 max-w-2xl text-2xl font-bold text-black sm:mt-4">
            Breakfast Recipes
          </p>
        </div>
        <div className="mx-auto mt-5 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {/* Card 1 */}
          <div className="card flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src={card1}
                alt="Creamy Mango Chia Pudding Recipe"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <a href="/signup" className="hover:underline">
                    Recipe
                  </a>
                </p>
                <div className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">
                    Creamy Mango Chia Pudding Recipe
                  </p>
                  <p
                    className={`mt-3 text-base text-gray-500 ${
                      isExpanded.card1 ? "" : "line-clamp-3"
                    }`}
                  >
                    Yearning for a delightful and refreshing sweet treat? Then
                    try this easy peasy sweet treat prepared with the goodness
                    of mangoes, coconut milk and protein-rich chia seeds. This
                    healthy and tasty recipe can be prepared in just a few
                    minutes that too without putting in much efforts, just
                    combine, refrigerate and dig in! So, follow us through some
                    simple steps and enjoy!
                  </p>
                  <button
                    className="pt-5 underline font-sans"
                    onClick={() => toggleExpand("card1")}
                  >
                    {isExpanded.card1 ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src={card2}
                alt="Nutella French Toast Recipe"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <a href="/signup" className="hover:underline">
                    Recipe
                  </a>
                </p>
                <div className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">
                    Nutella French Toast Recipe
                  </p>
                  <p
                    className={`mt-3 text-base text-gray-500 ${
                      isExpanded.card2 ? "" : "line-clamp-3"
                    }`}
                  >
                    Nutella French Toast makes an ideal addition to school
                    breakfasts/lunches with its irresistible combination of
                    flavours. The creamy Nutella filling sandwiched between
                    slices of golden French toast provides a delicious and
                    satisfying treat that will surely bring joy to students. To
                    prepare this delightful Nutella French Toast, start by
                    whisking together milk, cornstarch, ground flaxseeds, baking
                    powder, and vanilla in a shallow bowl. Melt butter in a pan
                    over medium-high heat and whisk the batter again before
                    dipping each side of the bread into it. Let the bread soak
                    for about 10 seconds, then cook it in the pan for 2-3
                    minutes on each side until golden brown. Add more butter as
                    needed between bread slices. Serve the scrumptious French
                    Toast with a generous spread of Nutella and fresh fruit. For
                    an extra treat, pair it with a refreshing berry smoothie.
                    (Recipe courtesy: Chef Vikas Khanna)
                  </p>
                  <button
                    className="pt-5 underline font-sans"
                    onClick={() => toggleExpand("card2")}
                  >
                    {isExpanded.card2 ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src={card3} alt="" />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <a href="/signup" className="hover:underline">
                    Recipe
                  </a>
                </p>
                <div className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">
                    Creamy Chicken Veggie Wrap Recipe
                  </p>
                  <p
                    className={`mt-3 text-base text-gray-500 ${
                      isExpanded.card3 ? "" : "line-clamp-3"
                    }`}
                  >
                    Looking for a healthy and delicious breakfast delicacy, then
                    try this easy Chicken Veggie Wrap, which can be made in just
                    a few minutes with some easily available ingredients. Well,
                    this easy recipe can also be prepared using leftover chicken
                    chunks and any vegetable of choice, wrapped in the goodness
                    of creamy homemade dip, this easy recipe can be packed for a
                    quick lunch. So, without a further ado, try this easy recipe
                    and enjoy!
                  </p>
                  <button
                    className="pt-5 underline font-sans"
                    onClick={() => toggleExpand("card3")}
                  >
                    {isExpanded.card3 ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card1;
