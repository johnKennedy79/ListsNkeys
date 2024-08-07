const numbers = [1, 2, 3, 4, 5]; // an array called numbers
const doubledNumbers = numbers.map((number) => number * 2);
//map numbers and for every item that i have called number times number by 2 call these doubledNumbers
console.log(doubledNumbers);

export default function Array() {
  const items = [
    { id: "Item 1", name: "John" },
    { id: "Item 2", name: "Jamie" },
    { id: "Item 3", name: "Lawrence" },
  ];
  const htmlItems = items.map((item) => <li key={item.id}> {item.name}</li>);
  const items2 = ["Item 4", "Item 5", "Item 6"];

  return (
    <>
      <ul>{htmlItems}</ul>
      <ol>
        {items2.map((item2) => (
          <li key={item2}>{item2}</li>
        ))}
      </ol>
    </>
  );
}
