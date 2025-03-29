interface InputItem {
  id: number;
  name: string;
  quantity: number;
}

interface OutputItem {
  animal_id: number;
  count: number;
}

export function transformData(inputArray: InputItem[]): OutputItem[] {
  // Validate input to ensure it's an array
  if (!Array.isArray(inputArray)) {
    throw new Error("Input must be an array");
  }

  // Transform the input array into the desired format
  const transformedArray: OutputItem[] = inputArray.map((item): OutputItem => {
    // Ensure each item has the required fields
    if (typeof item.id !== "number" || typeof item.quantity !== "number") {
      throw new Error("Each item must have 'id' and 'quantity' as numbers");
    }

    // Map the fields to the new format
    return {
      animal_id: item.id,
      count: item.quantity,
    };
  });

  return transformedArray;
}
