export interface Connection {
  id: string; //id of the connecting room
  direction: string; //direction of the connection
  description?: string; // Optional description of the connection
}
export interface Item {
  id: string; //id of the item
  name: string;
  value: number; // value of the item in silver
  quantity: number; // quantity of the item
  description?: string; //optional description of the item
  inScenario?: string; // Optional string to add context to where the item is found
}
export interface Interactable {
  id: string; //id of the interactable
  name: string;
  description: string;
  interaction: string; //description of what happens when interacted with
}
export interface Room {
  id: string;
  name: string;
  description: string;
  connections: Connection[]; // Array of connected rooms
  items?: Item[]; // Array of lootable items in the room
  details?: string[]; // Optional additional details about the room
  interactables?: Interactable[]; // Array of interactable things in the room
  dangers?: string[]; // Any dangers that may be immediately present in the room
}
