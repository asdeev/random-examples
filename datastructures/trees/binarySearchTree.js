import TreeNode from "./treeNode";

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = TreeNode(data);

    if (this.root === null) {
      this.root = newNode;
    }
  }
  remove(data) {}

  finMinNode() {}
  getRootNode() {}
  inOrder(node) {}
  preOrder(node) {}
  postOrder(node) {}
  search(node, data) {}
}
