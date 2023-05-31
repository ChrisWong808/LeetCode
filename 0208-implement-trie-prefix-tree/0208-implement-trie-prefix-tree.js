//We define two classes: TrieNode and Trie. TrieNode represents a node in the Trie, and Trie represents the Trie data structure.
//The TrieNode class has two properties: children (a Map to store child nodes) and isEndOfWord (a boolean flag to indicate if the node represents the end of a word).
class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}
//The Trie class has a single property root, which represents the root node of the Trie.
class Trie {
    constructor() {
        this.root = new TrieNode();
    }
//The insert method inserts a word into the Trie by traversing the characters of the word and creating new nodes as necessary. The last node representing the end of the word is marked with isEndOfWord = true.
    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.isEndOfWord = true;
    }
//The search method checks if a word exists in the Trie. It traverses the characters of the word and returns false if any character is not found in the Trie or if the last node representing the word is not marked as the end of a word
    search(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
        }
        return node.isEndOfWord;
    }
//The startsWith method checks if there is a previously inserted word with a given prefix. It traverses the characters of the prefix and returns false if any character is not found in the Trie.
    startsWith(prefix) {
        let node = this.root;
        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
        }
        return true;
    }
}
