import { Container, Filters, Title, TopBar, ProductsGroupList } from "../components/shared";


export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold"/>
      </Container>

      <TopBar/>

      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          {/* Фильтры */}
          <div className="w-[250px]">
            <Filters/>
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title="Пиццы" items={[{
                id: 1,
                name: 'Цыпленок моцарелла',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/0194491914e478b4aa3e18d44e07eed9.avif',
                price: 550,
                items: [{
                  price: 200,
                }]
              }]} categoryId={1} />
              <ProductsGroupList title="Комбо" items={[{
                id: 2,
                name: 'Комбо пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/0194491914e478b4aa3e18d44e07eed9.avif',
                price: 700,
                items: [{
                  price: 250,
                }]
              }]} categoryId={2} />
              <ProductsGroupList title="Закуски" items={[{
                id: 3,
                name: 'Картошка фри',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/0194491914e478b4aa3e18d44e07eed9.avif',
                price: 150,
                items: [{
                  price: 50,
                }]
              }]} categoryId={3} />
              <ProductsGroupList title="Напитки" items={[{
                id: 4,
                name: 'Кола',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/0194491914e478b4aa3e18d44e07eed9.avif',
                price: 100,
                items: [{
                  price: 30,
                }]
              }]} categoryId={4} />
            </div>
          </div>


        </div>
      </Container>
    </>
  );
}
