class Node {
  constructor(pos, parent) {
    this.pos = pos;
    this.parent = parent;
  }
}

Node.getNeighbors = parent => {
  let north = new Node([parent.pos[0] - 1, parent.pos[1]], parent);
  let east = new Node([parent.pos[0], parent.pos[1] + 1], parent);
  let south = new Node([parent.pos[0] + 1, parent.pos[1]], parent);
  let west = new Node([parent.pos[0], parent.pos[1] - 1], parent);
  return [north, east, south, west];
};

module.exports = Node;