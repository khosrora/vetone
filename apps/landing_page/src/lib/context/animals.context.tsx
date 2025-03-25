import { createContext, useState, Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

// Define the type for an animal card
export interface AnimalCard {
  id: number;
  name: string;
  quantity: number;
}

// Define the type for the context value
interface AnimalsContextType {
  animals: AnimalCard[];
  addAnimal: (animal: Omit<AnimalCard, "quantity">) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
}

// Create the context with an initial value
export const AnimalsContext = createContext<AnimalsContextType>({
  animals: [],
  addAnimal: () => {},
  incrementQuantity: () => {},
  decrementQuantity: () => {},
});

export const AnimalsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [animals, setAnimals] = useState<AnimalCard[]>([]);

  const addAnimal = (animal: Omit<AnimalCard, "quantity">) => {
    setAnimals((prev) => {
      const isAnimalExists = prev.some(
        (existingAnimal) => existingAnimal.id === animal.id
      );

      if (isAnimalExists) {
        toast.error("قبلا اضافه شده است.");
        return prev;
      }

      const newAnimal = { ...animal, quantity: 1 };
      return [...prev, newAnimal];
    });
  };

  const incrementQuantity = (id: number) => {
    setAnimals((prev) =>
      prev.map((animal) =>
        animal.id === id ? { ...animal, quantity: animal.quantity + 1 } : animal
      )
    );
  };

  const decrementQuantity = (id: number) => {
    setAnimals((prev) =>
      prev
        .map((animal) =>
          animal.id === id && animal.quantity > 0
            ? { ...animal, quantity: animal.quantity - 1 }
            : animal
        )
        .filter((animal) => animal.quantity > 0)
    );
  };

  return (
    <AnimalsContext.Provider
      value={{
        animals,
        addAnimal,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </AnimalsContext.Provider>
  );
};
