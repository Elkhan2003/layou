const data = [{
    title: '7:25 AM',
    image: '1.png',
    description: 'Boston',
  },
  {
    title: '8:15 PM',
    image: '2.png',
    description: 'Madrid',
  },
  {
    title: 'Translate',
    image: '3.png',
    description: 'Spanish',
  },
  {
    title: 'Bike',
    image: '4.png',
    description: '13.1 Miles',
  },
  {
    title: 'Boat',
    image: '5.jpg',
    scription: '90 Minutes',
  },
  {
    title: 'Drive',
    image: '6.png',
    description: '48 Minutes',
  },
  {
    title: 'Morning',
    image: '7.jpg',
    description: 'Coffe',
  },
  {
    title: 'Aftenoon',
    image: '8.png',
    description: 'Gym',
  },
  {
    title: 'Night',
    image: '9.png',
    description: 'Hot Tub',
  }
]

let conteiner = document.createElement('div')
conteiner.classList.add('conteiner')

const renderBlock = () => {
  let fragment = new DocumentFragment();

  data.map((item, id) => {
    let block = document.createElement('div')
    block.classList.add('block-items')

    block.setAttribute("block-color", id + 1);

    block.innerHTML = `
    <div>
      <div>${item.title}</div>
      <img width = "50px" src='./Syndycate/img/${item.image}'/>
      <div>${item.description}</div>
    </div>
    <hr>
    `
    fragment.append(block)
  })
  return fragment
}
conteiner.append(renderBlock())

document.body.append(conteiner)