var serialize = function(root) {
    const data = [];
    go(root);
    
    function go(node) {
        if (!node) {
            data.push("null");
            return;
        }
        
        data.push(node.val);
        go(node.left);
        go(node.right);
    }
    
    return data.join(",");
};

var deserialize = function(data) {
    data = data.split(",");

    function go() {
        if (data.length === 0) return;
        const val = data.shift();
        if (val === "null") return null;
        const node = new TreeNode(val);
        node.left = go();
        node.right = go();
        return node;
    }
    
    return go();
};