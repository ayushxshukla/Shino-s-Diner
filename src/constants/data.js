import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Nine Vegetable Terrine',
    price: '$129',
    tags: 'Aperol | Villa Marchesi prosecco',
  },
  {
    title: "Chou Farci",
    price: '$99',
    tags: 'Savoy |  Légumes | Slice of lime',
  },
  {
    title: 'Quiche De Légumes Oubliés',
    price: '$89',
    tags: 'Rum | Burdock Root | Sugar',
  },
  {
    title: 'Tomates Farcies',
    price: '$89',
    tags: 'Parsley | Spices | Angostura Bitters',
  },
  {
    title: 'Flan Aux Champignon',
    price: '$89',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award03,
    title: 'Michelin Star',
    subtitle: 'Highest culinary Award',
  },
  {
    imgUrl: images.award01,
    title: 'Seat Number One',
    subtitle: 'Totsuki Academy',
  },
  {
    imgUrl: images.award05,
    title: 'Pluspol Award',
    subtitle: 'French Goverment',
  },
  {
    imgUrl: images.award01,
    title: 'Better than me!',
    subtitle: 'Gordan Ramsey',
  },
];

export default { wines, cocktails, awards };
