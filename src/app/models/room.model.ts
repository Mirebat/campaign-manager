export interface Room {
  id: string;
  name: string;
  description: string;
  connections: string[]; // Array of connected room IDs
}
