import { useEffect, useState } from 'react'
import Navigation from '../components/Navigation';
import Categories from '../components/Categories';
import Restaurants from '../components/Restaurants'
import axios from 'axios';
import RestaurantCard from '../components/RestaurantCard';
import Featuredrestaurants from '../components/featuredRestaurant';
import pokai from '../assets/Healthy/pokai/pokai.jpeg'
import juice from '../assets/Healthy/juice-jar/juice-jar.jpg'
import papaJohns from '../assets/Pizza/papa-johns-pizza-box.jpg'
import pizzaHut from '../assets/Pizza/pizza-hut/pizza-hut.jpeg'
import itsu from '../assets/Vegan/itsu/itsu.jpeg'
import yo from '../assets/Vegan/yo/yo.jpg'
import shangai from '../assets/Asian/shanghai-garden/shanghai-garden.jpeg'
import cheung from '../assets/Asian/cheung.png'

const HomeScreen = ({ id }) => {

  const [restaurants, setRestaurants] = useState([]);
  const [category_id, setCategoryId] = useState(0)

  useEffect(() => {
    axios.get("https://delivroo-clone-v2-d179eabd4124.herokuapp.com/api/restaurants").then(({ data }) => {
      setRestaurants(data);
    })
  }, []);

  
  const categories_id = (category_id) => {
    setCategoryId(category_id)
  }

  const images = [pokai, juice, papaJohns, pizzaHut,itsu, yo, shangai, cheung];

  const asianPic = [shangai, cheung]
  const veganPic = [pokai,juice]
  const pizzaPic = [papaJohns,pizzaHut]
  const healthyPic = [itsu,yo]

  const asian = restaurants.filter(cat => cat.id === 8 || cat.id === 7)
  const vegan = restaurants.filter(cat => cat.id === 1 || cat.id === 2)
  const pizza = restaurants.filter(cat => cat.id === 3 || cat.id === 4)
  const healthy = restaurants.filter(cat => cat.id === 5 || cat.id === 6)


  return (
    <>

      <Navigation />
      <section className="bg-white pt-5">
        <div className='w-full h-52 m-3 p-4'>
          <h1 className='font-bold text-2xl'>Categories</h1>
          <Categories categories_id={categories_id} />

        </div>

        <div className='w-full m-2 p-4'>
          <p className="font-bold m-3 text-2xl">Featured Restaurants</p>
          <div className={`flex flex-row my-2 ml-3 gap-3 px-2 flex flex-row transition-all${!category_id ? ' overflow-x-auto' : ''}`}>
            {!category_id && restaurants.map((res,index) => (
              <RestaurantCard
                id={res.id}
                title={res.title}
                rating={res.rating}
                address={res.address}
                src={images[index]}
                description={res.description}
              />
            ))}

            {category_id === 1 && asian.map((as,index) => (
              <RestaurantCard
                id={as.id}
                title={as.title}
                rating={as.rating}
                address={as.address}
                src={asianPic[index]}
                description={as.description}
              />
            ))}
            {category_id === 6 && vegan.map((veg,index) => (
              <RestaurantCard
                id={veg.id}
                title={veg.title}
                rating={veg.rating}
                address={veg.address}
                src={veganPic[index]}
                description={veg.description}
              />
            ))}
            {category_id === 5 && pizza.map((piz,index) => (
              <RestaurantCard
                id={piz.id}
                title={piz.title}
                rating={piz.rating}
                address={piz.address}
                src={pizzaPic[index]}
                description={piz.description}
              />
            ))}
            {category_id === 4 && healthy.map((hea,index) => (
              <RestaurantCard
                id={hea.id}
                title={hea.title}
                rating={hea.rating}
                address={hea.address}
                src={healthyPic[index]}
                description={hea.description}
              />
            ))}
          </div>
        </div>

        <div className='w-full m-2 p-4'>
          <p className="font-bold m-3 text-2xl">All Restaurants</p>
          <Restaurants images={images}/>
        </div>

      </section>
    </>
  )
}

export default HomeScreen