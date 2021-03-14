class TrieNode {
    constructor(value, isWord = false) {
        this.value = value;
        this.isWord = isWord;
        this.children = {};
    }
    
    addChild(value, isWord) {
        if (this.children[value]) {
            const node = this.children[value];
            node.isWord = node.isWord || isWord;
            return node;
        }

        const node = new TrieNode(value, isWord);
        this.children[value] = node;
        return node;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode('*');
    }
    
    addWord(word, callback) {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            node = node.addChild(word[i], i === word.length - 1);
        }
    }
    
    dfs(callback) {
        return this._dfs(callback, this.root, '');
    }
    
    _dfs(callback, node, s) {
        Object
            .values(node.children)
            .forEach(child => {
                if (child.isWord) {
                    callback(s + child.value);
                    this._dfs(callback, child, s + child.value);
                }
            });
    }
}

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    const trie = new Trie();
    for (const word of words) {
        trie.addWord(word);
    }
    let longest = '';
    trie.dfs(word => {
        if (word.length < longest.length) return;

        longest = word.length > longest.length ? word : word < longest ? word : longest;
    });
    return longest;
};