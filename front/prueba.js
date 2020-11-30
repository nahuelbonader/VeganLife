solveGraphBFS(graph, "a", "r")
solveGraphBFS(graph, "s", "b");

const graph = {
  a: ["c"],
  b: ["c"],
  c: ["s", "r"],
  d: ["a"],
  s: ["a", "c"],
  r: ["d"],
  z: ["z"],
};

//necesito el obj graph, donde comienza y termina, donde pasa visited={} 


function solveGraphBFS (graph, start, end, visited = {}) {
  if (visited[start]) return false 
   visited[start] = true
   for (let i = 0; i<graph[start].length; i++) {
       if (graph[start][i] === end) return true
       else if (solveGraphBFS(graph, graph[start][i], end, visited)) return true
   } 
   return false
}

//o(n) tiempo y espacio!