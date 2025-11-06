import Card from "./Card";

const CardList = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-6">
      <Card
        image="https://placecats.com/neo/300/200"
        name="Cat 1"
        breed="Yorkshire Terrier"
        age="2 mdr."
        liked={true}
      />
      <Card
        image="https://placecats.com/neo/300/200"
        name="Cat 2"
        breed="Britisk langhåret kat"
        age="2,5 år"
        liked={false}
      />
      <Card
        image="https://placecats.com/neo/300/200"
        name="Cat 3"
        breed="Maine Coon"
        age="1 mdr."
        liked={false}
      />
      <Card
        image="https://placecats.com/neo/300/200"
        name="Cat 4"
        breed="Bengal"
        age="4 mdr."
        liked={true}
      />
      <Card
        image="https://placecats.com/neo/300/200"
        name="Cat 5"
        breed="Sphynx"
        age="Young"
        liked={true}
      />
      <Card
        image="https://placecats.com/neo/300/200"
        name="Cat 6"
        breed="British Shorthair"
        age="6 mdr."
        liked={false}
      />
      <Card
        image="https://placecats.com/neo/300/200"
        name="Cat 7"
        breed="Scottish Fold"
        age="2 mdr."
        liked={false}
      />
      <Card
        image="https://placecats.com/neo/300/200"
        name="Cat 8"
        breed="Ragdoll"
        age="3 mdr."
        liked={false}
      />
    </div>
  );
};

export default CardList;
