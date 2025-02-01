import { UUID } from "crypto";
import { Item } from "./item";

type Survey = {
  id: UUID;
  name: string;
  budget: number;
  item: Item[];
};
